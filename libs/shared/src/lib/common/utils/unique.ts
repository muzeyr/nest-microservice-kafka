import { isDefined } from 'class-validator';

/**
 * Returns an array with only unique values. Objects are compared by reference,
 * unless the `byKey` argument is supplied, in which case matching properties will
 * be used to check duplicates
 */
export function unique<T>(arr: T[], byKey?: keyof T): T[] {
  return arr.filter((item, index, self) => {
    return (
      index ===
      self.findIndex((i) => {
        if (byKey === undefined) {
          return i === item;
        } else {
          return i[byKey] === item[byKey];
        }
      })
    );
  });
}

/**
 * Returns an array with only unique values. Objects are compared by reference,
 * unless the `byKey` argument is supplied, in which case matching properties will
 * be used to check duplicates
 */
export function uniqueFaster<T>(arr: T[], byKey?: keyof T): T[] {
  const lookupMap = new Map<any, T>();
  const resultArray: T[] = [];
  arr.forEach((item) => {
    let containedValue = null;
    if (byKey === undefined) {
      containedValue = item;
    } else {
      containedValue = item[byKey];
    }
    if (!lookupMap.has(containedValue)) {
      lookupMap.set(containedValue, item);
      resultArray.push(item);
    }
  });
  return resultArray;
}
