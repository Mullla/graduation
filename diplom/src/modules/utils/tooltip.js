const tooltip = (className) => {
    const tooltipItems = document.querySelectorAll(`.row > .${className}-item`);

    const addTootlips = (item, eventOn, eventOut) => {
        const popup = item.querySelector(`.${className}-item-popup`),
            wrapper = popup.querySelector('.wrapper');
        
        item.addEventListener(eventOn, () => {

            item.classList.add('active-item');

            if(popup.getBoundingClientRect().top < 0){
                popup.style.top = 140 + 'px';
                popup.style.transform = 'rotate(180deg)';
                wrapper.style.transform = 'rotate(-180deg)';

                item.style.zIndex = 2;
            }
        });
    
        item.addEventListener(eventOut, () => {
            // popup.style.visibility = 'hidden';
            item.classList.remove('active-item');

            // обнуляю стили после возврата фокуса
            popup.style.top = '';
            popup.style.transform = '';
            wrapper.style.transform = '';
            item.style.zIndex = '';
        });
    }

    tooltipItems.forEach( item => addTootlips(item, 'mouseover', 'mouseout'));
}

export default tooltip;