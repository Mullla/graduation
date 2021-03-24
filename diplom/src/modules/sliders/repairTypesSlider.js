const repairTypesSlider = () => {
    const tabs = () => {
        const tabHeader = document.querySelector('.nav-list-repair'),
            tabs = tabHeader.querySelectorAll('.repair-types-nav__item'),
            tabsContent = document.querySelectorAll('.types-repair');

        const toggleTabsContent = (index) => {
            for (let i = 0; i < tabsContent.length; i++) {
                if (index === i){
                    tabsContent[i].classList.add('show');
                    tabsContent[i].classList.remove('hide');
                    tabs[i].classList.add('active');

                    imageSlider(tabsContent[i]);

                } else {
                    tabsContent[i].classList.remove('show');
                    tabsContent[i].classList.add('hide');
                    tabs[i].classList.remove('active');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;

                target = target.closest('.repair-types-nav__item'); 

                if (target){
                    tabs.forEach((item, i) => {
                        if (item === target) {
                            toggleTabsContent(i);
                        }
                    });
                }
        });

        
    }

    const imageSlider = (sliderWrapper) => {
        const sliderBlock = sliderWrapper.closest('.repair-types-slider-wrap'),
            slides = sliderWrapper.querySelectorAll('.repair-types-slider__slide'),
            repairCounter = document.getElementById('repair-counter'),
            counter = repairCounter.querySelector('.slider-counter-content__current'),
            total = repairCounter.querySelector('.slider-counter-content__total');

        total.textContent = slides.length;

        let currentSlide = 0; // текущий слайд

        const prevSlide = (elem, index, hideClass) => {
            elem[index].classList.add(hideClass);
        };

        const nextSlide = (elem, index, hideClass) => {
            elem[index].classList.remove(hideClass);
        };

        sliderBlock.addEventListener('click', (e) => {
                e.preventDefault();

                let target = e.target;

                // если клик не по этим селекторам, событие не срабатывает
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.closest('#repair-types-arrow_left')
                && !target.closest('#repair-types-arrow_right')) { 
                    return;
                }
                // убираем активный класс у текущего слайда
                prevSlide(slides, currentSlide, 'hide');

                if (target.closest('#repair-types-arrow_right')) { 
                    currentSlide++;
                } else if (target.closest('#repair-types-arrow_left')) { 
                    currentSlide--;
                } 

                // если слайд был последний, то переходит к первому
                if (currentSlide >= slides.length){
                    currentSlide = 0;
                } 
                // если слайд был первый, то переходит к последнему
                if (currentSlide < 0) {
                    currentSlide = slides.length-1;
                }

                counter.textContent = currentSlide + 1;

                // добавляем активный класс слайду, у которого выполняется условие
                nextSlide(slides, currentSlide, 'hide');
        });


    }


    tabs();
    // adaptiveSlider();
}

export default repairTypesSlider;


// const adaptiveSlider = () => {
//     const sliderBlock = document.querySelector('.nav-wrap-repair'),
//         slides = sliderBlock.querySelectorAll('.repair-types-nav__item'),
//         leftArrow = document.getElementById('nav-arrow-repair-left_base'),
//         rightArrow = document.getElementById('nav-arrow-repair-right_base');

//     let currentSlide = 0; // текущий слайд

//     const prevSlide = (elems, index, showClass) => {
//         elems[index].classList.remove(showClass);
//     };

//     const nextSlide = (elems, index, showClass) => {
//         elems[index].classList.add(showClass);
//     };

//     currentSlide === slides.length - 1 ? rightArrow.style.display = 'none' : rightArrow.style.display = 'block';
//     currentSlide === 0 ? leftArrow.style.display = 'none' : leftArrow.style.display = 'block';

//     sliderBlock.addEventListener('click', (e) => {
//         e.preventDefault();

//         let target = e.target;

//         // если клик не по этим селекторам, событие не срабатывает
//         // closest - чтобы можно было кликать по стрелкам svg и все работало
//         if (!target.closest('#nav-arrow-repair-left_base')
//             && !target.closest('#nav-arrow-repair-right_base')) { 
//                 return;
//         }
//         // убираем активный класс у текущего слайда
//         prevSlide(slides, currentSlide, 'active');
            

//         if (target.closest('#nav-arrow-repair-right_base')) { 
//             currentSlide++;
//         } else if (target.closest('#nav-arrow-repair-left_base')) { 
//             currentSlide--;
//         } 

//         currentSlide === slides.length ? rightArrow.style.display = 'none' : rightArrow.style.display = 'block';
//         currentSlide === 0 ? leftArrow.style.display = 'none' : leftArrow.style.display = 'block';

//           // добавляем активный класс слайду, у которого выполняется условие
//         nextSlide(slides, currentSlide, 'active');
            
//     });
// }