
/**
 * Gets the percentage position in [a;b] of number v
 */
export function unlerp(a, b, v) {
	return (v - a) / (b - a);
}

export function lerp(a, b, u) {
	return a + (b - a) * u;
}
