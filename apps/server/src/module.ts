import { join } from 'path';

import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { graphqlUploadExpress } from 'graphql-upload';
import { TypeGraphQLModule } from 'typegraphql-nestjs';

import { authChecker } from '#lib/graphql/authChecker';
import { AuthnModule } from '#server/modules/authn';
import { CompositionModule } from '#server/modules/composition';
import { FileUploadModule } from '#server/modules/fileUpload';
import { GqlContextModule } from '#server/modules/gqlContext';
import { GqlContextService } from '#server/modules/gqlContext/service';
import { PermissionModule } from '#server/modules/permission';
import { PermissionService } from '#server/modules/permission/service';
import { UserModule } from '#server/modules/user';

import { AppController } from './controller';
import { withoutMigrations } from './ormconfig';
import { AppService } from './service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../../.env.local',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'fakeS3'),
      serveRoot: '/fakeS3',
      serveStaticOptions: {
        index: false,
      },
    }),
    TypeOrmModule.forRoot({
      ...withoutMigrations,
      autoLoadEntities: true,
    }),
    TypeGraphQLModule.forRootAsync({
      imports: [GqlContextModule, PermissionModule],
      inject: [GqlContextService, PermissionService],
      useFactory: async (
        gqlContextService: GqlContextService,
        permissionService: PermissionService,
      ) => ({
        authChecker: authChecker(permissionService),
        context: ({ req }) => gqlContextService.fromHeaders(req.headers),
        uploads: false,
      }),
    }),
    AuthnModule,
    FileUploadModule,
    UserModule,
    CompositionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress()).forRoutes('graphql');
  }
}
