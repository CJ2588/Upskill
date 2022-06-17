// DOM//////
// document.getElementById("para1");
let para1 = document.getElementById("para1");
para1.innerHTML = "Hello World";
para1.style.color = "red";
para1.style.fontSize="40px";

let newP = document.createElement('p');
newP.innerHTML = 'Hello class! This is new para';
newP.style.color= 'blue' 

let divs = document.querySelector('div');
divs.appendChild(newP);

// document.getElementsByTagName('div').innerHTML = "Hello Class"
// document.getElementsByClassName[1]("static").innerHTML = "Hello Class"
document.querySelector("#para3").innerHTML = "Hello class! THis is para 3";

let button = document.querySelector('button');
// button.addEventListener('click', function() {
//         window.alert('you have clicked a button');
// })

function clickMe(){
    alert('You have clicked a button');
}

button.addEventListener('click', clickMe);