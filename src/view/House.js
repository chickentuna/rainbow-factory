import { Shape, Point, Path, Pyramid, Prism } from '../Isomer.js'

export function House (position) {
  const shape = new Shape()
  // const scale = 0.5
  // let pyramid = Pyramid(position)
  //   .scale(Point(position.x + 0.5, position.y + 0.5, position.z), scale, scale, 0.85)
  // shape.paths = pyramid.paths
  let w = 0.5
  let h = 0.5
  let p = 1 / 2 - w / 2
  let q = 1 / 2 + w / 2
  let p1 = Prism(Point(0, 0, 0), p, 1, 1)
  let p2 = Prism(Point(q, 0, 0), p, 1, 1)
  let p3 = Prism(Point(p, 0, h), w, 1, 1 - h)

  shape.paths = [...p1.paths, ...p2.paths, ...p3.paths]

  return shape
}
