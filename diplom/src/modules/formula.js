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


}

export default formula;