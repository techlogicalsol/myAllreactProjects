const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    //console.log(document.body)

    //get random number between 0 to 3
    // const randomNumber = 2; manual approach
    const randomNumber = getRandomNum();
    console.log(randomNumber)
    // document.body.style.backgroundColor = colors[randomNumber]
    document.getElementById("main").style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    document.querySelector(".color").style.color = colors[randomNumber]

})

function getRandomNum(){
    return Math.floor(Math.random() * colors.length)

}


