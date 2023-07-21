// searching in Reference data type
// here we use callback function
let Record = [
    {
        SN : "1",
        Name : "Rahul Shah"
    },
    {
        SN : "2",
        Name : "Mohan Shah"
    },
    {
        SN : "3",
        Name : "Alash Shah"
    }
]
let a;
let Result = Record.find(REC=> REC.SN == "2")
console.log(Result);
