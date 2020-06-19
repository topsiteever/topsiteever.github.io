let bltop = document.getElementById('vanish');

let greeting = 'ПРИВЕТ';

function sayHello(){
     let name = document.getElementById('name').value;
     return alert(greeting + name);
} 

console.log(sayHello());

function echo() {
     let str = 'echo';
     let i = 0;
     for (i; i < 3; i++) {
          console.log(str);
     }
 }
 echo();