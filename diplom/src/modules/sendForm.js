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


    const forms = document.querySelectorAll('form');


    forms.forEach( form => {

        createFormElements(form);

        form.addEventListener('submit', (e) => {
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
        formElements.forEach( elem => elem.required = true );

    };

}

export default sendForm;