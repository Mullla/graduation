const slider = (sectionName, addActive, addHide, options) => {
    let sliderTranslate = options.sliderTranslate || false,
        loop  = options.loop || false, 
        hasCounter = options.hasCounter || false, 
        hasDots = options.hasDots || false, 
        addBlock = options.addBlock || false, 
        hasCallback = options.hasCallback || false,
        wrapper = options.wrapper || document;

    // если есть дополнительный блок, который надо переключать
    let slidesBlock;
    let dots;
    // если есть счетчик слайдов
    let counterBlock, counter, total;

    // блок с получением классов
    const sliderBlock = document.querySelector(`.sh-${sectionName}-wrap`);
    const slider = document.querySelector(`.sh-${sectionName}-slider`);

    const slides = wrapper.querySelectorAll(`.sh-${sectionName}-item`);
    const arrowLeft = document.querySelector(`.sh-${sectionName}-arrow-left`);
    const arrowRight = document.querySelector(`.sh-${sectionName}-arrow-right`);

    if (hasCounter){
            counterBlock = sliderBlock.querySelector(`.sh-${sectionName}-counter-block`),
            counter = counterBlock.querySelector(`.sh-${sectionName}-counter-count`),
            total = counterBlock.querySelector(`.sh-${sectionName}-counter-total`);

        total.textContent = slides.length;
        counter.textContent = 1;
    }

    if (addBlock) {
        slidesBlock = document.querySelectorAll(`.sh-${sectionName}-add-item`);
    }
        
    let currentSlide = 0; // текущий слайд

    if (!loop) {
        arrowLeft.style.display = 'none';
    }

    if(hasDots){
        // добавляет слайдеру точки переключения
        const addDots = (container, amount) => {

            let dotsBlock = document.createElement('div');
            dotsBlock.classList.add('slider-dots', 'slider-dots-reviews', 'slider-dots-base');
            container.append(dotsBlock);

            for (let i = 0; i < amount; i++){
                let dotItem = document.createElement('div');
                dotItem.classList.add('dot', 'dot-reviews', 'switch');
                dotItem.insertAdjacentHTML('afterbegin', '<div class="dot__inner"></div>');
                dotsBlock.append(dotItem);
            }
        };

        addDots(sliderBlock, slides.length);

        dots = sliderBlock.querySelectorAll('.dot-reviews'); // получаю точки со страницы

        dots[currentSlide].classList.add('dot_active');
    }


    const prevSlide = (elem, index, showClass, hideClass, isTranslated) => {
            elem[index].classList.remove(showClass);
            elem[index].classList.add(hideClass);

            if (isTranslated) slider.style.transform = `translateX(${index * elem[index].scrollWidth}px)`;
    };

    const nextSlide = (elem, index, showClass, hideClass, isTranslated) => {
            elem[index].classList.add(showClass);
            elem[index].classList.remove(hideClass);

            if (isTranslated) {
                slider.style.transform = `translateX(-${index * elem[index].scrollWidth}px)`;

                if (index === slides.length - 1) {
                    slider.style.transform = `translateX(-${(index) * elem[index - 1].scrollWidth}px)`;
                }
            }
    };

    sliderBlock.addEventListener('click', (e) => {
            e.preventDefault();

            let target = e.target;

            if (!target.matches('.dot-reviews')
                && !target.closest(`.sh-${sectionName}-arrow-left`)
                && !target.closest(`.sh-${sectionName}-arrow-right`)) { 
                    return;
                }

            // убираем активный класс у текущего слайда
            prevSlide(slides, currentSlide, addActive, addHide, sliderTranslate);
            if (addBlock) prevSlide(slidesBlock, currentSlide, addActive, addHide, sliderTranslate);
            if (hasDots) prevSlide(dots, currentSlide, 'dot_active');


            if (loop) {
                if (target.closest(`.sh-${sectionName}-arrow-right`)) { 
                    currentSlide++;
                } else if (target.closest(`.sh-${sectionName}-arrow-left`)) { 
                    currentSlide--;
                } else if (hasDots && target.matches('.dot-reviews')){
                    dots.forEach((elem, index) => {
                        if (elem === target){
                            currentSlide = index;
                        }
                    });
                }
                
                if (currentSlide >= slides.length){
                    currentSlide = 0;
                } 
                if (currentSlide < 0) {
                    currentSlide = slides.length-1;
                }

            } else {
                if (target.closest(`.sh-${sectionName}-arrow-right`)) { 
                    if (currentSlide === slides.length - 2) arrowRight.style.display = 'none';
                    currentSlide++;
                    arrowLeft.style.display = 'flex';
                } else if (target.closest(`.sh-${sectionName}-arrow-left`)) { 
                    if (currentSlide === 1) arrowLeft.style.display = 'none';
                    currentSlide--;
                    arrowRight.style.display = 'flex';
                } 
            } 

            if (hasCounter) counter.textContent = currentSlide + 1;

            // добавляем активный класс слайду, у которого выполняется условие
            nextSlide(slides, currentSlide, addActive, addHide, sliderTranslate);
            if (addBlock) nextSlide(slidesBlock, currentSlide, addActive, addHide, sliderTranslate);
            if (hasDots) nextSlide(dots, currentSlide, 'dot_active');



            if (hasCallback) {
                hasCallback(currentSlide);
            }

    });

}

export default slider;