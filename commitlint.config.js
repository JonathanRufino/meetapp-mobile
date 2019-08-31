module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'new',
        'feature',
        'fix',
        'security',
        'performance',
        'improvement',
        'breaking',
        'deprecated',
        'i18n',
        'a11y',
        'refactor',
        'docs',
        'example',
        'test',
        'dependency',
        'config',
        'build',
        'release',
        'update',
        'wip',
        'chore',
        'style',
        'ci',
        'revert',
      ],
    ],
  },
};