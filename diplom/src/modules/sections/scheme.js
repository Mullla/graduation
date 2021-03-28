import slider from '../utils/slider';
import tabs from '../utils/tabs';

const scheme = () => {
    tabs('scheme', 'visible-content-block', 'active', {hasAddBlock: true, activeClass: 'show', hideClass: 'hide'});

    slider('scheme', 'active', 'not-active', {sliderTranslate: true});
};

export default scheme;