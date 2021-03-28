import getRepairTypes from './modules/getRepairTypes';
import sendForm from './modules/sendForm';
import phoneMask from './modules/phoneMask';

// * handlers * //
import popupHandler from './modules/utils/popupHandler';

// * sections * //
import main from './modules/sections/main';
import menu from './modules/sections/menu';
import formula from './modules/sections/formula';
import repairTypes from './modules/sections/repairTypes';
import portfolio from './modules/sections/portfolio';
import transparency from './modules/sections/transparency';
import problems from './modules/sections/problems';
import design from './modules/sections/design';
import reviews from './modules/sections/reviews';
import scheme from './modules/sections/scheme';
import faq from './modules/sections/faq';
import partners from './modules/sections/partners';

// загрузка данных о видах ремонта
getRepairTypes();
//отправка форм
sendForm();
// маска для телефона
phoneMask();

// * modals * //
// модальное окно виды ремонта
popupHandler('.link-list', 'repair-types');
// модальное окно политика конфиденциальности
popupHandler('span.link-privacy', 'privacy');
// модальное окно проконсультироваться
popupHandler('.button_wide', 'consultation');

// * sections * //
// показ второго телефона
main();
// меню
menu();
// формула успеха: подсказка при наведении и слайдер на мобильной версии
formula();
// виды ремонта
repairTypes();
// портфолио
portfolio();
// документы - transparency
transparency();
// проблемы
problems();
// дизайн
design();
// отзывы
reviews();
// схема работы над проектом
scheme();
// часто задаваемые вопросы
faq();
// партнеры
partners();
