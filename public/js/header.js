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

function NotificationFuntion() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.addEventListener('load', function(){

    fetch(`${window.location.origin}/api/users/notification`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          document.getElementById("myDropdown").insertAdjacentHTML('beforeend', `<a href="${data[i].link}">${data[i].message}</a>`) 
        }
        
    })
   


  })