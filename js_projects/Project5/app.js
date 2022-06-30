const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closedBtn = document.querySelector(".closed-btn");

modalBtn.addEventListener("click", function(){
    modal.classList.add("open-modal");
})

closedBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal")
})


