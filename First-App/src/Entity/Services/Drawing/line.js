import Shape from "./shape";
class Line extends Shape{
  constructor(p1,p2,color, thickness) {
    super(color,thickness);
    this.startPoint = p1;
    this.endPoint = p2;
  }

  draw() {
    super.draw();
    console.log("Start point: " + this.startPoint);
    console.log("End Point: " + this.endPoint);
  }
}
export default Line;