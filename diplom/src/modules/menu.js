const showMenu = () => {
    const btnMenu = document.querySelector('.menu__icon'),
        blockMenu = document.querySelector('.popup-dialog-menu'),
        btnClose = blockMenu.querySelector('.close-menu');

        btnMenu.addEventListener('click', () => {

            if (document.documentElement.clientWidth < 576){
                // выплывает сверху
                blockMenu.classList.toggle('showHide-menu');
            } else {
                blockMenu.classList.add('showMenu');
                blockMenu.classList.remove('hideMenu');
                // чтобы меню осталось в выдвинутом состоянии
                blockMenu.style.animationFillMode = 'forwards';
                
            }

        });

        btnClose.addEventListener('click', () => {
            if (document.documentElement.clientWidth < 576){
                // выплывает сверху
                blockMenu.classList.toggle('showHide-menu');
            } else {
                blockMenu.classList.remove('showMenu');
                blockMenu.classList.add('hideMenu');
                // чтобы меню осталось в выдвинутом состоянии
                blockMenu.style.animationFillMode = 'forwards';
            }
        });
}

export default showMenu;