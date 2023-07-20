export default function generateId() {
  let date = Date.now();
  let random = Math.random().toString(36).substr(2);
  return date + random;
}
