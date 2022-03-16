
function qs(element) {
    return document.querySelector(element)
}
function qsAll(element) {
    return document.querySelectorAll(element)
}


window.addEventListener('load', function () {


    // URL pal Fecht
    let url = new URL(`${window.location.origin}/api/category/filter${window.location.search}`);// ?g=7&g=3
    let params = new URLSearchParams(url.search);
    let urlFetch = `${window.location.origin}/api/category/filter?${params.toString()}`

    //variable de los generos
    let $genderRol = qs('#Cat-gender4')
    let $genderAccion = qs('#Cat-gender2')
    let $genderRpg = qs('#Cat-gender1')
    let $genderSupervivencia = qs('#Cat-gender8')
    let $genderEstrategia = qs('#Cat-gender7')
    let $genderSimulacion = qs('#Cat-gender6')
    let $genderDeporte = qs('#Cat-gender5')
    let $genderAventura = qs('#Cat-gender3')

    //variable de las consolas compatibles
    let $consolePc = qs('#Cat-console1')
    let $consolePlay1 = qs('#Cat-console2')
    let $consolePlay2 = qs('#Cat-console3')
    let $consolePlay3 = qs('#Cat-console4')
    let $consolePlay4 = qs('#Cat-console5')
    let $consolePlay5 = qs('#Cat-console6')
    let $consoleXbox = qs('#Cat-console7')
    let $consoleNintendo = qs('#Cat-console8')

    //variable para idioma y traducción
    let $languageSpain = qs('#Cat-language1')
    let $languageIngles = qs('#Cat-language2')
    let $languageChino = qs('#Cat-language3')
    let $subtitleSpain = qs('#Cat-subtitle1')
    let $subtitleFrench = qs('#Cat-subtitle2')
    let $subtitleGerman = qs('#Cat-subtitle3')

    //variable para el precio
    let $priceMin = qs('#priceMin')
    let $priceMax = qs('#priceMax')
    //variable de la seccion de los productos!
    let $sectionContainer = qs('.section-containers')

    //variable para el buton audio
    let $audio = qs('#audiobuton')


     /***************************
      * Este fetch se ejecuta apenas cargas toda la pagina, para que traiga todos los productos, o solo los que llegaron con la Query
      */
    fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
    .then(response => response.json())
    .then(data =>{
        
        $sectionContainer.innerHTML = ""
        data.forEach(element => {
        $sectionContainer.insertAdjacentHTML('beforeend',
       ` <article class="container-new">
             <a id="homeLink" href="/products/detail/${element.id}">
             <div class="article-header">
                <div class="home-descount">
                    <img src="/vectores/category/descount.svg" alt="">
                </div>
                <div class="home-new">
                    <img src="/vectores/category/new.svg" alt="">
                </div>
                <div class="home-sold">
                    <img src="/vectores/category/pan.svg" alt="">
                </div>
                <div class="home-stars">
                    <img src="/vectores/category/stars.svg" alt="">
                </div>
             </div>
             
             <div class="article-container-new">
             <div class="img-container-new"> <img src="/img/products/${element.photo}"
                     alt=""> 
                     </div>
             <h3 class="product-name">
             ${element.name}
                     </h3>
                     <p class="product-description">
                     ${element.description.slice(0,100) + "..."}
                     </p>
                     <div class="product-value">
                         <h3 class="product-price">
                         ${element.priceEnd}$
                         </h3>
                         <h3 class="descount">
                         ${element.descount} off
                         </h3>
                     </div>


         </div>
         
         <div class="article-footer"></div>

             </a>
        </article>` 
    )

    })}
    )


    /*****
     * Pulsacion de botones
     */


    if(params.has('g')){
        let value = params.getAll('g')
        for (let i = 0; i < value.length; i++) {

            if(value[i] == 1){
                $genderRpg.classList.add('pulsado')}

            if(value[i] == 2){
                    $genderAccion.classList.add('pulsado')}
            if(value[i] == 3){
                        $genderAventura.classList.add('pulsado')}
            if(value[i] == 4){
                            $genderRol.classList.add('pulsado')}
            if(value[i] == 5){
                                $genderDeporte.classList.add('pulsado')}
            if(value[i] == 6){
                $genderSimulacion.classList.add('pulsado')}
            if(value[i] == 7){
            $genderEstrategia.classList.add('pulsado')}
            if(value[i] == 8){
                $genderSupervivencia.classList.add('pulsado')
                }

   }

}

if(params.has('c')){
    let value = params.getAll('c')
    for (let i = 0; i < value.length; i++) {
        if(value[i] == 1){
            $consolePc.classList.add('pulsado')}
            if(value[i] == 2){
                $consolePlay1.classList.add('pulsado')}
                if(value[i] == 3){
                    $consolePlay2.classList.add('pulsado')}
                    if(value[i] == 4){
                        $consolePlay3.classList.add('pulsado')}
                        if(value[i] == 5){
                            $consolePlay4.classList.add('pulsado')}
                            if(value[i] == 6){
                                $consolePlay5.classList.add('pulsado')}
                                if(value[i] == 7){
                                    $consoleXbox.classList.add('pulsado')}
                                    if(value[i] == 8){
                                        $consoleNintendo.classList.add('pulsado')}
    }
}



    /************************** 
     * GENDER
    *****************************/

    $genderRpg.addEventListener('click', function () {
        $genderRpg.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let g = params.getAll(`g`)

        if (!params.has(`g`)) {  //si g no existe, dara true y creare g=1

            params.append(`g`, `1`)

        } else if (g.includes(`1`)) { //si g posee el valor 1, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 1

            params.delete(`g`)
            for (let i = 0; i < g.length; i++) {
                if (g[i] != `1`) {
                    params.append(`g`, `${g[i]}`)
                }

            }
        } else params.append(`g`, `1`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $genderAccion.addEventListener('click', function () {
        $genderAccion.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let g = params.getAll(`g`)

        if (!params.has(`g`)) {  //si g no existe, dara true y creare g=2

            params.append(`g`, `2`)

        } else if (g.includes(`2`)) { //si g posee el valor 2, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 2

            params.delete(`g`)
            for (let i = 0; i < g.length; i++) {
                if (g[i] != `2`) {
                    params.append(`g`, `${g[i]}`)
                }

            }
        } else params.append(`g`, `2`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $genderAventura.addEventListener('click', function () {
        $genderAventura.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let g = params.getAll(`g`)

        if (!params.has(`g`)) {  //si g no existe, dara true y creare g=3

            params.append(`g`, `3`)

        } else if (g.includes(`3`)) { //si g posee el valor 3, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 3

            params.delete(`g`)
            for (let i = 0; i < g.length; i++) {
                if (g[i] != `3`) {
                    params.append(`g`, `${g[i]}`)
                }

            }
        } else params.append(`g`, `3`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $genderRol.addEventListener('click', function () {
        $genderRol.classList.toggle('pulsado')
        $audio.play()
        $audio.play()
        //extraigo todos los valores de g
        let g = params.getAll(`g`)

        if (!params.has(`g`)) {  //si g no existe, dara true y creare g=4

            params.append(`g`, `4`)

        } else if (g.includes(`4`)) { //si g posee el valor 4, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 4

            params.delete(`g`)
            for (let i = 0; i < g.length; i++) {
                if (g[i] != `4`) {
                    params.append(`g`, `${g[i]}`)
                }

            }
        } else params.append(`g`, `4`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $genderDeporte.addEventListener('click', function () {
        $genderDeporte.classList.toggle('pulsado')
        $audio.play()
        

        //extraigo todos los valores de g
        let g = params.getAll(`g`)

        if (!params.has(`g`)) {  //si g no existe, dara true y creare g=5

            params.append(`g`, `5`)

        } else if (g.includes(`5`)) { //si g posee el valor 5, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 5

            params.delete(`g`)
            for (let i = 0; i < g.length; i++) {
                if (g[i] != `5`) {
                    params.append(`g`, `${g[i]}`)
                }

            }
        } else params.append(`g`, `5`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })

    $genderSimulacion.addEventListener('click', function () {
        $genderSimulacion.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let g = params.getAll(`g`)

        if (!params.has(`g`)) {  //si g no existe, dara true y creare g=6

            params.append(`g`, `6`)

        } else if (g.includes(`6`)) { //si g posee el valor 6, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 6

            params.delete(`g`)
            for (let i = 0; i < g.length; i++) {
                if (g[i] != `6`) {
                    params.append(`g`, `${g[i]}`)
                }

            }
        } else params.append(`g`, `6`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $genderEstrategia.addEventListener('click', function () {
        $genderEstrategia.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let g = params.getAll(`g`)

        if (!params.has(`g`)) {  //si g no existe, dara true y creare g=7

            params.append(`g`, `7`)

        } else if (g.includes(`7`)) { //si g posee el valor 7, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 7

            params.delete(`g`)
            for (let i = 0; i < g.length; i++) {
                if (g[i] != `7`) {
                    params.append(`g`, `${g[i]}`)
                }

            }
        } else params.append(`g`, `7`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $genderSupervivencia.addEventListener('click', function () {
        $genderSupervivencia.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let g = params.getAll(`g`)

        if (!params.has(`g`)) {  //si g no existe, dara true y creare g=8

            params.append(`g`, `8`)

        } else if (g.includes(`8`)) { //si g posee el valor 8, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 8

            params.delete(`g`)
            for (let i = 0; i < g.length; i++) {
                if (g[i] != `8`) {
                    params.append(`g`, `${g[i]}`)
                }

            }
        } else params.append(`g`, `8`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })




    /**********************************
     * Consolas Compatibles
     ***********************************/

     $consolePc.addEventListener('click', function () {
        $consolePc.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let c = params.getAll(`c`)

        if (!params.has(`c`)) {  //si g no existe, dara true y creare g=1

            params.append(`c`, `1`)

        } else if (c.includes(`1`)) { //si g posee el valor 1, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 1

            params.delete(`c`)
            for (let i = 0; i < c.lencth; i++) {
                if (c[i] != `1`) {
                    params.append(`c`, `${c[i]}`)
                }

            }
        } else params.append(`c`, `1`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $consolePlay1.addEventListener('click', function () {
        $consolePlay1.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let c = params.getAll(`c`)

        if (!params.has(`c`)) {  //si g no existe, dara true y creare g=2

            params.append(`c`, `2`)

        } else if (c.includes(`2`)) { //si g posee el valor 2, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 2

            params.delete(`c`)
            for (let i = 0; i < c.lencth; i++) {
                if (c[i] != `2`) {
                    params.append(`c`, `${c[i]}`)
                }

            }
        } else params.append(`c`, `2`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $consolePlay2.addEventListener('click', function () {
        $consolePlay2.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let c = params.getAll(`c`)

        if (!params.has(`c`)) {  //si g no existe, dara true y creare g=3

            params.append(`c`, `3`)

        } else if (c.includes(`3`)) { //si g posee el valor 3, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 3

            params.delete(`c`)
            for (let i = 0; i < c.lencth; i++) {
                if (c[i] != `3`) {
                    params.append(`c`, `${c[i]}`)
                }

            }
        } else params.append(`c`, `3`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $consolePlay3.addEventListener('click', function () {
        $consolePlay3.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let c = params.getAll(`c`)

        if (!params.has(`c`)) {  //si g no existe, dara true y creare g=4

            params.append(`c`, `4`)

        } else if (c.includes(`4`)) { //si g posee el valor 4, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 4

            params.delete(`c`)
            for (let i = 0; i < c.lencth; i++) {
                if (c[i] != `4`) {
                    params.append(`c`, `${c[i]}`)
                }

            }
        } else params.append(`c`, `4`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $consolePlay4.addEventListener('click', function () {
        $consolePlay4.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let c = params.getAll(`c`)

        if (!params.has(`c`)) {  //si g no existe, dara true y creare g=5

            params.append(`c`, `5`)

        } else if (c.includes(`5`)) { //si g posee el valor 5, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 5

            params.delete(`c`)
            for (let i = 0; i < c.lencth; i++) {
                if (c[i] != `5`) {
                    params.append(`c`, `${c[i]}`)
                }

            }
        } else params.append(`c`, `5`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $consolePlay5.addEventListener('click', function () {
        $consolePlay5.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let c = params.getAll(`c`)

        if (!params.has(`c`)) {  //si g no existe, dara true y creare g=6

            params.append(`c`, `6`)

        } else if (c.includes(`6`)) { //si g posee el valor 6, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 6

            params.delete(`c`)
            for (let i = 0; i < c.lencth; i++) {
                if (c[i] != `6`) {
                    params.append(`c`, `${c[i]}`)
                }

            }
        } else params.append(`c`, `6`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $consoleXbox.addEventListener('click', function () {
        $consoleXbox.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let c = params.getAll(`c`)

        if (!params.has(`c`)) {  //si g no existe, dara true y creare g=7

            params.append(`c`, `7`)

        } else if (c.includes(`7`)) { //si g posee el valor 7, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 7

            params.delete(`c`)
            for (let i = 0; i < c.lencth; i++) {
                if (c[i] != `7`) {
                    params.append(`c`, `${c[i]}`)
                }

            }
        } else params.append(`c`, `7`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $consoleNintendo.addEventListener('click', function () {
        $consoleNintendo.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let c = params.getAll(`c`)

        if (!params.has(`c`)) {  //si g no existe, dara true y creare g=8

            params.append(`c`, `8`)

        } else if (c.includes(`8`)) { //si g posee el valor 8, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 8

            params.delete(`c`)
            for (let i = 0; i < c.lencth; i++) {
                if (c[i] != `8`) {
                    params.append(`c`, `${c[i]}`)
                }

            }
        } else params.append(`c`, `8`);


        console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })



    /**********************************
     * Idioma y traducción
     ***********************************/

     $languageSpain.addEventListener('click', function () {
        $languageSpain.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let l = params.getAll(`l`)

        if (!params.has(`l`)) {  //si g no existe, dara true y creare g=1

            params.append(`l`, `1`)

        } else if (l.includes(`1`)) { //si g posee el valor 1, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 1

            params.delete(`l`)
            for (let i = 0; i < l.length; i++) {
                if (l[i] != `1`) {
                    params.append(`l`, `${l[i]}`)
                }

            }
        } else params.append(`l`, `1`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $languageIngles.addEventListener('click', function () {
        $languageIngles.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let l = params.getAll(`l`)

        if (!params.has(`l`)) {  //si g no existe, dara true y creare g=2

            params.append(`l`, `2`)

        } else if (l.includes(`2`)) { //si g posee el valor 2, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 2

            params.delete(`l`)
            for (let i = 0; i < l.length; i++) {
                if (l[i] != `2`) {
                    params.append(`l`, `${l[i]}`)
                }

            }
        } else params.append(`l`, `2`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $languageChino.addEventListener('click', function () {
        $languageChino.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let l = params.getAll(`l`)

        if (!params.has(`l`)) {  //si g no existe, dara true y creare g=3

            params.append(`l`, `3`)

        } else if (l.includes(`3`)) { //si g posee el valor 3, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 3

            params.delete(`l`)
            for (let i = 0; i < l.length; i++) {
                if (l[i] != `3`) {
                    params.append(`l`, `${l[i]}`)
                }

            }
        } else params.append(`l`, `3`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })

    $subtitleSpain.addEventListener('click', function () {
        $subtitleSpain.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let s = params.getAll(`s`)

        if (!params.has(`s`)) {  //si g no existe, dara true y creare g=1

            params.append(`s`, `1`)

        } else if (s.includes(`1`)) { //si g posee el valor 1, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 1

            params.delete(`s`)
            for (let i = 0; i < s.length; i++) {
                if (s[i] != `1`) {
                    params.append(`s`, `${s[i]}`)
                }

            }
        } else params.append(`s`, `1`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $subtitleFrench.addEventListener('click', function () {
        $subtitleFrench.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let s = params.getAll(`s`)

        if (!params.has(`s`)) {  //si g no existe, dara true y creare g=2

            params.append(`s`, `2`)

        } else if (s.includes(`2`)) { //si g posee el valor 2, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 2

            params.delete(`s`)
            for (let i = 0; i < s.length; i++) {
                if (s[i] != `2`) {
                    params.append(`s`, `${s[i]}`)
                }

            }
        } else params.append(`s`, `2`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })
    $subtitleGerman.addEventListener('click', function () {
        $subtitleGerman.classList.toggle('pulsado')
        $audio.play()
        //extraigo todos los valores de g
        let s = params.getAll(`s`)

        if (!params.has(`s`)) {  //si g no existe, dara true y creare g=2

            params.append(`s`, `3`)

        } else if (s.includes(`3`)) { //si g posee el valor 3, entonces borra todas las g, recorre el array g y agrega las g quitando solo la del valor 3

            params.delete(`s`)
            for (let i = 0; i < s.length; i++) {
                if (s[i] != `3`) {
                    params.append(`s`, `${s[i]}`)
                }

            }
        } else params.append(`s`, `3`);


     //   console.log(`${window.location.origin}/api/category/filter?${params.toString()}`)

        fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data => console.log(data));

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )

    })

/***************************
 * Price Min y Max
 */

    $priceMin.addEventListener('change', function(){

        if($priceMin.value){
            params.delete('min')
            params.append('min',`${$priceMin.value}` )

            console.log(params.toString())

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )
        } else {
            params.delete('min')
            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )
        }

       
    })

    $priceMax.addEventListener('change', function(){

        if($priceMax.value){
            params.delete('max')
            params.append('max',`${$priceMax.value}` )

            
            

            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )
        } else {
            params.delete('max')
            fetch(`${window.location.origin}/api/category/filter?${params.toString()}`)
            .then(response => response.json())
            .then(data =>{
                
                $sectionContainer.innerHTML = ""
                data.forEach(element => {
                $sectionContainer.insertAdjacentHTML('beforeend',
               ` <article class="container-new">
                     <a id="homeLink" href="/products/detail/${element.id}">
                     <div class="article-header">
                        <div class="home-descount">
                            <img src="/vectores/category/descount.svg" alt="">
                        </div>
                        <div class="home-new">
                            <img src="/vectores/category/new.svg" alt="">
                        </div>
                        <div class="home-sold">
                            <img src="/vectores/category/pan.svg" alt="">
                        </div>
                        <div class="home-stars">
                            <img src="/vectores/category/stars.svg" alt="">
                        </div>
                     </div>
                     
                     <div class="article-container-new">
                     <div class="img-container-new"> <img src="/img/products/${element.photo}"
                             alt=""> 
                             </div>
                     <h3 class="product-name">
                     ${element.name}
                             </h3>
                             <p class="product-description">
                             ${element.description.slice(0,100) + "..."}
                             </p>
                             <div class="product-value">
                                 <h3 class="product-price">
                                 ${element.priceEnd}$
                                 </h3>
                                 <h3 class="descount">
                                 ${element.descount} off
                                 </h3>
                             </div>


                 </div>
                 
                 <div class="article-footer"></div>

                     </a>
                </article>` 
            )
       
            })}
            )
        }
    })


/*********************
 * user preferences
 */






/********************
 * 
 * 
 */



})

