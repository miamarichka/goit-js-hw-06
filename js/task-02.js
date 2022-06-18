// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientItems = []

for(let ingredient of ingredients){

const ingredientItem = document.createElement('li');
ingredientItem.classList.add('item');
ingredientItem.textContent=ingredient;

ingredientItems.push(ingredientItem);
}
document.querySelector('#ingredients').append(...ingredientItems);
