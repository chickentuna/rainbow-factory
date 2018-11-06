import { toEven } from '../utils.js'

/* global obelisk */

export function drawHouse (cube, scale, colorPattern, view, rotation = 0) {
  // entrance width and height in %
  const w = 0.5
  const h = 0.5

  // bases is entrance facing SE, no rotation
  const composition = [
    {
      primitive: 'cube',
      pos: { x: 0, y: 0, z: 0 },
      size: { x: 1, y: 0.5 - w / 2, z: 1 }
    },
    {
      primitive: 'cube',
      pos: { x: 0, y: 0.5 - w / 2, z: h },
      size: { x: 1, y: 0.5 + w / 2, z: 1 - h }
    },
    {
      primitive: 'cube',
      pos: { x: 0, y: 0.5 + w / 2, z: 0 },
      size: { x: 1, y: 0.5 - w / 2, z: 1 }
    }

  ]

  let origin
  for (let piece of composition) {
    if (piece.primitive === 'cube') {
      let dimension = new obelisk.CubeDimension(
        toEven(Math.round(piece.size.x * scale)),
        toEven(Math.round(piece.size.y * scale)),
        toEven(Math.round(piece.size.z * scale))
      )
      let border = 1
      let color = new obelisk.CubeColor().getByHorizontalColor(colorPattern)
      let p3d = new obelisk.Point3D(
        Math.round((cube.x + piece.pos.x) * (scale - 2)),
        Math.round((piece.pos.y + cube.y) * (scale - 2)),
        Math.round((piece.pos.z + cube.z) * (scale - 2)))
      const tile = new obelisk.Cube(dimension, color, border)
      origin = view.renderObject(tile, p3d)
    }
  }

  return origin
}
