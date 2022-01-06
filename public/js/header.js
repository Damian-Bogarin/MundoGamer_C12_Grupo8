/* <script src='/js/header.js'></script>  -> ESTA ETIQUETA ESTA AL FINAL EN REGISTER */
/* let logo = document.querySelector(".logo") Capturo por medio de su clase(.) */


let navBar = document.querySelector("#navigation-burguer-menu"); // Capturo el elemento por el ID

function dropMenu() {
    let subcategoryMenu = document.querySelector(".active");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
        subcategoryMenu?.classList.remove("active");
    } else {
        navBar.style.display = "block"; // aparece la caja
        subcategoryMenu ? subcategoryMenu.classList.remove("active") : "";
    }
}