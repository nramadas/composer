import { useContext } from 'react';

import { EditorStateContext } from '#components/providers/EditorState';

export function useBlockState() {
  const {
    highlightStartIndex,
    highlightEndIndex,
    selectionIndex,
    endHighlight,
    select,
  } = useContext(EditorStateContext);

  return {
    highlightStartIndex,
    highlightEndIndex,
    selectionIndex,
    endHighlight,
    select,
  };
}
