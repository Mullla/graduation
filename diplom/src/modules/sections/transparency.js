import popupHandler from '../utils/popupHandler';
import sliderHandler from '../utils/sliderHandler';
import slider from '../utils/slider';

const transparency = () => {
    popupHandler('.transparency-item__img', 'transparency');

    slider('transparency-popup', 'is-active', 'hide', {loop: true, hasCounter: true});

    // блок с документами при адаптиве становится слайдером
    slider('transparency-mobile', 'show', 'mobileHidden', {loop: true});
}

export default transparency;