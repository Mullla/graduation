import popupHandler from '../popups/popupHandler';

const portfolioSlider = () => {
        const sliderDesktop = () => {
            const sliderBlock = document.querySelector('.popup-portfolio-slider-wrap'),
                slides = sliderBlock.querySelectorAll('.popup-portfolio-slider__slide'),
                textSlides = document.querySelectorAll('.popup-portfolio-text'),
                counterBlock = document.getElementById('popup-portfolio-counter'),
                counter = counterBlock.querySelector('.slider-counter-content__current'),
                total = counterBlock.querySelector('.slider-counter-content__total');

                let currentSlide = 0; // текущий слайд
                counter.textContent = 1;
                total.textContent = slides.length;

                const prevSlide = (elem, index, showClass, hideClass) => {
                    elem[index].classList.remove(showClass);
                    elem[index].classList.add(hideClass);
                };

                const nextSlide = (elem, index, showClass, hideClass) => {
                    elem[index].classList.add(showClass);
                    elem[index].classList.remove(hideClass);
                };

                sliderBlock.addEventListener('click', (e) => {
                    e.preventDefault();

                    let target = e.target;

                    // если клик не по этим селекторам, событие не срабатывает
                    // closest - чтобы можно было кликать по стрелкам svg и все работало
                    if (!target.closest(`#popup_portfolio_left`)
                        && !target.closest(`#popup_portfolio_right`)) { 
                            return;
                    }
                    // убираем активный класс у текущего слайда
                    prevSlide(slides, currentSlide, 'show', 'hide');
                    prevSlide(textSlides, currentSlide, 'show', 'hide');

                    if (target.closest(`#popup_portfolio_right`)) { 
                        currentSlide++;
                    } else if (target.closest(`#popup_portfolio_left`)) { 
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
                    nextSlide(slides, currentSlide, 'show', 'hide');
                    nextSlide(textSlides, currentSlide, 'show', 'hide');
                });

        }


        const sliderMobile = () => {
            const sliderBlock = document.querySelector('.popup-portfolio-slider-wrap'),
            slides = sliderBlock.querySelectorAll('.popup-portfolio-slider__slide'),
            counterBlock = document.getElementById('portfolio-counter'),
            counter = counterBlock.querySelector('.slider-counter-content__current'),
            total = counterBlock.querySelector('.slider-counter-content__total');

            let currentSlide = 0; // текущий слайд
            counter.textContent = 1;
            total.textContent = slides.length;

            const prevSlide = (elem, index, showClass, hideClass) => {
                elem[index].classList.remove(showClass);
                elem[index].classList.add(hideClass);
            };

            const nextSlide = (elem, index, showClass, hideClass) => {
                elem[index].classList.add(showClass);
                elem[index].classList.remove(hideClass);
            };

            sliderBlock.addEventListener('click', (e) => {
                e.preventDefault();

                let target = e.target;

                // если клик не по этим селекторам, событие не срабатывает
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.closest(`#popup_portfolio_left`)
                    && !target.closest(`#popup_portfolio_right`)) { 
                        return;
                }
                // убираем активный класс у текущего слайда
                prevSlide(slides, currentSlide, 'show', 'hide');

                if (target.closest(`#popup_portfolio_right`)) { 
                    currentSlide++;
                } else if (target.closest(`#popup_portfolio_left`)) { 
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
                nextSlide(slides, currentSlide, 'show', 'hide');                    
            });

        }


    popupHandler('.portfolio-slider__slide-frame', 'portfolio');
    sliderDesktop();
    sliderMobile();
}

export default portfolioSlider;