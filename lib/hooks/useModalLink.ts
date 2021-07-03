import { useLocation } from 'react-router-dom';

import { ModalRoute } from '#lib/constants/Route';

export function useModalLink() {
  const location = useLocation();
  return (route: ModalRoute) => `${location.pathname}?open=${route}`;
}
