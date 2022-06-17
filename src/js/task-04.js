// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');

const increment = document.querySelector('[data-action="increment"]');


const decrementBtn = ()=>{
    counterValue -= 1;
    counter()
}
decrement.addEventListener('click', decrementBtn)


const incrementBtn = ()=>{
    counterValue += 1;
    counter()
}
increment.addEventListener('click', incrementBtn)


const counter = ()=>{
    document.getElementById('value').textContent = counterValue;
}