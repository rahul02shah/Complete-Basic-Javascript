function sum(){
    let total = 0;
    for(value in arguments){
        total = total + arguments[value];
    }
    return total;
}

let Result = sum(6,4);
console.log(Result);