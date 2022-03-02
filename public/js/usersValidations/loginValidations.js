/* Validations front end - register and login */

/* Se podria resumir mucho mas el código */

function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function() {

    $form = qs('#form')  

    $inputEmail = qs('#inputEmail')
    $emailErrors = qs('#emailErrors') 

    $inputPass = qs('#inputPass')
    $passErrors = qs('#passErrors')

    /* expresiones regulares */
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExpEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;  /* estaba mal ahora ok */
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    /* regExDNI = /^[0-9]{7,8}$/, */
    
/* let validationsErrors = false;  */ 

    let errors = {} 

    /* email */ 
    $inputEmail.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'El campo email es requerido';
                $inputEmail.classList.add('error');
                errors.inputEmailError = errorMsg; /* aunque ese input tenga otra clase, le agrega "otra clase" que ya esta definida en el css */
                emailErrors.innerHTML = errorMsg;
                break;
            case !regExpEmail.test(value): 
                errorMsg = 'Email inválido';
                $inputEmail.classList.add('error')
                errors.inputEmailError = errorMsg; /* inputEmailError -> propiedad creada */
                emailErrors.innerHTML = errorMsg;
                break;
            default: 
                emailErrors.innerHTML = "";
                $inputEmail.classList.remove('error');
                $inputEmail.classList.add('ok');       
        }
    })

    /* pass */
    $inputPass.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'La contraseña es requerida';
                $inputPass.classList.add('error');
                errors.inputPassError = errorMsg; 
                passErrors.innerHTML = errorMsg;
                break;
            case !regExPass.test(value): 
                errorMsg = 'La contraseña debe tener entre 6 o 12 carácteres, al menos una mayúscula, una minúscula y un número';
                $inputPass.classList.add('error')
                errors.inputPassError = errorMsg;
                passErrors.innerHTML = errorMsg;
                break;
            default: 
                passErrors.innerHTML = "";
                $inputPass.classList.remove('error');
                $inputPass.classList.add('ok');
        }
    })





})