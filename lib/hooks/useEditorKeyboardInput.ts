import { useEffect } from 'react';

import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { Sthayi } from '#lib/models/Sthayi';
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
          e.preventDefault();
          return dispatch(composerActions.redo());
        }
      } else if (e.shiftKey) {
        switch (e.key) {
          case 'ArrowLeft': {
            e.preventDefault();
            return dispatch(composerActions.cursorReduce());
          }
          case 'ArrowRight': {
            e.preventDefault();
            return dispatch(composerActions.cursorExtend());
          }
          case '!':
          case '1': {
            e.preventDefault();
            return dispatch(composerActions.setSthayi(Sthayi.Sub2));
          }
          case '@':
          case '2': {
            e.preventDefault();
            return dispatch(composerActions.setSthayi(Sthayi.Sub1));
          }
          case '#':
          case '3': {
            e.preventDefault();
            return dispatch(composerActions.setSthayi(Sthayi.Mid));
          }
          case '$':
          case '4': {
            e.preventDefault();
            return dispatch(composerActions.setSthayi(Sthayi.Up1));
          }
          case '%':
          case '5': {
            e.preventDefault();
            return dispatch(composerActions.setSthayi(Sthayi.Up2));
          }
        }
      } else if (isCmd) {
        switch (e.key) {
          case 'z': {
            e.preventDefault();
            return dispatch(composerActions.undo());
          }
          case '1': {
            e.preventDefault();
            return dispatch(composerActions.setMaatraa(1));
          }
          case '2': {
            e.preventDefault();
            return dispatch(composerActions.setMaatraa(2));
          }
          case '3': {
            e.preventDefault();
            return dispatch(composerActions.setMaatraa(3));
          }
          case '4': {
            e.preventDefault();
            return dispatch(composerActions.setMaatraa(4));
          }
          case '5': {
            e.preventDefault();
            return dispatch(composerActions.setMaatraa(6));
          }
        }
      } else {
        switch (e.key) {
          case 'ArrowLeft': {
            e.preventDefault();
            return dispatch(composerActions.cursorPrev());
          }
          case 'ArrowRight': {
            e.preventDefault();
            return dispatch(composerActions.cursorNext());
          }
          default: {
            keyMap.forEach(mapping => {
              if (e.key === mapping.key) {
                e.preventDefault();
                dispatch(composerActions.setNote(mapping.shruti));
              }
            });

            if (e.key === ' ') {
              e.preventDefault();
              dispatch(composerActions.setNote(','));
            }

            if (e.key === 'Backspace') {
              e.preventDefault();
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
