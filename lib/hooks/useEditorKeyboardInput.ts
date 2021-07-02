import { useEffect } from 'react';

import { useDispatch } from '#lib/hooks/useDispatch';
import { composerActions } from '#lib/redux/actions';

export function useEditorKeyboardInput() {
  const dispatch = useDispatch();

  useEffect(() => {
    function captureKeyPress(e: KeyboardEvent) {
      if (document.activeElement !== document.body) {
        e.preventDefault();
      }

      const isCmd = e.ctrlKey || e.metaKey;

      if (e.shiftKey && isCmd) {
        if (e.key === 'z') {
          return dispatch(composerActions.redo());
        }
      } else if (e.shiftKey) {
      } else if (isCmd) {
        if (e.key === 'z') {
          return dispatch(composerActions.undo());
        }
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
