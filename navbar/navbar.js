let menu = document.querySelector("#icon1");
let navul = document.querySelector(".head");

menu.onclick = () => {
    menu.classList.toggle("fa-x");
    navul.classList.toggle("open")
}