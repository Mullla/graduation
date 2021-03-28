const tabs = (sectionName, options) => {

    let hasAddBlock = options.hasAddBlock || false,
        blockActiveClass = options.activeClass || '',
        blockHideClass = options.hideClass || '',
        contentActive = options.contentActive || false,
        contentHide = options.contentHide || '',
        tabsActive = options.tabsActive || '';

    let addBlock;

    const tabHeader = document.querySelector(`.th-${sectionName}-tabs-header`),
        tabs = tabHeader.querySelectorAll(`.th-${sectionName}-tab`),
        tabsContent = document.querySelectorAll(`.th-${sectionName}-tab-content`);

    if (hasAddBlock) {
        addBlock = document.querySelectorAll(`.th-${sectionName}-add-item`);
    }    

    const toggleTabsContent = (index) => {
        for (let i = 0; i < tabsContent.length; i++) {
            if (index === i){
                if (contentActive) tabsContent[i].classList.add(contentActive);
                if(contentHide) tabsContent[i].classList.remove(contentHide)

                if (hasAddBlock) {
                    if (blockActiveClass) addBlock[i].classList.add(blockActiveClass);
                    if (blockHideClass) addBlock[i].classList.remove(blockHideClass);
                }

                tabs[i].classList.add(tabsActive);

            } else {
                if (contentActive) tabsContent[i].classList.remove(contentActive);
                if(contentHide) tabsContent[i].classList.add(contentHide);

                if (hasAddBlock) {
                    if (blockActiveClass) addBlock[i].classList.remove(blockActiveClass);
                    if (blockHideClass) addBlock[i].classList.add(blockHideClass);
                }

                tabs[i].classList.remove(tabsActive);
            }
        }
    };

    tabHeader.addEventListener('click', event => {
        let target = event.target;
            target = target.closest(`.th-${sectionName}-tab`); 

            if (target){
                tabs.forEach((item, i) => {
                    if (item === target) {
                        toggleTabsContent(i);
                    }
                });
            }
    });

}

export default tabs;