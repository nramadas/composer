import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LocationState {
  backgroundLocation: ReturnType<typeof useLocation>;
}

type Props = React.ComponentProps<Link<LocationState>> & {
  to: string;
};

export function OverlayLink(props: Props) {
  const location = useLocation<LocationState>();

  return (
    <Link
      to={{
        pathname: props.to,
        state: {
          backgroundLocation: location,
        },
      }}
    >
      {props.children}
    </Link>
  );
}
