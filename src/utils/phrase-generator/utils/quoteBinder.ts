const quoteBinder = (author: string) => (quote: string) =>
  `"${quote}" - ${author}`;

export default quoteBinder;
