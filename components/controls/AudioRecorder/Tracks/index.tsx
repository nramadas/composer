import cx from 'classnames';
import React, { memo } from 'react';

import styles from './index.module.scss';
import { PlaybackState, Track, TrackModel } from './Track';

interface Props {
  className?: string;
  expanded?: TrackModel;
  playbackState?: PlaybackState;
  selected?: TrackModel;
  tracks: TrackModel[];
  visible?: boolean;
  onExpand?(track: TrackModel | undefined): void;
  onSelect?(track: TrackModel): void;
  onSetPlaybackState?(playbackState: PlaybackState): void;
}

export const Tracks = memo(function Tracks(props: Props) {
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
          selected={props.selected?.name === track.name}
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
}, (prevProps, nextProps) => {
  if (prevProps.visible === false && nextProps.visible === false) {
    return true;
  }

  return false;
})

export { PlaybackState };
export type { TrackModel };
