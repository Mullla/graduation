import popupHandler from './popups/popupHandler';

const design = () => {
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

        sliderBlocks.forEach( item => popupSlider(item));
    }

    const mobileSlides = () => {
        const sliderBlock = document.querySelector('#designs .nav-wrap'),
            sliderWrapper = document.getElementById('designs-list'),
            slides = sliderWrapper.querySelectorAll('.designs-nav__item'),
            arrowLeft = document.getElementById('nav-arrow-designs_left'),
            arrowRight = document.getElementById('nav-arrow-designs_right');


        let currentSlide = 0; // текущий слайд
        arrowLeft.style.display = 'none'


        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
            sliderWrapper.style.transform = `translateX(${index * elem[index].scrollWidth}px)`;
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
            sliderWrapper.style.transform = `translateX(-${index * elem[index].scrollWidth}px)`;
            if (index === slides.length - 1) {sliderWrapper.style.transform = `translateX(-${(index - 1) * elem[index-1].scrollWidth}px)`;}
        };

        sliderBlock.addEventListener('click', (e) => {
                e.preventDefault();

                let target = e.target;

                // если клик не по этим селекторам, событие не срабатывает
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.closest('#nav-arrow-designs_left')
                && !target.closest('#nav-arrow-designs_right')) { 
                    return;
                }
                // убираем активный класс у текущего слайда
                prevSlide(slides, currentSlide, 'active');


                if (target.closest('#nav-arrow-designs_right')) { 
                    if (currentSlide === slides.length - 2) arrowRight.style.display = 'none';
                    currentSlide++;
                    arrowLeft.style.display = 'block';
                } else if (target.closest('#nav-arrow-designs_left')) { 
                    if (currentSlide === 1) arrowLeft.style.display = 'none';
                    currentSlide--;
                    arrowRight.style.display = 'block';
                } 

                // добавляем активный класс слайду, у которого выполняется условие
                nextSlide(slides, currentSlide, 'active');

                toggleTabsContent(currentSlide);
        });
    }

    const popupSlider= (item) => {
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

    const mobileSlider = (item) => {
        const sliderBlock = document.querySelector('.designs-slider-wrap'),
            slides = item.querySelectorAll('.designs-slider__style-slide'),
            counterBlock = document.getElementById('designs-counter'),
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
            if (!target.closest(`#design_left`)
                && !target.closest(`#design_right`)) { 
                    return;
            }
            // убираем активный класс у текущего слайда
            prevSlide(slides, currentSlide, 'hide');

            if (target.closest(`#design_right`)) { 
                currentSlide++;
            } else if (target.closest(`#design_left`)) { 
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
    mobileSlides();
    modal();
    tabsContent.forEach(item => mobileSlider(item));
}

export default design;