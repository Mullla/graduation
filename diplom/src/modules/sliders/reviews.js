const reviews = () => {
    const reviewsBlock = document.getElementById('reviews'),
        reviewsSlider = document.querySelector('.reviews-slider-wrap'),
        reviewsSlides = reviewsSlider.querySelectorAll('.reviews-slider__slide');

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

        addDots(reviewsBlock, reviewsSlides.length);

        const dots = reviewsBlock.querySelectorAll('.dot-reviews'); // получаю точки со страницы

        let currentSlide = 0; // текущий слайд
        dots[currentSlide].classList.add('dot_active');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        reviewsBlock.addEventListener('click', (e) => {
                e.preventDefault();

                let target = e.target;

                // если клик не по этим селекторам, событие не срабатывает
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.matches('.dot-reviews') 
                && !target.closest('#reviews-arrow_left')
                && !target.closest('#reviews-arrow_right')) { 
                    return;
                }
                // убираем активный класс у текущего слайда
                prevSlide(reviewsSlides, currentSlide, 'reviews-slide-active');
                prevSlide(dots, currentSlide, 'dot_active');

                if (target.closest('#reviews-arrow_right')) { 
                    currentSlide++;
                } else if (target.closest('#reviews-arrow_left')) { 
                    currentSlide--;
                } else if (target.matches('.dot-reviews')){
                    dots.forEach((elem, index) => {
                        if (elem === target){
                            currentSlide = index;
                        }
                    });
                }

                // если слайд был последний, то переходит к первому
                if (currentSlide >= reviewsSlides.length){
                    currentSlide = 0;
                } 
                // если слайд был первый, то переходит к последнему
                if (currentSlide < 0) {
                    currentSlide = reviewsSlides.length-1;
                }

                // добавляем активный класс слайду, у которого выполняется условие
                nextSlide(reviewsSlides, currentSlide, 'reviews-slide-active');
                nextSlide(dots, currentSlide, 'dot_active');
        });


};

export default reviews;