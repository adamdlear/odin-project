// your JavaScript file
const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!"

const div = document.createElement('div');

const h1 = document.createElement('h1');
h1.textContent = "I'm a div";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

div.appendChild(h1)
div.appendChild(p2)

container.appendChild(p);
container.append(div);
