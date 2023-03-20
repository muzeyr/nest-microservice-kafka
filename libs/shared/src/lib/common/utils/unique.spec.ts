import { unique, uniqueFaster } from './unique';
import { randomInt } from './random';

describe('unique()', () => {
  const elements = [1, 1, 2, 3, 2, 6, 4, 2];
  for (let i = 0; i < 1000 * 1000 * 10; i++) {
    elements.push(3);
  }
  it('works with primitive values', () => {
    expect(uniqueFaster(elements)).toEqual([1, 2, 3, 6, 4]);
  });

  it('slower with primitive values', () => {
    expect(unique(elements)).toEqual([1, 2, 3, 6, 4]);
  });

  it('works with object references', () => {
    const a = { a: true };
    const b = { b: true };
    const c = { c: true };

    expect(unique([a, b, a, b, c, a])).toEqual([a, b, c]);
    expect(unique([a, b, a, b, c, a])[0]).toBe(a);
    expect(unique([a, b, a, b, c, a])[1]).toBe(b);
    expect(unique([a, b, a, b, c, a])[2]).toBe(c);
  });

  it('works with object key param', () => {
    const a = { id: 'a', a: true };
    const b = { id: 'b', b: true };
    const c = { id: 'c', c: true };
    const d = { id: 'a', d: true };
    expect(unique([a, b, a, b, d, c, a], 'id')).toEqual([a, b, c]);
  });

  it('works an empty array', () => {
    expect(unique([])).toEqual([]);
  });
});
