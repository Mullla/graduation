import showPhone from './modules/togglePhone';
import toggleMenu from './modules/menu';
import smoothScroll from './modules/smoothScroll';
import phoneMask from './modules/phoneMask';
import tooltip from './modules/tooltip';
import accordion from './modules/accordion';
import carousel from './modules/carousel';
import getRepairTypes from './modules/getRepairTypes';
import sendData from './modules/sendData';

// popups
import popupRepairTypes from './modules/popups/repairTypes';
import popupPrivacy from './modules/popups/privacy';

// sliders
import repairTypesSlider from './modules/sliders/repairTypesSlider';
import portfolioSlider from './modules/sliders/portfolioSlider';
import popupSlider from './modules/sliders/popupSlider';
import docsSlider from './modules/sliders/docsSlider';

// * ok

// список телефонов
showPhone();


// модальное окно виды ремонта
popupRepairTypes();


// меню (бургер + адаптив)
toggleMenu();
// todo

/*


// плавная прокрутка
smoothScroll();

// маска для телефона
phoneMask();

// подсказка
tooltip();

// * modals * //



// модальное окно политика конфиденциальности
popupPrivacy();

// * sliders * //
// слайдер с типами ремонта
repairTypesSlider();

// блок с портфолио
portfolioSlider();

// модальное окно в виде слайдера
popupSlider();

// блок с документами при адаптиве становится слайдером
docsSlider();

// аккордеон
accordion();

// карусель
carousel();

// подгрузка данных 
getRepairTypes();

// отправка форм
sendData();

*/