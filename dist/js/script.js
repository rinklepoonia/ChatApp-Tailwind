const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")
const show = document.querySelector(".show")

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("!right-0");
    menuIcon.classList.toggle('cross')
    document.body.classList.toggle("overFlowHidden")
})