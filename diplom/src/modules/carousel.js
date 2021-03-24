const carousel = () => {
    const partnersBlock = document.querySelector('.wrapper'),
        partnersSlider = document.querySelector('.reviews-slider-wrap'),
        partnersSlides = reviewsSlider.querySelectorAll('.reviews-slider__slide');
    
        let currentSlide = 0; // текущий слайд
    
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
    
}

export default carousel;