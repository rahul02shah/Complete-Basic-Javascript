function createRectangle(l, b) {
    let rectangle = {
      length: l,
      breadth: b,
      area: function() {
        return this.length * this.breadth;
      }
    };
    return rectangle;
  }
  
  let rectangle1 = createRectangle(5, 6);
  console.log(rectangle1);
  console.log(rectangle1.area());