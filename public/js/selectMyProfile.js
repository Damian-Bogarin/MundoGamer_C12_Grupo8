/* Api - Provinces and locations - SELECT */

const urlProvincias = 'https://apis.datos.gob.ar/georef/api/provincias';
const urlLocalidades = 'https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia='

const selectProvincias = document.getElementById('select-provincias');
const selectLocalidades = document.getElementById('select-localidades')

window.addEventListener('load', async () => { //Como estamos trabajando desde el front, no necesitamos node fetch, sino que usamos el ya integrado
    
    try {

        let response = await fetch(urlProvincias); //Espera que esto responda
        let result = await response.json(); //Resultado, parsea lo que me viene como respuesta de la api

        let provincias = result.provincias;
       
        provincias = provincias.sort((a, b) => a.nombre > b.nombre)  /* No se ordenan las provincias */
        
        provincias.forEach(provincia => {
            selectProvincias.innerHTML += `<option value="${provincia.nombre}">${provincia.nombre}</option>`
        });

    } catch (error) {
        console.error(error);
    }
})

selectProvincias.addEventListener('change', async (e) => {
    
        let response = await fetch(urlLocalidades + e.target.value);
        let result = await response.json(); 

        let localidades = result.localidades;

        selectLocalidades.innerHTML = null;  //Vacia y después volver a cargar con una nueva provincia

        localidades.forEach(localidad => {

            selectLocalidades.innerHTML += `<option value="${localidad.nombre}">${localidad.nombre}</option>`

        });      
})








/* fetch('https://apis.datos.gob.ar/georef/api/provincias') 
.then(response => response.json())
.then(provinces => {
    return res.render('users/myProfile', {provinces: provinces.provincias}) 
})
.catch(error => console.log(error))  */


/* Si agrego etiquetas ejs en el html quiere decir que mando cosas del back al front, quizas consultas puedo hacer, pero mejor manejarlo desde public */

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
