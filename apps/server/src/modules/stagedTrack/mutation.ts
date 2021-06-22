import { ReadStream } from 'fs';

import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, ID, Mutation, Resolver } from 'type-graphql';

import { BucketType } from '#lib/constants/AWS';
import * as errors from '#lib/errors/graphql';
import { audioExtToMimeType, imageExtToMimeType } from '#lib/extToMimeType';
import { Me } from '#lib/graphql/decorators';
import { Channel } from '#lib/models/Channel/gql';
import { PersonaContributor } from '#lib/models/PersonaContributor/gql';
import { Playlist } from '#lib/models/Playlist/gql';
import { StagedTrack } from '#lib/models/StagedTrack/gql';
import { User } from '#lib/models/User/gql';
import { ChannelService } from '#server/modules/channel/service';
import { FileUploadService } from '#server/modules/fileUpload/service';
import { PersonaContributorService } from '#server/modules/personaContributor/service';
import { PlaylistService } from '#server/modules/playlist/service';

import { StagedTrackService } from './service';

@Resolver(of => StagedTrack)
export class StagedTrackMutationResolver {
  constructor(
    private readonly channelService: ChannelService,
    private readonly fileUploadService: FileUploadService,
    private readonly personaContributorService: PersonaContributorService,
    private readonly playlistService: PlaylistService,
    private readonly stagedTrackService: StagedTrackService,
  ) {}

  private async uploadFile<M>(
    ext: string,
    mimeType: M,
    originalFilename: string,
    readStream: ReadStream,
  ) {
    try {
      const result = await this.fileUploadService.uploadFile({
        ext,
        readStream,
        bucket: BucketType.Staged,
      });

      return {
        mimeType,
        filename: result.filename,
        location: result.location,
      };
    } catch {
      throw new errors.FailedUpload(originalFilename);
    }
  }

  private async uploadAudio(audioFile: FileUpload) {
    const result = await this.fileUploadService.getExtMimeType(
      audioFile.createReadStream(),
      audioExtToMimeType,
    );

    if (!result.ok) {
      throw new errors.FileTypeNotAllowed(result.ext);
    }

    const { ext, mimeType } = result;

    return this.uploadFile(
      ext,
      mimeType,
      audioFile.filename,
      audioFile.createReadStream(),
    );
  }

  private async uploadImage(imageFile: FileUpload) {
    const result = await this.fileUploadService.getExtMimeType(
      imageFile.createReadStream(),
      imageExtToMimeType,
    );

    if (!result.ok) {
      throw new errors.FileTypeNotAllowed(result.ext);
    }

    const { ext, mimeType } = result;

    return this.uploadFile(
      ext,
      mimeType,
      imageFile.filename,
      imageFile.createReadStream(),
    );
  }

  private async createStagedTrack(
    audioFile: FileUpload,
    channelId: Channel['id'],
    coverArtFile: FileUpload | undefined,
    creatorId: PersonaContributor['id'],
    playlistId: Playlist['id'],
    title: string,
  ) {
    const audio = await this.uploadAudio(audioFile);
    const coverArt = coverArtFile
      ? await this.uploadImage(coverArtFile)
      : undefined;

    return await this.stagedTrackService.create(
      audio,
      channelId,
      coverArt,
      creatorId,
      playlistId,
      title,
    );
  }

  @Mutation(returns => StagedTrack, {
    description: 'Create a new Track',
  })
  async createTrack(
    @Me() me: User | null,
    @Arg('audioFile', type => GraphQLUpload) audioFile: FileUpload,
    @Arg('coverArtFile', type => GraphQLUpload, { nullable: true })
    coverArtFile: FileUpload | undefined,
    @Arg('title') title: string,
  ) {
    if (!me) {
      throw new errors.Unauthorized();
    }

    const contributor =
      await this.personaContributorService.getContributorPersona(me.id);

    const channel = await this.channelService.getDefaultChannel(contributor.id);
    const playlist = await this.playlistService.getDefaultPlaylist(channel.id);

    return await this.createStagedTrack(
      audioFile,
      channel.id,
      coverArtFile,
      contributor.id,
      playlist.id,
      title,
    );
  }

  @Mutation(returns => StagedTrack, {
    description: 'Create a new Track in a specific channel',
  })
  async createTrackInChannel(
    @Me() me: User | null,
    @Arg('audioFile', type => GraphQLUpload) audioFile: FileUpload,
    @Arg('channelId', type => ID) channelId: Channel['id'],
    @Arg('coverArtFile', type => GraphQLUpload, { nullable: true })
    coverArtFile: FileUpload | undefined,
    @Arg('title') title: string,
  ) {
    if (!me) {
      throw new errors.Unauthorized();
    }

    const contributor =
      await this.personaContributorService.getContributorPersona(me.id);

    if (!(await this.channelService.canContribute(contributor.id, channelId))) {
      throw new errors.Unauthorized();
    }

    const playlist = await this.playlistService.getDefaultPlaylist(channelId);

    return await this.createStagedTrack(
      audioFile,
      channelId,
      coverArtFile,
      contributor.id,
      playlist.id,
      title,
    );
  }

  @Mutation(returns => StagedTrack, {
    description: 'Create a new Track in a specific playlist',
  })
  async createTrackInPlaylist(
    @Me() me: User | null,
    @Arg('audioFile', type => GraphQLUpload) audioFile: FileUpload,
    @Arg('coverArtFile', type => GraphQLUpload, { nullable: true })
    coverArtFile: FileUpload | undefined,
    @Arg('playlistId', type => ID) playlistId: Playlist['id'],
    @Arg('title') title: string,
  ) {
    if (!me) {
      throw new errors.Unauthorized();
    }

    const contributor =
      await this.personaContributorService.getContributorPersona(me.id);

    if (
      !(await this.playlistService.canContribute(contributor.id, playlistId))
    ) {
      throw new errors.Unauthorized();
    }

    const channel = await this.playlistService.getChannel(playlistId);

    if (!channel) {
      throw new errors.SomethingElse();
    }

    return await this.createStagedTrack(
      audioFile,
      channel.id,
      coverArtFile,
      contributor.id,
      playlistId,
      title,
    );
  }
}
