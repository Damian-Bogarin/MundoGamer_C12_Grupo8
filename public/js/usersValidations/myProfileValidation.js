function qs(element) {
    return document.querySelector(element)
}


window.addEventListener('load', function() {

    $form = qs('form')

    $inputName = qs('#name')
    $nameErrors = qs('#nameErrors')

    $inputLastName = qs('#lastName') /* el id en la vista lo tngo cm last_name */
    $lastNameErrors = qs('#lastNameErrors')

    $inputAge = qs('#age')
    $ageErrors = qs('#ageErrors')

    $inputTel = qs('#tel') 
    $telErrors = qs('#telErrors')

    $inputAddress = qs('#address')
    $addressErrors = qs('#addressErrors')
    
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

})