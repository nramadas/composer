module.exports = {
  extends: 'universe/native',
  ignorePatterns: ['migrations/*.ts'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: '#*/**/**',
            group: 'parent',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
