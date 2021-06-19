import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

export function Mic(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 48 48">
      <Path d="M24 4C19.5817 4 16 7.58172 16 12V24C16 28.4183 19.5817 32 24 32C28.4183 32 32 28.4183 32 24V12C32 7.58172 28.4183 4 24 4Z" />
      <Path d="M25 37.7148C32.2653 37.2021 38 31.1458 38 23.75C38 23.0596 37.4404 22.5 36.75 22.5C36.0596 22.5 35.5 23.0596 35.5 23.75C35.5 30.1013 30.3513 35.25 24 35.25C17.6487 35.25 12.5 30.1013 12.5 23.75C12.5 23.0596 11.9404 22.5 11.25 22.5C10.5596 22.5 10 23.0596 10 23.75C10 30.9752 15.4734 36.9221 22.5 37.6706V42.75C22.5 43.4404 23.0596 44 23.75 44C24.4404 44 25 43.4404 25 42.75V37.7148Z" />
    </Svg>
  );
}
