var menuIcon = document.querySelector(".menu-icon");
var side = document.querySelector(".sidebar");
var container = document.querySelector(".container");


menuIcon.onclick = function () {
    side.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}



