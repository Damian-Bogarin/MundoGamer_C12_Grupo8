let navBarAdmin = document.querySelector("#burguer-admin"); 


function dropMenu() {
    let subcategoryMenuAdmin = document.querySelector(".active");
    if (navBarAdmin.style.display === "block") {
        navBarAdmin.style.display = "none";
        subcategoryMenuAdmin?.classList.remove("active");
    } else {
        navBarAdmin.style.display = "block"; 
        subcategoryMenuAdmin ? subcategoryMenuAdmin.classList.remove("active") : "";
    }
}