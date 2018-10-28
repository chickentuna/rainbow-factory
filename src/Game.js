import { WIDTH, HEIGHT } from './constants.js'
const paddingBottom = 0

export class Map {
    constructor() {

    }
}

export class Game {
    constructor(layer) {
        var Point = Isomer.Point;
        var Shape = Isomer.Shape;
        var Prism = Shape.Prism;
        var Color = Isomer.Color;
        var canvasElem = $('#background-buffer')
        canvasElem.attr('width', WIDTH)
        canvasElem.attr('height', HEIGHT)
        var canvas = canvasElem[0]

        var iso = new Isomer(canvas, {
            scale: 20
        });

        var red = new Color(160, 60, 50);
        var blue = new Color(50, 60, 160);

        iso.add(Prism(Point.ORIGIN, 3, 3, 1), red);
        iso.add(Prism(Point(2, 2, 1)), red);
        iso.add(Prism(Point(2, 2, 2)), blue);

        var sprite = new PIXI.Sprite(PIXI.Texture.fromCanvas(canvas));
        sprite.scale.set(1)
        sprite.anchor.set(0.5, 1)
        sprite.position.set(WIDTH / 2, HEIGHT)
        layer.addChild(sprite);

        var g = new PIXI.Graphics();
        const lineLength = 50
        g.lineStyle(2, 0, 1)
        g.moveTo(WIDTH / 2, (HEIGHT - paddingBottom))
        g.lineTo(WIDTH / 2 + lineLength, (HEIGHT - paddingBottom) - lineLength / 2)
        g.moveTo(WIDTH / 2, (HEIGHT - paddingBottom))
        g.lineTo(WIDTH / 2 - lineLength, (HEIGHT - paddingBottom) - lineLength / 2)
        layer.addChild(g)

        var axis = ['x', 'y']
        for (let i = 0; i < 2; ++i) {
            var x = new PIXI.Text(axis[i], { textAlign: 'center', fontSize: '12px' })
            x.position.set(WIDTH / 2 + 50 * (i ? -1 : 1), HEIGHT - 20)
            layer.addChild(x)
            x.anchor.set(0.5)
        }
        console.log(sprite.width)
    }
}