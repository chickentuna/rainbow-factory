import { frontFirst, backFirst } from './utils.js'
import { WIDTH, HEIGHT } from './constants.js'
import { getMousePos } from './mouse.js'
import { initControls } from './editor-controls.js'
import { Cube, Source } from './model/Cube.js'
import * as Direction from './model/directions.js'
import { drawHouse } from './view/house.js'

// TODO: an import for types in model/

/* global requestAnimationFrame window localStorage obelisk $ */

const urlParams = new URLSearchParams(window.location.search)
let scale = +urlParams.get('scale') || 20
let clear = urlParams.has('clear')
let rotation = +urlParams.get('rotation') || 0
let selected = {
  type: 'block',
  color: 0xFF,
  direction: Direction.SE
}

if (clear) {
  delete localStorage.data
}
let prevX = 0; let prevY = 0
let data
if (localStorage.data) {
  data = parse(localStorage.data)
} else {
  data = [new Cube({ x: 0, y: 0, z: 0, building: new Source() })]
}
const origins = {}

let hover = null
let dataSet = {}
let flip = false
let canvasSelector = $('#canvasZone').append('<canvas width="' + WIDTH + '" height="' + HEIGHT + '"></canvas>')
let canvas = canvasSelector.find('canvas')[0]

const CUBE_HEIGHT = scale * 2 - 1
const CUBE_WIDTH = scale * 2 - 2

canvas.addEventListener('contextmenu', (e) => {
  mouseClickRight()
  e.preventDefault()
})
canvas.addEventListener('mousemove', function (evt) {
  let mousePos = getMousePos(canvas, evt)
  mouseMove(mousePos.x, mousePos.y)
}, false)
canvas.addEventListener('click', function (evt) {
  mouseClickLeft()
})

computeDataSet()

function getKey (cube) {
  return cube.x + ' ' + cube.y + ' ' + cube.z
}

function computeDataSet () {
  let max = {}
  let min = {}
  for (let cube of data) {
    for (let key of 'xyz') {
      if (min[key] == null || min[key] > cube[key]) {
        min[key] = cube[key]
      }
      if (max[key] == null || max[key] < cube[key]) {
        max[key] = cube[key]
      }
    }
  }
  for (let key of 'xyz') {
    let move = -Math.floor((max[key] + min[key]) / 2)
    for (let cube of data) {
      cube[key] += move
    }
  }

  dataSet = data.reduce((a, b) => {
    let key = getKey(b)
    return { ...a, [key]: b }
  }, {})
  localStorage.data = JSON.stringify(data)
}

function mouseClickLeft () {
  if (hover) {
    let dx = {
      right: [1, 0, -1, 0],
      left: [0, -1, 0, 1],
      top: [0, 0, 0, 0]
    }[hover.face][rotation]

    let dy = {
      right: [0, 1, 0, -1],
      left: [1, 0, -1, 0],
      top: [0, 0, 0, 0]
    }[hover.face][rotation]
    let dz = {
      right: [0, 0, 0, 0],
      left: [0, 0, 0, 0],
      top: [1, 1, 1, 1]
    }[hover.face][rotation]

    let newCube = new Cube({
      x: hover.cube.x + dx,
      y: hover.cube.y + dy,
      z: hover.cube.z + dz * (flip ? -1 : 1)
    })
    if (selected.type === 'source') {
      newCube.building = new Source(selected.direction, selected.color)
    }

    if (!dataSet[getKey(newCube)]) {
      data.push(newCube)
      data.sort(backFirst)
      computeDataSet()
    } else {
      console.warn('fail')
    }
  }
}

function mouseClickRight () {
  if (hover && data.length > 1) {
    data.splice(data.indexOf(hover.cube), 1)
    computeDataSet()
  }
}

function mouseMove (x = prevX, y = prevY) {
  const touched = []
  const maxHeight = CUBE_HEIGHT * 3 / 4
  const midHeight = CUBE_HEIGHT * 1 / 2

  for (let cube of data) {
    let origin = origins[getKey(cube)]
    if (!origin) {
      continue
    }
    if (y >= origin.y + midHeight && y < origin.y + CUBE_HEIGHT) {
      if (x >= origin.x && x < origin.x + CUBE_WIDTH / 2) {
        touched.push({ face: 'left', cube })
      } else if (x >= origin.x + CUBE_WIDTH / 2 && x < origin.x + CUBE_WIDTH) {
        touched.push({ face: 'right', cube })
      }
    } else if (y >= origin.y + (CUBE_HEIGHT - maxHeight) && y < origin.y + midHeight &&
      x >= origin.x && x < origin.x + CUBE_WIDTH) {
      touched.push({ face: 'top', cube })
    }
  }

  if (touched.length) {
    touched.sort((a, b) => frontFirst(transform(a.cube), transform(b.cube)))
    hover = touched[0]
  } else {
    hover = null
  }
  prevX = x
  prevY = y
}

function transform ({ x, y, z }) {
  let result = { x, y, z }
  if (rotation === 1) {
    result.x = y
    result.y = -x
  } else if (rotation === 2) {
    result.x = -x
    result.y = -y
  } else if (rotation === 3) {
    result.x = -y
    result.y = x
  }
  result.z = flip ? -z : z
  return result
}

function hoveringOver (cube) {
  if (hover) {
    for (let key of 'xyz') {
      if (hover.cube[key] !== cube[key]) {
        return false
      }
    }
    return true
  }
  return false
}

const point = new obelisk.Point(WIDTH / 2, HEIGHT / 2)
const pixelView = new obelisk.PixelView(canvas, point)

function redraw () {
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, canvas.width, canvas.height)

  for (let d of data.sort((a, b) => backFirst(transform(a), transform(b)))) {
    let cube = transform(d)
    let cubeOrigin
    if (d.building && d.building.type === 'source') {
      cubeOrigin = drawHouse(cube,
        scale,
        obelisk.ColorPattern.YELLOW,
        pixelView
      )
    } else {
      let dimension = new obelisk.CubeDimension(scale, scale, scale)
      let color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.BLUE)
      let border = false
      let p3d = new obelisk.Point3D(cube.x * (scale - 2), cube.y * (scale - 2), cube.z * (scale - 2))
      const tile = new obelisk.Cube(dimension, color, border)
      cubeOrigin = pixelView.renderObject(tile, p3d)
    }
    if (hoveringOver(d)) {
      const red = 0xFF0000
      let color = new obelisk.SideColor(red, red)
      let border = false

      if (hover.face === 'right') {
        let dimension = new obelisk.SideYDimension(scale, scale)
        let p3d = new obelisk.Point3D((cube.x + 1) * (scale - 2), cube.y * (scale - 2), cube.z * (scale - 2))
        let face = new obelisk.SideY(dimension, color, border)
        pixelView.renderObject(face, p3d)
      } else if (hover.face === 'left') {
        let dimension = new obelisk.SideXDimension(scale, scale)
        let p3d = new obelisk.Point3D((cube.x) * (scale - 2), (cube.y + 1) * (scale - 2), cube.z * (scale - 2))
        let face = new obelisk.SideX(dimension, color, border)
        pixelView.renderObject(face, p3d)
      } else {
        let dimension = new obelisk.BrickDimension(scale, scale)
        let p3d = new obelisk.Point3D(cube.x * (scale - 2), cube.y * (scale - 2), (cube.z + 1) * (scale - 2) + 2)
        let face = new obelisk.Brick(dimension, color, border)
        pixelView.renderObject(face, p3d)
      }
    }
    origins[getKey(d)] = cubeOrigin

    mouseMove()
  }
}

function animate () {
  redraw()
  // app.render()
  setTimeout(() => requestAnimationFrame(animate), 30)
}
requestAnimationFrame(animate)

export function parse (json) {
  const result = []
  let array = JSON.parse(json)
  for (let cube of array) {
    result.push(new Cube(cube))
  }
  return result
}

export function getData () {
  return data
}
export function getRotation () {
  return rotation
}
export function setRotation (value) {
  rotation = value
}
export function setData (value) {
  data = value
  computeDataSet()
}
export function toggleFlip () {
  flip = !flip
}
export function setFlip (value) {
  flip = value
}
export function setType (type) {
  selected.type = type
}
export function setDirection (direction) {
  selected.direction = direction
}
export function setColor (color) {
  selected.color = color
}

initControls()
