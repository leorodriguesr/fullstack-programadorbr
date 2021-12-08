//document.getElementById()                //Acessa um elemento pelo ID dele;
//document.getElementsByClassName()        //Acessa os elementos de uma classe;   

//Modificando o conteúdo do html:

let p1 = document.getElementsByClassName('titulo');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

p1.InnerText = "Mudei o título";
p2.innerHTML = "Outro texto";
p3.textContent = "Mais um texto, o ultimo."


p2.style.backgroundColor = 'blue';

