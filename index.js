//parentElement
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

//ChildNodes
//console.log.(itemList.children);
itemList.children[1].style.backgroundColor = 'blue';

//FirstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';

//lastChild
console.log(itemList.lastChild);
//lastElementChild
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';


//createElement

//create a div

var newDiv = document.createElement('div');

newDiv.className = 'HEllo';

//add id
newDiv.id = 'HEllo1';

//add Attr
newDiv.setAttribute('title', 'HEllo Div');

//create text node
var newDivText = document.createTextNode('HEllo World');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontsize = '150px';
newDiv.style.color = 'green';
container.insertBefore(newDiv, h1);//parentElement
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

//ChildNodes
//console.log.(itemList.children);
itemList.children[1].style.backgroundColor = 'blue';

//FirstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';

//lastChild
console.log(itemList.lastChild);
//lastElementChild
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';


//createElement

//create a div

var newDiv = document.createElement('div');

newDiv.className = 'HEllo';

//add id
newDiv.id = 'HEllo1';

//add Attr
newDiv.setAttribute('title', 'HEllo Div');

//create text node
var newDivText = document.createTextNode('HEllo World');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontsize = '150px';
newDiv.style.color = 'green';
container.insertBefore(newDiv, h1);