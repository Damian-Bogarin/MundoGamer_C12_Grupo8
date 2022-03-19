/* Validations frontend - myProfile */

function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function() {

    $form = qs('form')

    $avatar = qs('#avatar')
    $avatarErrors = qs('#avatarErrors')

    $inputName = qs('#name')
    $nameErrors = qs('#nameErrors')

    $inputLastName = qs('#lastName') 
    $lastNameErrors = qs('#lastNameErrors')

    $inputAge = qs('#age')
    $ageErrors = qs('#ageErrors')

    $inputTel = qs('#tel')  /* /^09[0-9]{7}$/gm */
    $telErrors = qs('#telErrors')

    $inputAddress = qs('#address')
    $addressErrors = qs('#addressErrors')

    /* $selectProvince = qs('#select-provincias')
    $selectProvinceErrors = qs('#select-provincias')

    $selectLocality = qs('#select-localidades')
    $selectLocalityErrors = qs('#select-localidades') Que solo el select se ponga de color rojo, sin spam*/
    
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    regExPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    regExImage = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

    let errors = {} 

    /* name */
    $inputName.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'El nombre es requerido';
                $inputName.classList.add('error');
                errors.inputNameError = errorMsg; 
                nameErrors.innerHTML = errorMsg;
                break;
            case !regExAlpha.test(value): 
                errorMsg = 'Nombre inválido';
                $inputName.classList.add('error')
                errors.inputNameError = errorMsg; 
                nameErrors.innerHTML = errorMsg;
                break;
            default: 
                nameErrors.innerHTML = "";
                $inputName.classList.remove('error');
                $inputName.classList.add('ok');   
            break; 
        }
    })

    /* lastName */
    $inputLastName.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'El apellido es requerido';
                $inputLastName.classList.add('error');
                errors.inputLastNameError = errorMsg; 
                lastNameErrors.innerHTML = errorMsg;
                break;
            case !regExAlpha.test(value): 
                errorMsg = 'Apellido inválido';
                $inputLastName.classList.add('error')
                errors.inputLastNameError = errorMsg; 
                lastNameErrors.innerHTML = errorMsg;
                break;
            default: 
                lastNameErrors.innerHTML = "";
                $inputLastName.classList.remove('error');
                $inputLastName.classList.add('ok');  
            break;  
        }
    })

    /* age */
    $inputAge.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'La edad es requerida';
                $inputAge.classList.add('error');
                errors.inputLastNameError = errorMsg; 
                lastNameErrors.innerHTML = errorMsg;
                break;
            case !regExAlpha.test(value): 
                errorMsg = '';
                $inputAge.classList.add('error')
                errors.inputLastNameError = errorMsg; 
                lastNameErrors.innerHTML = errorMsg;
                break;
            default: 
                lastNameErrors.innerHTML = "";
                $inputAge.classList.remove('error');
                $inputAge.classList.add('ok');  
            break;  
        }
    })

    /* tel */

    /* address */

    /* province */

    /* locality */

    /* avatar */

    


})

