const btnOpen = document.querySelector(".mybtn")
console.log(btnOpen)

const links = document.querySelector(".links-container")


btnOpen.addEventListener("click", function(){
    links.classList.toggle("show-link")
})