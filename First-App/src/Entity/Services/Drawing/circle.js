
import Shape from "./shape";
class Circle extends Shape {
  constructor(p1, radius, color, thickness) {
    super(color, thickness);
    this.center = p1;
    this.radius = radius;
  }

  draw() {
    super.draw();
    console.log("center point: " + this.center);
    console.log("radius: " + this.radius);
  }
}
export default Circle;