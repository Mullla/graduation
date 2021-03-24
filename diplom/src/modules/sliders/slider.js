const slider = (sliderName, activeClass, hide) => {
    const sliderBlock = document.querySelector(`.${sliderName}-slider-wrap`),
        slider = document.querySelector(`.${sliderName}-slider`),
        slides = slider.querySelectorAll(`.${sliderName}-item`);

        let currentSlide = 0; // текущий слайд


        const prevSlide = (elem, index, showClass, hideClass) => {
            elem[index].classList.remove(showClass);
            if (hideClass) elem[index].classList.add(hideClass);
        };

        const nextSlide = (elem, index, showClass, hideClass) => {
            elem[index].classList.add(showClass);
            if (hideClass) elem[index].classList.remove(hideClass);
        };



        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault();

            let target = e.target;

            // если клик не по этим селекторам, событие не срабатывает
            // closest - чтобы можно было кликать по стрелкам svg и все работало
            if (!target.closest(`#${sliderName}-arrow_left`)
                && !target.closest(`#${sliderName}-arrow_right`)) { 
                    return;
            }
            // убираем активный класс у текущего слайда
            prevSlide(slides, currentSlide, activeClass, hide);
                

            if (target.closest(`#${sliderName}-arrow_right`)) { 
                currentSlide++;
            } else if (target.closest(`#${sliderName}-arrow_left`)) { 
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

              // добавляем активный класс слайду, у которого выполняется условие
            nextSlide(slides, currentSlide, activeClass, hide);
                
        });
}

export default slider;