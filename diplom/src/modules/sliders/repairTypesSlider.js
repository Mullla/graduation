const repairTypesSlider = () => {
    const tabHeader = document.querySelector('.nav-list-repair'),
        tabs = tabHeader.querySelectorAll('.repair-types-nav__item'),
        tabsContent = document.querySelectorAll('.types-repair');

    const toggleTabsContent = (index) => {
        for (let i = 0; i < tabsContent.length; i++) {
            if (index === i){
                tabsContent[i].classList.add('show');
                tabsContent[i].classList.remove('hide');
                tabs[i].classList.add('active');

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

    tabsContent.forEach( elem => imageSlider(elem));


    function imageSlider(sliderWrapper){
        const sliderBlock = sliderWrapper.closest('.repair-types-slider-wrap'),
            slides = sliderWrapper.querySelectorAll('.repair-types-slider__slide'),
            repairCounter = document.getElementById('repair-counter'),
            counter = repairCounter.querySelector('.slider-counter-content__current'),
            total = repairCounter.querySelector('.slider-counter-content__total');

        counter.textContent = 1;
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

    const mobileSlides = () => {
        const sliderBlock = document.querySelector('#repair-types .nav-wrap'),
            sliderWrapper = sliderBlock.querySelector('.nav-list-repair'),
            slides = sliderWrapper.querySelectorAll('.repair-types-nav__item'),
            arrowLeft = document.getElementById('nav-arrow-repair-left_base'),
            arrowRight = document.getElementById('nav-arrow-repair-right_base');


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
                if (!target.closest('#nav-arrow-repair-left_base')
                && !target.closest('#nav-arrow-repair-right_base')) { 
                    return;
                }
                // убираем активный класс у текущего слайда
                prevSlide(slides, currentSlide, 'active');
                // toggleTabsContent(currentSlide);

                if (target.closest('#nav-arrow-repair-right_base')) { 
                    if (currentSlide === slides.length - 2) arrowRight.style.display = 'none';
                    currentSlide++;
                    arrowLeft.style.display = 'block';
                } else if (target.closest('#nav-arrow-repair-left_base')) { 
                    if (currentSlide === 1) arrowLeft.style.display = 'none';
                    currentSlide--;
                    arrowRight.style.display = 'block';
                } 

                // добавляем активный класс слайду, у которого выполняется условие
                nextSlide(slides, currentSlide, 'active');

                toggleTabsContent(currentSlide);
        });
    }

    mobileSlides();
}

export default repairTypesSlider;
