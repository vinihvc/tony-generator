const compose =
  <T = unknown>(...args: ((arg: T) => T)[]) =>
  (value: T) =>
    args.reverse().reduce((prev, curr) => curr(prev), value)

export default compose
