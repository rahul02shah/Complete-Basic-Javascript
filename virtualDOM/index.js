let t1 = performance.now();
for(let i=1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = "this is paragraph " + i;
    document.body.appendChild(newElement);
} 
let t2 = performance.now();
console.log("Total tIme taken to execute this code is :"+(t2-t1));
// // optimized code of this code
// let t4 = performance.now();

// let myDiv = document.createElement('Div');
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is paragraph '+ i;
//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

// let t3 = performance.now();
// console.log("Total tIme taken to execute this code is :"+(t3-t4));


let fragment = document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = "this is paragraph " + i;
    fragment.appendChild(newElement);
} 

document.body.appendChild(fragment);
let t4 = performance.now();
