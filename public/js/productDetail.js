
function qs (element){
    return document.querySelector(element)
}
function qsAll(element){
    return document.querySelectorAll(element)
}


window.addEventListener('load', function(){

    //variables para LIKE
    let $like = qs('#Like')
    let $likeNOT = qs('#LikeNOT')
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search)

    //variables para STARS
    let $detailValoration = qs('.detail-valoracion')
    let $valoration1 = qs('#valoration1')
    let $valoration2 = qs('#valoration2')
    let $valoration3 = qs('#valoration3')
    let $valoration4 = qs('#valoration4')
    let $valoration5 = qs('#valoration5')
    let $estrellaFill = qs('#estrellaFill')
    let clickStar = false;

    //extraigo el valor del id del productDetail
    var regex = /(\d+)/g;
    let pathname = this.window.location.pathname
    let product = pathname.match(regex)
    let productId = product[0]

    //variables para el boton y su funcion
     let $boton = qs('#detail-boton')
    $boton.addEventListener('click', function(){
        //console.log(`${window.location.origin}/users/productCart/${productId}${params.toString()}`)
        window.location.href = `${window.location.origin}/users/productCart/${productId}`
    }) 

    


    //LIKE funcion
    if($like != null){$like.addEventListener('click', function(){

       
        
     fetch(`${window.location.origin}/api/product/like/${productId}`,{
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            producto : productId
        })
     })
    })}

    if($likeNOT){
        $likeNOT.addEventListener('click', function(){
            window.location.href = `${window.location.origin}/users/login`;
        })
    }

    //Stars Funcion  
    if($valoration1){    $valoration1.addEventListener('click', function(){
        $valoration1.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration2.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        $valoration3.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        $valoration4.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        $valoration5.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        fetch(`${window.location.origin}/api/product/stars/${productId}/1`,{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
             },
           body: JSON.stringify({
               producto : productId
           })
        })

    })}
    if($valoration2){ $valoration2.addEventListener('click', function(){
        $valoration1.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration2.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration3.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        $valoration4.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        $valoration5.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        fetch(`${window.location.origin}/api/product/stars/${productId}/1`,{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
             },
           body: JSON.stringify({
               producto : productId
           })
        })
        fetch(`${window.location.origin}/api/product/stars/${productId}/2`,{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
             },
           body: JSON.stringify({
               producto : productId
           })
        })
    })}
    if($valoration3){$valoration3.addEventListener('click', function(){
        $valoration1.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration2.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration3.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration4.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        $valoration5.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        fetch(`${window.location.origin}/api/product/stars/${productId}/3`,{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
             },
           body: JSON.stringify({
               producto : productId
           })
        })
    })}
    
    if($valoration4){  $valoration4.addEventListener('click', function(){
        $valoration1.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration2.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration3.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration4.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
        $valoration5.innerHTML = '<img src="/vectores/StarEmpty.svg" id="valoration1" alt="">'
        fetch(`${window.location.origin}/api/product/stars/${productId}/4`,{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
             },
           body: JSON.stringify({
               producto : productId
           })
        })
    })}
  
    if($valoration5){ $valoration5.addEventListener('click', function(){
            $valoration1.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
            $valoration2.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
            $valoration3.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
            $valoration4.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
            $valoration5.innerHTML = '<img src="/vectores/StarFill.svg" id="valoration1" alt="">'
            fetch(`${window.location.origin}/api/product/stars/${productId}/5`,{
                method: 'PUT',
                headers: {
                   'Content-Type': 'application/json'
                 },
               body: JSON.stringify({
                   producto : productId
               })
            })
            


    })}
   


})