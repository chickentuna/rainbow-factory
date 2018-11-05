
/**
 * Gets the percentage position in [a;b] of number v
 */
export function unlerp (a, b, v) {
  return (v - a) / (b - a)
}

export function lerp (a, b, u) {
  return a + (b - a) * u
}

export function frontFirst (b, a) {
  let diff = a.x - b.x
  if (diff === 0) {
    diff = a.y - b.y
  }
  if (diff === 0) {
    diff = a.z - b.z
  }
  return diff
}

export function backFirst (b, a) {
  return frontFirst(a, b)
}
