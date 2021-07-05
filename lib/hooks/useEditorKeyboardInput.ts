import { useEffect } from 'react';

import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { composerActions } from '#lib/redux/actions';

export function useEditorKeyboardInput() {
  const dispatch = useDispatch();
  const keyMap = useSelector(state => state.composition.keyMap);

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
        switch (e.key) {
          case 'ArrowLeft': {
            return dispatch(composerActions.cursorReduce());
          }
          case 'ArrowRight': {
            return dispatch(composerActions.cursorExtend());
          }
        }
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
          default: {
            keyMap.forEach(mapping => {
              if (e.key === mapping.key) {
                dispatch(composerActions.setNote(mapping.shruti));
              }
            });

            if (e.key === ' ') {
              dispatch(composerActions.setNote(','));
            }

            if (e.key === 'Backspace') {
              dispatch(composerActions.setNote('del'));
            }
          }
        }
      }
    }

    document.addEventListener('keydown', captureKeyPress);

    return () => {
      document.removeEventListener('keydown', captureKeyPress);
    };
  }, [keyMap]);
}
