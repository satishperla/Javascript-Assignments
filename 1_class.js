class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(sides, sideLength) {
        let perimeter = this.sides * this.sideLength;
        console.log(perimeter);
    }

}

var Square = new Shape("square", 4, 5);

var Triangle = new Shape("triangle", 3, 3);

Square.calcPerimeter();
Triangle.calcPerimeter();

