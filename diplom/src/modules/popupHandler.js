import animation from './animation';

const popupHandler = (linkSelector, popupClassName) => {
    const popupLinks = document.querySelectorAll(linkSelector),
        popupName = document.querySelector(`.popup-${popupClassName}`);

        popupLinks.forEach( link => {
            link.addEventListener('click', () => {

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
            });
    });


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