import cx from 'classnames';
import React, { useContext, useState } from 'react';
import { useMutation } from 'urql';

import { Filled } from '#components/controls/buttons/flat/Filled';
import { InputWithValidation } from '#components/controls/inputs/flat/InputWithValidation';
import { AuthTokenContext } from '#components/providers/AuthToken';
import { Body2 } from '#components/typography/Body2';
import { ErrorType } from '#lib/errors';

import styles from './index.module.scss';
import loginUserMutation from './loginUserMutation.gql';

function getErrorMessage(error: ErrorType) {
  switch (error) {
    case ErrorType.DoesNotMatch:
      return 'Incorrect username/password';
    case ErrorType.Unauthorized:
      return 'Cannot log in at this time. Please try again later';
    default:
      return 'Something went wrong.';
  }
}

interface Props {
  className?: string;
  inert?: boolean;
  onComplete?(): void;
}

export function Login(props: Props) {
  const { setRefresh, setSession } = useContext(AuthTokenContext);
  const [loginResult, loginUser] = useMutation(loginUserMutation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = loginResult.error?.graphQLErrors[0]?.message as
    | ErrorType
    | undefined;

  return (
    <form
      className={cx(styles.container, props.className)}
      onSubmit={e => {
        e.preventDefault();

        if (loginResult.fetching || !!loginResult.data?.login) {
          return;
        }

        loginUser({ email, password }).then(result => {
          if (result.data?.login) {
            const { refresh, session } = result.data.login;
            setRefresh(refresh);
            setSession(session);
            props.onComplete?.();
          }
        });
      }}
    >
      <div className={styles.inputContainer}>
        <InputWithValidation
          className={styles.input}
          label="email"
          tabIndex={props.inert ? -1 : undefined}
          onChange={e => {
            e.stopPropagation();
            setEmail(e.currentTarget.value);
          }}
          onKeyDown={e => e.stopPropagation()}
          onValidate={text => (text ? '' : 'Email cannot be blank')}
        />
      </div>
      <div className={styles.inputContainer}>
        <InputWithValidation
          className={styles.input}
          label="password"
          tabIndex={props.inert ? -1 : undefined}
          type="password"
          onChange={e => {
            e.stopPropagation();
            setPassword(e.currentTarget.value);
          }}
          onKeyDown={e => e.stopPropagation()}
          onValidate={text => (text ? '' : 'Password cannot be blank')}
        />
      </div>
      <footer className={styles.footer}>
        <Filled
          disabled={
            !email ||
            !password ||
            loginResult.fetching ||
            !!loginResult.data?.login
          }
          tabIndex={props.inert ? -1 : undefined}
        >
          {loginResult.fetching || !!loginResult.data?.login
            ? 'loggin in'
            : 'log in'}
        </Filled>
      </footer>
      <div className={styles.error}>
        {error && <Body2>{getErrorMessage(error)}</Body2>}
      </div>
    </form>
  );
}
