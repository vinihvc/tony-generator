const compose = (...args: any[]) => (value: string) =>
  args.reverse().reduce((prev, curr) => curr(prev), value);

export default compose;
