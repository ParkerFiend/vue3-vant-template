module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-html',
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'string-quotes': 'single',
    'no-empty-source': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'warn'],
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      extends: [
        'stylelint-config-recommended',
        'stylelint-config-recess-order',
      ],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: [':deep'],
          },
        ],
      },
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-vue',
        'stylelint-config-recess-order',
      ],
    },
  ],
}
