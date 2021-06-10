import { Logger, Injectable } from '@nestjs/common';

import { publicRequest } from '#lib/authn/request';
import { extractAuthId } from '#lib/authn/token';
import { AuthToken } from '#lib/models/AuthToken';

const REFRESH_COOKIE_NAME = 'authn';

interface Success<T> {
  ok: true;
  value: T;
}

interface Failure {
  ok: false;
  errors: {
    field: string;
    message: string;
  }[];
}

type Result<T> = Success<T> | Failure;

interface User extends AuthToken {
  authId?: string;
}

@Injectable()
export class AuthnService {
  private readonly logger = new Logger(AuthnService.name);

  async createUserToken(
    email: string,
    password: string,
  ): Promise<Result<User>> {
    const res = await publicRequest({
      url: '/accounts',
      method: 'POST',
      body: { username: email, password },
    });

    const result = await res.json().catch(() => ({
      errors: [{ field: 'id_token', message: 'PARSE_ERROR' }],
    }));

    if (result.result) {
      const authId = await extractAuthId(result.result.id_token);
      const cookies = res.headers.get('set-cookie');
      let refreshToken: string = '';

      cookies?.split(';').forEach(part => {
        if (part.startsWith(`${REFRESH_COOKIE_NAME}=`)) {
          const [, t] = part.split(`${REFRESH_COOKIE_NAME}=`);
          refreshToken = t;
        }
      });

      this.logger.verbose('Created new user token', JSON.stringify({ email }));

      return {
        ok: true,
        value: {
          authId,
          refresh: refreshToken,
          session: result.result.id_token,
        },
      } as Success<User>;
    } else {
      this.logger.warn(
        'Failed to create user token',
        JSON.stringify({
          email,
          errors: result.errors.map(
            (e: any) => `field: ${e.field}, message: ${e.message}`,
          ),
        }),
      );

      return {
        ok: false,
        errors: result.errors,
      } as Failure;
    }
  }

  async destroyUserSession(refreshToken: string): Promise<Result<void>> {
    const res = await publicRequest({
      url: '/session',
      method: 'DELETE',
      cookie: `${REFRESH_COOKIE_NAME}=${refreshToken}`,
    });

    if (res.ok) {
      this.logger.verbose('Removed user token');

      return {
        ok: true,
      } as Success<void>;
    } else {
      this.logger.warn('Failed to destroy user token');

      return {
        ok: false,
        errors: [],
      } as Failure;
    }
  }

  async getUserToken(email: string, password: string): Promise<Result<User>> {
    const res = await publicRequest({
      url: '/session',
      method: 'POST',
      body: { username: email, password },
    });

    const result = await res.json().catch(() => ({
      errors: [{ field: 'id_token', message: 'PARSE_ERROR' }],
    }));

    if (result.result) {
      const authId = await extractAuthId(result.result.id_token);
      const cookies = res.headers.get('set-cookie');
      let refreshToken: string = '';

      cookies?.split(';').forEach(part => {
        if (part.startsWith(`${REFRESH_COOKIE_NAME}=`)) {
          const [, t] = part.split(`${REFRESH_COOKIE_NAME}=`);
          refreshToken = t;
        }
      });

      this.logger.verbose('Retrived user token', JSON.stringify({ email }));

      return {
        ok: true,
        value: {
          authId,
          refresh: refreshToken,
          session: result.result.id_token,
        },
      } as Success<User>;
    } else {
      this.logger.warn(
        'Failed to retrieve user token',
        JSON.stringify({
          email,
          errors: result.errors.map(
            (e: any) => `field: ${e.field}, message: ${e.message}`,
          ),
        }),
      );

      return {
        ok: false,
        errors: result.errors,
      } as Failure;
    }
  }

  async refreshUserToken(
    refreshToken: string,
  ): Promise<Result<Pick<AuthToken, 'session'>>> {
    const res = await publicRequest({
      url: '/session/refresh',
      method: 'GET',
      cookie: `${REFRESH_COOKIE_NAME}=${refreshToken}`,
    });

    const result = await res.json().catch(() => ({
      errors: [{ field: 'refreshToken', message: 'PARSE_ERROR' }],
    }));

    if (result.result) {
      this.logger.verbose('Refreshed user token');

      return {
        ok: true,
        value: {
          session: result.result.id_token,
        },
      } as Success<Pick<AuthToken, 'session'>>;
    } else {
      this.logger.warn('Failed to refresh user token');

      return {
        ok: false,
        errors: result.errors,
      } as Failure;
    }
  }
}
