/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import ArrayBufferConverter from '../js/ArrayBufferConverter.js';
import getBuffer from '../js/app.js';

test('arrayBuffer_test', () => {
  const arrayBuffer = new ArrayBufferConverter();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  arrayBuffer.load(getBuffer());
  expect(`${arrayBuffer}`).toBe(expected);
});
