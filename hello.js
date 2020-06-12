let bltop = document.getElementById('vanish');

let greeting = 'ПРИВЕТ';

function sayHello(){
     let name = document.getElementById('name').value;
     return alert(greeting + name);
} 

console.log(sayHello());