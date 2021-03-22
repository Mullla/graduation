const showMenu = () => {
    const btnMenu = document.querySelector('.menu__icon'),
        blockMenu = document.querySelector('.popup-dialog-menu');

        btnMenu.addEventListener('click', () => {

            if (document.documentElement.clientWidth < 576){
                blockMenu.classList.toggle('showHide-menu');
            } else {
                blockMenu.classList.toggle('showMenu');
                // чтобы меню осталось в выдвинутом состоянии
                blockMenu.style.animationFillMode = 'forwards';
            }

            
        });
}

export default showMenu;