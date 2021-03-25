const scheme = () => {
    const tabHeader = document.getElementById('scheme-list'),
        tabs = tabHeader.querySelectorAll('.scheme-nav__item'),
        tabsContent = document.querySelectorAll('.scheme-description-block'),
        tabsImg = document.querySelectorAll('.scheme-slider__slide');


    const toggleTabsContent = (index) => {
        for (let i = 0; i < tabsContent.length; i++) {
            if (index === i){
                tabsContent[i].classList.add('visible-content-block');
                tabsImg[i].classList.add('show');
                tabsImg[i].classList.remove('hide');
                tabs[i].classList.add('active');
            } else {
                tabsContent[i].classList.remove('visible-content-block');
                tabsImg[i].classList.remove('show');
                tabsImg[i].classList.add('hide');
                tabs[i].classList.remove('active');
            }
        }
    };

    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
            target = target.closest('.scheme-nav__item'); 

            if (target){
                tabs.forEach((item, i) => {
                    if (item === target) {
                        toggleTabsContent(i);
                    }
                });
            }
    });

    const mobileSlides = () => {
        const sliderBlock = document.querySelector('#scheme .nav-wrap'),
        sliderWrapper = document.getElementById('scheme-list'),
        slides = sliderWrapper.querySelectorAll('.scheme-nav__item'),
        arrowLeft = document.getElementById('nav-arrow-scheme_left'),
        arrowRight = document.getElementById('nav-arrow-scheme_right');


        let currentSlide = 0; // текущий слайд
        arrowLeft.style.display = 'none'


        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
            sliderWrapper.style.transform = `translateX(${index * elem[index].scrollWidth}px)`;
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
            sliderWrapper.style.transform = `translateX(-${index * elem[index].scrollWidth}px)`;
            if (index === slides.length - 1) {sliderWrapper.style.transform = `translateX(-${(index - 1) * elem[index-1].scrollWidth}px)`;}
        };

        sliderBlock.addEventListener('click', (e) => {
                e.preventDefault();

                let target = e.target;

                // если клик не по этим селекторам, событие не срабатывает
                // closest - чтобы можно было кликать по стрелкам svg и все работало
                if (!target.closest('#nav-arrow-scheme_left')
                && !target.closest('#nav-arrow-scheme_right')) { 
                    return;
                }
                // убираем активный класс у текущего слайда
                prevSlide(slides, currentSlide, 'active');
                // toggleTabsContent(currentSlide);

                if (target.closest('#nav-arrow-scheme_right')) { 
                    if (currentSlide === slides.length - 2) arrowRight.style.display = 'none';
                    currentSlide++;
                    arrowLeft.style.display = 'block';
                } else if (target.closest('#nav-arrow-scheme_left')) { 
                    if (currentSlide === 1) arrowLeft.style.display = 'none';
                    currentSlide--;
                    arrowRight.style.display = 'block';
                } 

                // добавляем активный класс слайду, у которого выполняется условие
                nextSlide(slides, currentSlide, 'active');

                toggleTabsContent(currentSlide);
        });
    }

    mobileSlides();
};

export default scheme;