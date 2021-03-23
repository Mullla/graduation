const tooltip = () => {
    const formulaItems = document.querySelectorAll('.row > .formula-item');

    formulaItems.forEach( item => {
        const popup = item.querySelector('.formula-item-popup')
        
        item.addEventListener('mouseover', () =>{
            popup.classList.add('fade-tab')
            popup.style.animationFillMode = 'forwards';
            popup.style.visibility = 'visible'
    
            if(popup.getBoundingClientRect().top < 0){
                popup.style.top = 132 + 'px';
                popup.style.transform = 'rotate(180deg)';
                popup.querySelector('p').style.transform = 'rotate(-180deg)';
            }

        });
    
        item.addEventListener('mouseout', () =>{
            popup.classList.remove('fade-tab')
            popup.style.visibility = 'hidden'
        });

    });

}

export default tooltip;