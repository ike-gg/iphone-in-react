export default function randomHexColor() {
  const colorValue = Math.floor(Math.random() * 16777215).toString(16);
  return `#${colorValue}`;
}
