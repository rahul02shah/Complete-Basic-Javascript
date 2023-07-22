let Person = {
    fName : "Amar",
    lName : "Shah",
    get (){
        return `${this.fName} ${this.lName}`
    },
    set (value){
        let parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

console.log(Person.get());
console.log(Person.set("Rahul Shah"));
console.log(Person.get());
