const navToggle = document.querySelector('.nav-toggle')
const navBar = document.querySelector('.navBar')

navToggle.addEventListener("click", function(){
    
    // console.log(links.classList)
    navBar.classList.toggle("show-links")
})
