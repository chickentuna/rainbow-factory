
/**
 * Gets the percentage position in [a;b] of number v
 */
export function unlerp (a, b, v) {
  return (v - a) / (b - a)
}

export function lerp (a, b, u) {
  return a + (b - a) * u
}

export function frontFirst (a, b) {
  let diff = b.x - a.x
  if (diff === 0) {
    diff = b.y - a.y
  }
  if (diff === 0) {
    diff = b.z - a.z
  }
  return diff
}

export function backFirst (a, b) {
  return frontFirst(b, a)
}

export function toEven (a) {
  return (a % 2) ? a + 1 : a
}
