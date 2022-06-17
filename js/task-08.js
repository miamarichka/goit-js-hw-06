// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// // Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
// где имя поля будет именем свойства, а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
const form = document.forms[0]

let user = {
    email: '',
    password: '',
}

form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(event){
     event.preventDefault()

        if (form.elements.email.value === '' || form.elements.password.value === ''){
            return alert('All fields must be filled')
        }
        else{
            user.email = form.elements.email.value;
            user.password = form.elements.password.value;
            console.log(user)
        }
     form.reset()
}