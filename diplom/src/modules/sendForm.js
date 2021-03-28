import popupHandler from './utils/popupHandler';

const sendForm = () => {
    // сообщения для пользователя
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = `<div class="spinner">
                            <div class="dot1"></div>
                            <div class="dot2"></div>
                        </div>`,

        successMessage = 'Спасибо! Мы скоро с Вами свяжемся';

    // html-блок сообщения
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1rem; color: #f48922';

    // коллекция с правильно заполненными полями
    const validFields = new Set();

    const forms = document.querySelectorAll('form');


    forms.forEach( form => {
        const submitBtn = form.querySelector('.button')
        submitBtn.disabled = true;

        createFormElements(form);

        form.addEventListener('submit', e => {
            e.preventDefault();
            form.insertAdjacentElement('afterbegin', statusMessage);
            statusMessage.innerHTML = loadMessage;


            // присваивает body результат работы функции createBody для формы
            let body = createBody(form);

            postData(body)
                .then( (response) => {
                    if (response.status !== 200) {
                        throw new Error(`status network ${response.status}`);
                    }

                    popupHandler(form, 'thank');
                    statusMessage.textContent = successMessage;

                    // через 3-5 секунд сообщение пропадает
                    setTimeout(() => statusMessage.remove(), 3000);
                })
                .catch( (error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });


            // очищает значения формы
            e.target.reset();
            // очищает коллекцию, чтобы можно было снова отправлять форму
            validFields.clear();
            submitBtn.disabled = true;
        }); 

    });

    // функция работает только с запросом, принимает body
    const postData = (body) => {
        return fetch('./server.php', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        
    };

    // создает объект body из формы
    const createBody = (form) => {
        // объект содержит все данные формы
        const formData = new FormData(form); 
        let body = {};

        // перебираем значения formData и записывем их в объект body в формате ключ:значение
        formData.forEach( (val, key) => {
            body[key] = val;
        });

        return body;
    }


    // создание и перебор элементов формы (для их валидации)
    function createFormElements(form){
        // массив с инпутами из формы
        const formElements = [];
        // добавление инпута в массив с элементами формы
        for (const elem of form.elements) {
            if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
                formElements.push(elem);
            }
        }
    
        // для каждого элемента формы должно быть заполнено поле, в том числе и для чекбокса - если галочка не стоит, форма не отправится
        formElements.forEach( elem => validate(elem) );

    };

    function validate(elem) {
        elem.required = true;                

        const formBtn = elem.closest('form').querySelector('.button');

        elem.addEventListener('input', () => {
            if (elem.name === 'phone') {
                elem.maxLength = 18;

                if(elem.value.length < 10){
                    validFields.delete(elem)
                } else {
                    validFields.add(elem);
                }
            } else if (elem.name === 'name'){
                elem.minLength = 2;
                elem.value = elem.value.replace(/[^а-яё]/ig, '');

                if(elem.value.length < 2){
                    validFields.delete(elem)
                } else {
                    validFields.add(elem);
                }
            } 

            if(validFields.size === 2){
                formBtn.disabled = false;
            } else {
                formBtn.disabled = true;
            }

        });

    }
}

export default sendForm;