const globals = require('globals')
const pluginJs = require('@eslint/js')
const tseslint = require('typescript-eslint')
const prettier = require('eslint-config-prettier')
const prettierPlugin = require('eslint-plugin-prettier')

module.exports = [
  { files: ['**/*.{ts, tsx, json}'] },
  {
    ignores: [
      'build/**',
      'node_modules/**',
      'eslint.config.js',
    ],
  },
  { languageOptions: { globals: globals.commonjs } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^h$',
        },
      ],
    },
  },
]
