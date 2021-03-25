const formula = () => {
    const formulaItems = document.querySelectorAll('.row > .formula-item');

    const addTootlips = (item, eventOn, eventOut) => {
        const popup = item.querySelector('.formula-item-popup'),
            p = popup.querySelector('p');
        
        item.addEventListener(eventOn, () => {

            popup.style.visibility = 'visible';
            popup.style.opacity = 1;

            if(popup.getBoundingClientRect().top < 0){
                popup.style.top = 140 + 'px';
                popup.style.transform = 'rotate(180deg)';
                p.style.transform = 'rotate(-180deg)';

                item.style.zIndex = 2;
            }
        });
    
        item.addEventListener(eventOut, () => {
            popup.style.visibility = 'hidden';

            // обнуляю стили после возврата фокуса
            popup.style.top = '';
            popup.style.transform = '';
            p.style.transform = '';
            item.style.zIndex = '';
        });
    }

    formulaItems.forEach( item => addTootlips(item, 'mouseover', 'mouseout'));

    const carousel = () => {
        const wrapper = document.querySelector('.formula-slider-wrap'),
        slider = document.querySelector('.formula-slider'),
        slides = slider.querySelectorAll('.formula-slider__slide');
    
        let slideWidth = slides[0].getBoundingClientRect().width;

        let currentSlide = 1; // текущий слайд

        const prevSlide = (elem, index, showClass) => {
            elem[index].classList.remove(showClass);
        };

        const nextSlide = (elem, index, showClass) => {
            elem[index].classList.add(showClass);
        };


        // направление перелистывания
        let direction = -1;

        wrapper.addEventListener('click', e => {
                let target = e.target;
    
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.closest('#formula-arrow_left')
                && !target.closest('#formula-arrow_right')) { 
                    return;
                }

                prevSlide(slides, currentSlide, 'active-item');

                if(direction === -1){
                    slider.append(slider.firstElementChild);
                } else if(direction === 1) {
                    slider.prepend(slider.lastElementChild);
                }
    
                slider.style.transform = `translateX(0)`;
    
                if (target.closest('#formula-arrow_right')) { 

                    if (direction === 1){
                        direction = -1;
                        slider.prepend(slider.lastElementChild);
                    }
                    
                    // перемещает слайдер влево на размер одного слайда
                    slider.style.transform = `translateX(-${slideWidth}px)`;

                    currentSlide++;

                } else if (target.closest('#formula-arrow_left')) { 

                    if (direction === -1) {
                        slider.append(slider.firstElementChild);
                        direction = 1;
                    }
        
                    slider.style.transform = `translateX(${slideWidth}px)`;

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

                nextSlide(slides, currentSlide, 'active-item');
    
        });
    }

    carousel();
}

export default formula;