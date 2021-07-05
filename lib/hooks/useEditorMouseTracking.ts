import { useEffect } from 'react';

import { useDispatch } from '#lib/hooks/useDispatch';
import { composerActions } from '#lib/redux/actions';

export function useEditorMouseTracking() {
  const dispatch = useDispatch();

  useEffect(() => {
    function stopDrag() {
      dispatch(composerActions.stopDrag());
    }

    document.addEventListener('mouseup', stopDrag);

    return () => {
      document.removeEventListener('mouseup', stopDrag);
    };
  }, [dispatch]);
}
