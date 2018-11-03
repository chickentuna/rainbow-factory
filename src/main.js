// import { Game } from './Game.js'
import { WIDTH, HEIGHT } from './constants.js'

/* global requestAnimationFrame PIXI */

var app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xBAAB88
})
app.view.addEventListener('contextmenu', (e) => { e.preventDefault() })

document.getElementById('canvasZone').appendChild(app.view)

function initTextures () {
}
initTextures()

var layer = new PIXI.Container()
// var game = new Game(layer)
app.stage.addChild(layer)
// var time = Date.now()

function animate () {
//   let delta = Date.now() - time
//   time = Date.now()

  app.render()
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
