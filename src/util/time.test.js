// @ts-check
import { describe, expect, test } from 'vitest';
import { toMilliseconds } from './time.js';

describe('toMilliseconds', () => {
  describe('1分台で繰り上がらない', () => {
    test('1:39:999', () => {
      expect(toMilliseconds(139999)).toBe(99999);
    });
  });
  describe('1分台で繰り上がる', () => {
    test('1:40:000', () => {
      expect(toMilliseconds(140000)).toBe(100000);
    });
  });
  describe('2分台', () => {
    test('2:00:000', () => {
      expect(toMilliseconds(200000)).toBe(120000);
    });
  });
});
