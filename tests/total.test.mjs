import { test } from 'node:test';
import assert from 'node:assert/strict';
import { total } from '../src/utils/total.mjs';

test('el total multiplica precio por cantidad', () => {
  assert.equal(total([{ price: 10, quantity: 2 }, { price: 5, quantity: 1 }]), 25);
});
