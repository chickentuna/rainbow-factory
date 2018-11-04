import * as Direction from './directions.js'
import { Color } from '../Isomer.js'

export class Cube {
  constructor ({ x, y, z, building = null }) {
    this.x = x
    this.y = y
    this.z = z
    this.building = building
  }

  toString () {
    return `${this.x} ${this.y} ${this.z}`
  }
}

export class Source {
  constructor (direction = Direction.SE, color) {
    this.direction = direction
    this.color = color
    this.type = 'source'
  }
}
