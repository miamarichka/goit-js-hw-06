// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color 
// и выводит значение цвета в span.color.


const body = document.querySelector('body')
const span = document.querySelector('.color')
const btn = document.querySelector('.change-color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener('click' , clickOnBtn)

function clickOnBtn(event){
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
  console.log(span.textContent)
}