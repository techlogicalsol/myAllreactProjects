const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"]

const btn = document.getElementById("btn")
console.log("click",btn)

const color = document.querySelector(".color")
console.log(color)



btn.addEventListener("click", function(){

    //Manual Method Start

    // console.log(document.body)
    // const randomNumber = 2;
    // console.log(randomNumber)
    // document.body.style.backgroundColor = colors[randomNumber]

     //Manual Method End


     //Automate Method

     const randomNumber = getRandomNum();
     console.log(randomNumber)

     document.getElementById("main").style.backgroundColor = colors[randomNumber]
     color.textContent = colors[randomNumber]
     document.querySelector(".color").style.color = colors[randomNumber]

})

//Function for getting random number

function getRandomNum(){
    return Math.floor(Math.random() * colors.length)
}


