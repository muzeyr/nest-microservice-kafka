type Callback<A> = (args: A) => void;

const promisify =
  <T, A>(fn: (args: T, cb: Callback<A>) => void): ((args: T) => Promise<A>) =>
  (args: T) =>
    new Promise((resolve) => {
      fn(args, (callbackArgs) => {
        resolve(callbackArgs);
      });
    });

export function promiseAll(...promises: Array<Promise<any>>): Promise<void> {
  // We initialize an `fulfilled` boolean array of the size of `promises`
  const pending = promises.map(() => true);
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          // When a promise is resolved, we store this fact in our array
          pending[index] = false;
          // If there are no pending promises, we can resolve our main promise
          if (!pending.find((isPending) => isPending === true)) {
            resolve(value);
          }
        })
        .catch(reject); // Any failure in one of the promises will make the main promise rejected
    });
  });
}

export type PromiseResult =
  | {
      status: 'pending';
    }
  | {
      status: 'fulfilled';
      value: any;
    }
  | {
      status: 'rejected';
      error: Error;
    };

export function promiseAllSettled(
  ...promises: Array<Promise<any>>
): Promise<PromiseResult[]> {
  // We initialize a `results` array of the size of `promises`
  const results: PromiseResult[] = promises.map(() => {
    return { status: 'pending' };
  });

  return new Promise((resolve, reject) => {
    function resolveIfNothingPending(): void {
      // If there are no pending promises, we can resolve our main promise
      if (!results.find((result) => result.status === 'pending')) {
        resolve(results);
      }
    }

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          // When a promise is resolved, we store the value and status
          results[index] = { value, status: 'fulfilled' };
          resolveIfNothingPending();
        })
        .catch((error) => {
          // When there's an error, we store it in the `results` array too
          results[index] = { error, status: 'rejected' };
          resolveIfNothingPending();
        });
    });
  });
}

/**
 * Similar to Promise.all(),
 * but limits parallelization to a certain number of parallel executions.
 */
export async function parallel<T>(
  concurrent: number,
  collection: Iterable<T>,
  processor: (item: T) => Promise<any>,
) {
  // queue up simultaneous calls
  const queue = [];
  const ret = [];
  for (const fn of collection) {
    // fire the async function, add its promise to the queue, and remove
    // it from queue when complete
    const p = processor(fn).then((res) => {
      queue.splice(queue.indexOf(p), 1);
      return res;
    });
    queue.push(p);
    ret.push(p);
    // if max concurrent, wait for one to finish
    if (queue.length >= concurrent) {
      await Promise.race(queue);
    }
  }
  // wait for the rest of the calls to finish
  await Promise.all(queue);
}
