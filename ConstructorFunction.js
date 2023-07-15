function Rectangle(l,b){
    this.length = l,
    this.breadth = b,
    this.area = function (){
        return this.length*this.breadth;
    }
}

let Rectangle1 = new Rectangle(4,5)
console.log(Rectangle1);
console.log(Rectangle1.area());