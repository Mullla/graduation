import slider from '../utils/slider';
import tabs from '../utils/tabs';


const repairTypes = () => {
    const tabsContent = document.querySelectorAll('.types-repair');
    tabsContent.forEach( elem => slider('repair-types', 'is-active', 'hide', {loop: true, hasCounter: true, wrapper: elem}));

    tabs('repair', {contentActive: 'show', contentHide: 'hide', tabsActive: 'active'});

    slider('repair-types-mobile', 'active', 'not-active', {sliderTranslate: true, loop: false});

}

export default repairTypes;
