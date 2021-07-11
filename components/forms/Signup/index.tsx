import cx from 'classnames';
import React, { useContext, useState } from 'react';
import { useMutation } from 'urql';

import { Filled } from '#components/controls/buttons/flat/Filled';
import { InputWithValidation } from '#components/controls/inputs/flat/InputWithValidation';
import { AuthTokenContext } from '#components/providers/AuthToken';
import { Body2 } from '#components/typography/Body2';
import { ErrorType } from '#lib/errors';

import createUserMutation from './createUserMutation.gql';
import styles from './index.module.scss';

function getErrorMessage(error: ErrorType) {
  switch (error) {
    case ErrorType.AlreadyTaken:
      return 'That email already has an account. Please try to log in instead.';
    case ErrorType.DoesNotMatch:
      return 'Passwords do not match';
    case ErrorType.Insecure:
      return 'Password is too insecure. Please use a different password';
    case ErrorType.InvalidFormat:
      return "That doesn't look like an email. Please try something else.";
    default:
      return 'Something went wrong.';
  }
}

interface Props {
  className?: string;
  inert?: boolean;
  onComplete?(): void;
}

export function Signup(props: Props) {
  const { setRefresh, setSession } = useContext(AuthTokenContext);
  const [signupResult, createUser] = useMutation(createUserMutation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const error = signupResult.error?.graphQLErrors[0]?.message as
    | ErrorType
    | undefined;

  return (
    <form
      className={cx(styles.container, props.className)}
      onSubmit={e => {
        e.preventDefault();

        if (signupResult.fetching || signupResult.data?.signup) {
          return;
        }

        createUser({ email, password, password2 }).then(result => {
          if (result.data?.signup) {
            const { refresh, session } = result.data.signup;
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
      <div className={styles.inputContainer}>
        <InputWithValidation
          className={styles.input}
          label="repeat password"
          tabIndex={props.inert ? -1 : undefined}
          type="password"
          onChange={e => {
            e.stopPropagation();
            setPassword2(e.currentTarget.value);
          }}
          onKeyDown={e => e.stopPropagation()}
          onValidate={text => (text === password ? '' : 'Passwords must match')}
        />
      </div>
      <footer className={styles.footer}>
        <Filled
          disabled={
            !email ||
            !password ||
            !password2 ||
            password !== password2 ||
            signupResult.fetching ||
            !!signupResult.data?.signup
          }
          tabIndex={props.inert ? -1 : undefined}
        >
          {signupResult.fetching || !!signupResult.data?.signup
            ? 'signing up'
            : 'sign up'}
        </Filled>
      </footer>
      <div className={styles.error}>
        {error && <Body2>{getErrorMessage(error)}</Body2>}
      </div>
    </form>
  );
}
