import animation from './animation';

const popupHandler = (itemSelector, popupClassName) => {
    const popupName = document.querySelector(`.popup-${popupClassName}`);

    if (typeof itemSelector === 'object'){
        openPopup();
    } else {
        const popupTargets = document.querySelectorAll(itemSelector);
        popupTargets.forEach( item => {
            item.addEventListener('click', openPopup)
        });
    }

    function openPopup() {
            popupName.style.visibility = 'visible';

            animation({
                duration: 500,
                timing(timeFraction){
                    return timeFraction;
                },
                draw(progress){
                    popupName.style.opacity = progress;
                }
            });

            // отключает прокрутку заднего фона
            document.body.style.overflow = 'hidden';
    }

    

    // закрывает модальное, если клик на кнопку закрыть или вне его
    popupName.addEventListener('click', e => {
        const target = e.target;

        if( !target.closest('.popup-content') || target.closest('.close') ){

            animation({
                duration: 500,
                timing(timeFraction){
                    return timeFraction;
                },
                draw(progress){
                    popupName.style.opacity = 1 - progress;
                }
            });

            popupName.style.visibility = 'hidden';
            // обратно включается прокрутка
            document.body.style.overflow = 'auto';
        }
    });

    
}

export default popupHandler;