import popupHandler from '../utils/popupHandler';
import slider from '../utils/slider';

const portfolio = () => {
    const sliderHandler = () => {
        const sliderBlock = document.querySelector('.portfolio-slider-wrap'),
            sliderWrapper = document.querySelector('.portfolio-slider'),
            slides = sliderWrapper.querySelectorAll('.portfolio-slider__slide'),
            arrowLeft = document.getElementById('portfolio-arrow_left'),
            arrowRight = document.getElementById('portfolio-arrow_right');


        let currentSlide = 0; // текущий слайд
        arrowLeft.style.display = 'none'

        // сколько слайдов показывается на экране
        // ширина блока со слайдами делится на размер слайда (взят первый слайд, у них одинаковый размер)
        let slidesToShow = Math.round((sliderWrapper.getBoundingClientRect().width / slides[0].getBoundingClientRect().width));

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        sliderBlock.addEventListener('click', (e) => {
                e.preventDefault();

                let target = e.target;

                // если клик не по этим селекторам, событие не срабатывает
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.closest('#portfolio-arrow_left')
                && !target.closest('#portfolio-arrow_right')) { 
                    return;
                }
                

                if (target.closest('#portfolio-arrow_right')) { 
                    if ((slides.length - 1) - currentSlide === slidesToShow) arrowRight.style.display = 'none';

                    // скрываем текущий слайд
                    prevSlide(slides, currentSlide, 'hide');
                    currentSlide++;

                    arrowLeft.style.display = 'flex';

                } else if (target.closest('#portfolio-arrow_left')) { 
                    if (currentSlide === 1) arrowLeft.style.display = 'none';

                    currentSlide--;

                    //убираем hide у следующего слайда
                    nextSlide(slides, currentSlide, 'hide');
                    arrowRight.style.display = 'flex';
                } 

        });
    }

    popupHandler('.portfolio-slider__slide-frame', 'portfolio');
    slider('portfolio', 'show', 'hide', {loop: true, hasCounter: true, addBlock: true});

    sliderHandler();
}

export default portfolio;