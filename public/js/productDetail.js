function qs (element){
    return document.querySelector(element)
}
function qsAll(element){
    return document.querySelectorAll(element)
}


window.addEventListener('load', function(){
    let $like = qs('#Like')
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search)

    //extraigo el valor del id del productDetail
    var regex = /(\d+)/g;
    let pathname = this.window.location.pathname
    let product = pathname.match(regex)
    let productId = product[0]

    $like.addEventListener('click', function(){

       
        
     fetch(`${window.location.origin}/api/product/update/${productId}`,{
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            producto : productId
        })
     })
    })


})