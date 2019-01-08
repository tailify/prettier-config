'use strict';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['node'],
  rules: {
    'linebreak-style': 'error',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'sort-keys': 'error',
  },
};
