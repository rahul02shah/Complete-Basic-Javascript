let array = [1,2,3,-1,-2,-3];
 let filtered = array.filter((element) => {
    return element >= 0;
})

console.log(filtered);