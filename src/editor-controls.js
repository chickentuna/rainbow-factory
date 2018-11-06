import { getData, parse, setType, setDirection, setColor, setData,
  getRotation, setRotation, toggleFlip, setFlip } from './editor.js'
import { Cube, Source } from './model/Cube.js'

/* global FileReader $ */

function downloadObjectAsJson (exportObj, exportName) {
  var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj))
  var downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', exportName + '.json')
  document.body.appendChild(downloadAnchorNode) // required for firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}

window.exportJSON = function () {
  downloadObjectAsJson(getData(), 'export')
}
window.importJSON = function () {
  var files = document.getElementById('selectFiles').files

  if (files.length <= 0) {
    return false
  }

  var fr = new FileReader()

  fr.onload = function (e) {
    var result = parse(e.target.result)
    setData(result)
  }

  fr.readAsText(files.item(0))
}
window.spinRight = function () {
  setRotation((getRotation() + 1) % 4)
}
window.resetSpin = function () {
  setRotation(0)
  setFlip(false)
}
window.spinLeft = function () {
  setRotation((4 + getRotation() - 1) % 4)
}
window.flip = function () {
  toggleFlip()
}
window.reset = function () {
  setData(
    [new Cube({ x: 0, y: 0, z: 0, building: new Source() })]
  )
}
window.select = function (type) {
  setType(type)
  $('#selected').text(type)
}

window.setDirection = function (dir) {
  setDirection(dir)
  $('#direction').text(dir)
}
window.setColor = setColor

export function initControls () {
  const controls = $('#controls')
  controls.append('<button onclick="exportJSON()">Export</button>')
  controls.append('<input type="file" onchange="importJSON()" id="selectFiles" value="Import">')
  controls.append('<button onclick="spinRight()">Spin Right</button>')
  controls.append('<button onclick="spinLeft()">Spin Left</button>')
  controls.append('<button onclick="resetSpin()">Reset view</button>')
  controls.append('<button onclick="flip()">Flip</button>')
  controls.append('<button onclick="reset()">Clear</button>')
  controls.append('<br>')
  controls.append('selected:&nbsp;')
  controls.append('<span id="selected">block</span>')
  controls.append('<br>')
  controls.append('<button onclick="select(\'block\')">Block</button>')
  controls.append('<button onclick="select(\'source\')">Source</button>')
  controls.append('<button onclick="select(\'cloud\')">Cloud</button>')
  controls.append('<button onclick="select(\'mixer\')">Mixer</button>')
  controls.append('<button onclick="select(\'wall\')">Wall</button>')
  controls.append('<button onclick="select(\'tunnel\')">Tunnel</button>')
  controls.append('<br>')
  controls.append('direction:&nbsp;')
  controls.append('<span id="direction">SE</span>&nbsp;')
  controls.append('<button onclick="setDirection(\'SE\')">SE</button>')
  controls.append('<button onclick="setDirection(\'NE\')">NE</button>')
  controls.append('<button onclick="setDirection(\'SW\')">SW</button>')
  controls.append('<button onclick="setDirection(\'NW\')">NW</button>')
}
