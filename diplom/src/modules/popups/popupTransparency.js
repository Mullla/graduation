import popupHandler from './popupHandler';

const popupTransparency = () => {
    popupHandler('.transparency-item__img', 'transparency');

    const slider = () => {
        const sliderBlock = document.querySelector('.popup-transparency-slider-wrap'),
            slides = sliderBlock.querySelectorAll('.popup-transparency-slider__slide'),
            counterBlock = document.getElementById('transparency-popup-counter'),
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
                if (!target.closest('#transparency_left')
                && !target.closest('#transparency_right')) { 
                    return;
                }
                // убираем активный класс у текущего слайда
                prevSlide(slides, currentSlide, 'hide');

                if (target.closest('#transparency_right')) { 
                    currentSlide++;
                } else if (target.closest('#transparency_left')) { 
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

    slider();
}

export default popupTransparency;