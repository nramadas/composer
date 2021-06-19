import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

export function Pause(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 48 48">
      <Path d="M17.75 7C19.5449 7 21 8.45507 21 10.25V37.75C21 39.5449 19.5449 41 17.75 41H12.25C10.4551 41 9 39.5449 9 37.75V10.25C9 8.45507 10.4551 7 12.25 7H17.75ZM35.75 7C37.5449 7 39 8.45507 39 10.25V37.75C39 39.5449 37.5449 41 35.75 41H30.25C28.4551 41 27 39.5449 27 37.75V10.25C27 8.45507 28.4551 7 30.25 7H35.75Z" />
    </Svg>
  );
}
