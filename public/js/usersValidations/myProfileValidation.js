/* Validations frontend - myProfile */
let moment = require('moment');

function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function() {

    $form = qs('form')

    $avatar = qs('#archivo')
    $avatarErrors = qs('#archivoErrors')
    $avatarPreview = qs('#avatarPreview')

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
    regExDate = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;

    /* regExImage = /(.jpg|.jpeg|.png|.gif|.web)$/i; */

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
               /*  nameErrors.innerHTML = errorMsg;  */
                break;
            case !regExAlpha.test(value): 
                errorMsg = 'Nombre inválido'; 
                $inputName.classList.add('error')
                errors.inputNameError = errorMsg; 
               /*  nameErrors.innerHTML = errorMsg;  */
                break;
            default: 
               /*  nameErrors.innerHTML = "";  */
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
               /*  lastNameErrors.innerHTML = errorMsg; */
                break;
            case !regExAlpha.test(value): 
                errorMsg = 'Apellido inválido';
                $inputLastName.classList.add('error')
                errors.inputLastNameError = errorMsg; 
               /*  lastNameErrors.innerHTML = errorMsg; */
                break;
            default: 
        /*         lastNameErrors.innerHTML = ""; */
                $inputLastName.classList.remove('error');
                $inputLastName.classList.add('ok');  
            break;  
        }
    })

    /* avatar */
    $avatar.addEventListener('change', function fileValidation(){
        let filePath = $avatar.value; //captura el valor del input 
        let fileAccepted = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!fileAccepted.exec(filePath)){  //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $avatarErrors.innerHTML = 'Extensiones permitidas jpg, jpeg, png y gif'
            $avatarErrors.classList.add('error');
            $avatar.value = '';
            $avatarPreview.innerHTML = ''; 
            return false;
        }else{ 
            $avatarErrors.innerHTML = 'Extención válida'
            $avatarErrors.classList.add('ok');
            return true;
        }
    })

    /* age */ /*  $inputAge = qs('#age')
    $ageErrors = qs('#ageErrors') */
  
   $inputAge.addEventListener('blur', function() {
        switch (true) {
            case moment($inputAge.value) > moment(): //Evalua si la fecha que le paso es mayor a la fecha de hoy, en ese caso tirará el error
                errorMsg = 'Fecha inválida';
                $inputAge.classList.add('error');
                $ageErrors.innerHTML = errorMsg;
                break;
            default: 
                $ageErrors.innerHTML = "";
                $inputAge.classList.remove('error');
                $inputAge.classList.add('ok');  
            break;  
        }
    })

    /*     ------este es el q tenia antes------- 
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
    })  */

 






})



  /* CODE-PEN
   function validateImage() {
        let image = form.photo.files[0];
        let fileValidationMsg = document.getElementById('fileValidationMsg');
    
        if(image){
            if (image.type == 'image/jpeg'){
    
                fileValidationMsg.textContent = "Valid File";
                fileValidationMsg.classList.remove('text-danger');
                fileValidationMsg.classList.add('text-success');
    
                photo = 1;
    
            }else{
                fileValidationMsg.textContent = "Invalid Image Format";
                fileValidationMsg.classList.remove('text-success');
                fileValidationMsg.classList.add('text-danger');
    
                photo = 0;
            }
        }else{
    
        }
    }

    <div class="form-group">
        <label for="photo">Photo:</label>
        <input type="file" onchange="validateImage()" id="photo" name="img" required>
        <small id="fileValidationMsg" class="form-text text-danger"></small>
    </div>
    */