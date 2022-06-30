const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


const btn1 = document.getElementById("hex")

const colorH = document.querySelector(".color-hex")

btn1.addEventListener("click", function(){
    let hexColor = "#"
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomColors()]
    } 

    colorH.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomColors(){
    return Math.floor(Math.random() * hex.length)
}
