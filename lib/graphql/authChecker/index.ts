import { GraphQLResolveInfo } from 'graphql';
import { AuthChecker } from 'type-graphql';

import { GraphQLContext } from '#lib/graphql/context';
import { Permission } from '#lib/models/Permission';
import type { PermissionService } from '#server/modules/permission/service';

const getValue = <T>(name: string, info: GraphQLResolveInfo): T | null => {
  let value: T | null = null;

  info.fieldNodes.forEach(nodes => {
    nodes.arguments?.forEach(arg => {
      if (arg.name.value === name) {
        if (arg.value.kind === 'ObjectValue') {
          value = arg.value.fields as unknown as T;
        } else if (arg.value.kind === 'ListValue') {
          value = arg.value.values as unknown as T;
        } else if (arg.value.kind === 'NullValue') {
          value = null;
        } else if (arg.value.kind === 'Variable') {
          value = null;
        } else {
          value = arg.value.value as unknown as T;
        }
      }
    });
  });

  return value;
};

export const authChecker: (
  permissionService: PermissionService,
) => AuthChecker<GraphQLContext, Permission> =
  permissionService =>
  async ({ context, root, info }, oneOf) => {
    // user must be logged in
    if (!context.me) {
      return false;
    }

    const get = <T>(name: string) => getValue<T>(name, info);
    const userId = context.me.id;

    for (const permission of oneOf) {
      switch (permission) {
        default:
          return false;
      }
    }

    return false;
  };
