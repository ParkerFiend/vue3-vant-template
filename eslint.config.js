import eslint from '@eslint/js';

import pluginPrettier from 'eslint-plugin-prettier/recommended';

import pluginVue from 'eslint-plugin-vue';

import tseslint from 'typescript-eslint';

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  ),
  ...pluginVue.configs['flat/recommended'],
  pluginPrettier,
  {
    rules: {
      // 无用变量可以添加下划线规避
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      // 组件名报错降级
      'vue/multi-word-component-names': ['warn'],
    },
  },
];
