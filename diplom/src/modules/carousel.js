const carousel = () => {
    const wrapper = document.querySelector('#partners .wrapper'),
        slider = document.querySelector('.partners-slider'),
        slides = slider.querySelectorAll('.partners-slider__slide');
    
        let slideWidth = slides[0].getBoundingClientRect().width;

        // направление перелистывания
        let direction = -1;

        wrapper.addEventListener('click', e => {
                let target = e.target;
    
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.closest('#partners-arrow_left')
                && !target.closest('#partners-arrow_right')) { 
                    return;
                }

                if(direction === -1){
                    slider.append(slider.firstElementChild);
                } else if(direction === 1) {
                    slider.prepend(slider.lastElementChild);
                }
    
                // 
    
                if (target.closest('#partners-arrow_right')) { 

                    if (direction === 1){
                        direction = -1;
                        slider.prepend(slider.lastElementChild);
                    }
                    
                    // перемещает слайдер влево на размер одного слайда
                    slider.style.transform = `translateX(-${slideWidth}px)`;
                    slider.style.transform = `translateX(0)`;

                } else if (target.closest('#partners-arrow_left')) { 

                    if (direction === -1) {
                        slider.append(slider.firstElementChild);
                        direction = 1;
                    }
        
                    slider.style.transform = `translateX(${slideWidth}px)`;
                    slider.style.transform = `translateX(0)`;
                } 
    
        });

}

export default carousel;