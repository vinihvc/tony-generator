export default function firstLowerCase(str: string) {
  const [firstLetter, ...rest] = str.split("");

  return firstLetter.toLowerCase() + rest.join("");
}
