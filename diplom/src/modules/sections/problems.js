import tooltip from '../utils/tooltip';

const problems = () => {

    tooltip('problems');

    const carousel = () => {
        const wrapper = document.querySelector('.problems-slider-wrap'),
            slider = document.querySelector('.problems-slider');

        let slides = slider.querySelectorAll('.problems-slider__slide');

        slider.style.display = 'flex';

        let currentSlide = 0;
        const slideWidth = slides[0].getBoundingClientRect().width;

        const removeActiveClass = (array) => {
            array.forEach(elem => elem.classList.remove('active-item'));
        }

        // * clone elements

        let lastElem = slides[slides.length-1].cloneNode(true);
        lastElem.id = 'lastClone';
        slider.insertAdjacentElement('afterbegin', lastElem);
        slider.style.transform = `translateX(${-slideWidth * (currentSlide+1)}px)`;

        slides = slider.querySelectorAll('.problems-slider__slide');
        slides[1].classList.add('active-item');


        wrapper.addEventListener('click', e => {
            let target = e.target;

            // closest - чтобы можно было кликать по стрелкам svg и все работало
            if (!target.closest('#problems-arrow_left')
            && !target.closest('#problems-arrow_right')) { 
                return;
            }


            if (target.closest('#problems-arrow_right')) { 

                currentSlide++;

                removeActiveClass(slides);
                slides[currentSlide+1].classList.add('active-item');
                slides[currentSlide].classList.remove('active-item');

                slider.style.transform = `translateX(${-slideWidth * (currentSlide+1)}px)`;

                    let firstClone = slides[currentSlide].cloneNode(true);
                    firstClone.classList.remove('active-item');
                    slider.append(firstClone);
                    slides = slider.querySelectorAll('.problems-slider__slide');

                    if (slides.length >= 24) {
                        for (let i = 0; i < 6; i++) {
                            slides[i].remove();
                        }

                        currentSlide = 6;

                        removeActiveClass(slides);
                        slides[currentSlide+1].classList.add('active-item');
                        slides[currentSlide].classList.remove('active-item');

                        slides = slider.querySelectorAll('.problems-slider__slide');
                        slider.style.transform = `translateX(0px)`;
                    }

            } else if (target.closest('#problems-arrow_left')) { 

                

                if (currentSlide === 0) {
                    let lastClone = slides[currentSlide + 3].cloneNode(true);
                    lastClone.classList.remove('active-item');
                    slider.insertAdjacentElement('afterbegin', lastClone);
                    slides = slider.querySelectorAll('.problems-slider__slide');
    
                    removeActiveClass(slides);
                    slides[currentSlide+1].classList.add('active-item');                
    
                    slider.style.transform = `translateX(${-slideWidth * (currentSlide+1)}px)`;
                    
                } else {
                    currentSlide--;
    
                    removeActiveClass(slides);
                    slider.style.transform = `translateX(${-slideWidth * (currentSlide)}px)`;
                }

                
            } 

    });


    }

    carousel();
}

export default problems;