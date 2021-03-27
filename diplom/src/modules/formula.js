const formula = () => {
    const formulaItems = document.querySelectorAll('.row > .formula-item');

    const addTootlips = (item, eventOn, eventOut) => {
        const popup = item.querySelector('.formula-item-popup'),
            p = popup.querySelector('p');
        
        item.addEventListener(eventOn, () => {

            item.classList.add('active-item');

            if(popup.getBoundingClientRect().top < 0){
                popup.style.top = 140 + 'px';
                popup.style.transform = 'rotate(180deg)';
                p.style.transform = 'rotate(-180deg)';

                item.style.zIndex = 2;
            }
        });
    
        item.addEventListener(eventOut, () => {
            // popup.style.visibility = 'hidden';
            item.classList.remove('active-item');

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
            slider.style.width = '200px';
        } else {
            slider.style.width = '100%';

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

        // slider wrapper
        wrapper.style.overflow = 'visible';
        wrapper.style.width = '100%'
        
        // slider
        slider.style.margin = 'auto';
        slider.style.overflow = 'visible';

        
        // slide width
        const slideWidth = Math.round(slider.getBoundingClientRect().width / slidesToShow);
        
        
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
        // сдвиг, на маленьких экранах его нет
        let shift = 0;
        let width = 220;

        if(document.documentElement.getBoundingClientRect().width > 450){
            shift = 1;

            let lastElem = slides[slides.length-1].cloneNode(true);
            lastElem.id = 'lastClone';
            slider.insertAdjacentElement('afterbegin', lastElem);

            width = slides[0].getBoundingClientRect().width;

        } else {
            shift = 0;

            width = slider.getBoundingClientRect().width;
        }
        
        slides = slider.querySelectorAll('.formula-slider__slide');
        slides[shift].classList.add('active-item');

        const nextSlide = (offset, slideWidth) => {
            slider.style.transform = `translateX(0px)`;

                currentSlide++;

                removeActiveClass(slides);
                slides[currentSlide+offset].classList.add('active-item');
                slides[currentSlide+(offset-1)].classList.remove('active-item');

                slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;

                    let firstClone = slides[currentSlide+(offset-1)].cloneNode(true);
                    firstClone.classList.remove('active-item');
                    slider.append(firstClone);
                    slides = slider.querySelectorAll('.formula-slider__slide');

                    if (slides.length >= 24) {
                        for (let i = 0; i < 6; i++) {
                            slides[i].remove();
                        }

                        currentSlide = 6;

                        removeActiveClass(slides);
                        slides[currentSlide+offset].classList.add('active-item');
                        slides[currentSlide+(offset-1)].classList.remove('active-item');

                        slides = slider.querySelectorAll('.formula-slider__slide');
                        slider.style.transform = `translateX(0px)`;
                    }

        }

        const prevSlide = (offset, slideWidth) => {
            if (currentSlide === 0) {
                let lastClone = slides[currentSlide + 4 + offset].cloneNode(true);
                lastClone.classList.remove('active-item');
                slider.insertAdjacentElement('afterbegin', lastClone);
                slides = slider.querySelectorAll('.formula-slider__slide');

                removeActiveClass(slides);
                slides[currentSlide+offset].classList.add('active-item');                

                slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
                
            } else {
                currentSlide--;

                removeActiveClass(slides);
                slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
            }

        }

        

        wrapper.addEventListener('click', e => {
            let target = e.target;

            // closest - чтобы можно было кликать по стрелкам svg и все работало
            if (!target.closest('#formula-arrow_left')
            && !target.closest('#formula-arrow_right')) { 
                return;
            }


            if (target.closest('#formula-arrow_right')) { 
                nextSlide(shift, width);

            } else if (target.closest('#formula-arrow_left')) { 
                prevSlide(shift, width)
                
            } 

    });


    }

    carousel();

}

export default formula;
