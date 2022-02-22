/* Api-Provincias */
const fetch = require('node-fetch');

fetch('https://apis.datos.gob.ar/georef/api/provincias')/*  ?campos=id,nombre */
.then(response => response.json())
.then(provinces => {
    return res.render('users/myProfile', {provinces: provinces.provincias}) 
})
/* .catch(error => console.log(error)) */ 



 /*  console.log(data);  */  

 /*  let element = document.getElementById('select-province')
    element.innerHTML = `<option value="">${data.nombre}</option>` */

 /* let $options = `<option value="">Elije una provincia</option>`;
    data.response.provincias.forEach(element => $options += `<option value="">${data.provincias}</option>`)
    slowProvince.innerHTML = $options; */
/*  let slowProvince = document.getElementById('select-province')    */




/* function loadProvince(){
    fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre') 
    .then(response => response.ok ? response.json() : Promise.reject(res))
    .then(json => {
        console.log(json);
        let $options = `<option value="">Elije una provincia</option>`;
        json.response.provincias.forEach(element => $options += `<option value="${element}">${element}</option>`)
        slowProvince.innerHTML = $options; 
     })
    .catch(error => {
        console.log(error);
    
    })
} 
document.addEventListener('DOMContentLoaded', loadProvince())  */




/* apiProvince: (req, res) => {
    fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre') 
    .then(response => response.json())
    .then(province => {
        res.render('users/myProfile', {province})
    })
} */