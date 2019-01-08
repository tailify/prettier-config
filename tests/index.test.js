'use strict';

const prettier = require('prettier');
const options = require('./../lib/index.js');

it('should not contain invalid options', () => {
  const result = prettier.format('foo ( );\n', Object.assign(options, { filepath: 'foo.js' }));
  expect(result).toBe('foo();\n');
});
