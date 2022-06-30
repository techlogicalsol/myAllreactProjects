//****Date ****//

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear()


//-----Close Links*****//

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
    console.log(linksContainer.getBoundingClientRect());
  });



/*************** fixed nav***********************/

const navBar = document.getElementById("nav");

const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function(){
 // console.log(window.pageYOffset)

 const scrollHeight = this.window.pageYOffset;
 const navHeight = navBar.getBoundingClientRect().height;

 if(scrollHeight > navHeight){
   navBar.classList.add("fixed-nav")
 
}else{
  navBar.classList.remove("fixed-nav")
}

if(scrollHeight > 500){
  topLink.classList.add("show-link")

}else{
  topLink.classList.remove("show-link")
}
 
})


/***************Smooth Scrolling***********************/

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link){
  link.addEventListener("click", function(e){
    e.preventDefault();

    //navigate to specific section
    //slice extracts a section of a string without modifying original string
    //1 = means start from index 1

    const id = e.currentTarget.getAttribute('href').slice(1)
    //console.log(id)
    
    const element = document.getElementById(id)

    //offsetTop  - A number, representing the top position of the element, in pixel.


    //calculate the height

    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navBar.classList.contains('fixed-nav')

    let position = element.offsetTop - navHeight
    //console.log(position)

    if(!fixedNav){
      position = position - navHeight
    }

    if(navHeight > 82){
      position = position + containerHeight
    }

    window.scrollTo({
      left:0, top:position
    });

    //closing menu after clicking

    linksContainer.style.height = 0
  })
})