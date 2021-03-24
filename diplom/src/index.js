import showPhone from './modules/togglePhone';
import toggleMenu from './modules/menu';
import phoneMask from './modules/phoneMask';
import tooltip from './modules/tooltip';
import accordion from './modules/accordion';
import carousel from './modules/carousel';
import getRepairTypes from './modules/getRepairTypes';
import sendForm from './modules/sendForm';
import design from './modules/design';

// * popups
import popupTransparency from './modules/popups/popupTransparency';
import popupHandler from './modules/popups/popupHandler';

// * sliders
import repairTypesSlider from './modules/sliders/repairTypesSlider';
import portfolioSlider from './modules/sliders/portfolioSlider';
import popupSlider from './modules/sliders/popupSlider';
import slider from './modules/sliders/slider';
import reviews from './modules/sliders/reviews';

// * tabs
import scheme from './modules/tabs/scheme';

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
popupHandler('.button_wide', 'consultation');
// модальное окно при клике на документы
popupTransparency();

// аккордеон
accordion();

// маска для телефона
phoneMask();

// отправка форм
sendForm();

// подгрузка данных 
getRepairTypes();

// * sliders * //
// слайдер с отзывами
reviews();
// блок с документами при адаптиве становится слайдером
slider('transparency', 'show', 'mobileHidden');

// * tabs * //
scheme();

design();
// todo
/*


// подсказка
tooltip();

// * sliders * //
// слайдер с типами ремонта
repairTypesSlider();

// блок с портфолио
portfolioSlider();

// модальное окно в виде слайдера
popupSlider();



// карусель
carousel();



*/