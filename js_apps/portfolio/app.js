// open and close toggle//

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")


navToggle.addEventListener("click", function(){
    // linksContainer.classList.toggle("show-links")

    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    
    }else{
        linksContainer.style.height = 0;
    }
    console.log(linksContainer.getBoundingClientRect());
})





//Date Function

const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()


//FIXED Nav START


const navBar = document.getElementById("nav")
// const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function(){

    const scrollHeight = this.window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add("fixed-nav")
    
    }else{
        navBar.classList.remove("fixed-nav")
    }

    // if(scrollHeight > 500){
    //     topLink.classList.add("show-link")
    
    // }else{
    //     topLink.classList.remove("show-link")
    // }
})

//FIXED Nav END



//SMOOTH SCORLING  START

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


// SMOOTH SCORLING  END



// ABOUT START


const aboutData = [
    {
        id:1,
        infoOne: `Why do I love history so much? I have never really thought about
        it because it has always been natural to me. Perhaps more personal,
        reason for my love of history is a simple fascination with the 
        way people lived in the past.`,
        uname:"Amar Shabbir",
        imgAbt:"img/team4.jpg",
        infoTwo:`My name is Amar. I’m a JavaScript developer. 
        I design, develop, test, and implement modern mobile responsive websites 
        and applications. I develop applications using ReactJS to create UI components 
        to improvise application performance. I leverage the knowledge of JavaScript,
         HTML, CSS and modern frameworks like ReactJS, Bootstrap, and Flux.`

    }
]


const authorMe = document.getElementById("authorMe");
const uname = document.getElementById("uname");
const imgAbt = document.querySelector(".myImg");
const infoTwo = document.getElementById("infoTwo");


window.addEventListener("DOMContentLoaded", function(){

    console.log("Loaded")
    showAboutData()
})

function showAboutData(){
    const item = aboutData
    authorMe.textContent = item[0].infoOne
    uname.textContent = item[0].uname
    imgAbt.src = item[0].imgAbt
    infoTwo.textContent = item[0].infoTwo
    
    console.log(item)
}


// ABOUT END


//PORTFOLIO

const portfolioData = [
    {
        id:1,
        proImg:"img/bg-1.jpg",
        title:"Book Store Application",
        portfolioInfo:"We have sound expertise in the mobile application development. Build app and UI components from prototypes and wireframes for Andriod and iOS."

    },
    {
        id:2,
        proImg:"img/bg-2.jpg",
        title:"Construction Company Application",
        portfolioInfo:"We have sound expertise in the mobile application development. Build app and UI components from prototypes and wireframes for Andriod and iOS."
        
    },
    {
        id:3,
        proImg:"img/bg-3.jpg",
        title:"Mobile Store Application",
        portfolioInfo:"We have sound expertise in the mobile application development. Build app and UI components from prototypes and wireframes for Andriod and iOS."
        
    },
    {
        id:4,
        proImg:"img/bg-4.jpg",
        title:"Restaurant Application",
        portfolioInfo:"We have sound expertise in the mobile application development. Build app and UI components from prototypes and wireframes for Andriod and iOS."
        
    },
    {
        id:5,
        proImg:"img/bg-5.jpg",
        title:"Grocery Store Application",
        portfolioInfo:"We have sound expertise in the mobile application development. Build app and UI components from prototypes and wireframes for Andriod and iOS."
        
    },
    {
        id:6,
        proImg:"img/bg-6.jpg",
        title:"Real Estate Application",
        portfolioInfo:"We have sound expertise in the mobile application development. Build app and UI components from prototypes and wireframes for Andriod and iOS."
        
    },
    {
        id:7,
        proImg:"img/bg-7.jpg",
        title:"Interior Design Application",
        portfolioInfo:"We have sound expertise in the mobile application development. Build app and UI components from prototypes and wireframes for Andriod and iOS."
        
    },
    {
        id:8,
        proImg:"img/bg-8.jpg",
        title:"Computer Store Application",
        portfolioInfo:"We have sound expertise in the mobile application development. Build app and UI components from prototypes and wireframes for Andriod and iOS."
        
    }
]



const proImg = document.querySelector(".img-portfolio")
const sectionCenter = document.querySelector('.section-center')


// let currentVal = 0;

window.addEventListener("DOMContentLoaded", function(){
    console.log("This is loaded")

    showPortfolio(portfolioData)

})


function showPortfolio(menuItem){
    let display = menuItem.map(function(item){
        //console.log(item)
        return `<div class="col col-portfolio">
       <img src="${item.proImg}" class="img-portfolio" alt="img-portfolio"/>
        
        <div class="modal-overlay">
            <div class="modal-container">

                <div class="modal-Img">
                    <img src="${item.proImg}" class="mob-app" alt="mob-app"/>
                </div>

                
                <h2>${item.title}</h2>
                <p id="portfolioInfo">
                   ${item.portfolioInfo}
                </p>
                <button class="closed-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    
    </div>`


    
    })

    display = display.join("")
    //console.log(display)
    sectionCenter.innerHTML = display


    //MODAL START
    const imgPortfolio = document.getElementsByClassName("img-portfolio")

    const triggerArray = Array.from(imgPortfolio).entries()

    const modal = document.getElementsByClassName("modal-overlay")
    const closedBtn = document.getElementsByClassName("closed-btn")

    for(let[index, trigger] of triggerArray){

        const toggleModal = ()=>{
            modal[index].classList.toggle("show-modal")
        
        
        };

        trigger.addEventListener("click", toggleModal);
        closedBtn[index].addEventListener("click", toggleModal)
}

//MODAL END

}


/*MODAL START*/

// const imgPortfolio = document.getElementsByClassName("img-portfolio")
// console.log(imgPortfolio)

// const triggerArray = Array.from(imgPortfolio).entries()

// const modal = document.getElementsByClassName("modal-overlay")
// const closedBtn = document.getElementsByClassName("closed-btn")

// for(let[index, trigger] of triggerArray){

//     const toggleModal = ()=>{
//         modal[index].classList.toggle("show-modal")
      
       
//     };

//     trigger.addEventListener("click", toggleModal);
//     closedBtn[index].addEventListener("click", toggleModal)
// }


/*MODAL END*/







// REVIEWS START

const reviews = [
    {
        id: 1,
        name: "David Jones",
        job: "Senior Web Developer",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy`,
        img: "img/team1.jpg",
    },

    {
        id: 2,
        name: "Sara Kampala",
        job: "UX Designer",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy`,
        img: "img/team2.jpg",
    },

    {
        id: 3,
        name: "Jona Den",
        job: "Python Developer",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy`,
        img: "img/team3.jpg",
    },

    {
        id: 4,
        name: "James Smoth",
        job: "Full Stack Developer",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy`,
        img: "img/team5.jpg",
    },
]

//Select items for reviews section

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("jobs");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

//set starting item

let currentItem = 0;

//Load initial item based on old method

window.addEventListener("DOMContentLoaded", function(){

    // console.log("loaded")

    // const item = reviews[currentItem]
    // // img.src = reviews[currentItem].img
    // img.src = item.img
    // author.textContent = item.name
    // job.textContent = item.job
    // info.textContent = item.text
    showPerson(currentItem)

})

//show person based item

function showPerson(person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}


//Next BTN
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem);
})

//Previous BTN
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem);
})

/*MODAL END*/