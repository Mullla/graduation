import slider from '../utils/slider';

const reviews = () => {
    slider('reviews', 'reviews-slide-active', 'not-active', {loop: true, hasDots: true});
};

export default reviews;