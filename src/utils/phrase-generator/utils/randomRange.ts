export default function randomRange(min: number = 0, max: number = 1) {
  return Math.random() * (max - min) + min;
}
