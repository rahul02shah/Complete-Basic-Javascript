function sum(a,b){
    let total = 0;
    for(value in arguments){
        total = total + arguments[value];
    }
    return total;
}

let Result = sum(6,7,8,9);
console.log(Result);