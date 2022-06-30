//local reviews data

const reviews = [
    {
        id: 1,
        name: "David Jones",
        job: "web developer",
        img: 
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Start 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        id: 2,
        name: "Sara Kampala",
        job: "ux designer",
        img:  
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Start 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        id: 3,
        name: "John Doe",
        job: "python developer",
        img: 
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Start 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("jobs");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const random = document.querySelector("#random")

// set starting item

let currentItem = 0;

// load initial item

//old method
// window.addEventListener("DOMContentLoaded", function(){
//    // console.log("loaded")

//    const item = reviews[currentItem]

//    //img.src = reviews[currentItem].img
//    img.src = item.img
//    author.textContent = item.name
//    job.textContent = item.job
//    info.textContent = item.text
// })

window.addEventListener("DOMContentLoaded", function(){
    // console.log("loaded")
 
    showPerson(currentItem)
 })

// show person based item

function showPerson(person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem)
})

// show previous person

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

//Show random person

random.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem)
    showPerson(currentItem)
})