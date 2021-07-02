import { useEffect } from 'react';

import { useDispatch } from '#lib/hooks/useDispatch';
import { composerActions } from '#lib/redux/actions';

export function useEditorKeyboardInput() {
  const dispatch = useDispatch();

  useEffect(() => {
    function captureKeyPress(e: KeyboardEvent) {
      if (e.shiftKey) {
      } else if (e.ctrlKey) {
      } else {
        switch (e.key) {
          case 'ArrowLeft': {
            return dispatch(composerActions.cursorPrev());
          }
          case 'ArrowRight': {
            return dispatch(composerActions.cursorNext());
          }
        }
      }
    }

    document.addEventListener('keydown', captureKeyPress);

    return () => {
      document.removeEventListener('keydown', captureKeyPress);
    };
  }, []);
}
