const popupHandler = (itemSelector, popupClassName) => {
    const popupName = document.querySelector(`.popup-${popupClassName}`);

    if (typeof itemSelector === 'object'){
        openPopup();
    } else {
        const popupTargets = document.querySelectorAll(itemSelector);

        popupTargets.forEach( item => {
            item.addEventListener('click', () => {
                // console.log(popupName)
                openPopup();
            });
        });
    }

    function openPopup() {
        popupName.classList.add('open-popup');

        // отключает прокрутку заднего фона
        document.body.style.overflow = 'hidden';

    }

    // закрывает модальное, если клик на кнопку закрыть или вне его
    popupName.addEventListener('click', e => {
        const target = e.target;

        if( !target.closest('.popup-content') || target.closest('.close') && popupName.classList.contains('open-popup')){

            popupName.classList.remove('open-popup');
            // обратно включается прокрутка
            document.body.style.overflow = 'auto';
        }

        
    });

    
}

export default popupHandler;