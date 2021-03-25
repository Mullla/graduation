const partners = () => {
    const problemsItems = document.querySelectorAll('.row > .problems-item');

    const addTootlips = (item, eventOn, eventOut) => {
        const popup = item.querySelector('.problems-item-popup'),
            wrapper = popup.querySelector('.wrapper');
        
        item.addEventListener(eventOn, () => {

            popup.style.visibility = 'visible';
            popup.style.opacity = 1;

            if(popup.getBoundingClientRect().top < 0){
                popup.style.top = 140 + 'px';
                popup.style.transform = 'rotate(180deg)';
                wrapper.style.transform = 'rotate(-180deg)';

                item.style.zIndex = 2;
            }
        });
    
        item.addEventListener(eventOut, () => {
            popup.style.visibility = 'hidden';

            // обнуляю стили после возврата фокуса
            popup.style.top = '';
            popup.style.transform = '';
            wrapper.style.transform = '';
            item.style.zIndex = '';
        });
    }

    problemsItems.forEach( item => addTootlips(item, 'mouseover', 'mouseout'));


}

export default partners;