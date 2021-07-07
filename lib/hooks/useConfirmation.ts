import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { ModalRoute } from '#lib/constants/Route';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useModalLink } from '#lib/hooks/useModalLink';
import { useSelector } from '#lib/hooks/useSelector';
import { confirmationActions } from '#lib/redux/actions';

export function useConfirmation() {
  const answer = useSelector(state => state.confirmation.answer);
  const dispatch = useDispatch();
  const getModalLink = useModalLink();
  const history = useHistory();
  const answerRef = useRef(false);

  useEffect(() => {
    answerRef.current = answer;
  }, [answer]);

  return (title: string, prompt: string) =>
    new Promise<boolean>(res => {
      dispatch(confirmationActions.setQuestion({ title, prompt }));
      history.push(getModalLink(ModalRoute.Confirm), { title, prompt });

      const timeout = setTimeout(() => {
        if (history.location.search.includes(`open=${ModalRoute.Confirm}`)) {
          clearTimeout(timeout);
          answerRef.current = false;
          history.goBack();
        }
      }, 15000);

      window.addEventListener('popstate', () => {
        setTimeout(() => {
          clearTimeout(timeout);
          res(answerRef.current);
        });

        setTimeout(() => {
          dispatch(confirmationActions.clear());
        }, 1000);
      });
    });
}
