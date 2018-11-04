export const SE = 'SE'
export const NW = 'NW'
export const NE = 'NE'
export const SW = 'SW'

export function toAngle (dir) {
  return {
    SE: 0,
    SW: 1,
    NW: 2,
    NE: 3
  }[dir] * Math.PI / 2
}
