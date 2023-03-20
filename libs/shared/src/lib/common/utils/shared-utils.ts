/**
 * Predicate with type guard, used to filter out null or undefined values
 * in a filter operation.
 */
import { performance } from 'perf_hooks';
import { Logger } from '@nestjs/common';

export function notNullOrUndefined<T>(val: T | undefined | null): val is T {
  return val !== undefined && val !== null;
}

/**
 * Used in exhaustiveness checks to assert a codepath should never be reached.
 */
export function assertNever(value: never): never {
  throw new Error(
    `Expected never, got ${typeof value} (${JSON.stringify(value)})`,
  );
}

/**
 * Simple object check.
 * From https://stackoverflow.com/a/34749873/772859
 */
export function isObject(item: any): item is object {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function isClassInstance(item: any): boolean {
  return isObject(item) && item.constructor.name !== 'Object';
}

type NumericPropsOf<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type OnlyNumerics<T> = {
  [K in NumericPropsOf<T>]: T[K];
};

/**
 * Adds up all the values of a given numeric property of a list of objects.
 */
export function summate<T extends OnlyNumerics<T>>(
  items: T[] | undefined | null,
  prop: keyof OnlyNumerics<T>,
): number {
  return (items || []).reduce((sum, i) => sum + i[prop], 0);
}

/**
 * Given an array of option arrays `[['red, 'blue'], ['small', 'large']]`, this method returns a new array
 * containing all the combinations of those options:
 *
 * @example
 * ```
 * generateAllCombinations([['red, 'blue'], ['small', 'large']]);
 * // =>
 * // [
 * //  ['red', 'small'],
 * //  ['red', 'large'],
 * //  ['blue', 'small'],
 * //  ['blue', 'large'],
 * // ]
 */
export function generateAllCombinations<T>(
  optionGroups: T[][],
  combination: T[] = [],
  k = 0,
  output: T[][] = [],
): T[][] {
  if (k === 0) {
    optionGroups = optionGroups.filter((g) => 0 < g.length);
  }
  if (k === optionGroups.length) {
    output.push(combination);
    return [];
  } else {
    // tslint:disable:prefer-for-of
    for (let i = 0; i < optionGroups[k].length; i++) {
      generateAllCombinations(
        optionGroups,
        combination.concat(optionGroups[k][i]),
        k + 1,
        output,
      );
    }
    // tslint:enable:prefer-for-of
    return output;
  }
}

export function ExecutionTime() {
  return (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<(...params: any[]) => Promise<any>>,
  ) => {
    const oldFunc = descriptor.value;
    descriptor.value = async function () {
      const start = performance.now();
      // eslint-disable-next-line prefer-rest-params
      const result = await oldFunc.apply(this, arguments);
      new Logger().debug(
        `${propertyKey} took ${(performance.now() - start).toFixed(3)}ms`,
      );
      return result;
    };
  };
}

export const timedAsync =
  async (f) =>
  async (...args) => {
    const start = performance.now();
    const ret = await f(...args);
    console.log(
      `function ${f.name} took ${(performance.now() - start).toFixed(3)}ms`,
    );
    return ret;
  };

export const timed =
  (f) =>
  (...args) => {
    const start = performance.now();
    const ret = f(...args);
    console.log(
      `function ${f.name} took ${(performance.now() - start).toFixed(3)}ms`,
    );
    return ret;
  };
