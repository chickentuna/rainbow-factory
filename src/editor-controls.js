import { getData, setData, getRotation, setRotation, toggleFlip, setFlip } from './editor.js'

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
    var result = JSON.parse(e.target.result)
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

export function initControls () {
  const controls = $('#controls')
  controls.append('<button onclick="exportJSON()">Export</button>')
  controls.append('<input type="file" onchange="importJSON()" id="selectFiles" value="Import">')
  controls.append('<button onclick="spinRight()">Spin Right</button>')
  controls.append('<button onclick="spinLeft()">Spin Left</button>')
  controls.append('<button onclick="resetSpin()">Reset</button>')
  controls.append('<button onclick="flip()">Flip</button>')
}