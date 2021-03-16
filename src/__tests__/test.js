/* eslint-disable no-undef */

import ArrayBufferConverter from '../js/ArrayBufferConverter.js';
import getBuffer from '../js/app.js';

test('magi_test', () => {
  const arrayBuffer = new ArrayBufferConverter();
  expect(arrayBuffer.load(getBuffer())).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
