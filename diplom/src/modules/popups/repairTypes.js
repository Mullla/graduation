import animation from '../animation'

const popupRepairTypes = () => {
    const repairLinks = document.querySelectorAll('.link-list'),
        popupRepairTypes = document.querySelector('.popup-repair-types');

    repairLinks.forEach( link => {
        link.addEventListener('click', () => {

            popupRepairTypes.style.visibility = 'visible';

            animation({
                duration: 500,
                timing(timeFraction){
                    return timeFraction;
                },
                draw(progress){
                    popupRepairTypes.style.opacity = progress;
                }
            });

            // отключает прокрутку заднего фона
            document.body.style.overflow = 'hidden';
        });
    });


    // закрывает модальное, если клик на кнопку закрыть или вне его
    popupRepairTypes.addEventListener('click', e => {
        const target = e.target;

        if( !target.closest('.popup-dialog') || target.closest('.close') ){

            animation({
                duration: 500,
                timing(timeFraction){
                    return timeFraction;
                },
                draw(progress){
                    popupRepairTypes.style.opacity = 1 - progress;
                }
            });

            popupRepairTypes.style.visibility = 'hidden';
            // обратно включается прокрутка
            document.body.style.overflow = 'auto';
        }
    });

    
}

export default popupRepairTypes;