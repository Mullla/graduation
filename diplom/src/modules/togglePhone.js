const showPhone = () => {
    const btnArrow = document.querySelector('.header-contacts__arrow'),
        bottomPhoneNumber = document.querySelector('.header-contacts__phone-number-accord');

    btnArrow.addEventListener('click', () => {
        btnArrow.classList.toggle('header-accord-arrow-active');
        bottomPhoneNumber.classList.toggle('header-accord-active');
        
    });

}

export default showPhone;