const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const mainBody = document.getElementById("hello")


navToggle.addEventListener("click", function(){
    console.log(links.classList)

    links.classList.toggle("show")
    
})




// Slider

// const slideData = [
//     {
//         id:0,
//         title:"New Arrival",
//         img: "./imgmix/50.jpg",
//         btntitle:"Shop Now"
//     },
//     {
//         id:1,
//         title:"Jeans",
//         img: "./imgmix/51.jpg",
//         btntitle:"Shop Now"
//     },
//     {
//         id:2,
//         title:"Womens",
//         img: "./imgmix/52.jpg",
//         btntitle:"Shop Now"
//     },
//     {
//         id:3,
//         title:"Mens",
//         img: "./imgmix/53.jpg",
//         btntitle:"Shop Now"
//     },
//     {
//         id:4,
//         title:"Sales",
//         img: "./imgmix/54.jpg",
//         btntitle:"Shop Now"
//     }
// ]







let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}