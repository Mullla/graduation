const toggleMenu = () => {
    const blockMenu = document.querySelector('.popup-dialog-menu');

        // show menu
        const showMenu = () => {
            if (document.documentElement.clientWidth < 576){
                // выплывает сверху
                blockMenu.classList.toggle('showHide-menu');
            } else {
                blockMenu.classList.add('showMenu');
                blockMenu.classList.remove('hideMenu');
                // чтобы меню осталось в выдвинутом состоянии
                blockMenu.style.animationFillMode = 'forwards';
            }
        }

        // close menu
        const closeMenu = () => {
            if (document.documentElement.clientWidth < 576){
                // выплывает сверху
                blockMenu.classList.toggle('showHide-menu');
            } else {
                blockMenu.classList.remove('showMenu');
                blockMenu.classList.add('hideMenu');
            }
        }

        document.addEventListener('click', e => {
            let target = e.target;

            // если это иконка меню, то меню открывается
            if(target.closest('.menu__icon')){
                showMenu();
                
            } else if(target.classList.contains('close-menu')
            || target.closest('.menu-link')
            || blockMenu.classList.contains('showMenu') && !target.closest('.showMenu')){
                
                closeMenu();
            }

            smoothScroll(e);
        });


        // smooth scroll
        const smoothScroll = e => {
            let target = e.target;
            if (target.closest('.popup-menu-nav__item > .menu-link') || target.closest('button>a')) {
                e.preventDefault(); // отменяю обычный переход по ссылке, чтобы добавить плавный
        
                target = target.closest('a'); 
        
                //выделяю часть ссылки href = #<...>, чтобы подставить значение <...> и найти элемент по id
                let id = target.getAttribute('href').substr(1); 
        
                //скроллю к элементу с заданным id
                document.getElementById(id).scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
}

export default toggleMenu;