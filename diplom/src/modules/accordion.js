const accordion = () => { 
        const faqUl = document.querySelector('.accordion > ul'),
            faqLi = faqUl.querySelectorAll('li');

        // если у h2 активный класс, то блок должен быть раскрыт - ему задается высота
        faqLi.forEach( item => {
            if(item.children[0].classList.contains('msg-active')){
                item.children[1].style.height = `${item.children[1].scrollHeight}px`;
            }
        });

        const openAccordion = (title, dropDown) => {
            closeAllDrops(title, dropDown);

            dropDown.style.height = `${dropDown.scrollHeight}px`;
            title.classList.add('msg-active');
            dropDown.classList.add('active');
        };

        const closeAccordion = (title, dropDown) => {
            title.classList.remove('msg-active');
            dropDown.classList.remove('active');
            dropDown.style.height = '';
        };

        // закрывает все элементы, кроме тех, которые передали
        const closeAllDrops = (title, dropDown) => {
            faqLi.forEach( (item) => {

                if(item.children[0] !== title && item.children[1] !== dropDown){
                    // передаем те, которые не должны закрываться
                    // если не передать их при вызове, то закроются все
                    closeAccordion(item.children[0], item.children[1]);
                }
            });
        };

        faqUl.addEventListener('click', e => {
            const target = e.target;

            if(target.classList.contains('title_block')){

                const parent = target.closest('li'),
                    dropDown = parent.querySelector('.msg'); 

                    dropDown.classList.contains('active') 
                    ? closeAccordion(target, dropDown) 
                    : openAccordion(target, dropDown);
            }
        });

        // закрываются все по клику мимо списка
        document.body.addEventListener('click', e => {
            const target = e.target;

            if(!target.closest('.accordion > ul')){
                closeAllDrops();
            }

        }); 

    };

export default accordion;