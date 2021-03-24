const carousel = () => {
    const partnersBlock = document.querySelector('.wrapper'),
        partnersSlider = document.querySelector('.partners-slider'),
        partnersSlides = partnersSlider.querySelectorAll('.partners-slider__slide');
    
        let currentSlide = 0; // текущий слайд
    
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
    
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
    
        partnersBlock.addEventListener('click', (e) => {
                e.preventDefault();
    
                let target = e.target;
    
                // если клик не по этим селекторам, событие не срабатывает
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.closest('#partners-arrow_left')
                && !target.closest('#partners-arrow_right')) { 
                    return;
                }
                // убираем активный класс у текущего слайда
                prevSlide(partnersSlides, currentSlide, 'reviews-slide-active');
    
                if (target.closest('#reviews-arrow_right')) { 
                    currentSlide++;
                } else if (target.closest('#reviews-arrow_left')) { 
                    currentSlide--;
                } 
    
                // если слайд был последний, то переходит к первому
                if (currentSlide >= partnersSlides.length){
                    currentSlide = 0;
                } 
                // если слайд был первый, то переходит к последнему
                if (currentSlide < 0) {
                    currentSlide = partnersSlides.length-1;
                }
    
                // добавляем активный класс слайду, у которого выполняется условие
                nextSlide(partnersSlides, currentSlide, 'reviews-slide-active');
        });
    
}

export default carousel;