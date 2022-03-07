/* Validations front end - login */


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
    

    let errors = {} 

    /* email */ 
    $inputEmail.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'El campo email es requerido';
                $inputEmail.classList.add('error');
                errors.inputEmailError = errorMsg; 
                emailErrors.innerHTML = errorMsg;
                break;
            case !regExpEmail.test(value): 
                errorMsg = 'Email inválido';
                $inputEmail.classList.add('error')
                errors.inputEmailError = errorMsg;
                emailErrors.innerHTML = errorMsg;
                break;
            default: 
                emailErrors.innerHTML = "";
                $inputEmail.classList.remove('error');
                $inputEmail.classList.add('ok'); 
            break;      
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
            break;
        }
    })

    /* submit */
    $form.addEventListener('submit', function(event){     
        event.preventDefault();
        let error = false;
       
        let formElements = this.elements;  

        for (let i = 0; i < formElements.length - 1; i++){ 
            if(formElements[i].value == ""){
                formElements[i].classList.add('error');
                submitErrors.innerHTML = 'Los campos señalados son obligatorios' 
                error = true;  
            }
        }

        if(!error) { 
            $form.submit()
        }
    })



})