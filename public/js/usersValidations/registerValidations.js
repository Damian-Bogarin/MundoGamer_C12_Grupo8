/* Validations front end - register */

/* Se podria resumir mucho mas el código */

function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function() {

    $form = qs('#form')  
                          
    $inputName = qs('#inputName')
    $nameErrors = qs('#nameErrors')

    $inputLastName = qs('#inputLastName') 
    $lastNameErrors = qs('#lastNameErrors')

    $inputEmail = qs('#inputEmail')
    $emailErrors = qs('#emailErrors') 

    $inputPass = qs('#inputPass')
    $passErrors = qs('#passErrors')

    $inputPass2 = qs('#inputPass2')
    $passErrors2 = qs('#passErrors2')

    $avatar = qs('#avatar')
    $avatarErrors = qs('#avatarErrors')

    $inputTerms = qs('#inputTerms')
    $termsErrors = qs('#termsErrors')

    /* expresiones regulares */
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExpEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;  /* estaba mal ahora ok */
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    /* regExDNI = /^[0-9]{7,8}$/, */
    

    let errors = {} 

    /* name */
    $inputName.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'El nombre es requerido';
                $inputName.classList.add('error');
                errors.inputNameError = errorMsg; /* aunque ese input tenga otra clase, le agrega "otra clase" que ya esta definida en el css */
                nameErrors.innerHTML = errorMsg;
                break;
            case !regExAlpha.test(value): 
                errorMsg = 'Nombre inválido';
                $inputName.classList.add('error')
                errors.inputNameError = errorMsg; /* inputNameError -> propiedad creada */
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
                errorMsg = 'La contraseña debe tener entre 6 o 10 carácteres, al menos una mayúscula, una minúscula y un número';
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

    /* pass 2*/
    $inputPass2.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'La contraseña es requerida';
                $inputPass2.classList.add('error');
                errors.inputPassError = errorMsg; 
                passErrors2.innerHTML = errorMsg;
                break;
            case $inputPass.value !== $inputPass2.value: 
                errorMsg = 'Las contraseñas no coinciden';
                $inputPass2.classList.add('error')
                errors.inputPassError = errorMsg;
                passErrors2.innerHTML = errorMsg;
                break;
            default: 
                passErrors2.innerHTML = "";
                $inputPass2.classList.remove('error');
                $inputPass2.classList.add('ok');
            break;
        }
    })

    /* terms */
    $inputTerms.addEventListener('click', function(){
        $inputTerms.value = "on"
        $inputTerms.classList.toggle('ok')
        $inputTerms.classList.remove('error') 
        $termsErrors.innerHTML = ""
    })


    /* submit */  //Usamos function porque usamos this
    $form.addEventListener('submit', function(event){     
        event.preventDefault(); /* impedirá que se envie el formulario si es que no se evaluaron todos los casos */
        let error = false;
       
        let formElements = this.elements;
        //console.log(formElements); -> capturamos todos los elementos del form

        for (let i = 0; i < formElements.length - 1; i++){ //- 1 porque no queremos capturar el buttom
            if(formElements[i].value == ""
            && formElements[i].type !== 'file'
            ){
                formElements[i].classList.add('error');
                submitErrors.innerHTML = 'Los campos señalados son obligatorios' 
                error = true;  
            }
        }
        /* Esto en el caso de querer obviar algunos input para que no sean obligatorios 
        && formElements[i].type !== 'file' captura por el type y no es obligatorio
        && formElements[i].name !== 'apellido' */

        if(!$inputTerms.checked){ //Solo chekea si esta marcado
            $inputTerms.classList.add('error');
            $termsErrors.innerHTML = 'Debes aceptar los terminos y condiciones' 
            error = true;
        } 

        if(!error) { //Si no hay errores ahi recien hace el submit
            $form.submit()
        }
    })   

    /* file */
   
    /*  */

        
  
   







})