/* Validations frontend - myProfile */

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
    let regExDate = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;

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
        }else{ //Si no hay errores se hace la previsualización de la imagen
            $avatarErrors.innerHTML = 'Extención válida'
            $avatarErrors.classList.add('ok');
            return true;
        }
    })

    /* age -------------probando*/
   /*  $inputAge.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        switch(true) {
            case !value.trim():
                $ageErrors.classList.add('error');
                errors.ageErrors = errorMsg;  
                break;
            case moment($inputAge.value) > moment():
                $ageErrors.innerHTML = 'Fecha inválida';
                $inputAge.classList.add('error');
                errors.ageErrors = errorMsg;  
                break;
        }
    }) 

    $date.addEventListener('blur', function(){
        let dateUser = new Date($date.value);
        let yearUser = dateUser.getFullYear();
        switch (true) {
            case !regExDate.test($date.value):
                $dateErrors.innerHTML = 'Esta fecha no es válida';
                $date.style.color = 'red';
                validationErrors = true;
                break;
            case yearUser > actualYear:
                $dateErrors.innerHTML = 'La fecha seleccionada no puede ser mayor a la fecha actual';
                $date.style.color = 'red';
                validationErrors = true;
                break;    
            default:
                $dateErrors.innerHTML = '';
                $date.style.color = '#2940D3';
                $date.style.backgroundColor = '#d8c371';
                $date.style.border = 'none';
                validationErrors = false;
                break;
        }
    })

  
   $inputAge.addEventListener('blur', (event) => {
        let value = event.target.value;
        let errorMsg;
        console.log($inputAge);
        switch (true) {
            case !value.trim(): 
                errorMsg = 'La edad es requerida';
                $inputAge.classList.add('error');
                errors.inputAgeError = errorMsg; 
                $ageErrors.innerHTML = errorMsg;
                break;
            case moment($inputAge.value) > moment():
                errorMsg = 'Es un fecha inválida';
                $inputAge.classList.add('error');
                $ageErrors.innerHTML = errorMsg
                break;
            default: 
                $ageErrors.innerHTML = "";
                $inputAge.classList.remove('error');
                $inputAge.classList.add('ok');  
            break;  
        }
    })  

         ------este es el q tenia antes------- 
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