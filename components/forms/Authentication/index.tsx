import cx from 'classnames';
import React, { useState } from 'react';

import { SmallEmpty } from '#components/controls/buttons/flat/SmallEmpty';
import { Login } from '#components/forms/Login';
import { Signup } from '#components/forms/Signup';
import { H3 } from '#components/typography/H3';

import styles from './index.module.scss';

enum Form {
  Login,
  Signup,
}

interface Props {
  className?: string;
  onComplete?(): void;
}

export function Authentication(props: Props) {
  const [form, setForm] = useState(Form.Signup);
  const showLogin = form === Form.Login;

  return (
    <div
      className={cx(props.className, styles.container, {
        [styles.showLogin]: showLogin,
      })}
    >
      <div className={cx(styles.content)}>
        <H3 className={styles.signupHeader}>Sign up</H3>
        <H3 className={styles.loginHeader}>Log in</H3>
        <Signup
          className={styles.signup}
          inert={showLogin}
          onComplete={props.onComplete}
        />
        <Login
          className={styles.login}
          inert={!showLogin}
          onComplete={props.onComplete}
        />
      </div>
      <SmallEmpty
        className={styles.switchLogin}
        onClick={() => setForm(Form.Login)}
      >
        Switch to login
      </SmallEmpty>
      <SmallEmpty
        className={styles.switchSignup}
        onClick={() => setForm(Form.Signup)}
      >
        Switch to signup
      </SmallEmpty>
    </div>
  );
}
