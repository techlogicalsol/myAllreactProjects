let count = 0;

//select value and buttons

const value = document.querySelector("#value")
// console.log(value)

const btns = document.querySelectorAll(".btn")
// console.log(btns)

btns.forEach(function(item){
    // console.log(item)

    item.addEventListener("click", function(e){
        
        console.log(e.currentTarget.classList)
        const btnType = e.currentTarget.classList;

        if(btnType.contains('decrease')){
            count --;
        
        }else if(btnType.contains("increase")){
            count ++;
        
        }else{
            count = 0
        }

        if(count > 0){
            value.style.color = "#6ab04c"
        }

        if(count < 0){
            value.style.color = "red"
        }

        if(count === 0){
            value.style.color = "black"
        }
        value.textContent = count
    });

})