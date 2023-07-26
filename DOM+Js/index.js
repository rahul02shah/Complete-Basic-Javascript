// inserting element in body 
let content = document.createElement('p');
content.textContent = "Hello Rahul Shah";
document.body.appendChild(content);

content.style.backgroundColor = "blue";


// modifying and adding content in tag
let subheading = document.querySelector("h2");
subheading.innerHTML +=  ` From Rajbiraj \n <h3>I'm H3</h3>`;

subheading.classList.add('circle');

// inserting using textnode

let para = document.createElement('p');
let content1 = document.createTextNode("hello");
para.appendChild(content1);

document.body.appendChild(para);

para.style.backgroundColor = "orange";
