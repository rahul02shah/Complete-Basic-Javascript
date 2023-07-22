// rest operator return an array where same arguments return an object

let value;
function sum (...value){
    let total =0;
    for(key of value){
        total = total + key;
    }
    return total;
}

console.log(sum(1,2,3,5,6,78));