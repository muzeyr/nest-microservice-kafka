interface MatchType<X, Y> {
  on: (pred: (x: X) => boolean, fn: (x: X) => Y) => MatchType<X, Y>;
  otherwise: (fn: (x: X) => Y) => Y;
}

function matched<X>(x: X) {
  return {
    on: () => matched(x),
    otherwise: () => x,
  };
}

export function match<X, Y>(x: X): MatchType<X, Y> {
  return {
    on: (pred: (x: X) => boolean, fn: (x: X) => Y) =>
      pred(x) ? matched(fn(x)) : match(x),
    otherwise: (fn: (x: X) => Y) => fn(x),
  };
}

//https://medium.com/@schwanndenkuo/switch-with-a-functional-and-generic-turn-547e17b0df9
