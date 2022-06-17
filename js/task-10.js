// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку 
// Создать, после чего рендерится коллекция. При нажатии на кнопку 
// Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - 
// число. Функция создает столько <div>, сколько указано в amount
//  и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes')
const input = document.querySelector('input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')


btnCreate.addEventListener('click', ()=> createBoxes(input.value))
console.log(input.value)

 function createBoxes(amount){
  const newBoxes = [];

   for(let i=1; i<=amount; i+=1){
   const newBox = document.createElement('div')

   newBox.style.width = `${30 + i * 10}px`;
   newBox.style.height = `${30 + i * 10}px`;
   newBox.style.backgroundColor = getRandomHexColor();

   newBoxes.push(newBox)
   console.log(newBoxes)
   boxes.append(...newBoxes)}
  
 };

 function destroyBoxes(){
   boxes.innerHTML = ''
 }
 btnDestroy.addEventListener('click', destroyBoxes)