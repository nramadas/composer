import cx from 'classnames';
import React from 'react';

import styles from './index.module.scss';
import { PlaybackState, Track, TrackModel } from './Track';

interface Props {
  className?: string;
  expanded?: TrackModel;
  playbackState?: PlaybackState;
  tracks: TrackModel[];
  onExpand?(track: TrackModel | undefined): void;
  onSelect?(track: TrackModel): void;
  onSetPlaybackState?(playbackState: PlaybackState): void;
}

export function Tracks(props: Props) {
  return (
    <div className={cx(styles.container, props.className)}>
      {props.tracks.map((track, i) => (
        <Track
          key={i}
          expanded={props.expanded?.name === track.name}
          playbackState={
            props.expanded?.name === track.name
              ? props.playbackState
              : PlaybackState.Inactive
          }
          track={track}
          onExpand={() => {
            if (props.expanded?.name === track.name) {
              props.onExpand?.(undefined);
            } else {
              props.onExpand?.(track);
            }
          }}
          onSelect={() => props.onSelect?.(track)}
          onSetPlaybackState={props.onSetPlaybackState}
        />
      ))}
    </div>
  );
}

export { PlaybackState };
export type { TrackModel };
