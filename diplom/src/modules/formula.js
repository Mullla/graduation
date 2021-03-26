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

    function addStyles(wrapper, slider, slides) {
        let slidesToShow = 3;

        if (document.documentElement.getBoundingClientRect().width <= 376) {
            slidesToShow = 1;
        } else if (document.documentElement.getBoundingClientRect().width <= 576) {
            slidesToShow = 2;
        }

        // slider wrapper
        wrapper.style.overflow = 'visible';
        
        // slider
        slider.style.margin = 'auto';
        slider.style.overflow = 'visible';
        slider.style.width = '100%';
        
        // slide width
        const slideWidth = Math.round(slider.getBoundingClientRect().width / slidesToShow);
        
        slides.forEach( slide => {
            slide.style.width = `${slideWidth}px`;
            slide.style.margin = '0 auto';
        });
        window.addEventListener('resize', () => {
            slides.forEach( slide => {
                slide.style.width = `${slideWidth}px`;
                slide.style.margin = '0 auto';
            });
        });
    }

    const carousel = () => {
        const wrapper = document.querySelector('.formula-slider-wrap'),
            slider = document.querySelector('.formula-slider');

        let slides = slider.querySelectorAll('.formula-slider__slide');

        addStyles(wrapper, slider, slides);

        let currentSlide = 0;
        const slideWidth = slides[0].getBoundingClientRect().width;

        const removeActiveClass = (array) => {
            array.forEach(elem => elem.classList.remove('active-item'));
        }

        // * clone elements

        let lastElem = slides[slides.length-1].cloneNode(true);
        lastElem.id = 'lastClone';
        slider.insertAdjacentElement('afterbegin', lastElem);

        slides = slider.querySelectorAll('.formula-slider__slide');
        slides[1].classList.add('active-item');


        wrapper.addEventListener('click', e => {
            let target = e.target;

            // closest - чтобы можно было кликать по стрелкам svg и все работало
            if (!target.closest('#formula-arrow_left')
            && !target.closest('#formula-arrow_right')) { 
                return;
            }


            if (target.closest('#formula-arrow_right')) { 

                currentSlide++;

                removeActiveClass(slides);
                slides[currentSlide+1].classList.add('active-item');
                slides[currentSlide].classList.remove('active-item');

                slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;

                    let firstClone = slides[currentSlide].cloneNode(true);
                    firstClone.classList.remove('active-item');
                    slider.append(firstClone);
                    slides = slider.querySelectorAll('.formula-slider__slide');

                    if (slides.length >= 24) {
                        for (let i = 0; i < 6; i++) {
                            slides[i].remove();
                        }

                        currentSlide = 6;

                        removeActiveClass(slides);
                        slides[currentSlide+1].classList.add('active-item');
                        slides[currentSlide].classList.remove('active-item');

                        slides = slider.querySelectorAll('.formula-slider__slide');
                        slider.style.transform = `translateX(0px)`;
                    }

            } else if (target.closest('#formula-arrow_left')) { 

                if (currentSlide === 0) {
                    let lastClone = slides[currentSlide + 5].cloneNode(true);
                    lastClone.classList.remove('active-item');
                    slider.insertAdjacentElement('afterbegin', lastClone);
                    slides = slider.querySelectorAll('.formula-slider__slide');
    
                    removeActiveClass(slides);
                    slides[currentSlide+1].classList.add('active-item');                
    
                    slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
                    
                } else {
                    currentSlide--;
    
                    removeActiveClass(slides);
                    slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
                }
            } 

    });


    }

    carousel();

}

export default formula;
