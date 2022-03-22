/* Validations frontend - myProfile */
/* Solo tendrá mensaje de span el teléfono */
/* Falta validar la edad(que no sea una fecha futura) */

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

    $inputTel = qs('#tel')  
    $telErrors = qs('#telErrors')

    $inputAddress = qs('#address')
    $addressErrors = qs('#addressErrors')

    /* $selectProvince = qs('#select-provincias')
    $selectProvinceErrors = qs('#select-provincias')

    $selectLocality = qs('#select-localidades')
    $selectLocalityErrors = qs('#select-localidades') */
    
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    regExPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    regExDate = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
    regExAddress = /^\D+\s\D?\s?\d{1,5}$/gim;

    /* regExImage = /(.jpg|.jpeg|.png|.gif|.web)$/i; */
    /*phone /^09[0-9]{7}$/gm */

    let errors = {} 

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

    /* name */
    $inputName.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !value.trim(): 
                errorMsg = 'El nombre es requerido'; 
                $inputName.classList.add('error');
                errors.inputNameError = errorMsg; 
               /*nameErrors.innerHTML = errorMsg;  */
                break;
            case !regExAlpha.test(value): 
                errorMsg = 'Nombre inválido'; 
                $inputName.classList.add('error')
                errors.inputNameError = errorMsg; 
               /*nameErrors.innerHTML = errorMsg;  */
                break;
            default: 
               /*nameErrors.innerHTML = "";  */
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
               /*lastNameErrors.innerHTML = errorMsg; */
                break;
            case !regExAlpha.test(value): 
                errorMsg = 'Apellido inválido';
                $inputLastName.classList.add('error')
                errors.inputLastNameError = errorMsg; 
               /*lastNameErrors.innerHTML = errorMsg; */
                break;
            default: 
              /*lastNameErrors.innerHTML = ""; */
                $inputLastName.classList.remove('error');
                $inputLastName.classList.add('ok');  
            break;  
        }
    })

    /* tel */
    $inputTel.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !regExPhone.test(value): /* Me permite guardar solo con la caracteristica del lugar */
                errorMsg = 'Teléfono inválido, ingresa un número válido incluyendo su caracteristica';
                $inputTel.classList.add('error')
                errors.inputTelError = errorMsg; /*  inputLastNameError */
                telErrors.innerHTML = errorMsg; 
                break;
            default: 
                telErrors.innerHTML = ""; 
                $inputTel.classList.remove('error');
                $inputTel.classList.add('ok');  
            break;  
        }
    })
  
    /* address */
    $inputAddress.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch (true) {
            case !regExAddress.test(value): 
              //  errorMsg = 'Teléfono inválido';
                $inputAddress.classList.add('error')
                errors.inputAddressError = errorMsg; 
                //addressErrors.innerHTML = errorMsg; 
                break;
            default: 
              //  addressErrors.innerHTML = ""; 
                $inputAddress.classList.remove('error');
                $inputAddress.classList.add('ok');  
            break;  
        }
    })

    /* submit */  
    $form.addEventListener('submit', function(event){     
    event.preventDefault(); 
    let error = false;
       
    let formElements = this.elements;

    for (let i = 0; i < formElements.length - 1; i++){ 
        if(formElements[i].value == ""
        && formElements[i].type !== 'file'
        && formElements[i].type !== 'date'
        && formElements[i].name !== 'tel' 
        && formElements[i].name !== 'address'
        && formElements[i].name !== 'province'
        && formElements[i].name !== 'locality'
        ){
            formElements[i].classList.add('error');
            submitErrors.innerHTML = 'Los campos señalados son obligatorios' 
            error = true;  
        }
    }

        if(!error) { //Si no hay errores ahi recien hace el submit
            $form.submit()
        }
    })   
   

 






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