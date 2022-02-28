function qs (element){
    return document.querySelector(element)
}
function qsAll(element){
    return document.querySelectorAll(element)
}

window.addEventListener('load', function(){
    let $name = qs('#nombre'),
    $nameError= qs('#nameError'),
    $gender = qs('#genero'),
    $genderError = qs('#genderError'),
    $clasification = qs('#clasificacion'),
    $clasificationError = qs('#clasificationError'),
    $console = qsAll('.consola'),
    $consoleError = qs('#consoleError'),
    $language = qsAll('.language'),
    $languageError = qs('#languageError'),
    $multiplayer = qsAll('.multi'),
    $multiplayerError = qs('#multiError'),
    $description = qs('#message'),
    $descriptionError = qs('#descriptionError'),
    $price = qs('#precio'),
    $descount = qs('#descount'),
    $stock = qs('#almacenamiento'),
    $priceError = qs('#priceError'),
    $descountError = qs('#descountError'),
    $stockError = qs('#stockError'),
    $photo = qs('#photo'),
    $photoError = qs('#photoError'),
    $imgPreview = qs('#img-preview'),



    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExNum = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    console.log($console)


    $name.addEventListener('blur',function() {
        switch (true) {
            case !$name.value.trim():
                $nameError.innerHTML ='El campo nombre es obligatorio';
                //$inputName.classList.add('is-invalid')
                //validationsErrors = true
                break;
                case !regExAlpha.test($name.value): //si pasa el test dara true, y sera negado.
                    $nameError.innerHTML ='Ingrese un nombre valido';
                    //$inputName.classList.add('is-invalid')
                    //validationsErrors = true
                break
        
            default:
                //$inputName.classList.remove('is-invalid');
                //$inputLastname.classList.add ('is-valid');
                $nameError.innerHTML = ""
                break;
        }
    })
    
    $gender.addEventListener('change', function(){

        switch(true){
            case $gender.value == 0:
                $genderError.innerHTML = 'El genero es obligatorio';
                break;
            
            default:
                $genderError.innerHTML = '';
                break;
        }
    })
    $clasification.addEventListener('change', function(){

        switch(true){
            case $clasification.value == 'Z':
                $clasificationError.innerHTML = 'La clasificación es obligatoria';
                break;
            
            default:
                $clasificationError.innerHTML = '';
                break;
        }

    
    })

    $console.forEach( element =>{
        element.addEventListener('change', function(){
            let array = false
           for (let i = 0; i < $console.length; i++) {
               if($console[i].checked == true){
                   array = true
               }
               
               
           }
           if(array == false){
               $consoleError.innerHTML = 'Debes seleccionar almenos una consola compatible'
           }
           else {
            $consoleError.innerHTML = ''
           }
        })
    })


    $language.forEach(element => {
        
        element.addEventListener('change', function(){
            let array = false
           for (let i = 0; i < $language.length; i++) {
               if($language[i].checked == true){
                   array = true
               }
               
               
           }
           if(array == false){
               $languageError.innerHTML = 'Debes seleccionar almenos un idioma'
           }
           else {
            $languageError.innerHTML = ''
           }
    })
    })

    $multiplayer.forEach(element => {
        
        element.addEventListener('change', function(){
            let array = false
           for (let i = 0; i < $multiplayer.length; i++) {
               if($multiplayer[i].checked == true){
                   array = true
               }
               
               
           }
           if(array == false){
               $multiplayerError.innerHTML = 'Debes seleccionar almenos un idioma'
           }
           else {
            $multiplayerError.innerHTML = ''
           }
    })
    })

    $description.addEventListener('blur', function(){
        switch (true) {
            case !$description.value.trim():
                $descriptionError.innerHTML ='La descripción es obligatoria';
                //$inputdescription.classList.add('is-invalid')
                //validationsErrors = true
                break;
                /* case !regExAlpha.test($description.value): //si pasa el test dara true, y sera negado.
                    $descriptionError.innerHTML ='Ingrese un nombre valido';
                    //$inputdescription.classList.add('is-invalid')
                    //validationsErrors = true
                break */
        
            default:
                //$inputdescription.classList.remove('is-invalid');
                //$inputLastdescription.classList.add ('is-valid');
                $descriptionError.innerHTML = ""
                break;
        }
    })

    $price.addEventListener('blur', function(){
        switch (true) {
            case $price.value == 0:
                $priceError.innerHTML = 'Recuerda poner un valor al producto'
   
                break;
           
            default:
                
                $priceError.innerHTML = ""
                
                break;
        }
    })

    $descount.addEventListener('blur', function(){
        switch (true) {
            case $descount.value > 100:
                $descountError.innerHTML = 'El valor de descuento no puede ser mayor al 100%'
                
                
                break;
            
            default:
                
                $descountError.innerHTML = ""
                
                break;
        }
    })
    $stock.addEventListener('blur', function(){
        switch (true) {
            case $stock.value == 0:
                $stockError.innerHTML = 'Recuerda que almenos debes poner 1 stock'
   
                break;
           
            default:
                
                $stockError.innerHTML = ""
                
                break;
        }
    })

    $photo.addEventListener('change', function fileValidation(){
        let filePath = $photo.value; // Captura el valor del input
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i;
        if(!allowedExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $photoError.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
            $photo.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            //Image preview
            console.log($photo.files)
            if($photo.files && $photo.files[0]){
                let reader = new FileReader();
                reader.onload = function (e) {
                    $imgPreview.innerHTML = `<img src="${e.target.result}" alt="">`
                };
                reader.readAsDataURL($photo.files[0]);
                $photoError.innerHTML = '';
                $photo.classList.remove('is-invalid')
            }
        }
    })




})