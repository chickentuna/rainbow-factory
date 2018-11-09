import { CUBE_SIZE } from '../constants.js'
import { backFirst } from '../utils.js'
/* global obelisk */

export function drawHouse ({ cube, colorPattern, view, rotation = 0 }) {
  let direction = cube.building.direction

  // basis is entrance facing SE, no rotation
  const composition = [
    {
      primitive: 'cube',
      pos: { x: 0, y: 0, z: 0 },
      size: { x: CUBE_SIZE, y: 12, z: CUBE_SIZE }
    },
    {
      primitive: 'cube',
      pos: { x: 0, y: 10, z: 24 },
      size: { x: CUBE_SIZE, y: 36, z: CUBE_SIZE - 24 }
    },
    {
      primitive: 'cube',
      pos: { x: 0, y: 34, z: 0 },
      size: { x: CUBE_SIZE, y: 14, z: CUBE_SIZE }
    }
  ]

  let origin
  for (let piece of composition.sort((a, b) => backFirst(a.pos, b.pos))) {
    if (piece.primitive === 'cube') {
      let dimension = new obelisk.CubeDimension(
        piece.size.x,
        piece.size.y,
        piece.size.z
      )
      let border = false
      let color = new obelisk.CubeColor().getByHorizontalColor(colorPattern)

      let x = piece.pos.x
      let y = piece.pos.y
      let z = piece.pos.z

      const snap = 2

      let p3d = new obelisk.Point3D(
        Math.round(x + (cube.x) * (CUBE_SIZE - snap)),
        Math.round(y + (cube.y) * (CUBE_SIZE - snap)),
        Math.round(z + (cube.z) * (CUBE_SIZE)))

      const tile = new obelisk.Cube(dimension, color, border)
      origin = view.renderObject(tile, p3d) // TODO calculate a la mano
    }
  }

  return origin
}
