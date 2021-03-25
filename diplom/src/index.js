import showPhone from './modules/togglePhone';
import toggleMenu from './modules/menu';
import phoneMask from './modules/phoneMask';
import formula from './modules/formula';
import partners from './modules/partners';
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

// подсказка
formula();
partners();


// маска для телефона
phoneMask();

// * sliders * //
// слайдер с отзывами
reviews();
// блок с документами при адаптиве становится слайдером
slider('transparency', 'show', 'mobileHidden');

// * tabs * //
scheme();

// блок с портфолио
portfolioSlider();

// дизайн
design();

// слайдер с типами ремонта
repairTypesSlider();


// todo
/*

// карусель
carousel();

*/