const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const linksContainer = document.querySelector(".links-container")

// navToggle.addEventListener("click", function(){
    
//     // console.log(links.classList)
//     links.classList.toggle("show-links")

    
// })


navToggle.addEventListener("click", function(){

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  
  }else{
    linksContainer.style.height = 0;
  
  }
  console.log(linksContainer.getBoundingClientRect());

})


// FIXED NAV

const navBar = document.getElementById("nav");

window.addEventListener("scroll", function(){
  console.log(window.pageYOffset)

  const scrollHeight = this.window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if(scrollHeight > navHeight){
    navBar.classList.add("fixed-nav")
  
  }else{
    navBar.classList.remove("fixed-nav")
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

//ABOUT START



const about = [
  {
    id:1,
    title_about:"Responsive",
    img_about:"/img/computer.png",
    info_about:`Responsive Web Design Is About Creating Web Pages That Look Good On All 
    Devices! A Responsive Web Design Will Automatically Adjust For Different Screen 
    Sizes And Viewports. Responsive Web Design Is About Using HTML And CSS To 
    Automatically Resize, Hide, Shrink, Or Enlarge.`
  },

  {
    id:2,
    title_about:"Passion",
    img_about:"/img/fire.png",
    info_about:`We Are Passionate About Web Design, With Over 13 Years Experience In UX 
    Design, Web Development And Digital Marketing, We Take A Modern Approach To 
    Improving Your Online Presence. We Will Help Your Business To Develop The 
    Online Identity You Need To Stand Out And Succeed Online.`
  },

  {
    id:3,
    title_about:"Design",
    img_about:"/img/design.png",
    info_about:`Web Design Encompasses Many Different Skills And Disciplines In The 
    Production And Maintenance Of Websites. The Different Areas Of Web Design Include 
    Web Graphic Design, User Interface Design, User Experience Design, And Search Engine
    Optimization.`
  },

  {
    id:4,
    title_about:"Support",
    img_about:"/img/support.png",
    info_about:`Web Customer Support Specialist Supports Web-Based Products And 
    Services Through Email Support, Desktop Support, And Telephone Support. Interacts 
    With Customers And Troubleshoots Problems To Provide A High Level Of Customer 
    Satisfaction.`
  },
]


const title_about = document.getElementById("title_about");

const title_info = document.getElementById("title_info");

const sectionAbt = document.querySelector(".section-center-abt")


window.addEventListener("DOMContentLoaded", function(){
  showAbout(about)
})

function showAbout(elements){
  let displayAbt = elements.map(function(item){
    return `<div class="col">
    <div class="icon-text">
    <img src=${item.img_about} class="allIcon" alt="icon"/>
    <p id="title_about">${item.title_about}</p>
    <p id="info_about">
      ${item.info_about }
    </p>
</div>
</div>`
  })

  displayAbt = displayAbt.join("")
  sectionAbt.innerHTML = displayAbt
}


//TEAM START


const team = [
  {
    id:1,
    title_team:"Mariya Takeuchi",
    job:"Database Engineer",
    img_team:"./img/team1.jpg",
    info_team:`A database engineer creates and manages databases for a company or organization.`
  },

  {
    id:2,
    title_team:"Anja Diana",
    job:"Web Designer",
    img_team:"./img/team2.jpg",
    info_team:`A web designer is responsible for creating the design and layout of a website or web pages.`
  },

  {
    id:3,
    title_team:"Smith Putina",
    job:"Data Analyst",
    img_team:"./img/team3.jpg",
    info_team:`Data analysts gather and scrutinise data using specialist tools to generate information.`
  },

  {
    id:4,
    title_team:"Amar Shabbir",
    job:"Full Stack Developer",
    img_team:"./img/team4.jpg",
    info_team:`The main purpose of using MERN stack is to develop apps using JavaScript only.`
  },
]

const title_team = document.getElementById("title_team");

const info_team = document.getElementById("info_team");

const job = document.getElementById("job");

const sectionTeam = document.querySelector(".sectionTeam")

window.addEventListener("DOMContentLoaded", function(){
  showTeam(team)
})

function showTeam(elements){

  let displayTeam = elements.map(function(item){
    return `<div class="col-1 team">
                
    <img src="${item.img_team}" class="teamImg" alt="team"/>
    <div class="card-body">
    <span>${item.title_team}</span>
    <p class="job">${item.job}</p>
    <p class="team-info">
        ${item.info_team}
    </p>
    <button class="btn-contact"><i class='fas fa-envelope-open'></i>  Contact</button>
</div>
</div>`
  })

  displayTeam = displayTeam.join("")
  sectionTeam.innerHTML = displayTeam
}

//TEAM END



//WORK START

const work = [
  {
    id:1,
    img_work: "./img/work1.jpg",
    titleWork:"Mobile Application",
    infoWork:`We have sound expertise in the mobile application development. Build app and UI 
    components from prototypes and wireframes for Andriod and iOS.`
  },
  {
    id:2,
    img_work: "./img/work2.jpg",
    titleWork:"Commercial Offices",
    infoWork:`We have sound expertise in the mobile application development. Build app and UI 
    components from prototypes and wireframes for Andriod and iOS.`
  },
  {
    id:3,
    img_work: "./img/work3.jpg",
    titleWork:"Sport Events",
    infoWork:`We have sound expertise in the mobile application development. Build app and UI 
    components from prototypes and wireframes for Andriod and iOS.`
  },
  {
    id:4,
    img_work: "./img/work4.jpg",
    titleWork:"Hospital Application",
    infoWork:`We have sound expertise in the mobile application development. Build app and UI 
    components from prototypes and wireframes for Andriod and iOS.`
  },
  {
    id:5,
    img_work: "./img/work5.jpg",
    titleWork:"E-Commerce",
    infoWork:`We have sound expertise in the mobile application development. Build app and UI 
    components from prototypes and wireframes for Andriod and iOS.`
  },
  {
    id:6,
    img_work: "./img/work6.jpg",
    titleWork:"GYM Application",
    infoWork:`We have sound expertise in the mobile application development. Build app and UI 
    components from prototypes and wireframes for Andriod and iOS.`
  },
  {
    id:7,
    img_work: "./img/work7.jpg",
    titleWork:"Rental Building",
    infoWork:`We have sound expertise in the mobile application development. Build app and UI 
    components from prototypes and wireframes for Andriod and iOS.`
  },
  {
    id:8,
    img_work: "./img/work8.jpg",
    titleWork:"Factories Application",
    infoWork:`We have sound expertise in the mobile application development. Build app and UI 
    components from prototypes and wireframes for Andriod and iOS.`
  },

]

const img_work = document.querySelector(".work-img")
const titleWork = document.getElementById("titleWork")
const infoWork = document.getElementById("infoWork")
const sectionWork = document.querySelector(".sectionWork")


window.addEventListener("DOMContentLoaded", function(){
  showWork(work)
})

function showWork(elements){
  let displayWork = elements.map(function(item){
    return`<div class="col5">
    <img src="${item.img_work}" class="work-Img" alt="workImg" />
    <div class="banner">
        <h2 id="titleWork">${item.titleWork}</h2>
        <button class="modal-btn">Open Project</button>
    </div>

<div class="modal-overlay">
    <div class="modal-container">

        <div class="modal-Img">
            <img src="${item.img_work}" class="mob-app" alt="mob-app"/>
        </div>

        
        <h2 id="titleWork">${item.titleWork}</h2>
        <p id="infoWork">${item.infoWork}</p>
        <button class="closed-btn">
            <i class="fas fa-times"></i>
        </button>
    </div>
</div>
</div>`
  })

  displayWork = displayWork.join("")
  sectionWork.innerHTML = displayWork

  //Modal


const triggers = document.getElementsByClassName('modal-btn');

const triggerArray = Array.from(triggers).entries();

const modal = document.getElementsByClassName("modal-overlay")
const closedBtn = document.getElementsByClassName("closed-btn")


for (let [index, trigger] of triggerArray) {
    const toggleModal = ()=> {
      modal[index].classList.toggle("show-modal");
    };
    trigger.addEventListener("click", toggleModal);
    closedBtn[index].addEventListener("click", toggleModal);
  }

}