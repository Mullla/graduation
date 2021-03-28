const phoneMask = () => {
    const phoneInputs = document.querySelectorAll('input[name="phone"]');

    const addMask = (input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[\D]/g, '');

            if(input.value.slice(0,1) === '7' || input.value.slice(0,1) === '8'){
                input.value = input.value.replace(/(7|8)/, '+7 (');
                input.value = input.value.replace(/(.{4})(\d{3})/, '$1$2) ');
                input.value = input.value.replace(/(.{8})(\d{3})/, '$1$2-');
                input.value = input.value.replace(/(.{11})(\d{2})/, '$1$2-');

            } else {
                input.value = input.value.replace(/(\d{3})/, '+7 ($1)');    

            }
        });
    }

    phoneInputs.forEach( input => addMask(input));
}

export default phoneMask;