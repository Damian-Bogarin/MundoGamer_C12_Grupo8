/* Validations front end - register and login */

function qs(element) {
    return document.querySelector(element)
}


window.addEventListener('load', function() {

    $form = qs('form')

    $inputName = qs('#name')
    $nameErrors = qs('#nameErrors')

    $inputLastName = qs('#lastName') /* el id en la vista lo tngo cm last_name */
    $lastNameErrors = qs('#lastNameErrors')

    $inputEmail = qs('#email')
    $emailErrors = qs('#emailErrors')

    $pass = qs('#pass')
    $passErrors = qs('#passErrors')

    $pass2 = qs('#pass2')
    $pass2Errors = qs('#pass2Errors')

    $avatar = qs('#avatar')
    $avatarErrors = qs('#avatarErrors')

    $terms = qs('#terms')
    $termsErrors = qs('#termsErrors')

    /* expresiones regulares */
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    /* regExDNI = /^[0-9]{7,8}$/, */
    
    let validationsErrors = false;

    /* name */
    $inputName.addEventListener('blur', function() {  //blur detecta cuando salgo del input
        switch (true) {
            case !$inputName.value.trim(): //Este es el que se a estar evaluando
                $nameErrors.innerHTML = 'El nombre es obligatorio'; //Texto que se colocará dentro de la etiqueta spam
                $inputName.classList.add('error-msj');
                validationsErrors = true //Como hubo un error será true
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = 'El nombre es válido';
                $inputName.classList.add('error-msj'); /* clase de span error-msj */
                validationsErrors = true
                break;
            default:
                $inputName.classList.remove('is-invalid'); //En caso de que tenga el invalid se lo quita y poner el valid
                $inputName.classList.add('is-valid');
                $nameErrors.innerHTML = "";
                validationsErrors = false;
            break;
        }
    })


    /* lastName */
    $inputLastName.addEventListener('blur', function() {  //blur detecta cuando salgo del input
        switch (true) {
            case !$inputLastName.value.trim(): //Este es el que se a estar evaluando
                $lastNameErrors.innerHTML = 'El apellido es obligatorio'; //Texto que se colocará dentro de la etiqueta spam
                $inputLastName.classList.add('error-msj');
                validationsErrors = true //Como hubo un error será true
                break;
            case !regExAlpha.test($inputLastName.value):
                $lastNameErrors.innerHTML = 'El apellido es válido';
                $inputLastName.classList.add('error-msj'); /* clase de span error-msj */
                validationsErrors = true
                break;
            default:
                $inputLastName.classList.remove('is-invalid'); //En caso de que tenga el invalid se lo quita y poner el valid
                $inputLastName.classList.add('is-valid');
                $lastNameErrors.innerHTML = "";
                validationsErrors = false;
            break;
        }
    })


    /* email */
    $inputEmail.addEventListener('blur', function(){
        switch (true) {
            case !$inputEmail.value.trim():
                $emailErrors.innerHTML = 'El email es obligatorio'
                $inputEmail.classList.add('is-invalid')
                validationsErrors = true
                break;
            case !regExEmail.test($inputEmail.value):
                $emailErrors.innerHTML = 'Debe ingresar un email válido'
                $inputEmail.classList.add('is-invalid')
                validationsErrors = true
                break;    
            default:
                $inputEmail.classList.remove("is-invalid");
                $inputEmail.classList.add('is-valid')
                $emailErrors.innerHTML = ""
                validationsErrors = false
            break;
        }
    })


     /* pass */
     $pass.addEventListener('blur', function(){
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio'
                $pass.classList.add('is-invalid')
                validationsErrors = true
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $pass.classList.add('is-invalid')
                validationsErrors = true
                break;    
            default:
                $pass.classList.remove("is-invalid");
                $pass.classList.add('is-valid')
                $passErrors.innerHTML = ""
                validationsErrors = false
            break;
        }
    })


    /* pass2 */
    $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'El campo contraseña es obligatorio'
                $pass2.classList.add('is-invalid')
                validationsErrors = true
                break;
            case $pass2.value !== $pass.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                $pass2.classList.add('is-invalid')
                validationsErrors = true
                break;    
            default:
                $pass2.classList.remove("is-invalid");
                $pass2.classList.add('is-valid')
                $pass2Errors.innerHTML = ""
                validationsErrors = false
            break;
        }
    })


    /* terms */
    $terms.addEventListener('click', function (){
        $terms.value = "on"
        $terms.classList.toggle('is-valid')
        $terms.classList.remove('is-invalid')
        $termsErrors.innerHTML = ""
    })







})