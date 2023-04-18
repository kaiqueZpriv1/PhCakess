const menuopen = document.getElementById("menu");
const Menu = document.getElementById("menuNav");
const close = document.getElementById("close");
const linkMenu = document.getElementById("linkMenu")

menuopen.addEventListener("click", function() {
    Menu.style.width = "70%"
    menuopen.style.visibility = "hidden"
});
close.addEventListener("click", function() {
    Menu.style.width = "0"
    menuopen.style.visibility = "visible"
})
linkMenu.addEventListener("click", function() {
    Menu.style.width = "0"
    menuopen.style.visibility = "visible"
})
