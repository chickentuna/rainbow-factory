import { frontFirst, backFirst } from './utils.js';
import { WIDTH, HEIGHT } from './constants.js';
import { getMousePos } from './mouse.js';

const data = [{ x: 0, y: 0, z: 0 }];
let dataSet = {};
computeDataSet();

function computeDataSet() {
	dataSet = data.reduce((a, b) => {
		let key = getKey(b);
		return { ...a, [key]: b }
	}, {});
	console.log(dataSet)
}
let hover = null;

let canvasSelector = $('#canvasZone').append('<canvas width="' + WIDTH + '" height="' + HEIGHT + '"></canvas>');
const canvas = canvasSelector.find('canvas')[0];
canvas.addEventListener('contextmenu', (e) => {
	mouseClickRight();
	e.preventDefault();
});
canvas.addEventListener('mousemove', function (evt) {
	let mousePos = getMousePos(canvas, evt);
	mouseMove(mousePos.x, mousePos.y);
}, false);
canvas.addEventListener('click', function (evt) {
	mouseClickLeft();
})

function getKey(cube) {
	return cube.x + ' ' + cube.y + ' ' + cube.z;
}

const Point = Isomer.Point;
const Shape = Isomer.Shape
const Path = Isomer.Path;
const Prism = Shape.Prism;
const Color = Isomer.Color;
const Vector = Isomer.Vector;

function mouseClickLeft() {
	if (hover) {
		let dx = 0
		let dy = 0
		let dz = 0
		if (hover.face === 'right') {
			dy = -1
		} else if (hover.face === 'left') {
			dx = -1
		} else {
			dz = 1
		}
		let newCube = {
			x: hover.cube.x + dx,
			y: hover.cube.y + dy,
			z: hover.cube.z + dz
		};

		if (!dataSet[getKey(newCube)]) {
			data.push(newCube);
			data.sort(backFirst);
			computeDataSet();
		} else {
			console.warn('fail');
		}
	}
}

function mouseClickRight() {
	if (hover && data.length > 1) {
		data.splice(data.indexOf(hover.cube), 1);
		computeDataSet();
	}
}

function mouseMove(x, y) {
	const touched = []
	for (let cube of data) {
		let origin = cube.origin
		if (!origin) {
			continue
		}
		if (y < origin.y && y >= origin.y - CUBE_HEIGHT / 2) {
			if (x >= origin.x - CUBE_WIDTH / 2 && x < origin.x) {
				touched.push({ face: 'left', cube })
			} else if (x >= origin.x && x < origin.x + CUBE_WIDTH / 2) {
				touched.push({ face: 'right', cube })
			}
		} else if (y < origin.y - CUBE_HEIGHT / 2 && y >= origin.y - CUBE_HEIGHT
			&& x >= origin.x - CUBE_WIDTH / 2 && x < origin.x + CUBE_WIDTH / 2) {
			touched.push({ face: 'top', cube })
		}
	}

	if (touched.length) {
		touched.sort((a, b) => frontFirst(a.cube, b.cube))
		hover = touched[0]
	} else {
		hover = null
	}

}

const iso = new Isomer(canvas, {
	scale: 20,
	originX: WIDTH / 2,
	originY: HEIGHT / 2,
	lightPosition: new Vector(2, -1, 3)
});

const CUBE_HEIGHT = 40 * iso.scale / 20
const CUBE_WIDTH = 36 * iso.scale / 20

function redraw() {
	const context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);

	for (let d of data) {
		iso.add(Prism(Point(d.x, d.y, d.z)), new Color(120, 120, 120))

		if (d === (hover && hover.cube)) {
			let color = new Color(255, 0, 0);
			let x = hover.cube.x
			let y = hover.cube.y
			let z = hover.cube.z

			if (hover.face === 'right') {
				iso.add(new Path([
					Point(x + 0, y + 0, z + 0),
					Point(x + 1, y + 0, z + 0),
					Point(x + 1, y + 0, z + 1),
					Point(x + 0, y + 0, z + 1)
				]), color);
			} else if (hover.face === 'left') {
				iso.add(new Path([
					Point(x + 0, y + 0, z + 0),
					Point(x + 0, y + 1, z + 0),
					Point(x + 0, y + 1, z + 1),
					Point(x + 0, y + 0, z + 1)
				]), color);
			} else {
				iso.add(new Path([
					Point(x + 0, y + 0, z + 1),
					Point(x + 1, y + 0, z + 1),
					Point(x + 1, y + 1, z + 1),
					Point(x + 0, y + 1, z + 1)
				]), color);
			}
		}

		let cubeOrigin = iso._translatePoint(d)
		d.origin = cubeOrigin
	}
}

function animate() {
	redraw()
	setTimeout(() => requestAnimationFrame(animate), 30)
}
requestAnimationFrame(animate);