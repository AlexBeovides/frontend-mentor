const hamburger=document.querySelector(".hamburger");
const navBar=document.querySelector(".navbar-links");
const header=document.querySelector(".header-center");



hamburger.addEventListener("click",() => {
    navBar.classList.toggle("active");
    document.body.classList.toggle("lock");
    header.classList.toggle("active");
});