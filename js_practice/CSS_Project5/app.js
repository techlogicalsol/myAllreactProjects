const btn = document.querySelector(".btn")
// console.log("Click Me",btn)
// const num = document.getElementById("num").value
// console.log(num)

// const num1 = parseInt(num)
// console.log(num1)

btn.addEventListener("click", function(){
  
    let num = document.getElementById("num").value
    const num1 = parseInt(num)
    for(var i=1; i<=10; i++){
        // num1+" x "+i+" = "+i*num1
        console.log(num1+" x "+i+" = "+i*num1)
        document.getElementById("table").innerHTML = num1+" x "+i+" = "+i*num1
    }
})