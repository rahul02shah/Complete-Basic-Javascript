let Record ={
    "rahul" : 12,
    "amar":67,
    "anil":87
}
for(key in Record){
    console.log(Record[key]);
}

for(key of Object.keys(Record)){
    console.log(key);
}

// find key in any object using loop

if("alash" in Record){
    console.log("record found");
}else{
    console.log("record not found");
}