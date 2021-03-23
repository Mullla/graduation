const tooltip = () => {
    const formulaItems = document.querySelectorAll('.row > .formula-item');

    formulaItems.forEach( item => {
        const popup = item.querySelector('.formula-item-popup');
        
        
        item.addEventListener('mouseover', () => {
            
            popup.style.visibility = 'visible';
            popup.style.opacity = 1;
    
            if(popup.getBoundingClientRect().top < 0){
                // popup.style.top = 150 + 'px';
                // popup.style.transform = 'rotate(180deg)';
                // popup.querySelector('p').style.transform = 'rotate(-180deg)';
            }

        });
    
        item.addEventListener('mouseout', () => {
            popup.style.visibility = 'hidden'
        });

    });

}

export default tooltip;