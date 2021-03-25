const phoneMask = () => {
    const phoneInputs = document.querySelectorAll('input[name="phone"]');
    
    const addMask = (input) => {
        input.addEventListener('input', () => {
            // все не цифры заменяются пустым символом
            input.value = input.value.replace(/[\D]/g, '');
            
            // если пользователь начинает с 7 или 8
            if (input.value.length >= 11){
                input.value = input.value.substring(0,11);
                input.value = input.value.replace(/(7|8)(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($2) $3-$4-$5');

            // если пользователь без 7 или 8
            } else if(input.value.length === 10 && input.value.slice(0,1) !== '7' && input.value.slice(0,1) !== '8'){
                input.value = input.value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($1) $2-$3-$4');
            }
        });
    }

    phoneInputs.forEach( input => addMask(input));
}

export default phoneMask;