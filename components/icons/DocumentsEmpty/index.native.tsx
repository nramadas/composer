import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

export function Documents(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <Path d="M4 4.25C4 3.00736 5.00736 2 6.25 2H10.6312C11.2279 2 11.8002 2.23705 12.2221 2.65901L16.841 7.27786C17.2629 7.69981 17.5 8.27211 17.5 8.86885V17.25C17.5 18.4926 16.4926 19.5 15.25 19.5H6.25C5.00736 19.5 4 18.4926 4 17.25V4.25ZM6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V17.25C5.5 17.6642 5.83579 18 6.25 18H15.25C15.6642 18 16 17.6642 16 17.25V8.99753H12.7539C11.5113 8.99753 10.5039 7.99017 10.5039 6.74753V3.5H6.25ZM12.0039 4.56209V6.74753C12.0039 7.16174 12.3397 7.49753 12.7539 7.49753H14.9393L12.0039 4.56209ZM6.62891 20.5C6.93778 21.3739 7.77121 22 8.75088 22H15.2509C17.8742 22 20.0009 19.8734 20.0009 17.25V11.3689C20.0009 10.7721 19.7638 10.1998 19.3419 9.77788L18.5009 8.93689V17.25C18.5009 19.0449 17.0458 20.5 15.2509 20.5H6.62891Z" />
    </Svg>
  );
}
