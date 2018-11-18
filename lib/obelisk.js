(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor, p;

AbstractColor = function () {
    this.initialize();
};
p = AbstractColor.prototype;

// public properties
/**
 * The inner colors for elements of certain primitive
 */
p.inner = null;

/**
 * The border colors for elements of certain primitive
 */
p.border = null;

/**
 * The borderHighlight colors for elements of certain primitive
 */
p.borderHighlight = null;

/**
 * The left side colors for elements of certain primitive
 */
p.left = null;

/**
 * The right side colors for elements of certain primitive
 */
p.right = null;

/**
 * The horizontal colors for elements of certain primitive
 */
p.horizontal = null;

/**
 * The left slot side colors for elements of certain primitive
 */
p.leftSlope = null;

/**
 * The right slot side colors for elements of certain primitive
 */
p.rightSlope = null;

// constructor
p.initialize = function () {
    return this;
};

// public methods
p.toString = function () {
    return '[AbstractColor]';
};

module.exports = AbstractColor;

},{}],2:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var CubeColor, p;
CubeColor = function (border, borderHighlight, left, right, horizontal) {
    this.initialize(border, borderHighlight, left, right, horizontal);
};
p = CubeColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right, horizontal) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xE3E3E3 : right);
    this.horizontal = ColorGeom.get32(horizontal === undefined ? 0xEEEFF0 : horizontal);

    return this;
};

// public methods
p.getByHorizontalColor = function (horizontal) {
    return new CubeColor(
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(horizontal, 0, true),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
        horizontal
    );
};

p.toString = function () {
    return '[CubeColor]';
};

module.exports = CubeColor;

},{"../utils/ColorGeom":39,"./AbstractColor":1}],3:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var LineColor, p;
LineColor = function (border, inner) {
    this.initialize(border, inner);
};
p = LineColor.prototype = new AbstractColor();

// public properties

// constructor
p.initialize = function (border) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);

    return this;
};

p.toString = function () {
    return '[LineColor]';
};

module.exports = LineColor;

},{"../utils/ColorGeom":39,"./AbstractColor":1}],4:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var PyramidColor, p;
PyramidColor = function (border, borderHighlight, left, right) {
    this.initialize(border, borderHighlight, left, right);
};
p = PyramidColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right) {
    this.border = ColorGeom.get32(border === undefined ? 0x949698 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xE6E8E9 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xEEEFF0 : right);

    return this;
};

// public methods
p.getByRightColor = function (right) {
    return new PyramidColor(
        ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(right, 0, true),
        ColorGeom.applyBrightness(right, this.BRIGHTNESS_GAIN),
        right
    );
};

p.toString = function () {
    return '[PyramidColor]';
};

module.exports = PyramidColor;

},{"../utils/ColorGeom":39,"./AbstractColor":1}],5:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var SideColor, p;
SideColor = function (border, inner) {
    this.initialize(border, inner);
};
p = SideColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, inner) {
    this.border = ColorGeom.get32(border === undefined ? 0x878787 : border);
    this.inner = ColorGeom.get32(inner === undefined ? 0xEEEEEE : inner);

    return this;
};

// public methods
p.getByInnerColor = function (inner) {
    return new SideColor(
        ColorGeom.applyBrightness(inner, this.BRIGHTNESS_GAIN * 4),
        inner
    );
};

p.toString = function () {
    return '[SideColor]';
};

module.exports = SideColor;

},{"../utils/ColorGeom":39,"./AbstractColor":1}],6:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractColor = require('./AbstractColor');
var ColorGeom = require('../utils/ColorGeom');

var SlopeColor, p;
SlopeColor = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
    this.initialize(border, borderHighlight, left, right, leftSlope, rightSlope);
};
p = SlopeColor.prototype = new AbstractColor();

// public properties
p.BRIGHTNESS_GAIN = -20;

// constructor
p.initialize = function (border, borderHighlight, left, right, leftSlope, rightSlope) {
    this.border = ColorGeom.get32(border === undefined ? 0x949698 : border);
    this.borderHighlight = ColorGeom.get32(borderHighlight === undefined ? 0xFFFFFF : borderHighlight);
    this.left = ColorGeom.get32(left === undefined ? 0xC9CFD0 : left);
    this.right = ColorGeom.get32(right === undefined ? 0xE6E8E9 : right);
    this.leftSlope = ColorGeom.get32(leftSlope === undefined ? 0xDBDBDB : leftSlope);
    this.rightSlope = ColorGeom.get32(rightSlope === undefined ? 0xDBDBDB : rightSlope);

    return this;
};

// public methods

/*
 * horizontal side doesn't actually exist in the Slope primitive
 * you can assign the same horizontal color as cube
 * so that you will be able to arrange the slope with cube
 */
p.getByHorizontalColor = function (horizontal) {
    return new SlopeColor(
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 4),
        //apply hightlight
        ColorGeom.applyBrightness(horizontal, 0, true),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 2),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 1.5),
        ColorGeom.applyBrightness(horizontal, this.BRIGHTNESS_GAIN * 0.5)
    );
};

p.toString = function () {
    return '[SlopeColor]';
};

module.exports = SlopeColor;

},{"../utils/ColorGeom":39,"./AbstractColor":1}],7:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension, p;
AbstractDimension = function () {
    this.initialize();
};
p = AbstractDimension.prototype;

// public properties
/**
 * The x Axis dimensions in 22.6 degrees coordinate
 */
p.xAxis = null;

/**
 * The y Axis dimensions in 22.6 degrees coordinate
 */
p.yAxis = null;

/**
 * The z Axis dimensions in 22.6 degrees coordinate
 */
p.zAxis = null;

/**
 * Pyramid tall mode
 */
p.tall = false;

// constructor
p.initialize = function () {
    return this;
};

// public methods
p.toString = function () {
    return '[AbstractDimension]';
};

module.exports = AbstractDimension;

},{}],8:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var BrickDimension, p;
BrickDimension = function (xAxis, yAxis) {
    this.initialize(xAxis, yAxis);
};
p = BrickDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis, yAxis) {
    this.xAxis = xAxis || 30;
    this.yAxis = yAxis || 30;

    if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
        throw new Error('x,yAxis must be even number');
    }

    // xAxis || yAxis = 4 floodFill could not be applied
    if (this.xAxis <= 4 || this.yAxis <= 4) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[BrickDimension]';
};

module.exports = BrickDimension;

},{"./AbstractDimension":7}],9:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var CubeDimension, p;
CubeDimension = function (xAxis, yAxis, zAxis) {
    this.initialize(xAxis, yAxis, zAxis);
};
p = CubeDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis, yAxis, zAxis) {
    this.xAxis = xAxis || 30;
    this.yAxis = yAxis || 30;
    this.zAxis = zAxis || 30;

    if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
        throw new Error('x,yAxis must be even number');
    }

    // xAxis || yAxis = 4 floodFill could not be applied
    if (this.xAxis <= 4 || this.yAxis <= 4 || this.zAxis <= 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[CubeDimension]';
};

module.exports = CubeDimension;

},{"./AbstractDimension":7}],10:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var LineXDimension, p;
LineXDimension = function (axis) {
    this.initialize(axis);
};
p = LineXDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis) {
    this.xAxis = xAxis || 30;

    if (this.xAxis % 2 === 1) {
        throw new Error('xAxis must be even number');
    }

    if (this.xAxis < 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[LineXDimension]';
};

module.exports = LineXDimension;

},{"./AbstractDimension":7}],11:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var LineYDimension, p;
LineYDimension = function (axis) {
    this.initialize(axis);
};
p = LineYDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (yAxis) {
    this.yAxis = yAxis || 30;

    if (this.yAxis % 2 === 1) {
        throw new Error('yAxis must be even number');
    }

    if (this.yAxis < 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[LineYDimension]';
};

module.exports = LineYDimension;

},{"./AbstractDimension":7}],12:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var LineZDimension, p;
LineZDimension = function (axis) {
    this.initialize(axis);
};
p = LineZDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (zAxis) {
    this.zAxis = zAxis || 30;

    if (this.zAxis <= 0) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[LineZDimension]';
};

module.exports = LineZDimension;

},{"./AbstractDimension":7}],13:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var PyramidDimension, p;
PyramidDimension = function (axis, tall) {
    this.initialize(axis, tall);
};
p = PyramidDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (axis, tall) {
    this.xAxis = axis || 30;
    this.yAxis = axis || 30;
    this.tall = tall || false;

    if (this.xAxis % 2 === 1) {
        throw new Error('axis must be even number');
    }

    if (this.xAxis <= 4) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[PyramidDimension]';
};

module.exports = PyramidDimension;

},{"./AbstractDimension":7}],14:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SideXDimension, p;
SideXDimension = function (xAxis, zAxis) {
    this.initialize(xAxis, zAxis);
};
p = SideXDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis, zAxis) {
    this.xAxis = xAxis || 30;
    this.zAxis = zAxis || 30;

    if (this.xAxis % 2 === 1) {
        throw new Error('xAxis must be even number');
    }

    // xAxis || zAxis = 4 floodFill could not be applied
    if (this.xAxis <= 4 || this.zAxis <= 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[SideXDimension]';
};

module.exports = SideXDimension;

},{"./AbstractDimension":7}],15:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SideYDimension, p;

SideYDimension = function (yAxis, zAxis) {
    this.initialize(yAxis, zAxis);
};
p = SideYDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (yAxis, zAxis) {
    this.yAxis = yAxis || 30;
    this.zAxis = zAxis || 30;

    if (this.yAxis % 2 === 1) {
        throw new Error('yAxis must be even number');
    }

    // yAxis || zAxis = 4 floodFill could not be applied
    if (this.yAxis <= 4 || this.zAxis <= 2) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[SideYDimension]';
};

module.exports = SideYDimension;

},{"./AbstractDimension":7}],16:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractDimension = require('./AbstractDimension');

var SlopeDimension, p;
SlopeDimension = function (xAxis, yAxis) {
    this.initialize(xAxis, yAxis);
};
p = SlopeDimension.prototype = new AbstractDimension();

// constructor
p.initialize = function (xAxis, yAxis) {
    this.xAxis = xAxis || 30;
    this.yAxis = yAxis || 30;

    if (this.xAxis % 2 === 1 || this.yAxis % 2 === 1) {
        throw new Error('xAxis and yAxis must be even number');
    }

    if (this.xAxis <= 4 || this.yAxis <= 4) {
        throw new Error('dimension is too small');
    }

    return this;
};

p.toString = function () {
    return '[SlopeDimension]';
};

module.exports = SlopeDimension;

},{"./AbstractDimension":7}],17:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var CanvasManager = require('../utils/CanvasManager');

var BitmapData, p;
BitmapData = function (w, h, useDefaultCanvas) {
    this.initialize(w, h, useDefaultCanvas);
};
p = BitmapData.prototype;

// public property
p.imageData = null;
p.canvas = null;
p.context = null;

// constructor
p.initialize = function (w, h, useDefaultCanvas) {
    if (w === undefined || h === undefined) {
        throw new Error('BitmapData width or height is missing');
    }

    if (useDefaultCanvas) {
        this.canvas = CanvasManager.getDefaultCanvas();
    } else {
        this.canvas = CanvasManager.getNewCanvas();
    }

    this.canvas.setAttribute('width', w);
    this.canvas.setAttribute('height', h);

    this.context = this.canvas.getContext('2d');
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.mozImageSmoothingEnabled = false;
    this.context.msImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;

    this.imageData = this.context.createImageData(w, h);

    return this;
};

p.setPixel = function (posX, posY, color) {
    var index = (posY * this.imageData.width + posX) * 4;
    this.setPixelByIndex(index, color);
};

p.setPixelByIndex = function (index, color) {
    var pixels = this.imageData.data;

    pixels[index] = (color >>> 16) & 0xFF;
    pixels[index + 1] = (color >>> 8) & 0xFF;
    pixels[index + 2] = (color >>> 0) & 0xFF;
    pixels[index + 3] = (color >>> 24) & 0xFF;
};

p.checkPixelAvailable = function (x, y) {
    var index = (y * this.imageData.width + x) * 4;

    return this.imageData.data[index + 3] === 0;
};

p.floodFill = function (posX, posY, color) {
    if (((color >>> 24) & 0xFF) === 0x00) {
        // transparent flood fill
        return;
    }

    var x = posX, y = posY,
        stack = [],
        nowCol = [],
        prevCol = [],
        col, row, matchFlag, newStart,
        w = this.imageData.width,
        h = this.imageData.height,
        i, j;

    // bound reach
    if (x < 0 || y < 0 || x >= w || y >= h) {
        return;
    }

    // first point check fail
    if (!this.checkPixelAvailable(x, y)) {
        throw new Error('Start point for flood fill is already filled');
    }

    // left side flood fill
    for (col = x; col >= 0; col -= 1) {
        // top side
        for (row = y; row >= 0; row -= 1) {
            if (this.checkPixelAvailable(col, row)) {
                // available pixel
                stack.push((row * w + col) * 4);
                nowCol.push(row);
            } else {
                // first one is invalid pixel && not at col top
                if (row === y && this.checkPixelAvailable(col + 1, row - 1)) {
                    // next one is valid
                    if (this.checkPixelAvailable(col, row - 1)) {
                        newStart = row - 1;
                    } else {
                        if (this.checkPixelAvailable(col + 1, row - 2)) {
                            newStart = row - 2;
                        } else {
                            // fail, assign max value to avoid loop below
                            newStart = -1;
                        }
                    }

                    for (row = newStart; row >= 0; row -= 1) {
                        if (this.checkPixelAvailable(col, row)) {
                            // available pixel
                            stack.push((row * w + col) * 4);
                            nowCol.push(row);
                        } else {
                            break;
                        }
                    }
                }

                break;
            }
        }


        // bottom side
        for (row = y; row < h; row += 1) {
            if (this.checkPixelAvailable(col, row)) {
                // available pixel
                stack.push((row * w + col) * 4);
                nowCol.push(row);
            } else {
                // first one is invalid pixel && not at col bottom
                if (row === y && this.checkPixelAvailable(col + 1, row + 1)) {

                    // next one is valid
                    if (this.checkPixelAvailable(col, row + 1)) {
                        newStart = row + 1;
                    } else {
                        if (this.checkPixelAvailable(col + 1, row + 2)) {
                            newStart = row + 2;
                        } else {
                            // fail, assign max value to avoid loop below
                            newStart = h;
                        }
                    }

                    for (row = newStart; row < h; row += 1) {
                        if (this.checkPixelAvailable(col, row)) {
                            // available pixel
                            stack.push((row * w + col) * 4);
                            nowCol.push(row);
                        } else {
                            break;
                        }
                    }
                }

                break;
            }
        }

        // compare with previous column
        // for first column
        // the given point should be inside the container
        if (col === x) {
            prevCol = nowCol.concat();
        }

        matchFlag = false;

        for (i = 0; i < prevCol.length; i += 1) {
            for (j = 0; j < prevCol.length; j += 1) {
                if (nowCol[j] === prevCol[i]) {
                    matchFlag = true;
                    y = prevCol[i];
                    break;
                }
            }

            if (matchFlag) {
                break;
            }
        }

        if (matchFlag) {
            prevCol = nowCol.concat();
            nowCol = [];
        } else {
            // bound reach
            break;
        }
    }

    // reset start point
    x = posX;
    y = posY;
    prevCol = [];
    nowCol = [];

    // right side flood fill
    for (col = x; col < w; col += 1) {

        // top side
        for (row = y; row >= 0; row -= 1) {
            if (this.checkPixelAvailable(col, row)) {
                // available pixel
                stack.push((row * w + col) * 4);
                nowCol.push(row);
            } else {
                // first one is invalid pixel && not at col top
                if (row === y && this.checkPixelAvailable(col - 1, row - 1)) {
                    // next one is valid
                    if (this.checkPixelAvailable(col, row - 1)) {
                        newStart = row - 1;
                    } else {
                        if (this.checkPixelAvailable(col - 1, row - 2)) {
                            newStart = row - 2;
                        } else {
                            // fail, assign max value to avoid loop below
                            newStart = -1;
                        }
                    }

                    for (row = newStart; row >= 0; row -= 1) {
                        if (this.checkPixelAvailable(col, row)) {
                            // available pixel
                            stack.push((row * w + col) * 4);
                            nowCol.push(row);
                        } else {
                            break;
                        }
                    }
                }

                break;
            }
        }

        // bottom side
        for (row = y; row < h; row += 1) {
            if (this.checkPixelAvailable(col, row)) {
                // available pixel
                stack.push((row * w + col) * 4);
                nowCol.push(row);
            } else {
                // first one is invalid pixel && not at col bottom
                if (row === y && this.checkPixelAvailable(col - 1, row + 1)) {

                    // next one is valid
                    if (this.checkPixelAvailable(col, row + 1)) {
                        newStart = row + 1;
                    } else {
                        if (this.checkPixelAvailable(col - 1, row + 2)) {
                            newStart = row + 2;
                        } else {
                            // fail, assign max value to avoid loop below
                            newStart = h;
                        }
                    }

                    for (row = newStart; row < h; row += 1) {
                        if (this.checkPixelAvailable(col, row)) {
                            // available pixel
                            stack.push((row * w + col) * 4);
                            nowCol.push(row);
                        } else {
                            break;
                        }
                    }
                }

                break;
            }
        }

        // compare with previous column
        // for first column
        // the given point should be inside the container
        if (col === x) {
            prevCol = nowCol.concat();
        }

        matchFlag = false;

        for (i = 0; i < prevCol.length; i += 1) {
            for (j = 0; j < prevCol.length; j += 1) {
                if (nowCol[j] === prevCol[i]) {
                    matchFlag = true;
                    y = prevCol[i];
                    break;
                }
            }

            if (matchFlag) {
                break;
            }
        }

        if (matchFlag) {
            prevCol = nowCol.concat();
            nowCol = [];
        } else {
            // bound reach
            break;
        }
    }

    // fill image data
    for (i = 0; i < stack.length; i += 1) {
        this.setPixelByIndex(stack[i], color);
    }
};

p.toString = function () {
    return '[BitmapData]';
};

module.exports = BitmapData;

},{"../utils/CanvasManager":37}],18:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Point3D = require('../geom/Point3D');

var PixelObject, p;
PixelObject = function (primitive, point3D) {
    this.initialize(primitive, point3D);
};
p = PixelObject.prototype;

// public properties
p.x = null;
p.y = null;
p.canvas = null;

// constructor
p.initialize = function (primitive, point3D) {
    if (!primitive) {
        throw new Error('Primitive is not defined');
    }

    var p3D = point3D || new Point3D();

    this.canvas = primitive.canvas;
    this.x = primitive.matrix.tx + p3D.x - p3D.y;
    this.y = primitive.matrix.ty + Math.floor(p3D.x / 2 + p3D.y / 2) - p3D.z;

    return this;
};

// public methods

p.toString = function () {
    return '[PixelObject]';
};

// private methods

module.exports = PixelObject;

},{"../geom/Point3D":22}],19:[function(require,module,exports){
/*jslint node: true*/
/*global jQuery:true*/

'use strict';

var Point = require('../geom/Point');
var PixelObject = require('../display/PixelObject');

var PixelView, p;
PixelView = function (canvas, point) {
    this.initialize(canvas, point);
};
p = PixelView.prototype;

// public properties
p.canvas = null;
p.context = null;
p.point = null;

// constructor
p.initialize = function (canvas, point) {
    if (!canvas) {
        throw new Error('Canvas is not defined');
    }

    try {
        if (canvas instanceof jQuery) {
            canvas = canvas.get(0);
        }
    } catch (ignore) {
    }

    this.canvas = canvas;

    this.context = this.canvas.getContext('2d');
    this.context.mozImageSmoothingEnabled = false;
    this.context.msImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;

    this.point = point || new Point(0, 0);

    return this;
};

// public methods
p.renderObject = function (primitive, point3D) {
    var po = new PixelObject(primitive, point3D);
    this.context.drawImage(po.canvas, this.point.x + po.x, this.point.y + po.y);
    return new Point(this.point.x + po.x,  this.point.y + po.y)
};

p.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

p.toString = function () {
    return '[PixelView]';
};

module.exports = PixelView;

},{"../display/PixelObject":18,"../geom/Point":21}],20:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Matrix, p;
Matrix = function (a, b, c, d, tx, ty) {
    this.initialize(a, b, c, d, tx, ty);
};
p = Matrix.prototype;

// public properties:
/**
 * Position (0, 0) in a 3x3 matrix.
 * @property a
 * @type Number
 **/
p.a = 1;

/**
 * Position (0, 1) in a 3x3 matrix.
 * @property b
 * @type Number
 **/
p.b = 0;

/**
 * Position (1, 0) in a 3x3 matrix.
 * @property c
 * @type Number
 **/
p.c = 0;

/**
 * Position (1, 1) in a 3x3 matrix.
 * @property d
 * @type Number
 **/
p.d = 1;

/**
 * Position (2, 0) in a 3x3 matrix.
 * @property tx
 * @type Number
 **/
p.tx = 0;

/**
 * Position (2, 1) in a 3x3 matrix.
 * @property ty
 * @type Number
 **/
p.ty = 0;

// constructor
p.initialize = function (a, b, c, d, tx, ty) {
    this.a = (a === undefined) ? 1 : a;
    this.b = b || 0;
    this.c = c || 0;
    this.d = (d === undefined) ? 1 : d;
    this.tx = tx || 0;
    this.ty = ty || 0;

    return this;
};

// public methods
p.toString = function () {
    return '[Matrix]';
};

module.exports = Matrix;

},{}],21:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Point, p;
Point = function (x, y) {
    this.initialize(x, y);
};
p = Point.prototype;

// public properties
p.x = 0;
p.y = 0;

// constructor
p.initialize = function (x, y) {
    this.x = (x === undefined ? 0 : x);
    this.y = (y === undefined ? 0 : y);

    return this;
};

// public methods
p.toString = function () {
    return '[Point x : ' + this.x + ', y : ' + this.y + ']';
};

module.exports = Point;

},{}],22:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var Point = require('./Point');

var Point3D, p;
Point3D = function (x, y, z) {
    this.initialize(x, y, z);
};
p = Point3D.prototype;

// public properties
p.x = 0;
p.y = 0;
p.z = 0;

// constructor
p.initialize = function (x, y, z) {
    this.x = (x === undefined ? 0 : x);
    this.y = (y === undefined ? 0 : y);
    this.z = (z === undefined ? 0 : z);

    return this;
};

// public methods
p.toGlobalCoordinates = function (offset) {
    var p2D = new Point(
        this.x - this.y,
        Math.floor(this.x / 2 + this.y / 2) - this.z
    );

    if (offset !== undefined) {
        p2D.x = p2D.x + offset.x;
        p2D.y = p2D.y + offset.y;
    }

    return p2D;
};

p.toString = function () {
    return '[Point3D x : ' + this.x + ', y : ' + this.y + ', z: ' + this.z + ']';
};

module.exports = Point3D;

},{"./Point":21}],23:[function(require,module,exports){
/*jslint node: true*/
/*global window:true*/

'use strict';

/**
 * @namespace obelisk
 **/
var obelisk = {};

obelisk.Cube = require('./primitives/Cube');
obelisk.Brick = require('./primitives/Brick');
obelisk.Pyramid = require('./primitives/Pyramid');
obelisk.LineX = require('./primitives/LineX');
obelisk.LineY = require('./primitives/LineY');
obelisk.LineZ = require('./primitives/LineZ');
obelisk.SideX = require('./primitives/SideX');
obelisk.SideY = require('./primitives/SideY');
obelisk.SlopeEast = require('./primitives/SlopeEast');
obelisk.SlopeNorth = require('./primitives/SlopeNorth');
obelisk.SlopeSouth = require('./primitives/SlopeSouth');
obelisk.SlopeWest = require('./primitives/SlopeWest');

obelisk.ColorPattern = require('./utils/ColorPattern');
obelisk.ColorGeom = require('./utils/ColorGeom');
obelisk.CanvasManager = require('./utils/CanvasManager');
obelisk.CanvasTool = require('./utils/CanvasTool');

obelisk.Matrix = require('./geom/Matrix');
obelisk.Point = require('./geom/Point');
obelisk.Point3D = require('./geom/Point3D');

obelisk.PixelView = require('./display/PixelView');
obelisk.PixelObject = require('./display/PixelObject');
obelisk.BitmapData = require('./display/BitmapData');

obelisk.BrickDimension = require('./dimensions/BrickDimension');
obelisk.CubeDimension = require('./dimensions/CubeDimension');
obelisk.PyramidDimension = require('./dimensions/PyramidDimension');
obelisk.LineXDimension = require('./dimensions/LineXDimension');
obelisk.LineYDimension = require('./dimensions/LineYDimension');
obelisk.LineZDimension = require('./dimensions/LineZDimension');
obelisk.SideXDimension = require('./dimensions/SideXDimension');
obelisk.SideYDimension = require('./dimensions/SideYDimension');
obelisk.SlopeDimension = require('./dimensions/SlopeDimension');

obelisk.LineColor = require('./colors/LineColor');
obelisk.CubeColor = require('./colors/CubeColor');
obelisk.PyramidColor = require('./colors/PyramidColor');
obelisk.SideColor = require('./colors/SideColor');
obelisk.SlopeColor = require('./colors/SlopeColor');

window.obelisk = obelisk;

module.exports = obelisk;


},{"./colors/CubeColor":2,"./colors/LineColor":3,"./colors/PyramidColor":4,"./colors/SideColor":5,"./colors/SlopeColor":6,"./dimensions/BrickDimension":8,"./dimensions/CubeDimension":9,"./dimensions/LineXDimension":10,"./dimensions/LineYDimension":11,"./dimensions/LineZDimension":12,"./dimensions/PyramidDimension":13,"./dimensions/SideXDimension":14,"./dimensions/SideYDimension":15,"./dimensions/SlopeDimension":16,"./display/BitmapData":17,"./display/PixelObject":18,"./display/PixelView":19,"./geom/Matrix":20,"./geom/Point":21,"./geom/Point3D":22,"./primitives/Brick":25,"./primitives/Cube":26,"./primitives/LineX":27,"./primitives/LineY":28,"./primitives/LineZ":29,"./primitives/Pyramid":30,"./primitives/SideX":31,"./primitives/SideY":32,"./primitives/SlopeEast":33,"./primitives/SlopeNorth":34,"./primitives/SlopeSouth":35,"./primitives/SlopeWest":36,"./utils/CanvasManager":37,"./utils/CanvasTool":38,"./utils/ColorGeom":39,"./utils/ColorPattern":40}],24:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var AbstractPrimitive, p;
AbstractPrimitive = function () {
    this.initialize();
};
p = AbstractPrimitive.prototype;

// public properties
/**
 * the canvas for drawImage to any canvas
 */
p.canvas = null;

// protect properties
/**
 * the width of the bitmap in 2d flash coordinate
 */
p.w = null;

/**
 * the height of the bitmap in 2d flash coordinate
 */
p.h = null;

/**
 * the dimension of primitive in 3d pixel coordinate
 */
p.dimension = null;

/**
 * the color obj of the primitive
 */
p.color = null;

/**
 * the border option of the primitive
 */
p.border = null;

/**
 * the source bitmapdata contains pixel graphic
 */
p.bitmapData = null;

/**
 * the preserve canvas option
 */
p.useDefaultCanvas = null;

/**
 * the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
 */
p.matrix = null;

// constructor
p.initialize = function () {
    return this;
};

// public methods
p.toString = function () {
    return '[AbstractPrimitive]';
};

module.exports = AbstractPrimitive;

},{}],25:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var BrickDimension = require('../dimensions/BrickDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var Brick, p;
Brick = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Brick.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new BrickDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = (this.dimension.xAxis + this.dimension.yAxis) / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 1;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = 0;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;

    xOffsetInner = this.dimension.yAxis - 2;
    yOffsetInner = 0;
    xOffsetOut = this.dimension.xAxis - 1;
    yOffsetOut = this.h - 1;
    borderColor = this.border ? this.color.border : this.color.inner;

    //x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner + Math.floor(i / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut - Math.floor(i / 2), borderColor);
    }

    //y axis
    for (j = 0; j < this.dimension.yAxis; j += 1) {
        this.bitmapData.setPixel(xOffsetInner + 1 - j, yOffsetInner + Math.floor(j / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - 1 + j, yOffsetOut - Math.floor(j / 2), borderColor);
    }

    //fill an pixel graphic enclosed
    this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
};

// public methods
p.toString = function () {
    return '[Brick]';
};

module.exports = Brick;

},{"../colors/SideColor":5,"../dimensions/BrickDimension":8,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],26:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var CubeDimension = require('../dimensions/CubeDimension');
var BrickDimension = require('../dimensions/BrickDimension');
var SideXDimension = require('../dimensions/SideXDimension');
var SideYDimension = require('../dimensions/SideYDimension');
var CubeColor = require('../colors/CubeColor');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var PixelObject = require('../display/PixelObject');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var Brick = require('./Brick');
var SideX = require('./SideX');
var SideY = require('./SideY');

var Cube, p;
Cube = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Cube.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new CubeDimension() : dimension;
    this.color = color === undefined ? new CubeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.zAxis + (this.dimension.xAxis + this.dimension.yAxis) / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 1;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var brick, sideX, sideY, poBrick, poX, poY, ctx, bmd, offsetX, offsetY,
        i, j, k;
    // horizontal layer
    brick = new Brick(
        new BrickDimension(this.dimension.xAxis, this.dimension.yAxis),
        new SideColor(this.color.border, this.color.horizontal),
        this.border
    );

    // left side
    sideX = new SideX(
        new SideXDimension(this.dimension.xAxis, this.dimension.zAxis),
        new SideColor(this.color.border, this.color.left),
        this.border
    );

    // right side
    sideY = new SideY(
        new SideYDimension(this.dimension.yAxis, this.dimension.zAxis),
        new SideColor(this.color.border, this.color.right),
        this.border
    );

    poBrick = new PixelObject(brick);
    poX = new PixelObject(sideX);
    poY = new PixelObject(sideY);

    ctx = this.bitmapData.context;
    ctx.drawImage(poBrick.canvas, poBrick.x + this.dimension.yAxis - 2, poBrick.y);
    ctx.drawImage(poX.canvas, poX.x, poX.y + this.dimension.zAxis + this.dimension.yAxis / 2 - 1);
    ctx.drawImage(poY.canvas, poY.x + this.w - 2, poX.y + this.dimension.zAxis + this.dimension.xAxis / 2 - 1);

    // highlight & highlight fix
    bmd = new BitmapData(this.w, this.h);

    if (this.border) {
        offsetX = this.dimension.xAxis - 2;
        offsetY = (this.dimension.xAxis + this.dimension.yAxis) / 2 - 2;

        //the 2px in bounding without hightlight
        for (i = 0; i < this.dimension.xAxis - 2; i += 1) {
            bmd.setPixel(offsetX + 1 - i, offsetY - Math.floor(i / 2), this.color.borderHighlight);
        }

        //the 2px in bounding without hightlight
        for (j = 0; j < this.dimension.yAxis - 2; j += 1) {
            bmd.setPixel(offsetX + j, offsetY - Math.floor(j / 2), this.color.borderHighlight);
        }

        for (k = 0; k < this.dimension.zAxis; k += 1) {
            bmd.setPixel(offsetX, offsetY + k, this.color.borderHighlight);
        }
    } else {
        for (i = 0; i < this.dimension.zAxis; i += 1) {
            bmd.setPixel(this.dimension.xAxis - 2, (this.dimension.xAxis + this.dimension.yAxis) / 2 - 1 + i, this.color.left);
        }
    }
    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return '[Cube]';
};

module.exports = Cube;

},{"../colors/CubeColor":2,"../colors/SideColor":5,"../dimensions/BrickDimension":8,"../dimensions/CubeDimension":9,"../dimensions/SideXDimension":14,"../dimensions/SideYDimension":15,"../display/BitmapData":17,"../display/PixelObject":18,"../geom/Matrix":20,"./AbstractPrimitive":24,"./Brick":25,"./SideX":31,"./SideY":32}],27:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var LineXDimension = require('../dimensions/LineXDimension');
var LineColor = require('../colors/LineColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var LineX, p;
LineX = function (dimension, color, useDefaultCanvas) {
    this.initialize(dimension, color, useDefaultCanvas);
};
p = LineX.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, useDefaultCanvas) {
    this.initRender(dimension, color, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.dimension = dimension === undefined ? new LineXDimension() : dimension;
    this.color = color === undefined ? new LineColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis;
    this.h = this.dimension.xAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = 0;
    this.matrix.ty = 0;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};

p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetBorder, yOffsetBorder, i, borderColor;

    xOffsetBorder = 0;
    yOffsetBorder = 0;
    borderColor = this.color.border;

    //x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetBorder + i, yOffsetBorder + Math.floor(i / 2), borderColor);
    }
};

// public methods
p.toString = function () {
    return '[LineX]';
};

module.exports = LineX;

},{"../colors/LineColor":3,"../dimensions/LineXDimension":10,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],28:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var LineYDimension = require('../dimensions/LineYDimension');
var LineColor = require('../colors/LineColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var LineY, p;
LineY = function (dimension, color, useDefaultCanvas) {
    this.initialize(dimension, color, useDefaultCanvas);
};
p = LineY.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, useDefaultCanvas) {
    this.initRender(dimension, color, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.dimension = dimension === undefined ? new LineYDimension() : dimension;
    this.color = color === undefined ? new LineColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.yAxis;
    this.h = this.dimension.yAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = 0;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};

p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetBorder, yOffsetBorder, i, borderColor;

    xOffsetBorder = this.dimension.yAxis - 1;
    yOffsetBorder = 0;
    borderColor = this.color.border;

    //y axis
    for (i = 0; i < this.dimension.yAxis; i += 1) {
        console.log(i);
        this.bitmapData.setPixel(xOffsetBorder - i, yOffsetBorder + Math.floor(i / 2), borderColor);
    }
};

// public methods
p.toString = function () {
    return '[LineY]';
};

module.exports = LineY;

},{"../colors/LineColor":3,"../dimensions/LineYDimension":11,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],29:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var LineZDimension = require('../dimensions/LineZDimension');
var LineColor = require('../colors/LineColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var LineZ, p;
LineZ = function (dimension, color, useDefaultCanvas) {
    this.initialize(dimension, color, useDefaultCanvas);
};
p = LineZ.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, useDefaultCanvas) {
    this.initRender(dimension, color, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.dimension = dimension === undefined ? new LineZDimension() : dimension;
    this.color = color === undefined ? new LineColor() : color;
};

p.initRectangle = function () {
    this.w = 1;
    this.h = this.dimension.zAxis;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = 0;
    this.matrix.ty = -this.dimension.zAxis + 1;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};

p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetBorder, yOffsetBorder, i, borderColor;

    xOffsetBorder = 0;
    yOffsetBorder = 0;
    borderColor = this.color.border;

    //y axis
    for (i = 0; i < this.dimension.zAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetBorder, yOffsetBorder + i, borderColor);
    }
};

// public methods
p.toString = function () {
    return '[LineZ]';
};

module.exports = LineZ;

},{"../colors/LineColor":3,"../dimensions/LineZDimension":12,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],30:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var PyramidDimension = require('../dimensions/PyramidDimension');
var PyramidColor = require('../colors/PyramidColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var Pyramid, p;
Pyramid = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = Pyramid.prototype = new AbstractPrimitive();

// private properties
p.hSize = null;
p.hOffset = null;

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new PyramidDimension() : dimension;
    this.color = color === undefined ? new PyramidColor() : color;

    this.hSize = this.dimension.tall ? this.dimension.xAxis * 2 : this.dimension.xAxis;
    this.hOffset = this.dimension.tall ? -3 : -2;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.hSize + this.dimension.xAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h += this.hOffset;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.xAxis + 2;
    this.matrix.ty = -this.hSize / 2 + 2 - (this.dimension.tall ? this.dimension.xAxis / 2 : 1);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight, colorBorderHighlight,
        i, j, k, l1, m1, l2, m2;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.right;

    colorBorderHighlight = this.border ? this.color.borderHighlight : colorBorderLeft;

    //z axis || hightlight
    for (k = 0; k < this.hSize + this.dimension.xAxis / 2 - 4; k += 1) {
        this.bitmapData.setPixel(this.dimension.xAxis - 2, k + 3 + this.hOffset, colorBorderHighlight);
    }

    //x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(i, this.hSize + Math.floor(i / 2) + this.hOffset, colorBorderLeft);
    }

    //y axis
    for (j = 0; j < this.dimension.xAxis; j += 1) {
        this.bitmapData.setPixel(j + this.dimension.xAxis - 2, this.hSize + this.dimension.xAxis / 2 - Math.floor(j / 2) - 1 + this.hOffset, colorBorderRight);
    }

    if (!this.dimension.tall) {
        //left edge
        for (l1 = 0; l1 < this.hSize; l1 += 1) {
            this.bitmapData.setPixel(l1, this.hSize - l1 + this.hOffset, colorBorderLeft);
        }

        //right edge
        for (m1 = 0; m1 < this.hSize; m1 += 1) {
            this.bitmapData.setPixel(m1 + this.hSize - 2, m1 + 1 + this.hOffset, colorBorderRight);
        }
    } else {
        //left edge
        for (l2 = 0; l2 < this.hSize - 2; l2 += 1) {
            this.bitmapData.setPixel(Math.floor(l2 / 2), this.hSize - l2 + this.hOffset, colorBorderLeft);
        }

        //right edge
        for (m2 = 2; m2 < this.hSize; m2 += 1) {
            this.bitmapData.setPixel(Math.floor(m2 / 2) + this.dimension.xAxis - 2, m2 + 1 + this.hOffset, colorBorderRight);
        }
    }

    if (!this.border) {
        this.bitmapData.setPixel(this.dimension.xAxis - 2, this.hSize + this.dimension.xAxis / 2 - 1 + this.hOffset, colorBorderLeft);
    }

    //floodfill
    this.bitmapData.floodFill(this.dimension.xAxis - 1, this.hSize + Math.floor((this.dimension.xAxis - 1) / 2) + this.hOffset - 1, this.color.right);
    this.bitmapData.floodFill(this.dimension.xAxis - 3, this.hSize + Math.floor((this.dimension.xAxis - 1) / 2) + this.hOffset - 2, this.color.left);
};

// public methods
p.toString = function () {
    return '[Pyramid]';
};

module.exports = Pyramid;

},{"../colors/PyramidColor":4,"../dimensions/PyramidDimension":13,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],31:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SideXDimension = require('../dimensions/SideXDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SideX, p;
SideX = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SideX.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SideXDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis;
    this.h = this.dimension.zAxis + this.dimension.xAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = 0;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;

    xOffsetInner = 0;
    yOffsetInner = this.dimension.zAxis;
    xOffsetOut = this.dimension.xAxis - 1;
    yOffsetOut = this.h - this.dimension.zAxis - 1;
    borderColor = this.border ? this.color.border : this.color.inner;

    //x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner + Math.floor(i / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut - Math.floor(i / 2), borderColor);
    }

    //z axis
    for (j = 0; j < this.dimension.zAxis; j += 1) {
        this.bitmapData.setPixel(xOffsetInner, yOffsetInner - j, borderColor);
        this.bitmapData.setPixel(xOffsetOut, yOffsetOut + j, borderColor);
    }

    //fill an pixel graphic enclosed
    this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
};

// public methods
p.toString = function () {
    return '[SideX]';
};

module.exports = SideX;

},{"../colors/SideColor":5,"../dimensions/SideXDimension":14,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],32:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SideYDimension = require('../dimensions/SideYDimension');
var SideColor = require('../colors/SideColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SideY, p;
SideY = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SideY.prototype = new AbstractPrimitive();

// public properties

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SideYDimension() : dimension;
    this.color = color === undefined ? new SideColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.yAxis;
    this.h = this.dimension.zAxis + this.dimension.yAxis / 2;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -this.dimension.yAxis + 2;
    this.matrix.ty = -this.dimension.zAxis;
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var xOffsetInner, yOffsetInner, xOffsetOut, yOffsetOut, i, j, borderColor;

    xOffsetInner = 0;
    yOffsetInner = this.h - this.dimension.zAxis - 1;
    xOffsetOut = this.dimension.yAxis - 1;
    yOffsetOut = this.dimension.zAxis;
    borderColor = this.border ? this.color.border : this.color.inner;

    //y axis
    for (i = 0; i < this.dimension.yAxis; i += 1) {
        this.bitmapData.setPixel(xOffsetInner + i, yOffsetInner - Math.floor(i / 2), borderColor);
        this.bitmapData.setPixel(xOffsetOut - i, yOffsetOut + Math.floor(i / 2), borderColor);
    }

    //z axis
    for (j = 0; j < this.dimension.zAxis; j += 1) {
        this.bitmapData.setPixel(xOffsetInner, yOffsetInner + j, borderColor);
        this.bitmapData.setPixel(xOffsetOut, yOffsetOut - j, borderColor);
    }

    //fill an pixel graphic enclosed
    this.bitmapData.floodFill(Math.floor(this.w / 2), Math.floor(this.h / 2), this.color.inner);
};

// public methods
p.toString = function () {
    return '[SideY]';
};

module.exports = SideY;

},{"../colors/SideColor":5,"../dimensions/SideYDimension":15,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],33:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SlopeEast, p;
SlopeEast = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeEast.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis * 2 + this.dimension.yAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.xAxis * 3 / 2 - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight,
        i, j, k, m, n;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.rightSlope;

    // y axis
    for (j = 0; j < this.dimension.yAxis; j += 1) {
        this.bitmapData.setPixel(j, this.dimension.yAxis / 2 - Math.floor(j / 2) - 1, colorBorderRight);
        this.bitmapData.setPixel(j + this.dimension.xAxis - 2, this.h - Math.floor(j / 2) - 1, colorBorderRight);
    }

    // x axis
    for (i = 0; i < this.dimension.xAxis; i += 1) {
        this.bitmapData.setPixel(i, this.h - this.dimension.xAxis / 2 + Math.floor(i / 2), colorBorderLeft);
    }

    // z axis
    for (k = this.dimension.yAxis / 2 - 1; k < this.h - this.dimension.xAxis / 2; k += 1) {
        this.bitmapData.setPixel(0, k, colorBorderLeft);
    }

    // slot
    for (m = 0; m < this.dimension.xAxis * 2 - 2; m += 1) {
        this.bitmapData.setPixel(this.dimension.yAxis - 1 + Math.floor(m / 2), m, colorBorderRight);
        this.bitmapData.setPixel(1 + Math.floor(m / 2), this.dimension.yAxis / 2 + m - 1, colorBorderRight);
    }

    // flood fill
    this.bitmapData.floodFill(this.dimension.yAxis - 2, 1, this.color.rightSlope);
    this.bitmapData.floodFill(this.dimension.xAxis - 3, this.h - 3, this.color.left);
    // hack single pixel
    this.bitmapData.setPixel(this.dimension.xAxis - 2, this.h - 2, this.color.left);

    // highlight
    if (this.border) {
        for (n = 1; n < this.dimension.xAxis * 2 - 3; n += 1) {
            this.bitmapData.setPixel(1 + Math.floor(n / 2), this.dimension.yAxis / 2 + n - 1, this.color.borderHighlight);
        }
    }
};

// public methods
p.toString = function () {
    return '[SlopeEast]';
};

module.exports = SlopeEast;

},{"../colors/SlopeColor":6,"../dimensions/SlopeDimension":16,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],34:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var SideX = require('./SideX');
var SideXDimension = require('../dimensions/SideXDimension');
var SideColor = require('../colors/SideColor');
var PixelObject = require('../display/PixelObject');

var SlopeNorth, p;
SlopeNorth = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeNorth.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.yAxis * 3 / 2 + this.dimension.xAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.yAxis - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight, colorBorderHighlight,
        sideX, poX, ctx, bmd,
        i, j, n;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.right;
    colorBorderHighlight = this.border ? this.color.borderHighlight : this.color.left;

    sideX = new SideX(
        new SideXDimension(this.dimension.xAxis, this.h - this.dimension.xAxis / 2),
        new SideColor(colorBorderLeft, this.color.left)
    );

    poX = new PixelObject(sideX);

    ctx = this.bitmapData.context;
    ctx.drawImage(poX.canvas, poX.x, poX.y + this.h - this.dimension.xAxis / 2);

    bmd = new BitmapData(this.w, this.h);

    // close the path for floodfill
    for (i = this.h - this.dimension.yAxis * 3 / 2 + 2; i < this.h; i += 1) {
        bmd.setPixel(this.dimension.xAxis - 1, i, colorBorderRight);
    }

    // y axis
    for (j = 1; j < this.dimension.yAxis; j += 1) {
        bmd.setPixel(this.dimension.xAxis + j - 2, this.h - Math.floor(j / 2) - 1, colorBorderRight);
        bmd.setPixel(this.dimension.xAxis + j - 2, this.dimension.xAxis / 2 - 2 + j, colorBorderRight);
    }

    // flood fill
    bmd.floodFill(this.dimension.xAxis + 1, this.h - 3, this.color.right);

    //highlight
    for (n = this.dimension.xAxis / 2; n < this.h - 1; n += 1) {
        bmd.setPixel(this.dimension.xAxis - 1, n, this.color.right);
        bmd.setPixel(this.dimension.xAxis - 2, n, colorBorderHighlight);
    }

    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return '[SlopeNorth]';
};

module.exports = SlopeNorth;

},{"../colors/SideColor":5,"../colors/SlopeColor":6,"../dimensions/SideXDimension":14,"../dimensions/SlopeDimension":16,"../display/BitmapData":17,"../display/PixelObject":18,"../geom/Matrix":20,"./AbstractPrimitive":24,"./SideX":31}],35:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');

var SlopeSouth, p;
SlopeSouth = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeSouth.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis / 2 + this.dimension.yAxis * 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.yAxis * 3 / 2 - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.bitmapData.context.putImageData(this.bitmapData.imageData, 0, 0);
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight,
        i, j, k, m, n;

    colorBorderLeft = this.border ? this.color.border : this.color.leftSlope;
    colorBorderRight = this.border ? this.color.border : this.color.right;

    // x axis
    for (j = 0; j < this.dimension.xAxis; j += 1) {
        this.bitmapData.setPixel(j, this.dimension.yAxis * 2 + Math.floor(j / 2) - 3, colorBorderLeft);
        this.bitmapData.setPixel(j + this.dimension.yAxis - 2, Math.floor(j / 2), colorBorderLeft);
    }

    // y axis
    for (i = 0; i < this.dimension.yAxis; i += 1) {
        this.bitmapData.setPixel(this.dimension.xAxis - 2 + i, this.h - Math.floor(i / 2) - 1, colorBorderRight);
    }

    // z axis
    for (k = this.dimension.xAxis / 2 - 1; k < this.h - this.dimension.yAxis / 2; k += 1) {
        this.bitmapData.setPixel(this.w - 1, k, colorBorderRight);
    }

    // slot
    for (m = 0; m < this.dimension.yAxis * 2 - 2; m += 1) {
        this.bitmapData.setPixel(Math.floor(m / 2), this.dimension.yAxis * 2 - m - 3, colorBorderLeft);
        this.bitmapData.setPixel(this.dimension.xAxis - 2 + Math.floor(m / 2), this.h - m - 1, colorBorderLeft);
    }

    // flood fill
    this.bitmapData.floodFill(this.dimension.yAxis - 1, 1, this.color.leftSlope);
    this.bitmapData.floodFill(this.dimension.xAxis, this.h - 3, this.color.right);
    // hack single pixel
    this.bitmapData.setPixel(this.dimension.xAxis - 1, this.h - 2, this.color.right);

    // highlight
    if (this.border) {
        for (n = 1; n < this.dimension.yAxis * 2 - 3; n += 1) {
            this.bitmapData.setPixel(this.dimension.xAxis - 2 + Math.floor(n / 2), this.h - n - 1, this.color.borderHighlight);
        }
    }
};

// public methods
p.toString = function () {
    return '[SlopeSouth]';
};

module.exports = SlopeSouth;

},{"../colors/SlopeColor":6,"../dimensions/SlopeDimension":16,"../display/BitmapData":17,"../geom/Matrix":20,"./AbstractPrimitive":24}],36:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var SlopeDimension = require('../dimensions/SlopeDimension');
var SlopeColor = require('../colors/SlopeColor');
var Matrix = require('../geom/Matrix');
var BitmapData = require('../display/BitmapData');
var AbstractPrimitive = require('./AbstractPrimitive');
var SideY = require('./SideY');
var SideYDimension = require('../dimensions/SideYDimension');
var SideColor = require('../colors/SideColor');
var PixelObject = require('../display/PixelObject');

var SlopeWest, p;
SlopeWest = function (dimension, color, border, useDefaultCanvas) {
    this.initialize(dimension, color, border, useDefaultCanvas);
};
p = SlopeWest.prototype = new AbstractPrimitive();

// constructor
p.initialize = function (dimension, color, border, useDefaultCanvas) {
    this.initRender(dimension, color, border, useDefaultCanvas);
    this.initRectangle();
    this.initBitmapData();
    this.build();
    this.renderBitmapDataForCanvas();

    return this;
};

// private method
p.initRender = function (dimension, color, border, useDefaultCanvas) {
    this.useDefaultCanvas = useDefaultCanvas || false;
    this.border = border || border === undefined;
    this.dimension = dimension === undefined ? new SlopeDimension() : dimension;
    this.color = color === undefined ? new SlopeColor() : color;
};

p.initRectangle = function () {
    this.w = this.dimension.xAxis + this.dimension.yAxis;
    this.h = this.dimension.xAxis * 3 / 2 + this.dimension.yAxis / 2;

    // 22.6 degrees implementation
    this.w -= 2;
    this.h -= 3;

    // the matrix offset between the bitmap and the 3d pixel coordinate ZERO point
    this.matrix = new Matrix();
    this.matrix.tx = -(this.dimension.yAxis - 2);
    this.matrix.ty = -(this.dimension.xAxis - 2);
};

p.initBitmapData = function () {
    this.bitmapData = new BitmapData(this.w, this.h, this.useDefaultCanvas);
};
p.renderBitmapDataForCanvas = function () {
    this.canvas = this.bitmapData.canvas;
};

p.build = function () {
    var colorBorderLeft, colorBorderRight, colorBorderHighlight,
        sideY, poY, ctx, bmd,
        i, j, n;

    colorBorderLeft = this.border ? this.color.border : this.color.left;
    colorBorderRight = this.border ? this.color.border : this.color.right;
    colorBorderHighlight = this.border ? this.color.borderHighlight : this.color.left;

    sideY = new SideY(
        new SideYDimension(this.dimension.yAxis, this.h - this.dimension.yAxis / 2),
        new SideColor(colorBorderRight, this.color.right)
    );

    poY = new PixelObject(sideY);

    ctx = this.bitmapData.context;
    ctx.drawImage(poY.canvas, poY.x + this.w - 2, poY.y + this.h - this.dimension.yAxis / 2);

    bmd = new BitmapData(this.w, this.h);

    // close the path for floodfill
    for (i = this.h - this.dimension.xAxis * 3 / 2 + 2; i < this.h; i += 1) {
        bmd.setPixel(this.dimension.xAxis - 2, i, colorBorderLeft);
    }

    //x axis
    for (j = 0; j < this.dimension.xAxis - 1; j += 1) {
        bmd.setPixel(j, this.dimension.xAxis + this.dimension.yAxis / 2 - 3 + Math.floor(j / 2), colorBorderLeft);
        bmd.setPixel(j, this.dimension.xAxis + this.dimension.yAxis / 2 - 3 - j, colorBorderLeft);
    }

    // flood fill
    bmd.floodFill(this.dimension.xAxis - 3, this.h - 3, this.color.left);

    //highlight
    for (n = this.dimension.yAxis / 2; n < this.h - 1; n += 1) {
        bmd.setPixel(this.dimension.xAxis - 2, n, colorBorderHighlight);
    }

    bmd.context.putImageData(bmd.imageData, 0, 0);
    ctx.drawImage(bmd.canvas, 0, 0);
};

// public methods
p.toString = function () {
    return '[SlopeWest]';
};

module.exports = SlopeWest;

},{"../colors/SideColor":5,"../colors/SlopeColor":6,"../dimensions/SideYDimension":15,"../dimensions/SlopeDimension":16,"../display/BitmapData":17,"../display/PixelObject":18,"../geom/Matrix":20,"./AbstractPrimitive":24,"./SideY":32}],37:[function(require,module,exports){
/*jslint node: true*/
/*global document:true*/

'use strict';

var CanvasManager, p;
CanvasManager = function () {
    throw new Error('CanvasManager is a static Class, cannot be instanced.');
};
p = CanvasManager;

// public properties
p.defaultCanvas = null;

// public methods
p.getDefaultCanvas = function () {
    p.defaultCanvas = p.defaultCanvas || document.createElement('canvas');
    return p.defaultCanvas;
};

p.getNewCanvas = function () {
    return document.createElement('canvas');
};

p.toString = function () {
    return '[CanvasManager]';
};

module.exports = CanvasManager;

},{}],38:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var CanvasTool, p;

CanvasTool = function () {
    throw new Error('CanvasTool is a static Class, cannot be instanced.');
};
p = CanvasTool;

// public methods
p.getPixel = function (imageData, x, y) {
    var data, index, r, g, b;

    data = imageData.data;
    index = (y * imageData.width + x) * 4;
    r = data[index];
    g = data[index + 1];
    b = data[index + 2];

    return ((r << 16) | (g << 8) | b);
};

p.toString = function () {
    return '[CanvasTool]';
};

module.exports = CanvasTool;

},{}],39:[function(require,module,exports){
/*jslint node:true*/

'use strict';

var ColorGeom, p;

ColorGeom = function () {
    throw new Error('ColorGeom is a static Class, cannot be instanced.');
};
p = ColorGeom;

// public methods
p.get32 = function (color) {
    return color < 0xFF000000 ? (color + 0xFF000000) : color;
};

p.applyBrightness = function (color, brightness, highlight) {
    var a, r, g, b, y, v, u;

    a = ((color >>> 24) & 0x000000FF);
    r = ((color >>> 16) & 0x000000FF);
    g = ((color >>> 8) & 0x000000FF);
    b = (color & 0x000000FF);

    y = ((r * 313524) >> 20) + ((g * 615514) >> 20) + ((b * 119538) >> 20);
    u = -((155189 * r) >> 20) - ((303038 * g) >> 20) + ((458227 * b) >> 20);
    v = ((644874 * r) >> 20) - ((540016 * g) >> 20) - ((104857 * b) >> 20);

    if (!highlight) {
        y += brightness;
    } else {
        y = 60 + Math.pow(y, 1.2);
    }

    r = y + ((1195376 * v) >> 20);
    g = y - ((408944 * u) >> 20) - ((608174 * v) >> 20);
    b = y + ((2128609 * u) >> 20);

    r = Math.max(0, Math.min(r, 255));
    g = Math.max(0, Math.min(g, 255));
    b = Math.max(0, Math.min(b, 255));

    return (a << 24) | (r << 16) | (g << 8) | b;
};

p.toString = function () {
    return '[ColorGeom]';
};

module.exports = ColorGeom;

},{}],40:[function(require,module,exports){
/*jslint node: true*/

'use strict';

var ColorPattern, p;

ColorPattern = function () {
    throw new Error('ColorPattern is a static Class, cannot be instanced.');
};
p = ColorPattern;

// public properties
p.GRASS_GREEN = 0xCCFF00;
p.YELLOW = 0xFFFF00;
p.WINE_RED = 0xFF0099;
p.PINK = 0xFF7CBF;
p.PURPLE = 0xCC00FF;
p.BLUE = 0x00CCFF;
p.GRAY = 0xEEEEEE;
p.BLACK = 0x666666;
p.FINE_COLORS =
    [
        p.GRASS_GREEN,
        p.YELLOW,
        p.WINE_RED,
        p.PINK,
        p.PURPLE,
        p.BLUE,
        p.GRAY,
        p.BLACK
    ];

// public methods
p.getRandomComfortableColor = function () {
    return p.FINE_COLORS[Math.floor(Math.random() * p.FINE_COLORS.length)];
};

p.toString = function () {
    return '[ColorPattern]';
};

module.exports = ColorPattern;

},{}]},{},[23])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29sb3JzL0Fic3RyYWN0Q29sb3IuanMiLCJzcmMvY29sb3JzL0N1YmVDb2xvci5qcyIsInNyYy9jb2xvcnMvTGluZUNvbG9yLmpzIiwic3JjL2NvbG9ycy9QeXJhbWlkQ29sb3IuanMiLCJzcmMvY29sb3JzL1NpZGVDb2xvci5qcyIsInNyYy9jb2xvcnMvU2xvcGVDb2xvci5qcyIsInNyYy9kaW1lbnNpb25zL0Fic3RyYWN0RGltZW5zaW9uLmpzIiwic3JjL2RpbWVuc2lvbnMvQnJpY2tEaW1lbnNpb24uanMiLCJzcmMvZGltZW5zaW9ucy9DdWJlRGltZW5zaW9uLmpzIiwic3JjL2RpbWVuc2lvbnMvTGluZVhEaW1lbnNpb24uanMiLCJzcmMvZGltZW5zaW9ucy9MaW5lWURpbWVuc2lvbi5qcyIsInNyYy9kaW1lbnNpb25zL0xpbmVaRGltZW5zaW9uLmpzIiwic3JjL2RpbWVuc2lvbnMvUHlyYW1pZERpbWVuc2lvbi5qcyIsInNyYy9kaW1lbnNpb25zL1NpZGVYRGltZW5zaW9uLmpzIiwic3JjL2RpbWVuc2lvbnMvU2lkZVlEaW1lbnNpb24uanMiLCJzcmMvZGltZW5zaW9ucy9TbG9wZURpbWVuc2lvbi5qcyIsInNyYy9kaXNwbGF5L0JpdG1hcERhdGEuanMiLCJzcmMvZGlzcGxheS9QaXhlbE9iamVjdC5qcyIsInNyYy9kaXNwbGF5L1BpeGVsVmlldy5qcyIsInNyYy9nZW9tL01hdHJpeC5qcyIsInNyYy9nZW9tL1BvaW50LmpzIiwic3JjL2dlb20vUG9pbnQzRC5qcyIsInNyYy9vYmVsaXNrLmpzIiwic3JjL3ByaW1pdGl2ZXMvQWJzdHJhY3RQcmltaXRpdmUuanMiLCJzcmMvcHJpbWl0aXZlcy9Ccmljay5qcyIsInNyYy9wcmltaXRpdmVzL0N1YmUuanMiLCJzcmMvcHJpbWl0aXZlcy9MaW5lWC5qcyIsInNyYy9wcmltaXRpdmVzL0xpbmVZLmpzIiwic3JjL3ByaW1pdGl2ZXMvTGluZVouanMiLCJzcmMvcHJpbWl0aXZlcy9QeXJhbWlkLmpzIiwic3JjL3ByaW1pdGl2ZXMvU2lkZVguanMiLCJzcmMvcHJpbWl0aXZlcy9TaWRlWS5qcyIsInNyYy9wcmltaXRpdmVzL1Nsb3BlRWFzdC5qcyIsInNyYy9wcmltaXRpdmVzL1Nsb3BlTm9ydGguanMiLCJzcmMvcHJpbWl0aXZlcy9TbG9wZVNvdXRoLmpzIiwic3JjL3ByaW1pdGl2ZXMvU2xvcGVXZXN0LmpzIiwic3JjL3V0aWxzL0NhbnZhc01hbmFnZXIuanMiLCJzcmMvdXRpbHMvQ2FudmFzVG9vbC5qcyIsInNyYy91dGlscy9Db2xvckdlb20uanMiLCJzcmMvdXRpbHMvQ29sb3JQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdENvbG9yLCBwO1xuXG5BYnN0cmFjdENvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xufTtcbnAgPSBBYnN0cmFjdENvbG9yLnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbi8qKlxuICogVGhlIGlubmVyIGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5pbm5lciA9IG51bGw7XG5cbi8qKlxuICogVGhlIGJvcmRlciBjb2xvcnMgZm9yIGVsZW1lbnRzIG9mIGNlcnRhaW4gcHJpbWl0aXZlXG4gKi9cbnAuYm9yZGVyID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgYm9yZGVySGlnaGxpZ2h0IGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5ib3JkZXJIaWdobGlnaHQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBsZWZ0IHNpZGUgY29sb3JzIGZvciBlbGVtZW50cyBvZiBjZXJ0YWluIHByaW1pdGl2ZVxuICovXG5wLmxlZnQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSByaWdodCBzaWRlIGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5yaWdodCA9IG51bGw7XG5cbi8qKlxuICogVGhlIGhvcml6b250YWwgY29sb3JzIGZvciBlbGVtZW50cyBvZiBjZXJ0YWluIHByaW1pdGl2ZVxuICovXG5wLmhvcml6b250YWwgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBsZWZ0IHNsb3Qgc2lkZSBjb2xvcnMgZm9yIGVsZW1lbnRzIG9mIGNlcnRhaW4gcHJpbWl0aXZlXG4gKi9cbnAubGVmdFNsb3BlID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgcmlnaHQgc2xvdCBzaWRlIGNvbG9ycyBmb3IgZWxlbWVudHMgb2YgY2VydGFpbiBwcmltaXRpdmVcbiAqL1xucC5yaWdodFNsb3BlID0gbnVsbDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0Fic3RyYWN0Q29sb3JdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RDb2xvcjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdENvbG9yID0gcmVxdWlyZSgnLi9BYnN0cmFjdENvbG9yJyk7XG52YXIgQ29sb3JHZW9tID0gcmVxdWlyZSgnLi4vdXRpbHMvQ29sb3JHZW9tJyk7XG5cbnZhciBDdWJlQ29sb3IsIHA7XG5DdWJlQ29sb3IgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBob3Jpem9udGFsKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCwgaG9yaXpvbnRhbCk7XG59O1xucCA9IEN1YmVDb2xvci5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RDb2xvcigpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xucC5CUklHSFRORVNTX0dBSU4gPSAtMjA7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBob3Jpem9udGFsKSB7XG4gICAgdGhpcy5ib3JkZXIgPSBDb2xvckdlb20uZ2V0MzIoYm9yZGVyID09PSB1bmRlZmluZWQgPyAweDg3ODc4NyA6IGJvcmRlcik7XG4gICAgdGhpcy5ib3JkZXJIaWdobGlnaHQgPSBDb2xvckdlb20uZ2V0MzIoYm9yZGVySGlnaGxpZ2h0ID09PSB1bmRlZmluZWQgPyAweEZGRkZGRiA6IGJvcmRlckhpZ2hsaWdodCk7XG4gICAgdGhpcy5sZWZ0ID0gQ29sb3JHZW9tLmdldDMyKGxlZnQgPT09IHVuZGVmaW5lZCA/IDB4QzlDRkQwIDogbGVmdCk7XG4gICAgdGhpcy5yaWdodCA9IENvbG9yR2VvbS5nZXQzMihyaWdodCA9PT0gdW5kZWZpbmVkID8gMHhFM0UzRTMgOiByaWdodCk7XG4gICAgdGhpcy5ob3Jpem9udGFsID0gQ29sb3JHZW9tLmdldDMyKGhvcml6b250YWwgPT09IHVuZGVmaW5lZCA/IDB4RUVFRkYwIDogaG9yaXpvbnRhbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldEJ5SG9yaXpvbnRhbENvbG9yID0gZnVuY3Rpb24gKGhvcml6b250YWwpIHtcbiAgICByZXR1cm4gbmV3IEN1YmVDb2xvcihcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDQpLFxuICAgICAgICAvL2FwcGx5IGhpZ2h0bGlnaHRcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCAwLCB0cnVlKSxcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDIpLFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKGhvcml6b250YWwsIHRoaXMuQlJJR0hUTkVTU19HQUlOKSxcbiAgICAgICAgaG9yaXpvbnRhbFxuICAgICk7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0N1YmVDb2xvcl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdWJlQ29sb3I7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3RDb2xvciA9IHJlcXVpcmUoJy4vQWJzdHJhY3RDb2xvcicpO1xudmFyIENvbG9yR2VvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL0NvbG9yR2VvbScpO1xuXG52YXIgTGluZUNvbG9yLCBwO1xuTGluZUNvbG9yID0gZnVuY3Rpb24gKGJvcmRlciwgaW5uZXIpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYm9yZGVyLCBpbm5lcik7XG59O1xucCA9IExpbmVDb2xvci5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RDb2xvcigpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGJvcmRlcikge1xuICAgIHRoaXMuYm9yZGVyID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlciA9PT0gdW5kZWZpbmVkID8gMHg4Nzg3ODcgOiBib3JkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0xpbmVDb2xvcl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lQ29sb3I7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3RDb2xvciA9IHJlcXVpcmUoJy4vQWJzdHJhY3RDb2xvcicpO1xudmFyIENvbG9yR2VvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL0NvbG9yR2VvbScpO1xuXG52YXIgUHlyYW1pZENvbG9yLCBwO1xuUHlyYW1pZENvbG9yID0gZnVuY3Rpb24gKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShib3JkZXIsIGJvcmRlckhpZ2hsaWdodCwgbGVmdCwgcmlnaHQpO1xufTtcbnAgPSBQeXJhbWlkQ29sb3IucHJvdG90eXBlID0gbmV3IEFic3RyYWN0Q29sb3IoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAuQlJJR0hUTkVTU19HQUlOID0gLTIwO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGJvcmRlciwgYm9yZGVySGlnaGxpZ2h0LCBsZWZ0LCByaWdodCkge1xuICAgIHRoaXMuYm9yZGVyID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlciA9PT0gdW5kZWZpbmVkID8gMHg5NDk2OTggOiBib3JkZXIpO1xuICAgIHRoaXMuYm9yZGVySGlnaGxpZ2h0ID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlckhpZ2hsaWdodCA9PT0gdW5kZWZpbmVkID8gMHhGRkZGRkYgOiBib3JkZXJIaWdobGlnaHQpO1xuICAgIHRoaXMubGVmdCA9IENvbG9yR2VvbS5nZXQzMihsZWZ0ID09PSB1bmRlZmluZWQgPyAweEU2RThFOSA6IGxlZnQpO1xuICAgIHRoaXMucmlnaHQgPSBDb2xvckdlb20uZ2V0MzIocmlnaHQgPT09IHVuZGVmaW5lZCA/IDB4RUVFRkYwIDogcmlnaHQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXRCeVJpZ2h0Q29sb3IgPSBmdW5jdGlvbiAocmlnaHQpIHtcbiAgICByZXR1cm4gbmV3IFB5cmFtaWRDb2xvcihcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhyaWdodCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiA0KSxcbiAgICAgICAgLy9hcHBseSBoaWdodGxpZ2h0XG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MocmlnaHQsIDAsIHRydWUpLFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKHJpZ2h0LCB0aGlzLkJSSUdIVE5FU1NfR0FJTiksXG4gICAgICAgIHJpZ2h0XG4gICAgKTtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbUHlyYW1pZENvbG9yXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFB5cmFtaWRDb2xvcjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdENvbG9yID0gcmVxdWlyZSgnLi9BYnN0cmFjdENvbG9yJyk7XG52YXIgQ29sb3JHZW9tID0gcmVxdWlyZSgnLi4vdXRpbHMvQ29sb3JHZW9tJyk7XG5cbnZhciBTaWRlQ29sb3IsIHA7XG5TaWRlQ29sb3IgPSBmdW5jdGlvbiAoYm9yZGVyLCBpbm5lcikge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShib3JkZXIsIGlubmVyKTtcbn07XG5wID0gU2lkZUNvbG9yLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdENvbG9yKCk7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLkJSSUdIVE5FU1NfR0FJTiA9IC0yMDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChib3JkZXIsIGlubmVyKSB7XG4gICAgdGhpcy5ib3JkZXIgPSBDb2xvckdlb20uZ2V0MzIoYm9yZGVyID09PSB1bmRlZmluZWQgPyAweDg3ODc4NyA6IGJvcmRlcik7XG4gICAgdGhpcy5pbm5lciA9IENvbG9yR2VvbS5nZXQzMihpbm5lciA9PT0gdW5kZWZpbmVkID8gMHhFRUVFRUUgOiBpbm5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldEJ5SW5uZXJDb2xvciA9IGZ1bmN0aW9uIChpbm5lcikge1xuICAgIHJldHVybiBuZXcgU2lkZUNvbG9yKFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKGlubmVyLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDQpLFxuICAgICAgICBpbm5lclxuICAgICk7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1NpZGVDb2xvcl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlQ29sb3I7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3RDb2xvciA9IHJlcXVpcmUoJy4vQWJzdHJhY3RDb2xvcicpO1xudmFyIENvbG9yR2VvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL0NvbG9yR2VvbScpO1xuXG52YXIgU2xvcGVDb2xvciwgcDtcblNsb3BlQ29sb3IgPSBmdW5jdGlvbiAoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBsZWZ0U2xvcGUsIHJpZ2h0U2xvcGUpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYm9yZGVyLCBib3JkZXJIaWdobGlnaHQsIGxlZnQsIHJpZ2h0LCBsZWZ0U2xvcGUsIHJpZ2h0U2xvcGUpO1xufTtcbnAgPSBTbG9wZUNvbG9yLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdENvbG9yKCk7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLkJSSUdIVE5FU1NfR0FJTiA9IC0yMDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChib3JkZXIsIGJvcmRlckhpZ2hsaWdodCwgbGVmdCwgcmlnaHQsIGxlZnRTbG9wZSwgcmlnaHRTbG9wZSkge1xuICAgIHRoaXMuYm9yZGVyID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlciA9PT0gdW5kZWZpbmVkID8gMHg5NDk2OTggOiBib3JkZXIpO1xuICAgIHRoaXMuYm9yZGVySGlnaGxpZ2h0ID0gQ29sb3JHZW9tLmdldDMyKGJvcmRlckhpZ2hsaWdodCA9PT0gdW5kZWZpbmVkID8gMHhGRkZGRkYgOiBib3JkZXJIaWdobGlnaHQpO1xuICAgIHRoaXMubGVmdCA9IENvbG9yR2VvbS5nZXQzMihsZWZ0ID09PSB1bmRlZmluZWQgPyAweEM5Q0ZEMCA6IGxlZnQpO1xuICAgIHRoaXMucmlnaHQgPSBDb2xvckdlb20uZ2V0MzIocmlnaHQgPT09IHVuZGVmaW5lZCA/IDB4RTZFOEU5IDogcmlnaHQpO1xuICAgIHRoaXMubGVmdFNsb3BlID0gQ29sb3JHZW9tLmdldDMyKGxlZnRTbG9wZSA9PT0gdW5kZWZpbmVkID8gMHhEQkRCREIgOiBsZWZ0U2xvcGUpO1xuICAgIHRoaXMucmlnaHRTbG9wZSA9IENvbG9yR2VvbS5nZXQzMihyaWdodFNsb3BlID09PSB1bmRlZmluZWQgPyAweERCREJEQiA6IHJpZ2h0U2xvcGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xuXG4vKlxuICogaG9yaXpvbnRhbCBzaWRlIGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QgaW4gdGhlIFNsb3BlIHByaW1pdGl2ZVxuICogeW91IGNhbiBhc3NpZ24gdGhlIHNhbWUgaG9yaXpvbnRhbCBjb2xvciBhcyBjdWJlXG4gKiBzbyB0aGF0IHlvdSB3aWxsIGJlIGFibGUgdG8gYXJyYW5nZSB0aGUgc2xvcGUgd2l0aCBjdWJlXG4gKi9cbnAuZ2V0QnlIb3Jpem9udGFsQ29sb3IgPSBmdW5jdGlvbiAoaG9yaXpvbnRhbCkge1xuICAgIHJldHVybiBuZXcgU2xvcGVDb2xvcihcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDQpLFxuICAgICAgICAvL2FwcGx5IGhpZ2h0bGlnaHRcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCAwLCB0cnVlKSxcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDIpLFxuICAgICAgICBDb2xvckdlb20uYXBwbHlCcmlnaHRuZXNzKGhvcml6b250YWwsIHRoaXMuQlJJR0hUTkVTU19HQUlOKSxcbiAgICAgICAgQ29sb3JHZW9tLmFwcGx5QnJpZ2h0bmVzcyhob3Jpem9udGFsLCB0aGlzLkJSSUdIVE5FU1NfR0FJTiAqIDEuNSksXG4gICAgICAgIENvbG9yR2VvbS5hcHBseUJyaWdodG5lc3MoaG9yaXpvbnRhbCwgdGhpcy5CUklHSFRORVNTX0dBSU4gKiAwLjUpXG4gICAgKTtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2xvcGVDb2xvcl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbG9wZUNvbG9yO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uLCBwO1xuQWJzdHJhY3REaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG59O1xucCA9IEFic3RyYWN0RGltZW5zaW9uLnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbi8qKlxuICogVGhlIHggQXhpcyBkaW1lbnNpb25zIGluIDIyLjYgZGVncmVlcyBjb29yZGluYXRlXG4gKi9cbnAueEF4aXMgPSBudWxsO1xuXG4vKipcbiAqIFRoZSB5IEF4aXMgZGltZW5zaW9ucyBpbiAyMi42IGRlZ3JlZXMgY29vcmRpbmF0ZVxuICovXG5wLnlBeGlzID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgeiBBeGlzIGRpbWVuc2lvbnMgaW4gMjIuNiBkZWdyZWVzIGNvb3JkaW5hdGVcbiAqL1xucC56QXhpcyA9IG51bGw7XG5cbi8qKlxuICogUHlyYW1pZCB0YWxsIG1vZGVcbiAqL1xucC50YWxsID0gZmFsc2U7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tBYnN0cmFjdERpbWVuc2lvbl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdERpbWVuc2lvbjtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdERpbWVuc2lvbiA9IHJlcXVpcmUoJy4vQWJzdHJhY3REaW1lbnNpb24nKTtcblxudmFyIEJyaWNrRGltZW5zaW9uLCBwO1xuQnJpY2tEaW1lbnNpb24gPSBmdW5jdGlvbiAoeEF4aXMsIHlBeGlzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKHhBeGlzLCB5QXhpcyk7XG59O1xucCA9IEJyaWNrRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHhBeGlzLCB5QXhpcykge1xuICAgIHRoaXMueEF4aXMgPSB4QXhpcyB8fCAzMDtcbiAgICB0aGlzLnlBeGlzID0geUF4aXMgfHwgMzA7XG5cbiAgICBpZiAodGhpcy54QXhpcyAlIDIgPT09IDEgfHwgdGhpcy55QXhpcyAlIDIgPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd4LHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXInKTtcbiAgICB9XG5cbiAgICAvLyB4QXhpcyB8fCB5QXhpcyA9IDQgZmxvb2RGaWxsIGNvdWxkIG5vdCBiZSBhcHBsaWVkXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCB8fCB0aGlzLnlBeGlzIDw9IDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaW1lbnNpb24gaXMgdG9vIHNtYWxsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0JyaWNrRGltZW5zaW9uXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJyaWNrRGltZW5zaW9uO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uID0gcmVxdWlyZSgnLi9BYnN0cmFjdERpbWVuc2lvbicpO1xuXG52YXIgQ3ViZURpbWVuc2lvbiwgcDtcbkN1YmVEaW1lbnNpb24gPSBmdW5jdGlvbiAoeEF4aXMsIHlBeGlzLCB6QXhpcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh4QXhpcywgeUF4aXMsIHpBeGlzKTtcbn07XG5wID0gQ3ViZURpbWVuc2lvbi5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3REaW1lbnNpb24oKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh4QXhpcywgeUF4aXMsIHpBeGlzKSB7XG4gICAgdGhpcy54QXhpcyA9IHhBeGlzIHx8IDMwO1xuICAgIHRoaXMueUF4aXMgPSB5QXhpcyB8fCAzMDtcbiAgICB0aGlzLnpBeGlzID0gekF4aXMgfHwgMzA7XG5cbiAgICBpZiAodGhpcy54QXhpcyAlIDIgPT09IDEgfHwgdGhpcy55QXhpcyAlIDIgPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd4LHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXInKTtcbiAgICB9XG5cbiAgICAvLyB4QXhpcyB8fCB5QXhpcyA9IDQgZmxvb2RGaWxsIGNvdWxkIG5vdCBiZSBhcHBsaWVkXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCB8fCB0aGlzLnlBeGlzIDw9IDQgfHwgdGhpcy56QXhpcyA8PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGltZW5zaW9uIGlzIHRvbyBzbWFsbCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tDdWJlRGltZW5zaW9uXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN1YmVEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBMaW5lWERpbWVuc2lvbiwgcDtcbkxpbmVYRGltZW5zaW9uID0gZnVuY3Rpb24gKGF4aXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYXhpcyk7XG59O1xucCA9IExpbmVYRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHhBeGlzKSB7XG4gICAgdGhpcy54QXhpcyA9IHhBeGlzIHx8IDMwO1xuXG4gICAgaWYgKHRoaXMueEF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneEF4aXMgbXVzdCBiZSBldmVuIG51bWJlcicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnhBeGlzIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbTGluZVhEaW1lbnNpb25dJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZVhEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBMaW5lWURpbWVuc2lvbiwgcDtcbkxpbmVZRGltZW5zaW9uID0gZnVuY3Rpb24gKGF4aXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYXhpcyk7XG59O1xucCA9IExpbmVZRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHlBeGlzKSB7XG4gICAgdGhpcy55QXhpcyA9IHlBeGlzIHx8IDMwO1xuXG4gICAgaWYgKHRoaXMueUF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneUF4aXMgbXVzdCBiZSBldmVuIG51bWJlcicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnlBeGlzIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbTGluZVlEaW1lbnNpb25dJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZVlEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBMaW5lWkRpbWVuc2lvbiwgcDtcbkxpbmVaRGltZW5zaW9uID0gZnVuY3Rpb24gKGF4aXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYXhpcyk7XG59O1xucCA9IExpbmVaRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHpBeGlzKSB7XG4gICAgdGhpcy56QXhpcyA9IHpBeGlzIHx8IDMwO1xuXG4gICAgaWYgKHRoaXMuekF4aXMgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbTGluZVpEaW1lbnNpb25dJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZVpEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBQeXJhbWlkRGltZW5zaW9uLCBwO1xuUHlyYW1pZERpbWVuc2lvbiA9IGZ1bmN0aW9uIChheGlzLCB0YWxsKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGF4aXMsIHRhbGwpO1xufTtcbnAgPSBQeXJhbWlkRGltZW5zaW9uLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdERpbWVuc2lvbigpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGF4aXMsIHRhbGwpIHtcbiAgICB0aGlzLnhBeGlzID0gYXhpcyB8fCAzMDtcbiAgICB0aGlzLnlBeGlzID0gYXhpcyB8fCAzMDtcbiAgICB0aGlzLnRhbGwgPSB0YWxsIHx8IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMueEF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXhpcyBtdXN0IGJlIGV2ZW4gbnVtYmVyJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbUHlyYW1pZERpbWVuc2lvbl0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQeXJhbWlkRGltZW5zaW9uO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uID0gcmVxdWlyZSgnLi9BYnN0cmFjdERpbWVuc2lvbicpO1xuXG52YXIgU2lkZVhEaW1lbnNpb24sIHA7XG5TaWRlWERpbWVuc2lvbiA9IGZ1bmN0aW9uICh4QXhpcywgekF4aXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoeEF4aXMsIHpBeGlzKTtcbn07XG5wID0gU2lkZVhEaW1lbnNpb24ucHJvdG90eXBlID0gbmV3IEFic3RyYWN0RGltZW5zaW9uKCk7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoeEF4aXMsIHpBeGlzKSB7XG4gICAgdGhpcy54QXhpcyA9IHhBeGlzIHx8IDMwO1xuICAgIHRoaXMuekF4aXMgPSB6QXhpcyB8fCAzMDtcblxuICAgIGlmICh0aGlzLnhBeGlzICUgMiA9PT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3hBeGlzIG11c3QgYmUgZXZlbiBudW1iZXInKTtcbiAgICB9XG5cbiAgICAvLyB4QXhpcyB8fCB6QXhpcyA9IDQgZmxvb2RGaWxsIGNvdWxkIG5vdCBiZSBhcHBsaWVkXG4gICAgaWYgKHRoaXMueEF4aXMgPD0gNCB8fCB0aGlzLnpBeGlzIDw9IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaW1lbnNpb24gaXMgdG9vIHNtYWxsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1NpZGVYRGltZW5zaW9uXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVYRGltZW5zaW9uO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEFic3RyYWN0RGltZW5zaW9uID0gcmVxdWlyZSgnLi9BYnN0cmFjdERpbWVuc2lvbicpO1xuXG52YXIgU2lkZVlEaW1lbnNpb24sIHA7XG5cblNpZGVZRGltZW5zaW9uID0gZnVuY3Rpb24gKHlBeGlzLCB6QXhpcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh5QXhpcywgekF4aXMpO1xufTtcbnAgPSBTaWRlWURpbWVuc2lvbi5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3REaW1lbnNpb24oKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh5QXhpcywgekF4aXMpIHtcbiAgICB0aGlzLnlBeGlzID0geUF4aXMgfHwgMzA7XG4gICAgdGhpcy56QXhpcyA9IHpBeGlzIHx8IDMwO1xuXG4gICAgaWYgKHRoaXMueUF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneUF4aXMgbXVzdCBiZSBldmVuIG51bWJlcicpO1xuICAgIH1cblxuICAgIC8vIHlBeGlzIHx8IHpBeGlzID0gNCBmbG9vZEZpbGwgY291bGQgbm90IGJlIGFwcGxpZWRcbiAgICBpZiAodGhpcy55QXhpcyA8PSA0IHx8IHRoaXMuekF4aXMgPD0gMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2lkZVlEaW1lbnNpb25dJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVlEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWJzdHJhY3REaW1lbnNpb24gPSByZXF1aXJlKCcuL0Fic3RyYWN0RGltZW5zaW9uJyk7XG5cbnZhciBTbG9wZURpbWVuc2lvbiwgcDtcblNsb3BlRGltZW5zaW9uID0gZnVuY3Rpb24gKHhBeGlzLCB5QXhpcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh4QXhpcywgeUF4aXMpO1xufTtcbnAgPSBTbG9wZURpbWVuc2lvbi5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3REaW1lbnNpb24oKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh4QXhpcywgeUF4aXMpIHtcbiAgICB0aGlzLnhBeGlzID0geEF4aXMgfHwgMzA7XG4gICAgdGhpcy55QXhpcyA9IHlBeGlzIHx8IDMwO1xuXG4gICAgaWYgKHRoaXMueEF4aXMgJSAyID09PSAxIHx8IHRoaXMueUF4aXMgJSAyID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneEF4aXMgYW5kIHlBeGlzIG11c3QgYmUgZXZlbiBudW1iZXInKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy54QXhpcyA8PSA0IHx8IHRoaXMueUF4aXMgPD0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpbWVuc2lvbiBpcyB0b28gc21hbGwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2xvcGVEaW1lbnNpb25dJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2xvcGVEaW1lbnNpb247XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FudmFzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3V0aWxzL0NhbnZhc01hbmFnZXInKTtcblxudmFyIEJpdG1hcERhdGEsIHA7XG5CaXRtYXBEYXRhID0gZnVuY3Rpb24gKHcsIGgsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUodywgaCwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IEJpdG1hcERhdGEucHJvdG90eXBlO1xuXG4vLyBwdWJsaWMgcHJvcGVydHlcbnAuaW1hZ2VEYXRhID0gbnVsbDtcbnAuY2FudmFzID0gbnVsbDtcbnAuY29udGV4dCA9IG51bGw7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAodywgaCwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIGlmICh3ID09PSB1bmRlZmluZWQgfHwgaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQml0bWFwRGF0YSB3aWR0aCBvciBoZWlnaHQgaXMgbWlzc2luZycpO1xuICAgIH1cblxuICAgIGlmICh1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gQ2FudmFzTWFuYWdlci5nZXREZWZhdWx0Q2FudmFzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBDYW52YXNNYW5hZ2VyLmdldE5ld0NhbnZhcygpO1xuICAgIH1cblxuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3KTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGgpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29udGV4dC5tc0ltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuaW1hZ2VEYXRhID0gdGhpcy5jb250ZXh0LmNyZWF0ZUltYWdlRGF0YSh3LCBoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxucC5zZXRQaXhlbCA9IGZ1bmN0aW9uIChwb3NYLCBwb3NZLCBjb2xvcikge1xuICAgIHZhciBpbmRleCA9IChwb3NZICogdGhpcy5pbWFnZURhdGEud2lkdGggKyBwb3NYKSAqIDQ7XG4gICAgdGhpcy5zZXRQaXhlbEJ5SW5kZXgoaW5kZXgsIGNvbG9yKTtcbn07XG5cbnAuc2V0UGl4ZWxCeUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBjb2xvcikge1xuICAgIHZhciBwaXhlbHMgPSB0aGlzLmltYWdlRGF0YS5kYXRhO1xuXG4gICAgcGl4ZWxzW2luZGV4XSA9IChjb2xvciA+Pj4gMTYpICYgMHhGRjtcbiAgICBwaXhlbHNbaW5kZXggKyAxXSA9IChjb2xvciA+Pj4gOCkgJiAweEZGO1xuICAgIHBpeGVsc1tpbmRleCArIDJdID0gKGNvbG9yID4+PiAwKSAmIDB4RkY7XG4gICAgcGl4ZWxzW2luZGV4ICsgM10gPSAoY29sb3IgPj4+IDI0KSAmIDB4RkY7XG59O1xuXG5wLmNoZWNrUGl4ZWxBdmFpbGFibGUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHZhciBpbmRleCA9ICh5ICogdGhpcy5pbWFnZURhdGEud2lkdGggKyB4KSAqIDQ7XG5cbiAgICByZXR1cm4gdGhpcy5pbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID09PSAwO1xufTtcblxucC5mbG9vZEZpbGwgPSBmdW5jdGlvbiAocG9zWCwgcG9zWSwgY29sb3IpIHtcbiAgICBpZiAoKChjb2xvciA+Pj4gMjQpICYgMHhGRikgPT09IDB4MDApIHtcbiAgICAgICAgLy8gdHJhbnNwYXJlbnQgZmxvb2QgZmlsbFxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHggPSBwb3NYLCB5ID0gcG9zWSxcbiAgICAgICAgc3RhY2sgPSBbXSxcbiAgICAgICAgbm93Q29sID0gW10sXG4gICAgICAgIHByZXZDb2wgPSBbXSxcbiAgICAgICAgY29sLCByb3csIG1hdGNoRmxhZywgbmV3U3RhcnQsXG4gICAgICAgIHcgPSB0aGlzLmltYWdlRGF0YS53aWR0aCxcbiAgICAgICAgaCA9IHRoaXMuaW1hZ2VEYXRhLmhlaWdodCxcbiAgICAgICAgaSwgajtcblxuICAgIC8vIGJvdW5kIHJlYWNoXG4gICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPj0gdyB8fCB5ID49IGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGZpcnN0IHBvaW50IGNoZWNrIGZhaWxcbiAgICBpZiAoIXRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZSh4LCB5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YXJ0IHBvaW50IGZvciBmbG9vZCBmaWxsIGlzIGFscmVhZHkgZmlsbGVkJyk7XG4gICAgfVxuXG4gICAgLy8gbGVmdCBzaWRlIGZsb29kIGZpbGxcbiAgICBmb3IgKGNvbCA9IHg7IGNvbCA+PSAwOyBjb2wgLT0gMSkge1xuICAgICAgICAvLyB0b3Agc2lkZVxuICAgICAgICBmb3IgKHJvdyA9IHk7IHJvdyA+PSAwOyByb3cgLT0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wsIHJvdykpIHtcbiAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGUgcGl4ZWxcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKChyb3cgKiB3ICsgY29sKSAqIDQpO1xuICAgICAgICAgICAgICAgIG5vd0NvbC5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSBpcyBpbnZhbGlkIHBpeGVsICYmIG5vdCBhdCBjb2wgdG9wXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0geSAmJiB0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sICsgMSwgcm93IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBvbmUgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wsIHJvdyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFydCA9IHJvdyAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCArIDEsIHJvdyAtIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnQgPSByb3cgLSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWlsLCBhc3NpZ24gbWF4IHZhbHVlIHRvIGF2b2lkIGxvb3AgYmVsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFydCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSBuZXdTdGFydDsgcm93ID49IDA7IHJvdyAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gYm90dG9tIHNpZGVcbiAgICAgICAgZm9yIChyb3cgPSB5OyByb3cgPCBoOyByb3cgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wsIHJvdykpIHtcbiAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGUgcGl4ZWxcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKChyb3cgKiB3ICsgY29sKSAqIDQpO1xuICAgICAgICAgICAgICAgIG5vd0NvbC5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSBpcyBpbnZhbGlkIHBpeGVsICYmIG5vdCBhdCBjb2wgYm90dG9tXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0geSAmJiB0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sICsgMSwgcm93ICsgMSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IG9uZSBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sICsgMSwgcm93ICsgMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFydCA9IHJvdyArIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhaWwsIGFzc2lnbiBtYXggdmFsdWUgdG8gYXZvaWQgbG9vcCBiZWxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gbmV3U3RhcnQ7IHJvdyA8IGg7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXBhcmUgd2l0aCBwcmV2aW91cyBjb2x1bW5cbiAgICAgICAgLy8gZm9yIGZpcnN0IGNvbHVtblxuICAgICAgICAvLyB0aGUgZ2l2ZW4gcG9pbnQgc2hvdWxkIGJlIGluc2lkZSB0aGUgY29udGFpbmVyXG4gICAgICAgIGlmIChjb2wgPT09IHgpIHtcbiAgICAgICAgICAgIHByZXZDb2wgPSBub3dDb2wuY29uY2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXRjaEZsYWcgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJldkNvbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHByZXZDb2wubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93Q29sW2pdID09PSBwcmV2Q29sW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBwcmV2Q29sW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaEZsYWcpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaEZsYWcpIHtcbiAgICAgICAgICAgIHByZXZDb2wgPSBub3dDb2wuY29uY2F0KCk7XG4gICAgICAgICAgICBub3dDb2wgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJvdW5kIHJlYWNoXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0IHN0YXJ0IHBvaW50XG4gICAgeCA9IHBvc1g7XG4gICAgeSA9IHBvc1k7XG4gICAgcHJldkNvbCA9IFtdO1xuICAgIG5vd0NvbCA9IFtdO1xuXG4gICAgLy8gcmlnaHQgc2lkZSBmbG9vZCBmaWxsXG4gICAgZm9yIChjb2wgPSB4OyBjb2wgPCB3OyBjb2wgKz0gMSkge1xuXG4gICAgICAgIC8vIHRvcCBzaWRlXG4gICAgICAgIGZvciAocm93ID0geTsgcm93ID49IDA7IHJvdyAtPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lIGlzIGludmFsaWQgcGl4ZWwgJiYgbm90IGF0IGNvbCB0b3BcbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSB5ICYmIHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wgLSAxLCByb3cgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IG9uZSBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sIC0gMSwgcm93IC0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFydCA9IHJvdyAtIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhaWwsIGFzc2lnbiBtYXggdmFsdWUgdG8gYXZvaWQgbG9vcCBiZWxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IG5ld1N0YXJ0OyByb3cgPj0gMDsgcm93IC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgocm93ICogdyArIGNvbCkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dDb2wucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYm90dG9tIHNpZGVcbiAgICAgICAgZm9yIChyb3cgPSB5OyByb3cgPCBoOyByb3cgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQaXhlbEF2YWlsYWJsZShjb2wsIHJvdykpIHtcbiAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGUgcGl4ZWxcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKChyb3cgKiB3ICsgY29sKSAqIDQpO1xuICAgICAgICAgICAgICAgIG5vd0NvbC5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSBpcyBpbnZhbGlkIHBpeGVsICYmIG5vdCBhdCBjb2wgYm90dG9tXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0geSAmJiB0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sIC0gMSwgcm93ICsgMSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IG9uZSBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gcm93ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGl4ZWxBdmFpbGFibGUoY29sIC0gMSwgcm93ICsgMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFydCA9IHJvdyArIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhaWwsIGFzc2lnbiBtYXggdmFsdWUgdG8gYXZvaWQgbG9vcCBiZWxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gbmV3U3RhcnQ7IHJvdyA8IGg7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BpeGVsQXZhaWxhYmxlKGNvbCwgcm93KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZSBwaXhlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goKHJvdyAqIHcgKyBjb2wpICogNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93Q29sLnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXBhcmUgd2l0aCBwcmV2aW91cyBjb2x1bW5cbiAgICAgICAgLy8gZm9yIGZpcnN0IGNvbHVtblxuICAgICAgICAvLyB0aGUgZ2l2ZW4gcG9pbnQgc2hvdWxkIGJlIGluc2lkZSB0aGUgY29udGFpbmVyXG4gICAgICAgIGlmIChjb2wgPT09IHgpIHtcbiAgICAgICAgICAgIHByZXZDb2wgPSBub3dDb2wuY29uY2F0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXRjaEZsYWcgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJldkNvbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHByZXZDb2wubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93Q29sW2pdID09PSBwcmV2Q29sW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBwcmV2Q29sW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaEZsYWcpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaEZsYWcpIHtcbiAgICAgICAgICAgIHByZXZDb2wgPSBub3dDb2wuY29uY2F0KCk7XG4gICAgICAgICAgICBub3dDb2wgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJvdW5kIHJlYWNoXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpbGwgaW1hZ2UgZGF0YVxuICAgIGZvciAoaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLnNldFBpeGVsQnlJbmRleChzdGFja1tpXSwgY29sb3IpO1xuICAgIH1cbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbQml0bWFwRGF0YV0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCaXRtYXBEYXRhO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFBvaW50M0QgPSByZXF1aXJlKCcuLi9nZW9tL1BvaW50M0QnKTtcblxudmFyIFBpeGVsT2JqZWN0LCBwO1xuUGl4ZWxPYmplY3QgPSBmdW5jdGlvbiAocHJpbWl0aXZlLCBwb2ludDNEKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKHByaW1pdGl2ZSwgcG9pbnQzRCk7XG59O1xucCA9IFBpeGVsT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAueCA9IG51bGw7XG5wLnkgPSBudWxsO1xucC5jYW52YXMgPSBudWxsO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHByaW1pdGl2ZSwgcG9pbnQzRCkge1xuICAgIGlmICghcHJpbWl0aXZlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJpbWl0aXZlIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIHAzRCA9IHBvaW50M0QgfHwgbmV3IFBvaW50M0QoKTtcblxuICAgIHRoaXMuY2FudmFzID0gcHJpbWl0aXZlLmNhbnZhcztcbiAgICB0aGlzLnggPSBwcmltaXRpdmUubWF0cml4LnR4ICsgcDNELnggLSBwM0QueTtcbiAgICB0aGlzLnkgPSBwcmltaXRpdmUubWF0cml4LnR5ICsgTWF0aC5mbG9vcihwM0QueCAvIDIgKyBwM0QueSAvIDIpIC0gcDNELno7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbUGl4ZWxPYmplY3RdJztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kc1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBpeGVsT2JqZWN0O1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG4vKmdsb2JhbCBqUXVlcnk6dHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFBvaW50ID0gcmVxdWlyZSgnLi4vZ2VvbS9Qb2ludCcpO1xudmFyIFBpeGVsT2JqZWN0ID0gcmVxdWlyZSgnLi4vZGlzcGxheS9QaXhlbE9iamVjdCcpO1xuXG52YXIgUGl4ZWxWaWV3LCBwO1xuUGl4ZWxWaWV3ID0gZnVuY3Rpb24gKGNhbnZhcywgcG9pbnQpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoY2FudmFzLCBwb2ludCk7XG59O1xucCA9IFBpeGVsVmlldy5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLmNhbnZhcyA9IG51bGw7XG5wLmNvbnRleHQgPSBudWxsO1xucC5wb2ludCA9IG51bGw7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoY2FudmFzLCBwb2ludCkge1xuICAgIGlmICghY2FudmFzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FudmFzIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICAgICAgY2FudmFzID0gY2FudmFzLmdldCgwKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgIH1cblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmNvbnRleHQubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jb250ZXh0Lm1zSW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5wb2ludCA9IHBvaW50IHx8IG5ldyBQb2ludCgwLCAwKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAucmVuZGVyT2JqZWN0ID0gZnVuY3Rpb24gKHByaW1pdGl2ZSwgcG9pbnQzRCkge1xuICAgIHZhciBwbyA9IG5ldyBQaXhlbE9iamVjdChwcmltaXRpdmUsIHBvaW50M0QpO1xuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UocG8uY2FudmFzLCB0aGlzLnBvaW50LnggKyBwby54LCB0aGlzLnBvaW50LnkgKyBwby55KTtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9pbnQueCArIHBvLngsICB0aGlzLnBvaW50LnkgKyBwby55KVxufTtcblxucC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tQaXhlbFZpZXddJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGl4ZWxWaWV3O1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIE1hdHJpeCwgcDtcbk1hdHJpeCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoYSwgYiwgYywgZCwgdHgsIHR5KTtcbn07XG5wID0gTWF0cml4LnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXM6XG4vKipcbiAqIFBvc2l0aW9uICgwLCAwKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgYVxuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLmEgPSAxO1xuXG4vKipcbiAqIFBvc2l0aW9uICgwLCAxKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgYlxuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLmIgPSAwO1xuXG4vKipcbiAqIFBvc2l0aW9uICgxLCAwKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgY1xuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLmMgPSAwO1xuXG4vKipcbiAqIFBvc2l0aW9uICgxLCAxKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgZFxuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLmQgPSAxO1xuXG4vKipcbiAqIFBvc2l0aW9uICgyLCAwKSBpbiBhIDN4MyBtYXRyaXguXG4gKiBAcHJvcGVydHkgdHhcbiAqIEB0eXBlIE51bWJlclxuICoqL1xucC50eCA9IDA7XG5cbi8qKlxuICogUG9zaXRpb24gKDIsIDEpIGluIGEgM3gzIG1hdHJpeC5cbiAqIEBwcm9wZXJ0eSB0eVxuICogQHR5cGUgTnVtYmVyXG4gKiovXG5wLnR5ID0gMDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgICB0aGlzLmEgPSAoYSA9PT0gdW5kZWZpbmVkKSA/IDEgOiBhO1xuICAgIHRoaXMuYiA9IGIgfHwgMDtcbiAgICB0aGlzLmMgPSBjIHx8IDA7XG4gICAgdGhpcy5kID0gKGQgPT09IHVuZGVmaW5lZCkgPyAxIDogZDtcbiAgICB0aGlzLnR4ID0gdHggfHwgMDtcbiAgICB0aGlzLnR5ID0gdHkgfHwgMDtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbTWF0cml4XSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHJpeDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQb2ludCwgcDtcblBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoeCwgeSk7XG59O1xucCA9IFBvaW50LnByb3RvdHlwZTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcbnAueCA9IDA7XG5wLnkgPSAwO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB0aGlzLnggPSAoeCA9PT0gdW5kZWZpbmVkID8gMCA6IHgpO1xuICAgIHRoaXMueSA9ICh5ID09PSB1bmRlZmluZWQgPyAwIDogeSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1BvaW50IHggOiAnICsgdGhpcy54ICsgJywgeSA6ICcgKyB0aGlzLnkgKyAnXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xuXG52YXIgUG9pbnQzRCwgcDtcblBvaW50M0QgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh4LCB5LCB6KTtcbn07XG5wID0gUG9pbnQzRC5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLnggPSAwO1xucC55ID0gMDtcbnAueiA9IDA7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgIHRoaXMueCA9ICh4ID09PSB1bmRlZmluZWQgPyAwIDogeCk7XG4gICAgdGhpcy55ID0gKHkgPT09IHVuZGVmaW5lZCA/IDAgOiB5KTtcbiAgICB0aGlzLnogPSAoeiA9PT0gdW5kZWZpbmVkID8gMCA6IHopO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b0dsb2JhbENvb3JkaW5hdGVzID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgIHZhciBwMkQgPSBuZXcgUG9pbnQoXG4gICAgICAgIHRoaXMueCAtIHRoaXMueSxcbiAgICAgICAgTWF0aC5mbG9vcih0aGlzLnggLyAyICsgdGhpcy55IC8gMikgLSB0aGlzLnpcbiAgICApO1xuXG4gICAgaWYgKG9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHAyRC54ID0gcDJELnggKyBvZmZzZXQueDtcbiAgICAgICAgcDJELnkgPSBwMkQueSArIG9mZnNldC55O1xuICAgIH1cblxuICAgIHJldHVybiBwMkQ7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1BvaW50M0QgeCA6ICcgKyB0aGlzLnggKyAnLCB5IDogJyArIHRoaXMueSArICcsIHo6ICcgKyB0aGlzLnogKyAnXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50M0Q7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cbi8qZ2xvYmFsIHdpbmRvdzp0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBuYW1lc3BhY2Ugb2JlbGlza1xuICoqL1xudmFyIG9iZWxpc2sgPSB7fTtcblxub2JlbGlzay5DdWJlID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL0N1YmUnKTtcbm9iZWxpc2suQnJpY2sgPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvQnJpY2snKTtcbm9iZWxpc2suUHlyYW1pZCA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9QeXJhbWlkJyk7XG5vYmVsaXNrLkxpbmVYID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL0xpbmVYJyk7XG5vYmVsaXNrLkxpbmVZID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL0xpbmVZJyk7XG5vYmVsaXNrLkxpbmVaID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL0xpbmVaJyk7XG5vYmVsaXNrLlNpZGVYID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL1NpZGVYJyk7XG5vYmVsaXNrLlNpZGVZID0gcmVxdWlyZSgnLi9wcmltaXRpdmVzL1NpZGVZJyk7XG5vYmVsaXNrLlNsb3BlRWFzdCA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9TbG9wZUVhc3QnKTtcbm9iZWxpc2suU2xvcGVOb3J0aCA9IHJlcXVpcmUoJy4vcHJpbWl0aXZlcy9TbG9wZU5vcnRoJyk7XG5vYmVsaXNrLlNsb3BlU291dGggPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvU2xvcGVTb3V0aCcpO1xub2JlbGlzay5TbG9wZVdlc3QgPSByZXF1aXJlKCcuL3ByaW1pdGl2ZXMvU2xvcGVXZXN0Jyk7XG5cbm9iZWxpc2suQ29sb3JQYXR0ZXJuID0gcmVxdWlyZSgnLi91dGlscy9Db2xvclBhdHRlcm4nKTtcbm9iZWxpc2suQ29sb3JHZW9tID0gcmVxdWlyZSgnLi91dGlscy9Db2xvckdlb20nKTtcbm9iZWxpc2suQ2FudmFzTWFuYWdlciA9IHJlcXVpcmUoJy4vdXRpbHMvQ2FudmFzTWFuYWdlcicpO1xub2JlbGlzay5DYW52YXNUb29sID0gcmVxdWlyZSgnLi91dGlscy9DYW52YXNUb29sJyk7XG5cbm9iZWxpc2suTWF0cml4ID0gcmVxdWlyZSgnLi9nZW9tL01hdHJpeCcpO1xub2JlbGlzay5Qb2ludCA9IHJlcXVpcmUoJy4vZ2VvbS9Qb2ludCcpO1xub2JlbGlzay5Qb2ludDNEID0gcmVxdWlyZSgnLi9nZW9tL1BvaW50M0QnKTtcblxub2JlbGlzay5QaXhlbFZpZXcgPSByZXF1aXJlKCcuL2Rpc3BsYXkvUGl4ZWxWaWV3Jyk7XG5vYmVsaXNrLlBpeGVsT2JqZWN0ID0gcmVxdWlyZSgnLi9kaXNwbGF5L1BpeGVsT2JqZWN0Jyk7XG5vYmVsaXNrLkJpdG1hcERhdGEgPSByZXF1aXJlKCcuL2Rpc3BsYXkvQml0bWFwRGF0YScpO1xuXG5vYmVsaXNrLkJyaWNrRGltZW5zaW9uID0gcmVxdWlyZSgnLi9kaW1lbnNpb25zL0JyaWNrRGltZW5zaW9uJyk7XG5vYmVsaXNrLkN1YmVEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvQ3ViZURpbWVuc2lvbicpO1xub2JlbGlzay5QeXJhbWlkRGltZW5zaW9uID0gcmVxdWlyZSgnLi9kaW1lbnNpb25zL1B5cmFtaWREaW1lbnNpb24nKTtcbm9iZWxpc2suTGluZVhEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvTGluZVhEaW1lbnNpb24nKTtcbm9iZWxpc2suTGluZVlEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvTGluZVlEaW1lbnNpb24nKTtcbm9iZWxpc2suTGluZVpEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvTGluZVpEaW1lbnNpb24nKTtcbm9iZWxpc2suU2lkZVhEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvU2lkZVhEaW1lbnNpb24nKTtcbm9iZWxpc2suU2lkZVlEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvU2lkZVlEaW1lbnNpb24nKTtcbm9iZWxpc2suU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuL2RpbWVuc2lvbnMvU2xvcGVEaW1lbnNpb24nKTtcblxub2JlbGlzay5MaW5lQ29sb3IgPSByZXF1aXJlKCcuL2NvbG9ycy9MaW5lQ29sb3InKTtcbm9iZWxpc2suQ3ViZUNvbG9yID0gcmVxdWlyZSgnLi9jb2xvcnMvQ3ViZUNvbG9yJyk7XG5vYmVsaXNrLlB5cmFtaWRDb2xvciA9IHJlcXVpcmUoJy4vY29sb3JzL1B5cmFtaWRDb2xvcicpO1xub2JlbGlzay5TaWRlQ29sb3IgPSByZXF1aXJlKCcuL2NvbG9ycy9TaWRlQ29sb3InKTtcbm9iZWxpc2suU2xvcGVDb2xvciA9IHJlcXVpcmUoJy4vY29sb3JzL1Nsb3BlQ29sb3InKTtcblxud2luZG93Lm9iZWxpc2sgPSBvYmVsaXNrO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9iZWxpc2s7XG5cbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBYnN0cmFjdFByaW1pdGl2ZSwgcDtcbkFic3RyYWN0UHJpbWl0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xufTtcbnAgPSBBYnN0cmFjdFByaW1pdGl2ZS5wcm90b3R5cGU7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG4vKipcbiAqIHRoZSBjYW52YXMgZm9yIGRyYXdJbWFnZSB0byBhbnkgY2FudmFzXG4gKi9cbnAuY2FudmFzID0gbnVsbDtcblxuLy8gcHJvdGVjdCBwcm9wZXJ0aWVzXG4vKipcbiAqIHRoZSB3aWR0aCBvZiB0aGUgYml0bWFwIGluIDJkIGZsYXNoIGNvb3JkaW5hdGVcbiAqL1xucC53ID0gbnVsbDtcblxuLyoqXG4gKiB0aGUgaGVpZ2h0IG9mIHRoZSBiaXRtYXAgaW4gMmQgZmxhc2ggY29vcmRpbmF0ZVxuICovXG5wLmggPSBudWxsO1xuXG4vKipcbiAqIHRoZSBkaW1lbnNpb24gb2YgcHJpbWl0aXZlIGluIDNkIHBpeGVsIGNvb3JkaW5hdGVcbiAqL1xucC5kaW1lbnNpb24gPSBudWxsO1xuXG4vKipcbiAqIHRoZSBjb2xvciBvYmogb2YgdGhlIHByaW1pdGl2ZVxuICovXG5wLmNvbG9yID0gbnVsbDtcblxuLyoqXG4gKiB0aGUgYm9yZGVyIG9wdGlvbiBvZiB0aGUgcHJpbWl0aXZlXG4gKi9cbnAuYm9yZGVyID0gbnVsbDtcblxuLyoqXG4gKiB0aGUgc291cmNlIGJpdG1hcGRhdGEgY29udGFpbnMgcGl4ZWwgZ3JhcGhpY1xuICovXG5wLmJpdG1hcERhdGEgPSBudWxsO1xuXG4vKipcbiAqIHRoZSBwcmVzZXJ2ZSBjYW52YXMgb3B0aW9uXG4gKi9cbnAudXNlRGVmYXVsdENhbnZhcyA9IG51bGw7XG5cbi8qKlxuICogdGhlIG1hdHJpeCBvZmZzZXQgYmV0d2VlbiB0aGUgYml0bWFwIGFuZCB0aGUgM2QgcGl4ZWwgY29vcmRpbmF0ZSBaRVJPIHBvaW50XG4gKi9cbnAubWF0cml4ID0gbnVsbDtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0Fic3RyYWN0UHJpbWl0aXZlXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0UHJpbWl0aXZlO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEJyaWNrRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9Ccmlja0RpbWVuc2lvbicpO1xudmFyIFNpZGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TaWRlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcblxudmFyIEJyaWNrLCBwO1xuQnJpY2sgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IEJyaWNrLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IEJyaWNrRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgU2lkZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzO1xuICAgIHRoaXMuaCA9ICh0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzKSAvIDI7XG5cbiAgICAvLyAyMi42IGRlZ3JlZXMgaW1wbGVtZW50YXRpb25cbiAgICB0aGlzLncgLT0gMjtcbiAgICB0aGlzLmggLT0gMTtcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLXRoaXMuZGltZW5zaW9uLnlBeGlzICsgMjtcbiAgICB0aGlzLm1hdHJpeC50eSA9IDA7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5iaXRtYXBEYXRhLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeE9mZnNldElubmVyLCB5T2Zmc2V0SW5uZXIsIHhPZmZzZXRPdXQsIHlPZmZzZXRPdXQsIGksIGosIGJvcmRlckNvbG9yO1xuXG4gICAgeE9mZnNldElubmVyID0gdGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyO1xuICAgIHlPZmZzZXRJbm5lciA9IDA7XG4gICAgeE9mZnNldE91dCA9IHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMTtcbiAgICB5T2Zmc2V0T3V0ID0gdGhpcy5oIC0gMTtcbiAgICBib3JkZXJDb2xvciA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmlubmVyO1xuXG4gICAgLy94IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueEF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldElubmVyICsgaSwgeU9mZnNldElubmVyICsgTWF0aC5mbG9vcihpIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRPdXQgLSBpLCB5T2Zmc2V0T3V0IC0gTWF0aC5mbG9vcihpIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICB9XG5cbiAgICAvL3kgYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi55QXhpczsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0SW5uZXIgKyAxIC0gaiwgeU9mZnNldElubmVyICsgTWF0aC5mbG9vcihqIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRPdXQgLSAxICsgaiwgeU9mZnNldE91dCAtIE1hdGguZmxvb3IoaiAvIDIpLCBib3JkZXJDb2xvcik7XG4gICAgfVxuXG4gICAgLy9maWxsIGFuIHBpeGVsIGdyYXBoaWMgZW5jbG9zZWRcbiAgICB0aGlzLmJpdG1hcERhdGEuZmxvb2RGaWxsKE1hdGguZmxvb3IodGhpcy53IC8gMiksIE1hdGguZmxvb3IodGhpcy5oIC8gMiksIHRoaXMuY29sb3IuaW5uZXIpO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbQnJpY2tdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQnJpY2s7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3ViZURpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvQ3ViZURpbWVuc2lvbicpO1xudmFyIEJyaWNrRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9Ccmlja0RpbWVuc2lvbicpO1xudmFyIFNpZGVYRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9TaWRlWERpbWVuc2lvbicpO1xudmFyIFNpZGVZRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9TaWRlWURpbWVuc2lvbicpO1xudmFyIEN1YmVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9DdWJlQ29sb3InKTtcbnZhciBTaWRlQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvU2lkZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBQaXhlbE9iamVjdCA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvUGl4ZWxPYmplY3QnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG52YXIgQnJpY2sgPSByZXF1aXJlKCcuL0JyaWNrJyk7XG52YXIgU2lkZVggPSByZXF1aXJlKCcuL1NpZGVYJyk7XG52YXIgU2lkZVkgPSByZXF1aXJlKCcuL1NpZGVZJyk7XG5cbnZhciBDdWJlLCBwO1xuQ3ViZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gQ3ViZS5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBDdWJlRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgQ3ViZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzO1xuICAgIHRoaXMuaCA9IHRoaXMuZGltZW5zaW9uLnpBeGlzICsgKHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXMpIC8gMjtcblxuICAgIC8vIDIyLjYgZGVncmVlcyBpbXBsZW1lbnRhdGlvblxuICAgIHRoaXMudyAtPSAyO1xuICAgIHRoaXMuaCAtPSAxO1xuXG4gICAgLy8gdGhlIG1hdHJpeCBvZmZzZXQgYmV0d2VlbiB0aGUgYml0bWFwIGFuZCB0aGUgM2QgcGl4ZWwgY29vcmRpbmF0ZSBaRVJPIHBvaW50XG4gICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0cml4KCk7XG4gICAgdGhpcy5tYXRyaXgudHggPSAtdGhpcy5kaW1lbnNpb24ueUF4aXMgKyAyO1xuICAgIHRoaXMubWF0cml4LnR5ID0gLXRoaXMuZGltZW5zaW9uLnpBeGlzO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYnJpY2ssIHNpZGVYLCBzaWRlWSwgcG9CcmljaywgcG9YLCBwb1ksIGN0eCwgYm1kLCBvZmZzZXRYLCBvZmZzZXRZLFxuICAgICAgICBpLCBqLCBrO1xuICAgIC8vIGhvcml6b250YWwgbGF5ZXJcbiAgICBicmljayA9IG5ldyBCcmljayhcbiAgICAgICAgbmV3IEJyaWNrRGltZW5zaW9uKHRoaXMuZGltZW5zaW9uLnhBeGlzLCB0aGlzLmRpbWVuc2lvbi55QXhpcyksXG4gICAgICAgIG5ldyBTaWRlQ29sb3IodGhpcy5jb2xvci5ib3JkZXIsIHRoaXMuY29sb3IuaG9yaXpvbnRhbCksXG4gICAgICAgIHRoaXMuYm9yZGVyXG4gICAgKTtcblxuICAgIC8vIGxlZnQgc2lkZVxuICAgIHNpZGVYID0gbmV3IFNpZGVYKFxuICAgICAgICBuZXcgU2lkZVhEaW1lbnNpb24odGhpcy5kaW1lbnNpb24ueEF4aXMsIHRoaXMuZGltZW5zaW9uLnpBeGlzKSxcbiAgICAgICAgbmV3IFNpZGVDb2xvcih0aGlzLmNvbG9yLmJvcmRlciwgdGhpcy5jb2xvci5sZWZ0KSxcbiAgICAgICAgdGhpcy5ib3JkZXJcbiAgICApO1xuXG4gICAgLy8gcmlnaHQgc2lkZVxuICAgIHNpZGVZID0gbmV3IFNpZGVZKFxuICAgICAgICBuZXcgU2lkZVlEaW1lbnNpb24odGhpcy5kaW1lbnNpb24ueUF4aXMsIHRoaXMuZGltZW5zaW9uLnpBeGlzKSxcbiAgICAgICAgbmV3IFNpZGVDb2xvcih0aGlzLmNvbG9yLmJvcmRlciwgdGhpcy5jb2xvci5yaWdodCksXG4gICAgICAgIHRoaXMuYm9yZGVyXG4gICAgKTtcblxuICAgIHBvQnJpY2sgPSBuZXcgUGl4ZWxPYmplY3QoYnJpY2spO1xuICAgIHBvWCA9IG5ldyBQaXhlbE9iamVjdChzaWRlWCk7XG4gICAgcG9ZID0gbmV3IFBpeGVsT2JqZWN0KHNpZGVZKTtcblxuICAgIGN0eCA9IHRoaXMuYml0bWFwRGF0YS5jb250ZXh0O1xuICAgIGN0eC5kcmF3SW1hZ2UocG9Ccmljay5jYW52YXMsIHBvQnJpY2sueCArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMiwgcG9Ccmljay55KTtcbiAgICBjdHguZHJhd0ltYWdlKHBvWC5jYW52YXMsIHBvWC54LCBwb1gueSArIHRoaXMuZGltZW5zaW9uLnpBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyIC0gMSk7XG4gICAgY3R4LmRyYXdJbWFnZShwb1kuY2FudmFzLCBwb1kueCArIHRoaXMudyAtIDIsIHBvWC55ICsgdGhpcy5kaW1lbnNpb24uekF4aXMgKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgLSAxKTtcblxuICAgIC8vIGhpZ2hsaWdodCAmIGhpZ2hsaWdodCBmaXhcbiAgICBibWQgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCk7XG5cbiAgICBpZiAodGhpcy5ib3JkZXIpIHtcbiAgICAgICAgb2Zmc2V0WCA9IHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMjtcbiAgICAgICAgb2Zmc2V0WSA9ICh0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzKSAvIDIgLSAyO1xuXG4gICAgICAgIC8vdGhlIDJweCBpbiBib3VuZGluZyB3aXRob3V0IGhpZ2h0bGlnaHRcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMjsgaSArPSAxKSB7XG4gICAgICAgICAgICBibWQuc2V0UGl4ZWwob2Zmc2V0WCArIDEgLSBpLCBvZmZzZXRZIC0gTWF0aC5mbG9vcihpIC8gMiksIHRoaXMuY29sb3IuYm9yZGVySGlnaGxpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhlIDJweCBpbiBib3VuZGluZyB3aXRob3V0IGhpZ2h0bGlnaHRcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMjsgaiArPSAxKSB7XG4gICAgICAgICAgICBibWQuc2V0UGl4ZWwob2Zmc2V0WCArIGosIG9mZnNldFkgLSBNYXRoLmZsb29yKGogLyAyKSwgdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IHRoaXMuZGltZW5zaW9uLnpBeGlzOyBrICs9IDEpIHtcbiAgICAgICAgICAgIGJtZC5zZXRQaXhlbChvZmZzZXRYLCBvZmZzZXRZICsgaywgdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnpBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJtZC5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsICh0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzKSAvIDIgLSAxICsgaSwgdGhpcy5jb2xvci5sZWZ0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBibWQuY29udGV4dC5wdXRJbWFnZURhdGEoYm1kLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgY3R4LmRyYXdJbWFnZShibWQuY2FudmFzLCAwLCAwKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0N1YmVdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZTtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBMaW5lWERpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvTGluZVhEaW1lbnNpb24nKTtcbnZhciBMaW5lQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvTGluZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBMaW5lWCwgcDtcbkxpbmVYID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IExpbmVYLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IExpbmVYRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgTGluZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi54QXhpcztcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IDA7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAwO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5cbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5iaXRtYXBEYXRhLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeE9mZnNldEJvcmRlciwgeU9mZnNldEJvcmRlciwgaSwgYm9yZGVyQ29sb3I7XG5cbiAgICB4T2Zmc2V0Qm9yZGVyID0gMDtcbiAgICB5T2Zmc2V0Qm9yZGVyID0gMDtcbiAgICBib3JkZXJDb2xvciA9IHRoaXMuY29sb3IuYm9yZGVyO1xuXG4gICAgLy94IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueEF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldEJvcmRlciArIGksIHlPZmZzZXRCb3JkZXIgKyBNYXRoLmZsb29yKGkgLyAyKSwgYm9yZGVyQ29sb3IpO1xuICAgIH1cbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0xpbmVYXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVYO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIExpbmVZRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9MaW5lWURpbWVuc2lvbicpO1xudmFyIExpbmVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9MaW5lQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcblxudmFyIExpbmVZLCBwO1xuTGluZVkgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gTGluZVkucHJvdG90eXBlID0gbmV3IEFic3RyYWN0UHJpbWl0aXZlKCk7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgTGluZVlEaW1lbnNpb24oKSA6IGRpbWVuc2lvbjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IG5ldyBMaW5lQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnlBeGlzO1xuICAgIHRoaXMuaCA9IHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMjtcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLXRoaXMuZGltZW5zaW9uLnlBeGlzICsgMjtcbiAgICB0aGlzLm1hdHJpeC50eSA9IDA7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcblxucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4T2Zmc2V0Qm9yZGVyLCB5T2Zmc2V0Qm9yZGVyLCBpLCBib3JkZXJDb2xvcjtcblxuICAgIHhPZmZzZXRCb3JkZXIgPSB0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDE7XG4gICAgeU9mZnNldEJvcmRlciA9IDA7XG4gICAgYm9yZGVyQ29sb3IgPSB0aGlzLmNvbG9yLmJvcmRlcjtcblxuICAgIC8veSBheGlzXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnlBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0Qm9yZGVyIC0gaSwgeU9mZnNldEJvcmRlciArIE1hdGguZmxvb3IoaSAvIDIpLCBib3JkZXJDb2xvcik7XG4gICAgfVxufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbTGluZVldJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZVk7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgTGluZVpEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL0xpbmVaRGltZW5zaW9uJyk7XG52YXIgTGluZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL0xpbmVDb2xvcicpO1xudmFyIE1hdHJpeCA9IHJlcXVpcmUoJy4uL2dlb20vTWF0cml4Jyk7XG52YXIgQml0bWFwRGF0YSA9IHJlcXVpcmUoJy4uL2Rpc3BsYXkvQml0bWFwRGF0YScpO1xudmFyIEFic3RyYWN0UHJpbWl0aXZlID0gcmVxdWlyZSgnLi9BYnN0cmFjdFByaW1pdGl2ZScpO1xuXG52YXIgTGluZVosIHA7XG5MaW5lWiA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBMaW5lWi5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBMaW5lWkRpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IExpbmVDb2xvcigpIDogY29sb3I7XG59O1xuXG5wLmluaXRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ID0gMTtcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi56QXhpcztcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gMDtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC10aGlzLmRpbWVuc2lvbi56QXhpcyArIDE7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcblxucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4T2Zmc2V0Qm9yZGVyLCB5T2Zmc2V0Qm9yZGVyLCBpLCBib3JkZXJDb2xvcjtcblxuICAgIHhPZmZzZXRCb3JkZXIgPSAwO1xuICAgIHlPZmZzZXRCb3JkZXIgPSAwO1xuICAgIGJvcmRlckNvbG9yID0gdGhpcy5jb2xvci5ib3JkZXI7XG5cbiAgICAvL3kgYXhpc1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRpbWVuc2lvbi56QXhpczsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0Qm9yZGVyLCB5T2Zmc2V0Qm9yZGVyICsgaSwgYm9yZGVyQ29sb3IpO1xuICAgIH1cbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0xpbmVaXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVaO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFB5cmFtaWREaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1B5cmFtaWREaW1lbnNpb24nKTtcbnZhciBQeXJhbWlkQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvUHlyYW1pZENvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBQeXJhbWlkLCBwO1xuUHlyYW1pZCA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gUHlyYW1pZC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gcHJpdmF0ZSBwcm9wZXJ0aWVzXG5wLmhTaXplID0gbnVsbDtcbnAuaE9mZnNldCA9IG51bGw7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyIHx8IGJvcmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgUHlyYW1pZERpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFB5cmFtaWRDb2xvcigpIDogY29sb3I7XG5cbiAgICB0aGlzLmhTaXplID0gdGhpcy5kaW1lbnNpb24udGFsbCA/IHRoaXMuZGltZW5zaW9uLnhBeGlzICogMiA6IHRoaXMuZGltZW5zaW9uLnhBeGlzO1xuICAgIHRoaXMuaE9mZnNldCA9IHRoaXMuZGltZW5zaW9uLnRhbGwgPyAtMyA6IC0yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5oU2l6ZSArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMjtcblxuICAgIC8vIDIyLjYgZGVncmVlcyBpbXBsZW1lbnRhdGlvblxuICAgIHRoaXMudyAtPSAyO1xuICAgIHRoaXMuaCArPSB0aGlzLmhPZmZzZXQ7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC10aGlzLmRpbWVuc2lvbi54QXhpcyArIDI7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAtdGhpcy5oU2l6ZSAvIDIgKyAyIC0gKHRoaXMuZGltZW5zaW9uLnRhbGwgPyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgOiAxKTtcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvckJvcmRlckxlZnQsIGNvbG9yQm9yZGVyUmlnaHQsIGNvbG9yQm9yZGVySGlnaGxpZ2h0LFxuICAgICAgICBpLCBqLCBrLCBsMSwgbTEsIGwyLCBtMjtcblxuICAgIGNvbG9yQm9yZGVyTGVmdCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmxlZnQ7XG4gICAgY29sb3JCb3JkZXJSaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLnJpZ2h0O1xuXG4gICAgY29sb3JCb3JkZXJIaWdobGlnaHQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVySGlnaGxpZ2h0IDogY29sb3JCb3JkZXJMZWZ0O1xuXG4gICAgLy96IGF4aXMgfHwgaGlnaHRsaWdodFxuICAgIGZvciAoayA9IDA7IGsgPCB0aGlzLmhTaXplICsgdGhpcy5kaW1lbnNpb24ueEF4aXMgLyAyIC0gNDsgayArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIGsgKyAzICsgdGhpcy5oT2Zmc2V0LCBjb2xvckJvcmRlckhpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgLy94IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueEF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoaSwgdGhpcy5oU2l6ZSArIE1hdGguZmxvb3IoaSAvIDIpICsgdGhpcy5oT2Zmc2V0LCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8veSBheGlzXG4gICAgZm9yIChqID0gMDsgaiA8IHRoaXMuZGltZW5zaW9uLnhBeGlzOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKGogKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIHRoaXMuaFNpemUgKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgLSBNYXRoLmZsb29yKGogLyAyKSAtIDEgKyB0aGlzLmhPZmZzZXQsIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kaW1lbnNpb24udGFsbCkge1xuICAgICAgICAvL2xlZnQgZWRnZVxuICAgICAgICBmb3IgKGwxID0gMDsgbDEgPCB0aGlzLmhTaXplOyBsMSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwobDEsIHRoaXMuaFNpemUgLSBsMSArIHRoaXMuaE9mZnNldCwgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcmlnaHQgZWRnZVxuICAgICAgICBmb3IgKG0xID0gMDsgbTEgPCB0aGlzLmhTaXplOyBtMSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwobTEgKyB0aGlzLmhTaXplIC0gMiwgbTEgKyAxICsgdGhpcy5oT2Zmc2V0LCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vbGVmdCBlZGdlXG4gICAgICAgIGZvciAobDIgPSAwOyBsMiA8IHRoaXMuaFNpemUgLSAyOyBsMiArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoTWF0aC5mbG9vcihsMiAvIDIpLCB0aGlzLmhTaXplIC0gbDIgKyB0aGlzLmhPZmZzZXQsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3JpZ2h0IGVkZ2VcbiAgICAgICAgZm9yIChtMiA9IDI7IG0yIDwgdGhpcy5oU2l6ZTsgbTIgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKE1hdGguZmxvb3IobTIgLyAyKSArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgbTIgKyAxICsgdGhpcy5oT2Zmc2V0LCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5ib3JkZXIpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgdGhpcy5oU2l6ZSArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiAtIDEgKyB0aGlzLmhPZmZzZXQsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgfVxuXG4gICAgLy9mbG9vZGZpbGxcbiAgICB0aGlzLmJpdG1hcERhdGEuZmxvb2RGaWxsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMSwgdGhpcy5oU2l6ZSArIE1hdGguZmxvb3IoKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMSkgLyAyKSArIHRoaXMuaE9mZnNldCAtIDEsIHRoaXMuY29sb3IucmlnaHQpO1xuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAzLCB0aGlzLmhTaXplICsgTWF0aC5mbG9vcigodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxKSAvIDIpICsgdGhpcy5oT2Zmc2V0IC0gMiwgdGhpcy5jb2xvci5sZWZ0KTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1B5cmFtaWRdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHlyYW1pZDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTaWRlWERpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2lkZVhEaW1lbnNpb24nKTtcbnZhciBTaWRlQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvU2lkZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBTaWRlWCwgcDtcblNpZGVYID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTaWRlWC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gcHVibGljIHByb3BlcnRpZXNcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTaWRlWERpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNpZGVDb2xvcigpIDogY29sb3I7XG59O1xuXG5wLmluaXRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ID0gdGhpcy5kaW1lbnNpb24ueEF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24uekF4aXMgKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IDA7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAtdGhpcy5kaW1lbnNpb24uekF4aXM7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5iaXRtYXBEYXRhLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeE9mZnNldElubmVyLCB5T2Zmc2V0SW5uZXIsIHhPZmZzZXRPdXQsIHlPZmZzZXRPdXQsIGksIGosIGJvcmRlckNvbG9yO1xuXG4gICAgeE9mZnNldElubmVyID0gMDtcbiAgICB5T2Zmc2V0SW5uZXIgPSB0aGlzLmRpbWVuc2lvbi56QXhpcztcbiAgICB4T2Zmc2V0T3V0ID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxO1xuICAgIHlPZmZzZXRPdXQgPSB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi56QXhpcyAtIDE7XG4gICAgYm9yZGVyQ29sb3IgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5pbm5lcjtcblxuICAgIC8veCBheGlzXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRJbm5lciArIGksIHlPZmZzZXRJbm5lciArIE1hdGguZmxvb3IoaSAvIDIpLCBib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0T3V0IC0gaSwgeU9mZnNldE91dCAtIE1hdGguZmxvb3IoaSAvIDIpLCBib3JkZXJDb2xvcik7XG4gICAgfVxuXG4gICAgLy96IGF4aXNcbiAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb24uekF4aXM7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldElubmVyLCB5T2Zmc2V0SW5uZXIgLSBqLCBib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0T3V0LCB5T2Zmc2V0T3V0ICsgaiwgYm9yZGVyQ29sb3IpO1xuICAgIH1cblxuICAgIC8vZmlsbCBhbiBwaXhlbCBncmFwaGljIGVuY2xvc2VkXG4gICAgdGhpcy5iaXRtYXBEYXRhLmZsb29kRmlsbChNYXRoLmZsb29yKHRoaXMudyAvIDIpLCBNYXRoLmZsb29yKHRoaXMuaCAvIDIpLCB0aGlzLmNvbG9yLmlubmVyKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1NpZGVYXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVYO1xuIiwiLypqc2xpbnQgbm9kZTogdHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFNpZGVZRGltZW5zaW9uID0gcmVxdWlyZSgnLi4vZGltZW5zaW9ucy9TaWRlWURpbWVuc2lvbicpO1xudmFyIFNpZGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TaWRlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcblxudmFyIFNpZGVZLCBwO1xuU2lkZVkgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IFNpZGVZLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IFNpZGVZRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgU2lkZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi55QXhpcztcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi56QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMjtcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLXRoaXMuZGltZW5zaW9uLnlBeGlzICsgMjtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC10aGlzLmRpbWVuc2lvbi56QXhpcztcbn07XG5cbnAuaW5pdEJpdG1hcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgsIHRoaXMudXNlRGVmYXVsdENhbnZhcyk7XG59O1xucC5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YS5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmJpdG1hcERhdGEuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4T2Zmc2V0SW5uZXIsIHlPZmZzZXRJbm5lciwgeE9mZnNldE91dCwgeU9mZnNldE91dCwgaSwgaiwgYm9yZGVyQ29sb3I7XG5cbiAgICB4T2Zmc2V0SW5uZXIgPSAwO1xuICAgIHlPZmZzZXRJbm5lciA9IHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnpBeGlzIC0gMTtcbiAgICB4T2Zmc2V0T3V0ID0gdGhpcy5kaW1lbnNpb24ueUF4aXMgLSAxO1xuICAgIHlPZmZzZXRPdXQgPSB0aGlzLmRpbWVuc2lvbi56QXhpcztcbiAgICBib3JkZXJDb2xvciA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmlubmVyO1xuXG4gICAgLy95IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoeE9mZnNldElubmVyICsgaSwgeU9mZnNldElubmVyIC0gTWF0aC5mbG9vcihpIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRPdXQgLSBpLCB5T2Zmc2V0T3V0ICsgTWF0aC5mbG9vcihpIC8gMiksIGJvcmRlckNvbG9yKTtcbiAgICB9XG5cbiAgICAvL3ogYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi56QXhpczsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh4T2Zmc2V0SW5uZXIsIHlPZmZzZXRJbm5lciArIGosIGJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHhPZmZzZXRPdXQsIHlPZmZzZXRPdXQgLSBqLCBib3JkZXJDb2xvcik7XG4gICAgfVxuXG4gICAgLy9maWxsIGFuIHBpeGVsIGdyYXBoaWMgZW5jbG9zZWRcbiAgICB0aGlzLmJpdG1hcERhdGEuZmxvb2RGaWxsKE1hdGguZmxvb3IodGhpcy53IC8gMiksIE1hdGguZmxvb3IodGhpcy5oIC8gMiksIHRoaXMuY29sb3IuaW5uZXIpO1xufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2lkZVldJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZVk7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1Nsb3BlRGltZW5zaW9uJyk7XG52YXIgU2xvcGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TbG9wZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG5cbnZhciBTbG9wZUVhc3QsIHA7XG5TbG9wZUVhc3QgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG59O1xucCA9IFNsb3BlRWFzdC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZURpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgKiAyICsgdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyO1xuXG4gICAgLy8gMjIuNiBkZWdyZWVzIGltcGxlbWVudGF0aW9uXG4gICAgdGhpcy53IC09IDI7XG4gICAgdGhpcy5oIC09IDM7XG5cbiAgICAvLyB0aGUgbWF0cml4IG9mZnNldCBiZXR3ZWVuIHRoZSBiaXRtYXAgYW5kIHRoZSAzZCBwaXhlbCBjb29yZGluYXRlIFpFUk8gcG9pbnRcbiAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcbiAgICB0aGlzLm1hdHJpeC50eCA9IC0odGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyKTtcbiAgICB0aGlzLm1hdHJpeC50eSA9IC0odGhpcy5kaW1lbnNpb24ueEF4aXMgKiAzIC8gMiAtIDIpO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iaXRtYXBEYXRhLmNvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuYml0bWFwRGF0YS5pbWFnZURhdGEsIDAsIDApO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5iaXRtYXBEYXRhLmNhbnZhcztcbn07XG5cbnAuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yQm9yZGVyTGVmdCwgY29sb3JCb3JkZXJSaWdodCxcbiAgICAgICAgaSwgaiwgaywgbSwgbjtcblxuICAgIGNvbG9yQm9yZGVyTGVmdCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmxlZnQ7XG4gICAgY29sb3JCb3JkZXJSaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLnJpZ2h0U2xvcGU7XG5cbiAgICAvLyB5IGF4aXNcbiAgICBmb3IgKGogPSAwOyBqIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoaiwgdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyIC0gTWF0aC5mbG9vcihqIC8gMikgLSAxLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKGogKyB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIHRoaXMuaCAtIE1hdGguZmxvb3IoaiAvIDIpIC0gMSwgY29sb3JCb3JkZXJSaWdodCk7XG4gICAgfVxuXG4gICAgLy8geCBheGlzXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKGksIHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiArIE1hdGguZmxvb3IoaSAvIDIpLCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8vIHogYXhpc1xuICAgIGZvciAoayA9IHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMiAtIDE7IGsgPCB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7IGsgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMCwgaywgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICB9XG5cbiAgICAvLyBzbG90XG4gICAgZm9yIChtID0gMDsgbSA8IHRoaXMuZGltZW5zaW9uLnhBeGlzICogMiAtIDI7IG0gKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueUF4aXMgLSAxICsgTWF0aC5mbG9vcihtIC8gMiksIG0sIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMSArIE1hdGguZmxvb3IobSAvIDIpLCB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgKyBtIC0gMSwgY29sb3JCb3JkZXJSaWdodCk7XG4gICAgfVxuXG4gICAgLy8gZmxvb2QgZmlsbFxuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyLCAxLCB0aGlzLmNvbG9yLnJpZ2h0U2xvcGUpO1xuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAzLCB0aGlzLmggLSAzLCB0aGlzLmNvbG9yLmxlZnQpO1xuICAgIC8vIGhhY2sgc2luZ2xlIHBpeGVsXG4gICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgdGhpcy5oIC0gMiwgdGhpcy5jb2xvci5sZWZ0KTtcblxuICAgIC8vIGhpZ2hsaWdodFxuICAgIGlmICh0aGlzLmJvcmRlcikge1xuICAgICAgICBmb3IgKG4gPSAxOyBuIDwgdGhpcy5kaW1lbnNpb24ueEF4aXMgKiAyIC0gMzsgbiArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwoMSArIE1hdGguZmxvb3IobiAvIDIpLCB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgKyBuIC0gMSwgdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gcHVibGljIG1ldGhvZHNcbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbU2xvcGVFYXN0XSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsb3BlRWFzdDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTbG9wZURpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2xvcGVEaW1lbnNpb24nKTtcbnZhciBTbG9wZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1Nsb3BlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcbnZhciBTaWRlWCA9IHJlcXVpcmUoJy4vU2lkZVgnKTtcbnZhciBTaWRlWERpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2lkZVhEaW1lbnNpb24nKTtcbnZhciBTaWRlQ29sb3IgPSByZXF1aXJlKCcuLi9jb2xvcnMvU2lkZUNvbG9yJyk7XG52YXIgUGl4ZWxPYmplY3QgPSByZXF1aXJlKCcuLi9kaXNwbGF5L1BpeGVsT2JqZWN0Jyk7XG5cbnZhciBTbG9wZU5vcnRoLCBwO1xuU2xvcGVOb3J0aCA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wID0gU2xvcGVOb3J0aC5wcm90b3R5cGUgPSBuZXcgQWJzdHJhY3RQcmltaXRpdmUoKTtcblxuLy8gY29uc3RydWN0b3JcbnAuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLmluaXRSZW5kZXIoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKTtcbiAgICB0aGlzLmluaXRSZWN0YW5nbGUoKTtcbiAgICB0aGlzLmluaXRCaXRtYXBEYXRhKCk7XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHRoaXMucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBwcml2YXRlIG1ldGhvZFxucC5pbml0UmVuZGVyID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMudXNlRGVmYXVsdENhbnZhcyA9IHVzZURlZmF1bHRDYW52YXMgfHwgZmFsc2U7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXIgfHwgYm9yZGVyID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb24gPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZURpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvciA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlQ29sb3IoKSA6IGNvbG9yO1xufTtcblxucC5pbml0UmVjdGFuZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudyA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICsgdGhpcy5kaW1lbnNpb24ueUF4aXM7XG4gICAgdGhpcy5oID0gdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAzIC8gMiArIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMjtcblxuICAgIC8vIDIyLjYgZGVncmVlcyBpbXBsZW1lbnRhdGlvblxuICAgIHRoaXMudyAtPSAyO1xuICAgIHRoaXMuaCAtPSAzO1xuXG4gICAgLy8gdGhlIG1hdHJpeCBvZmZzZXQgYmV0d2VlbiB0aGUgYml0bWFwIGFuZCB0aGUgM2QgcGl4ZWwgY29vcmRpbmF0ZSBaRVJPIHBvaW50XG4gICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0cml4KCk7XG4gICAgdGhpcy5tYXRyaXgudHggPSAtKHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMik7XG4gICAgdGhpcy5tYXRyaXgudHkgPSAtKHRoaXMuZGltZW5zaW9uLnlBeGlzIC0gMik7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuYml0bWFwRGF0YS5jYW52YXM7XG59O1xuXG5wLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvckJvcmRlckxlZnQsIGNvbG9yQm9yZGVyUmlnaHQsIGNvbG9yQm9yZGVySGlnaGxpZ2h0LFxuICAgICAgICBzaWRlWCwgcG9YLCBjdHgsIGJtZCxcbiAgICAgICAgaSwgaiwgbjtcblxuICAgIGNvbG9yQm9yZGVyTGVmdCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLmxlZnQ7XG4gICAgY29sb3JCb3JkZXJSaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXIgOiB0aGlzLmNvbG9yLnJpZ2h0O1xuICAgIGNvbG9yQm9yZGVySGlnaGxpZ2h0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlckhpZ2hsaWdodCA6IHRoaXMuY29sb3IubGVmdDtcblxuICAgIHNpZGVYID0gbmV3IFNpZGVYKFxuICAgICAgICBuZXcgU2lkZVhEaW1lbnNpb24odGhpcy5kaW1lbnNpb24ueEF4aXMsIHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiksXG4gICAgICAgIG5ldyBTaWRlQ29sb3IoY29sb3JCb3JkZXJMZWZ0LCB0aGlzLmNvbG9yLmxlZnQpXG4gICAgKTtcblxuICAgIHBvWCA9IG5ldyBQaXhlbE9iamVjdChzaWRlWCk7XG5cbiAgICBjdHggPSB0aGlzLmJpdG1hcERhdGEuY29udGV4dDtcbiAgICBjdHguZHJhd0ltYWdlKHBvWC5jYW52YXMsIHBvWC54LCBwb1gueSArIHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMik7XG5cbiAgICBibWQgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCk7XG5cbiAgICAvLyBjbG9zZSB0aGUgcGF0aCBmb3IgZmxvb2RmaWxsXG4gICAgZm9yIChpID0gdGhpcy5oIC0gdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAzIC8gMiArIDI7IGkgPCB0aGlzLmg7IGkgKz0gMSkge1xuICAgICAgICBibWQuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxLCBpLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyB5IGF4aXNcbiAgICBmb3IgKGogPSAxOyBqIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGogKz0gMSkge1xuICAgICAgICBibWQuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgKyBqIC0gMiwgdGhpcy5oIC0gTWF0aC5mbG9vcihqIC8gMikgLSAxLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzICsgaiAtIDIsIHRoaXMuZGltZW5zaW9uLnhBeGlzIC8gMiAtIDIgKyBqLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBmbG9vZCBmaWxsXG4gICAgYm1kLmZsb29kRmlsbCh0aGlzLmRpbWVuc2lvbi54QXhpcyArIDEsIHRoaXMuaCAtIDMsIHRoaXMuY29sb3IucmlnaHQpO1xuXG4gICAgLy9oaWdobGlnaHRcbiAgICBmb3IgKG4gPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDI7IG4gPCB0aGlzLmggLSAxOyBuICs9IDEpIHtcbiAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMSwgbiwgdGhpcy5jb2xvci5yaWdodCk7XG4gICAgICAgIGJtZC5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIG4sIGNvbG9yQm9yZGVySGlnaGxpZ2h0KTtcbiAgICB9XG5cbiAgICBibWQuY29udGV4dC5wdXRJbWFnZURhdGEoYm1kLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgY3R4LmRyYXdJbWFnZShibWQuY2FudmFzLCAwLCAwKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1Nsb3BlTm9ydGhdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2xvcGVOb3J0aDtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTbG9wZURpbWVuc2lvbiA9IHJlcXVpcmUoJy4uL2RpbWVuc2lvbnMvU2xvcGVEaW1lbnNpb24nKTtcbnZhciBTbG9wZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1Nsb3BlQ29sb3InKTtcbnZhciBNYXRyaXggPSByZXF1aXJlKCcuLi9nZW9tL01hdHJpeCcpO1xudmFyIEJpdG1hcERhdGEgPSByZXF1aXJlKCcuLi9kaXNwbGF5L0JpdG1hcERhdGEnKTtcbnZhciBBYnN0cmFjdFByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vQWJzdHJhY3RQcmltaXRpdmUnKTtcblxudmFyIFNsb3BlU291dGgsIHA7XG5TbG9wZVNvdXRoID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTbG9wZVNvdXRoLnByb3RvdHlwZSA9IG5ldyBBYnN0cmFjdFByaW1pdGl2ZSgpO1xuXG4vLyBjb25zdHJ1Y3RvclxucC5pbml0aWFsaXplID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdFJlbmRlcihkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xuICAgIHRoaXMuaW5pdFJlY3RhbmdsZSgpO1xuICAgIHRoaXMuaW5pdEJpdG1hcERhdGEoKTtcbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgdGhpcy5yZW5kZXJCaXRtYXBEYXRhRm9yQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbi8vIHByaXZhdGUgbWV0aG9kXG5wLmluaXRSZW5kZXIgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy51c2VEZWZhdWx0Q2FudmFzID0gdXNlRGVmYXVsdENhbnZhcyB8fCBmYWxzZTtcbiAgICB0aGlzLmJvcmRlciA9IGJvcmRlciB8fCBib3JkZXIgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gdW5kZWZpbmVkID8gbmV3IFNsb3BlRGltZW5zaW9uKCkgOiBkaW1lbnNpb247XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyBuZXcgU2xvcGVDb2xvcigpIDogY29sb3I7XG59O1xuXG5wLmluaXRSZWN0YW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53ID0gdGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcztcbiAgICB0aGlzLmggPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAqIDI7XG5cbiAgICAvLyAyMi42IGRlZ3JlZXMgaW1wbGVtZW50YXRpb25cbiAgICB0aGlzLncgLT0gMjtcbiAgICB0aGlzLmggLT0gMztcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLSh0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDIpO1xuICAgIHRoaXMubWF0cml4LnR5ID0gLSh0aGlzLmRpbWVuc2lvbi55QXhpcyAqIDMgLyAyIC0gMik7XG59O1xuXG5wLmluaXRCaXRtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKHRoaXMudywgdGhpcy5oLCB0aGlzLnVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAucmVuZGVyQml0bWFwRGF0YUZvckNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5iaXRtYXBEYXRhLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3JCb3JkZXJMZWZ0LCBjb2xvckJvcmRlclJpZ2h0LFxuICAgICAgICBpLCBqLCBrLCBtLCBuO1xuXG4gICAgY29sb3JCb3JkZXJMZWZ0ID0gdGhpcy5ib3JkZXIgPyB0aGlzLmNvbG9yLmJvcmRlciA6IHRoaXMuY29sb3IubGVmdFNsb3BlO1xuICAgIGNvbG9yQm9yZGVyUmlnaHQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5yaWdodDtcblxuICAgIC8vIHggYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi54QXhpczsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbChqLCB0aGlzLmRpbWVuc2lvbi55QXhpcyAqIDIgKyBNYXRoLmZsb29yKGogLyAyKSAtIDMsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbChqICsgdGhpcy5kaW1lbnNpb24ueUF4aXMgLSAyLCBNYXRoLmZsb29yKGogLyAyKSwgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICB9XG5cbiAgICAvLyB5IGF4aXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kaW1lbnNpb24ueUF4aXM7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyICsgaSwgdGhpcy5oIC0gTWF0aC5mbG9vcihpIC8gMikgLSAxLCBjb2xvckJvcmRlclJpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyB6IGF4aXNcbiAgICBmb3IgKGsgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyAvIDIgLSAxOyBrIDwgdGhpcy5oIC0gdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyOyBrICs9IDEpIHtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhLnNldFBpeGVsKHRoaXMudyAtIDEsIGssIGNvbG9yQm9yZGVyUmlnaHQpO1xuICAgIH1cblxuICAgIC8vIHNsb3RcbiAgICBmb3IgKG0gPSAwOyBtIDwgdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAyIC0gMjsgbSArPSAxKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbChNYXRoLmZsb29yKG0gLyAyKSwgdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAyIC0gbSAtIDMsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YS5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIgKyBNYXRoLmZsb29yKG0gLyAyKSwgdGhpcy5oIC0gbSAtIDEsIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgfVxuXG4gICAgLy8gZmxvb2QgZmlsbFxuICAgIHRoaXMuYml0bWFwRGF0YS5mbG9vZEZpbGwodGhpcy5kaW1lbnNpb24ueUF4aXMgLSAxLCAxLCB0aGlzLmNvbG9yLmxlZnRTbG9wZSk7XG4gICAgdGhpcy5iaXRtYXBEYXRhLmZsb29kRmlsbCh0aGlzLmRpbWVuc2lvbi54QXhpcywgdGhpcy5oIC0gMywgdGhpcy5jb2xvci5yaWdodCk7XG4gICAgLy8gaGFjayBzaW5nbGUgcGl4ZWxcbiAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAxLCB0aGlzLmggLSAyLCB0aGlzLmNvbG9yLnJpZ2h0KTtcblxuICAgIC8vIGhpZ2hsaWdodFxuICAgIGlmICh0aGlzLmJvcmRlcikge1xuICAgICAgICBmb3IgKG4gPSAxOyBuIDwgdGhpcy5kaW1lbnNpb24ueUF4aXMgKiAyIC0gMzsgbiArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcERhdGEuc2V0UGl4ZWwodGhpcy5kaW1lbnNpb24ueEF4aXMgLSAyICsgTWF0aC5mbG9vcihuIC8gMiksIHRoaXMuaCAtIG4gLSAxLCB0aGlzLmNvbG9yLmJvcmRlckhpZ2hsaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tTbG9wZVNvdXRoXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsb3BlU291dGg7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2xvcGVEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1Nsb3BlRGltZW5zaW9uJyk7XG52YXIgU2xvcGVDb2xvciA9IHJlcXVpcmUoJy4uL2NvbG9ycy9TbG9wZUNvbG9yJyk7XG52YXIgTWF0cml4ID0gcmVxdWlyZSgnLi4vZ2VvbS9NYXRyaXgnKTtcbnZhciBCaXRtYXBEYXRhID0gcmVxdWlyZSgnLi4vZGlzcGxheS9CaXRtYXBEYXRhJyk7XG52YXIgQWJzdHJhY3RQcmltaXRpdmUgPSByZXF1aXJlKCcuL0Fic3RyYWN0UHJpbWl0aXZlJyk7XG52YXIgU2lkZVkgPSByZXF1aXJlKCcuL1NpZGVZJyk7XG52YXIgU2lkZVlEaW1lbnNpb24gPSByZXF1aXJlKCcuLi9kaW1lbnNpb25zL1NpZGVZRGltZW5zaW9uJyk7XG52YXIgU2lkZUNvbG9yID0gcmVxdWlyZSgnLi4vY29sb3JzL1NpZGVDb2xvcicpO1xudmFyIFBpeGVsT2JqZWN0ID0gcmVxdWlyZSgnLi4vZGlzcGxheS9QaXhlbE9iamVjdCcpO1xuXG52YXIgU2xvcGVXZXN0LCBwO1xuU2xvcGVXZXN0ID0gZnVuY3Rpb24gKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZShkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpO1xufTtcbnAgPSBTbG9wZVdlc3QucHJvdG90eXBlID0gbmV3IEFic3RyYWN0UHJpbWl0aXZlKCk7XG5cbi8vIGNvbnN0cnVjdG9yXG5wLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uLCBjb2xvciwgYm9yZGVyLCB1c2VEZWZhdWx0Q2FudmFzKSB7XG4gICAgdGhpcy5pbml0UmVuZGVyKGRpbWVuc2lvbiwgY29sb3IsIGJvcmRlciwgdXNlRGVmYXVsdENhbnZhcyk7XG4gICAgdGhpcy5pbml0UmVjdGFuZ2xlKCk7XG4gICAgdGhpcy5pbml0Qml0bWFwRGF0YSgpO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMoKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLy8gcHJpdmF0ZSBtZXRob2RcbnAuaW5pdFJlbmRlciA9IGZ1bmN0aW9uIChkaW1lbnNpb24sIGNvbG9yLCBib3JkZXIsIHVzZURlZmF1bHRDYW52YXMpIHtcbiAgICB0aGlzLnVzZURlZmF1bHRDYW52YXMgPSB1c2VEZWZhdWx0Q2FudmFzIHx8IGZhbHNlO1xuICAgIHRoaXMuYm9yZGVyID0gYm9yZGVyIHx8IGJvcmRlciA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uID09PSB1bmRlZmluZWQgPyBuZXcgU2xvcGVEaW1lbnNpb24oKSA6IGRpbWVuc2lvbjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgPT09IHVuZGVmaW5lZCA/IG5ldyBTbG9wZUNvbG9yKCkgOiBjb2xvcjtcbn07XG5cbnAuaW5pdFJlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLncgPSB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzO1xuICAgIHRoaXMuaCA9IHRoaXMuZGltZW5zaW9uLnhBeGlzICogMyAvIDIgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDI7XG5cbiAgICAvLyAyMi42IGRlZ3JlZXMgaW1wbGVtZW50YXRpb25cbiAgICB0aGlzLncgLT0gMjtcbiAgICB0aGlzLmggLT0gMztcblxuICAgIC8vIHRoZSBtYXRyaXggb2Zmc2V0IGJldHdlZW4gdGhlIGJpdG1hcCBhbmQgdGhlIDNkIHBpeGVsIGNvb3JkaW5hdGUgWkVSTyBwb2ludFxuICAgIHRoaXMubWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMubWF0cml4LnR4ID0gLSh0aGlzLmRpbWVuc2lvbi55QXhpcyAtIDIpO1xuICAgIHRoaXMubWF0cml4LnR5ID0gLSh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIpO1xufTtcblxucC5pbml0Qml0bWFwRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJpdG1hcERhdGEgPSBuZXcgQml0bWFwRGF0YSh0aGlzLncsIHRoaXMuaCwgdGhpcy51c2VEZWZhdWx0Q2FudmFzKTtcbn07XG5wLnJlbmRlckJpdG1hcERhdGFGb3JDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmJpdG1hcERhdGEuY2FudmFzO1xufTtcblxucC5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3JCb3JkZXJMZWZ0LCBjb2xvckJvcmRlclJpZ2h0LCBjb2xvckJvcmRlckhpZ2hsaWdodCxcbiAgICAgICAgc2lkZVksIHBvWSwgY3R4LCBibWQsXG4gICAgICAgIGksIGosIG47XG5cbiAgICBjb2xvckJvcmRlckxlZnQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5sZWZ0O1xuICAgIGNvbG9yQm9yZGVyUmlnaHQgPSB0aGlzLmJvcmRlciA/IHRoaXMuY29sb3IuYm9yZGVyIDogdGhpcy5jb2xvci5yaWdodDtcbiAgICBjb2xvckJvcmRlckhpZ2hsaWdodCA9IHRoaXMuYm9yZGVyID8gdGhpcy5jb2xvci5ib3JkZXJIaWdobGlnaHQgOiB0aGlzLmNvbG9yLmxlZnQ7XG5cbiAgICBzaWRlWSA9IG5ldyBTaWRlWShcbiAgICAgICAgbmV3IFNpZGVZRGltZW5zaW9uKHRoaXMuZGltZW5zaW9uLnlBeGlzLCB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIpLFxuICAgICAgICBuZXcgU2lkZUNvbG9yKGNvbG9yQm9yZGVyUmlnaHQsIHRoaXMuY29sb3IucmlnaHQpXG4gICAgKTtcblxuICAgIHBvWSA9IG5ldyBQaXhlbE9iamVjdChzaWRlWSk7XG5cbiAgICBjdHggPSB0aGlzLmJpdG1hcERhdGEuY29udGV4dDtcbiAgICBjdHguZHJhd0ltYWdlKHBvWS5jYW52YXMsIHBvWS54ICsgdGhpcy53IC0gMiwgcG9ZLnkgKyB0aGlzLmggLSB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIpO1xuXG4gICAgYm1kID0gbmV3IEJpdG1hcERhdGEodGhpcy53LCB0aGlzLmgpO1xuXG4gICAgLy8gY2xvc2UgdGhlIHBhdGggZm9yIGZsb29kZmlsbFxuICAgIGZvciAoaSA9IHRoaXMuaCAtIHRoaXMuZGltZW5zaW9uLnhBeGlzICogMyAvIDIgKyAyOyBpIDwgdGhpcy5oOyBpICs9IDEpIHtcbiAgICAgICAgYm1kLnNldFBpeGVsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMiwgaSwgY29sb3JCb3JkZXJMZWZ0KTtcbiAgICB9XG5cbiAgICAvL3ggYXhpc1xuICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDE7IGogKz0gMSkge1xuICAgICAgICBibWQuc2V0UGl4ZWwoaiwgdGhpcy5kaW1lbnNpb24ueEF4aXMgKyB0aGlzLmRpbWVuc2lvbi55QXhpcyAvIDIgLSAzICsgTWF0aC5mbG9vcihqIC8gMiksIGNvbG9yQm9yZGVyTGVmdCk7XG4gICAgICAgIGJtZC5zZXRQaXhlbChqLCB0aGlzLmRpbWVuc2lvbi54QXhpcyArIHRoaXMuZGltZW5zaW9uLnlBeGlzIC8gMiAtIDMgLSBqLCBjb2xvckJvcmRlckxlZnQpO1xuICAgIH1cblxuICAgIC8vIGZsb29kIGZpbGxcbiAgICBibWQuZmxvb2RGaWxsKHRoaXMuZGltZW5zaW9uLnhBeGlzIC0gMywgdGhpcy5oIC0gMywgdGhpcy5jb2xvci5sZWZ0KTtcblxuICAgIC8vaGlnaGxpZ2h0XG4gICAgZm9yIChuID0gdGhpcy5kaW1lbnNpb24ueUF4aXMgLyAyOyBuIDwgdGhpcy5oIC0gMTsgbiArPSAxKSB7XG4gICAgICAgIGJtZC5zZXRQaXhlbCh0aGlzLmRpbWVuc2lvbi54QXhpcyAtIDIsIG4sIGNvbG9yQm9yZGVySGlnaGxpZ2h0KTtcbiAgICB9XG5cbiAgICBibWQuY29udGV4dC5wdXRJbWFnZURhdGEoYm1kLmltYWdlRGF0YSwgMCwgMCk7XG4gICAgY3R4LmRyYXdJbWFnZShibWQuY2FudmFzLCAwLCAwKTtcbn07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW1Nsb3BlV2VzdF0nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbG9wZVdlc3Q7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cbi8qZ2xvYmFsIGRvY3VtZW50OnRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDYW52YXNNYW5hZ2VyLCBwO1xuQ2FudmFzTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnZhc01hbmFnZXIgaXMgYSBzdGF0aWMgQ2xhc3MsIGNhbm5vdCBiZSBpbnN0YW5jZWQuJyk7XG59O1xucCA9IENhbnZhc01hbmFnZXI7XG5cbi8vIHB1YmxpYyBwcm9wZXJ0aWVzXG5wLmRlZmF1bHRDYW52YXMgPSBudWxsO1xuXG4vLyBwdWJsaWMgbWV0aG9kc1xucC5nZXREZWZhdWx0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgIHAuZGVmYXVsdENhbnZhcyA9IHAuZGVmYXVsdENhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByZXR1cm4gcC5kZWZhdWx0Q2FudmFzO1xufTtcblxucC5nZXROZXdDYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xufTtcblxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJ1tDYW52YXNNYW5hZ2VyXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc01hbmFnZXI7XG4iLCIvKmpzbGludCBub2RlOiB0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FudmFzVG9vbCwgcDtcblxuQ2FudmFzVG9vbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnZhc1Rvb2wgaXMgYSBzdGF0aWMgQ2xhc3MsIGNhbm5vdCBiZSBpbnN0YW5jZWQuJyk7XG59O1xucCA9IENhbnZhc1Rvb2w7XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldFBpeGVsID0gZnVuY3Rpb24gKGltYWdlRGF0YSwgeCwgeSkge1xuICAgIHZhciBkYXRhLCBpbmRleCwgciwgZywgYjtcblxuICAgIGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcbiAgICBpbmRleCA9ICh5ICogaW1hZ2VEYXRhLndpZHRoICsgeCkgKiA0O1xuICAgIHIgPSBkYXRhW2luZGV4XTtcbiAgICBnID0gZGF0YVtpbmRleCArIDFdO1xuICAgIGIgPSBkYXRhW2luZGV4ICsgMl07XG5cbiAgICByZXR1cm4gKChyIDw8IDE2KSB8IChnIDw8IDgpIHwgYik7XG59O1xuXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnW0NhbnZhc1Rvb2xdJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzVG9vbDtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIENvbG9yR2VvbSwgcDtcblxuQ29sb3JHZW9tID0gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29sb3JHZW9tIGlzIGEgc3RhdGljIENsYXNzLCBjYW5ub3QgYmUgaW5zdGFuY2VkLicpO1xufTtcbnAgPSBDb2xvckdlb207XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldDMyID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yIDwgMHhGRjAwMDAwMCA/IChjb2xvciArIDB4RkYwMDAwMDApIDogY29sb3I7XG59O1xuXG5wLmFwcGx5QnJpZ2h0bmVzcyA9IGZ1bmN0aW9uIChjb2xvciwgYnJpZ2h0bmVzcywgaGlnaGxpZ2h0KSB7XG4gICAgdmFyIGEsIHIsIGcsIGIsIHksIHYsIHU7XG5cbiAgICBhID0gKChjb2xvciA+Pj4gMjQpICYgMHgwMDAwMDBGRik7XG4gICAgciA9ICgoY29sb3IgPj4+IDE2KSAmIDB4MDAwMDAwRkYpO1xuICAgIGcgPSAoKGNvbG9yID4+PiA4KSAmIDB4MDAwMDAwRkYpO1xuICAgIGIgPSAoY29sb3IgJiAweDAwMDAwMEZGKTtcblxuICAgIHkgPSAoKHIgKiAzMTM1MjQpID4+IDIwKSArICgoZyAqIDYxNTUxNCkgPj4gMjApICsgKChiICogMTE5NTM4KSA+PiAyMCk7XG4gICAgdSA9IC0oKDE1NTE4OSAqIHIpID4+IDIwKSAtICgoMzAzMDM4ICogZykgPj4gMjApICsgKCg0NTgyMjcgKiBiKSA+PiAyMCk7XG4gICAgdiA9ICgoNjQ0ODc0ICogcikgPj4gMjApIC0gKCg1NDAwMTYgKiBnKSA+PiAyMCkgLSAoKDEwNDg1NyAqIGIpID4+IDIwKTtcblxuICAgIGlmICghaGlnaGxpZ2h0KSB7XG4gICAgICAgIHkgKz0gYnJpZ2h0bmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgICB5ID0gNjAgKyBNYXRoLnBvdyh5LCAxLjIpO1xuICAgIH1cblxuICAgIHIgPSB5ICsgKCgxMTk1Mzc2ICogdikgPj4gMjApO1xuICAgIGcgPSB5IC0gKCg0MDg5NDQgKiB1KSA+PiAyMCkgLSAoKDYwODE3NCAqIHYpID4+IDIwKTtcbiAgICBiID0geSArICgoMjEyODYwOSAqIHUpID4+IDIwKTtcblxuICAgIHIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihyLCAyNTUpKTtcbiAgICBnID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZywgMjU1KSk7XG4gICAgYiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGIsIDI1NSkpO1xuXG4gICAgcmV0dXJuIChhIDw8IDI0KSB8IChyIDw8IDE2KSB8IChnIDw8IDgpIHwgYjtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbQ29sb3JHZW9tXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yR2VvbTtcbiIsIi8qanNsaW50IG5vZGU6IHRydWUqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDb2xvclBhdHRlcm4sIHA7XG5cbkNvbG9yUGF0dGVybiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbG9yUGF0dGVybiBpcyBhIHN0YXRpYyBDbGFzcywgY2Fubm90IGJlIGluc3RhbmNlZC4nKTtcbn07XG5wID0gQ29sb3JQYXR0ZXJuO1xuXG4vLyBwdWJsaWMgcHJvcGVydGllc1xucC5HUkFTU19HUkVFTiA9IDB4Q0NGRjAwO1xucC5ZRUxMT1cgPSAweEZGRkYwMDtcbnAuV0lORV9SRUQgPSAweEZGMDA5OTtcbnAuUElOSyA9IDB4RkY3Q0JGO1xucC5QVVJQTEUgPSAweENDMDBGRjtcbnAuQkxVRSA9IDB4MDBDQ0ZGO1xucC5HUkFZID0gMHhFRUVFRUU7XG5wLkJMQUNLID0gMHg2NjY2NjY7XG5wLkZJTkVfQ09MT1JTID1cbiAgICBbXG4gICAgICAgIHAuR1JBU1NfR1JFRU4sXG4gICAgICAgIHAuWUVMTE9XLFxuICAgICAgICBwLldJTkVfUkVELFxuICAgICAgICBwLlBJTkssXG4gICAgICAgIHAuUFVSUExFLFxuICAgICAgICBwLkJMVUUsXG4gICAgICAgIHAuR1JBWSxcbiAgICAgICAgcC5CTEFDS1xuICAgIF07XG5cbi8vIHB1YmxpYyBtZXRob2RzXG5wLmdldFJhbmRvbUNvbWZvcnRhYmxlQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHAuRklORV9DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcC5GSU5FX0NPTE9SUy5sZW5ndGgpXTtcbn07XG5cbnAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICdbQ29sb3JQYXR0ZXJuXSc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yUGF0dGVybjtcbiJdfQ==
