const body = document.querySelector('#body');
const gamearea = createElement(body, 'div', 'Nonograms', 'gamearea');
const score = createElement(gamearea, 'div', 'Score :', 'score');
const output = createElement(gamearea, 'div', '', 'output');
const game = {x:5, y:5};


//Создание элемента
function createElement(parent, elementType, html, elementClass){
  const element = document.createElement(elementType);
  element.innerHTML = html;
  element.classList.add(elementClass);
  parent.append(element);
  return element;
}
