let Record = {
    rahul :10,
    amar :20,
    mohan:30
};
let Clone={};
// cloning using loop
for(key in Record){
    Clone[key]=Record[key]
}

console.log(Clone);