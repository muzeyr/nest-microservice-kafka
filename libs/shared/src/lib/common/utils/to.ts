/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object,
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }
      return [err, undefined];
    });
}

export default to;

/*
Usage:
interface ServerResponse {
  test: number;
}
const p = Promise.resolve({test: 123});
const [err, data] = await to<ServerResponse>(p);
console.log(data.test);
 */
//https://github.com/samchon/safe-typeorm
//https://github.com/ssut/nestjs-sqs
