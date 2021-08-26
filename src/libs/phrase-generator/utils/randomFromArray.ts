export default function randomFromArray<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}
