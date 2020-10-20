class Circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(2);
let area = circle.getArea();
let radius = circle.getRadius();
alert(`radius : ${radius} area : ${area.toFixed(2)}`);