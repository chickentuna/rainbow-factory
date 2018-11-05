// import { Shape, Point, Path, Pyramid, Prism } from '../Isomer.js'

export function House ({ x, y, z }) {
  const shape = new Shape()
  let scale = 0.8
  let w = 0.5
  let h = 0.5
  let p = 1 / 2 - w / 2
  let q = 1 / 2 + w / 2
  let path

  for (let i = 0; i < 2; ++i) {
    path = new Path()
    path.push(Point(0, i, 0))
    path.push(Point(p, i, 0))
    path.push(Point(p, i, h))
    path.push(Point(q, i, h))
    path.push(Point(q, i, 0))
    path.push(Point(1, i, 0))
    path.push(Point(1, i, 1))
    path.push(Point(0, i, 1))
    shape.push(i ? path.reverse() : path)

    path = new Path()
    path.push(Point(i, 0, 1))
    path.push(Point(i, 1, 1))
    path.push(Point(i, 1, 0))
    path.push(Point(i, 0, 0))
    shape.push(path)

    path = new Path()
    path.push(Point(i ? p : q, 0, h))
    path.push(Point(i ? p : q, 1, h))
    path.push(Point(i ? p : q, 1, 0))
    path.push(Point(i ? p : q, 0, 0))
    shape.push(path)
  }

  path = new Path()
  path.push(Point(p, 0, h))
  path.push(Point(q, 0, h))
  path.push(Point(q, 1, h))
  path.push(Point(p, 1, h))
  shape.push(path)

  path = new Path()
  path.push(Point(1, 0, 1))
  path.push(Point(1, 1, 1))
  path.push(Point(0, 1, 1))
  path.push(Point(0, 0, 1))
  shape.push(path)

  return shape.scale(Point(0.5, 0.5, 0), scale, scale, scale).translate(x, y, z)
}
