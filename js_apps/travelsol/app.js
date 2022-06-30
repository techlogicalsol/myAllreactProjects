const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function(){


      console.log(links.classList)
      links.classList.toggle("show")
  
})

//FIXED NAV

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


function closeNav() {
    links.classList.remove("show")
  }




//TABS


const btns = document.querySelectorAll(".tab-btn");
const travelTab = document.querySelector(".travelTab");
const articles = document.querySelectorAll(".content")

travelTab.addEventListener("click", function(e){
    // console.log(e.target.dataset.id)

    const id = e.target.dataset.id;

    if(id){

        // remove active from other buttons

        btns.forEach(function(btn){
            btn.classList.remove("active")
            e.target.classList.add("active")
        })

          // hide other articles 

        articles.forEach(function(article){
            article.classList.remove("active")
        })

        const element = document.getElementById(id);
        element.classList.add("active")
    }
})


const dataTrip = [
    {
        id:1,
        img: "./img/travel16.jpg",
        title: "West Coast, Norway",
        tripPrice: "Roundtrip from $79",
        text: "Praesent tincidunt sed tellus ut rutrum sed vitae justo."
    },

    {
        id:2,
        img: "./img/travel15.jpg",
        title: "Mountains, Austria",
        tripPrice: "One-way from $39",
        text: "Praesent tincidunt sed tellus ut rutrum sed vitae justo."
    },


]


const tripImg = document.querySelector(".imgExplore");
const title = document.querySelector(".title")
const tripPrice = document.querySelector(".price")
const info = document.querySelector(".info")
const sectionExplore = document.querySelector(".sectionExplore")


window.addEventListener("DOMContentLoaded", function(){
    showExplore(dataTrip)
})


function showExplore(elements){
    let displayExplore = elements.map(function(item){
        return `<div class="col-left-explore">
        <div class="card-explore">
            <img src="${item.img}" class="imgExplore" alt="imgExplore"/>
            <div class="card-body-explore">
                <h2 class="title">${item.title}</h2>
                <p class="price">${item.tripPrice}</p>
                <p class="info">
                    ${item.text}
                </p>

                <button class="btn-explore">Buy Tickets</button>
            </div>
        </div>
    </div>`
    })

    displayExplore = displayExplore.join("")
    sectionExplore.innerHTML = displayExplore
}



//Destination Start here

const dataDistinations = [
    {
        id:1,
        img:"./img/new1.jpg",
        country: "USA",
        city:"Western USA",
        price: "Roundtrip from $179"
    },

    {
        id:2,
        img:"./img/new2.jpg",
        country: "EUROPE",
        city:"Scandinavia",
        price: "Oneway from $99"
    },

    {
        id:3,
        img:"./img/new3.jpg",
        country: "AFRICA",
        city:"Southern Africa",
        price: "Special plan from $19"
    },
  
    {
        id:4,
        img:"./img/new4.jpg",
        country: "ENGLAND",
        city:"Devon & Cornwall",
        price: "Roundtrip from $129"
    },

    {
        id:5,
        img:"./img/new5.jpg",
        country: "ENGLAND",
        city:"London",
        price: "Oneway from $119"
    },

    {
        id:6,
        img:"./img/new6.jpg",
        country: "USA",
        city:"San Francisco",
        price: "Special plan from $29"
    },

    {
        id:7,
        img:"./img/new7.jpg",
        country: "USA",
        city:"New York",
        price: "Oneway plan from $129"
    },

    {
        id:8,
        img:"./img/new8.jpg",
        country: "USA",
        city:"Washinton DC",
        price: "Oneway plan from $129"
    },

    {
        id:9,
        img:"./img/new9.jpg",
        country: "CANADA",
        city:"Toronto",
        price: "Special plan from $49"
    },

    {
        id:10,
        img:"./img/new10.jpg",
        country: "CANADA",
        city:"Winnipeg",
        price: "Roundtrip plan from $249"
    },

    {
        id:11,
        img:"./img/new11.jpg",
        country: "CANADA",
        city:"Alberta",
        price: "Roundtrip plan from $349"
    }, 

]


const countryL = document.querySelector(".country")
const cityL = document.querySelector(".city")
const priceL = document.querySelector(".price")
const imgL = document.querySelector(".imgDist")
const sectionLocations = document.querySelector(".sectionLocations")
const container = document.querySelector(".btn-containers")


window.addEventListener("DOMContentLoaded", function(){
    showDistination(dataDistinations)
    displayButtons()
})

function showDistination(elements){
    let displayLocation = elements.map(function(item){
        return `<div class="col col-locations">
        <div class="card-locations">
        <div class="card-vertical-zoom">
            <img src="${item.img}" class="imgLocations" alt="locations" />
        </div>
            <div class="card-body-location">
                <div class="country">
                    ${item.country}
                </div>
                <span>${item.city}</span>
                <p>${item.price}</p>
            </div>
        </div>
    </div>`
        
    })

    displayLocation = displayLocation.join("")
    sectionLocations.innerHTML = displayLocation
}


//Filter


function displayButtons(){
    const countries = dataDistinations.reduce(function(values, item){

        if(!values.includes(item.country)){
            values.push(item.country)
        }

        return values
    },["all"]);
    console.log(countries)


    const countryBtns = countries.map(function(element){
        return`<button class="filter-btn" type="button" data-id=${element}>
            ${element}
        </button>
        `
    })
    .join("")

    container.innerHTML = countryBtns


    //filter buttons

    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){

            const category = e.currentTarget.dataset.id;
            const countryCategory = dataDistinations.filter(function(item){

                if(item.country === category){
                    return item
                }
            });

            if(category === "all"){
                showDistination(dataDistinations)
            
            }else{
                showDistination(countryCategory)
            }
        })
    })
}


//Social Media data

const social = [
    {
        id:1,
        imgS: "./img/fb.jpg",
        connect: "Facebook",
    },
    {
        id:2,
        imgS: "./img/travel3.jpg",
        connect: "Twitter",

    },
    {
        id:3,
        imgS: "./img/in.jpg",
        connect: "Instagram",
    },
    {
        id:4,
        imgS: "./img/social.jpg",
        connect: "TikTok",
    },
    {
        id:5,
        imgS: "./img/yout.jpg",
        connect: "Youtube",
    },
    {
        id:6,
        imgS: "./img/travel11.jpg",
        connect: "Whatsapp",
    },
]


const sectionSocial = document.querySelector(".sectionSocial")
const imgS = document.querySelector(".col-socialMedia")
const connect = document.querySelector(".connect")


window.addEventListener("DOMContentLoaded", function(){
    displaySocialMedia(social)
})

function displaySocialMedia(elements){
    let displaySocial = elements.map(function(items){
        return`<div class="col col-socialMedia">
        <div class="roll1">
        <img src="${items.imgS}" class="imgSocial" alt="imgSocial" />
        <div class="roll2">
        <p class="connect">${items.connect}</p>
        </div>
        </div>
        
    </div>
        `
    })

    displaySocial = displaySocial.join("")
    sectionSocial.innerHTML = displaySocial
}


//Date

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear()



