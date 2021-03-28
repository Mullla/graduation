import popupHandler from '../utils/popupHandler';
import slider from '../utils/slider';
import tabs from '../utils/tabs';

const design = () => {

    tabs('designs-popup', {hasAddBlock: true, hideClass: 'hide', contentActive: 'visible-content-block', tabsActive: 'active'});

    const sliderBlocks = document.querySelectorAll('.popup-designs-slider__style');
    sliderBlocks.forEach(item => slider('design-popup', 'is-active', 'hide', {loop: true, hasCounter: true, wrapper: item}));

    tabs('design', {hasAddBlock: true, activeClass: 'visible', contentActive: 'show', contentHide: 'hide', tabsActive: 'active'});

    popupHandler('.preview-block', 'design');

    const tabsContent = document.querySelectorAll('.design-slider__style');
    tabsContent.forEach(item => slider('design-mobile', 'is-active', 'hide', {loop: true, hasCounter: true, wrapper: item}));

    slider('design-mobile-tabs', 'active', 'not-active', {sliderTranslate: true});

}

export default design;