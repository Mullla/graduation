const scheme = () => {
    const tabHeader = document.getElementById('scheme-list'),
        tabs = tabHeader.querySelectorAll('.scheme-nav__item'),
        tabsContent = document.querySelectorAll('.scheme-description-block'),
        tabsImg = document.querySelectorAll('.scheme-slider__slide');

        const toggleTabsContent = (index) => {
            for (let i = 0; i < tabsContent.length; i++) {
                if (index === i){
                    tabsContent[i].classList.add('visible-content-block');
                    // tabsImg[i].classList.add('fade-tab');
                    tabsImg[i].classList.add('show');
                    tabsImg[i].classList.remove('hide');
                    tabs[i].classList.add('active');
                } else {
                    tabsContent[i].classList.remove('visible-content-block');
                    // tabsImg[i].classList.remove('fade-tab');
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
};

export default scheme;