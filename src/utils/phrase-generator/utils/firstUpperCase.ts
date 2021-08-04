export default function firstUpperCase(str: string) {
  const [firstLetter, ...rest] = str.split("");

  return firstLetter.toUpperCase() + rest.join("");
}
