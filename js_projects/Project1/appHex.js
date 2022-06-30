const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("hex")
const color = document.querySelector(".color-hex")

//#f15025

btn.addEventListener("click", function(){
    let hexColor = "#"
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomColors()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomColors(){
    return Math.floor(Math.random() * hex.length)
}