try{
    nonExistingFuncyion();
}catch(e){
    console.log("function not defined");
}


// custom Error Handeling 
function sum(a,b){
    if((a && b)!== Number){
        throw new Error("Entered string")
    }
}
try{
    sum(3,"rahul");
}catch(e){
    console.log(e);
}