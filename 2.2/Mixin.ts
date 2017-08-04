enum PaintColor {
    Red,
    Blue,
    Green
}

type Constructor<T> = new (...args: any[]) => T;

interface Pointable {
    x: number;
}

class Point {
    constructor(public x: number, public y: number) {}
}

function Painted<T extends Constructor<{}>>(Base: T) {
    return class extends Base {
        private paint: PaintColor;       
        constructor(...args: any[]) {
            super(...args);
            this.paint = PaintColor.Blue;
        }

        public paintMe = (color: PaintColor) => {
            this.paint = color;
        };
    }
}

// Creates new class 'PaintablePoint'
var PaintablePoint = Painted(Point);

var newPoint = new PaintablePoint(5, 6);

newPoint.paintMe(PaintColor.Green);