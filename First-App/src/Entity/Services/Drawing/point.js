
class Point{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  static display(){
    console.log("x point: " + this.x);
    console.log("y point: " + this.x);
  }
}
export default Point;