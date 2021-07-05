import React from 'react';

export function Space(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M20 11V13H4V11C4 10.4477 3.55228 10 3 10C2.44772 10 2 10.4477 2 11V13C2 14.1046 2.89543 15 4 15H20C21.1046 15 22 14.1046 22 13V11C22 10.4477 21.5523 10 21 10C20.4477 10 20 10.4477 20 11Z" />
    </svg>
  );
}
