const compose =
  (...args: ((arg: unknown) => unknown)[]) =>
  (value: unknown) =>
    args.reverse().reduce((prev, curr) => curr(prev), value)

export default compose
