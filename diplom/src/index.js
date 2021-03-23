import showPhone from './modules/togglePhone';
import toggleMenu from './modules/menu';
import phoneMask from './modules/phoneMask';
import tooltip from './modules/tooltip';
import accordion from './modules/accordion';
import carousel from './modules/carousel';
import getRepairTypes from './modules/getRepairTypes';
import sendData from './modules/sendData';
import popupHandler from './modules/popupHandler';

// sliders
import repairTypesSlider from './modules/sliders/repairTypesSlider';
import portfolioSlider from './modules/sliders/portfolioSlider';
import popupSlider from './modules/sliders/popupSlider';
import docsSlider from './modules/sliders/docsSlider';

// меню (бургер + адаптив + плавный скролл)
toggleMenu();

// список телефонов
showPhone();

// * modals * //
// модальное окно виды ремонта
popupHandler('.link-list', 'repair-types');
// модальное окно политика конфиденциальности
popupHandler('span.link-privacy', 'privacy');
// модальное окно проконсультироваться
popupHandler('.button_wide', 'consultation')

// подсказка
tooltip();

// todo
/*

// маска для телефона
phoneMask();



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