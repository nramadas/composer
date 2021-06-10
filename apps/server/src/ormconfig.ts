import path from 'path';

import { ConnectionOptions } from 'typeorm';

import './env';

export const withoutMigrations: ConnectionOptions = {
  cache: {
    type: 'ioredis',
    options: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  },
  database: process.env.POSTGRES_DB,
  entities: [path.join(__dirname, '/**/entity{.ts,.js}')],
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '', 10),
  type: 'postgres',
  username: process.env.POSTGRES_USER,
};

const config: ConnectionOptions = {
  ...withoutMigrations,
  cli: {
    migrationsDir: './migrations',
  },
  migrations: ['./migrations/*.ts'],
  migrationsTableName: 'typeorm_migrations',
};

export default config;
