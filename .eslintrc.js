'use strict';

module.exports = {
  extends: ['@tailify/legacy'],
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    jest: true,
    es6: true,
  },
};
