//select the values







function sum(){
   

    var totalMarks = document.getElementById("newInput").value
    var course1 = document.getElementById("value1").value
    var course2 = document.getElementById("value2").value
    var course3 = document.getElementById("value3").value
    var course4 = document.getElementById("value4").value
    var course5 = document.getElementById("value5").value
    var obtainedMarks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5)

    document.getElementById("obtained").innerHTML = obtainedMarks
    document.getElementById("percent").innerHTML = obtainedMarks * 100 /  parseInt(totalMarks)+"%"
}

function reset(){
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("value3").value = "";
    document.getElementById("value4").value = "";
    document.getElementById("value5").value = "";
    document.getElementById("newInput").value = "";
    document.getElementById("obtained").innerHTML = "";
    document.getElementById("percent").innerHTML = "";
    
}

