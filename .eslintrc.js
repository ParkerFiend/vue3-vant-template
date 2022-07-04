module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
