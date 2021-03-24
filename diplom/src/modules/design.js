import popupHandler from './popups/popupHandler';

const design = () => {
    const tabs = () => {
        const tabHeader = document.getElementById('designs-list'),
            tabs = tabHeader.querySelectorAll('.designs-nav__item'),
            tabsContent = document.querySelectorAll('.design-slider__style'),
            previews = document.querySelectorAll('.preview-block');

        const toggleTabsContent = (index) => {
            for (let i = 0; i < tabsContent.length; i++) {
                if (index === i){
                    tabsContent[i].classList.add('show');
                    tabsContent[i].classList.remove('hide');
                    tabs[i].classList.add('active');
                    previews[i].classList.add('visible');
                } else {
                    tabsContent[i].classList.remove('show');
                    tabsContent[i].classList.add('hide');
                    tabs[i].classList.remove('active');
                    previews[i].classList.remove('visible');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.designs-nav__item'); 

                if (target){
                    tabs.forEach((item, i) => {
                        if (item === target) {
                            toggleTabsContent(i);
                        }
                    });
                }

        });
    }

    const modal = () => {
        const tabHeader = document.getElementById('nav-list-popup-designs'),
            tabs = tabHeader.querySelectorAll('.designs-nav__item'),
            tabsContent = document.querySelectorAll('.popup-design-text'),
            sliderBlocks = document.querySelectorAll('.popup-designs-slider__style');

        const toggleTabsContent = (index) => {
            for (let i = 0; i < tabsContent.length; i++) {
                if (index === i){
                    tabsContent[i].classList.add('visible-content-block');
                    tabs[i].classList.add('active');
                    sliderBlocks[i].classList.remove('hide');
                } else {
                    tabsContent[i].classList.remove('visible-content-block');
                    tabs[i].classList.remove('active');
                    sliderBlocks[i].classList.add('hide');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.designs-nav__item'); 

                if (target){
                    tabs.forEach((item, i) => {
                        if (item === target) {
                            toggleTabsContent(i);
                        }
                    });
                }
        });

        sliderBlocks.forEach( item => slider(item));
    }

    

    const slider = (item) => {
        const sliderBlock = document.querySelector('.popup-design-slider-wrap'),
            slides = item.querySelectorAll(`.popup-design-slider__style-slide`),
            counterBlock = document.getElementById('popup-designs-counter'),
            counter = counterBlock.querySelector('.slider-counter-content__current'),
            total = counterBlock.querySelector('.slider-counter-content__total');


        total.textContent = slides.length;
        counter.textContent = 1;

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
            if (!target.closest(`#popup_design_left`)
                && !target.closest(`#popup_design_right`)) { 
                    return;
            }
            // убираем активный класс у текущего слайда
            prevSlide(slides, currentSlide, 'hide');

            if (target.closest(`#popup_design_right`)) { 
                currentSlide++;
            } else if (target.closest(`#popup_design_left`)) { 
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

    popupHandler('.preview-block', 'design');
    tabs();
    modal();
}

export default design;