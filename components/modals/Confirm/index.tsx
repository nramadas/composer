import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Filled } from '#components/controls/buttons/flat/Filled';
import { SmallEmpty } from '#components/controls/buttons/flat/SmallEmpty';
import { Close } from '#components/icons/Close';
import { Body1 } from '#components/typography/Body1';
import { Body2 } from '#components/typography/Body2';
import { useDispatch } from '#lib/hooks/useDispatch';
import { useSelector } from '#lib/hooks/useSelector';
import { confirmationActions } from '#lib/redux/actions';

import styles from './index.module.scss';

interface LocationState {
  title: string;
  prompt: string;
}

interface Props {
  className?: string;
}

export default memo(
  function Confirm(props: Props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation<LocationState>();
    const { title, prompt } = useSelector(state => ({
      title: state.confirmation.entry?.title || location.state?.title,
      prompt: state.confirmation.entry?.prompt || location.state?.prompt,
    }));

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Body2>Confirm: {title}</Body2>
        </header>
        <article className={styles.content}>
          <Body1>{prompt}</Body1>
        </article>
        <footer className={styles.footer}>
          <SmallEmpty
            onClick={() => {
              dispatch(confirmationActions.setAnswer(false));
              history.goBack();
            }}
          >
            Cancel
          </SmallEmpty>
          <Filled
            onClick={() => {
              dispatch(confirmationActions.setAnswer(true));
              history.goBack();
            }}
          >
            Continue
          </Filled>
        </footer>
        <Close
          className={styles.closeIcon}
          onClick={() => {
            history.goBack();
          }}
        />
      </div>
    );
  },
  () => true,
);
