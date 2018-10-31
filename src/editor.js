import { frontFirst, backFirst } from './utils.js';
import { WIDTH, HEIGHT } from './constants.js';
import { getMousePos } from './mouse.js';

const urlParams = new URLSearchParams(window.location.search);
let scale = urlParams.get('scale')
let clear = urlParams.has('clear')
let rotation = +urlParams.get('rotation') || 0

if (clear) {
	delete localStorage.data
}

let data;
if (localStorage.data) {
	data = JSON.parse(localStorage.data);
} else {
	data = [{ x: 0, y: 0, z: 0 }];
}


let dataSet = {};
computeDataSet();

function computeDataSet() {
	dataSet = data.reduce((a, b) => {
		let key = getKey(b);
		return { ...a, [key]: b }
	}, {});
	localStorage.data = JSON.stringify(data)
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

// TODO: normalize map (1 cube should be 0,0,0)

const constructionMatrix = [
	[-1, 1, 1, -1],
	[-1, -1, 1, 1],
	[1, 1, 1, 1]
];

function mouseClickLeft() {
	if (hover) {
		let dx = {
			right: [0, 1, 1, -1],
			left: [-1, 0, 0, 0],
			top: [0, 0, 0, 0]
		}[hover.face][rotation];
		let dy = {
			right: [-1, 0, 0, 0],
			left: [0, -1, 1, 1],
			top: [0, 0, 0, 0]
		}[hover.face][rotation];
		let dz = {
			right: [0, 0, 0, 0],
			left: [0, 0, 0, 0],
			top: [1, 1, 1, 1]
		}[hover.face][rotation];

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
	const maxHeight = CUBE_HEIGHT * 3 / 4
	const midHeight = CUBE_HEIGHT * 1 / 2

	for (let cube of data) {
		let origin = cube.origin
		if (!origin) {
			continue
		}
		if (y < origin.y && y >= origin.y - midHeight) {
			if (x >= origin.x - CUBE_WIDTH / 2 && x < origin.x) {
				touched.push({ face: 'left', cube })
			} else if (x >= origin.x && x < origin.x + CUBE_WIDTH / 2) {
				touched.push({ face: 'right', cube })
			}
		} else if (y < origin.y - midHeight && y >= origin.y - maxHeight
			&& x >= origin.x - CUBE_WIDTH / 2 && x < origin.x + CUBE_WIDTH / 2) {
			touched.push({ face: 'top', cube })
		}
	}

	if (touched.length) {
		touched.sort((a, b) => frontFirst(transform(a.cube), transform(b.cube)))
		hover = touched[0]
	} else {
		hover = null
	}

}

const iso = new Isomer(canvas, {
	scale: scale || 20,
	originX: WIDTH / 2,
	originY: HEIGHT / 2,
	lightPosition: new Vector(2, -1, 3)
});

const CUBE_HEIGHT = 40 * iso.scale / 20
const CUBE_WIDTH = 36 * iso.scale / 20


function transform({ x, y, z }) {
	if (rotation === 0) {
		return { x, y, z };
	} else if (rotation === 1) {
		return {
			x: y,
			y: -x,
			z: z
		};
	} else if (rotation === 2) {
		return {
			x: -y,
			y: -x,
			z: z
		};
	} else if (rotation === 3) {
		return {
			x: -y,
			y: x,
			z: z
		};
	}
}

function hoveringOver(cube) {
	if (hover) {
		for (let key of 'xyz') {
			if (hover.cube[key] !== cube[key]) {
				return false;
			}
		}
		return true;
	}
	return false;
}

function redraw() {
	const context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);

	for (let d of data.sort((a, b) => backFirst(transform(a), transform(b)))) {
		let cube = transform(d)
		iso.add(Prism(Point(cube.x, cube.y, cube.z)), new Color(120, 120, 120))

		if (hoveringOver(d)) {
			let color = new Color(255, 0, 0);
			let x = cube.x
			let y = cube.y
			let z = cube.z

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

		let cubeOrigin = iso._translatePoint(cube)
		d.origin = cubeOrigin
	}
}

// var app = new PIXI.Application({
// 	width: WIDTH,
// 	height: HEIGHT,
// 	transparent: false,
// 	resolution: 1,
// 	backgroundColor: 0xBAAB88
// });

function animate() {
	redraw()
	// app.render()
	setTimeout(() => requestAnimationFrame(animate), 30)
}
requestAnimationFrame(animate);
