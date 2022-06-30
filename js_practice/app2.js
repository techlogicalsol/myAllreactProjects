//May-19-2022

// var fname = "Amar";
// var lname = "Shabbir"
// console.log("My name is",fname +" "+ lname)

// document.write(fname +" "+lname)

// var course = "Cloud Computing"
// var age = 25;
// var isFeePaid = true
// var weight = 62.9

// console.log("I am a student of",course+ " my age is",age + " my fee is",isFeePaid + " and my weight is",weight)


// var fname = "Amar"
// console.log("Before",fname)
// fname = "John"
// console.log("After",fname)

// var age = 27
// console.log("Before =",age)
// var newAge = age + 10;

// console.log("After =",newAge)

// var isFeePaid = true;
// var examPassed = false;

// console.log("I have paid my fee",isFeePaid + " but I did not pass the exam",examPassed)

// var fname = null
// console.log(typeof fname)

// var a;
// console.log("Before =",a)
// a = "Hello world"
// console.log("After =",a)

// var fname = "Amar";
// console.log("Before =",fname)
// fname = 25
// console.log("After = ",fname)
// fname = true
// console.log("New =",fname)


// var a = 15;
// var b = 25;
// var c = a + b;
// console.log("Sum =",c)

// var a = 5
// // a = a + 5
// a/=200;
// console.log(a)

// var a = 5 + 2 * (3 - 2) / 2

// console.log("A =",a)

// var a = 6
// console.log("Before increment =",a)
// a++
// console.log("After increment =",a)

// var a = 6
// console.log("Before decrement =",a)
// a--
// console.log("After decrement =",a)

// var a = 6
// var b = --a
// console.log("Pre-increment =",a)
// console.log("After increment =",b)

// var age = 36;
// var newAge = age--;
// console.log("Age = ",age)
// console.log("New Age =",newAge)


// var input = parseFloat(prompt("Enter your age: "))
// console.log("Age =", input)

// var a = 6
// var b = !(a < 5)
// console.log(b)

// var age = parseInt(prompt("Enter your age: "))

// if(age >=18){
//     console.log("You can qualify for driving")

// }else{
//     console.log("You are not eligible")
// }


// var a = 1
// var b = !!a
// console.log(b)


// var totalMarks = 500;
// // console.log("Total Marks =",totalMarks)
// var course1 = prompt("Enter course 1");
// var course2 = prompt("Enter course 2");
// var course3 = prompt("Enter course 3");
// var course4 = prompt("Enter course 4");
// var course5 = prompt("Enter course 5");

// var obtained = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5)
// console.log("Total Marks =",totalMarks)                
// console.log("Obtained Marks =",obtained)

// var score = obtained / totalMarks * 100;
// console.log("Percentage =",score+"%")

// // var score = parseInt(prompt("Enter your score: "))

// if(score >=90 && score < 100){
//     console.log("A+",score)

//     if(score >=90 && score < 100){
//         console.log("You have got $1000 scholarship")
//     }

// }else if(score >=80 && score < 90){
//     console.log("A",score)

//     if(score >=80 && score < 90){
//         console.log("You have got $500 scholarship")
//     }

// }else if(score >=70 && score < 80){
//     console.log("B+",score)

// }else if(score >=60 && score < 70){
//     console.log("B",score)

// }else{
//     console.log("Failed",score)
// }

// var vowel = prompt("Please enter an alphabet from A to Z to find vowel").toUpperCase()

// console.log(vowel)

// if(vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U"){
//     console.log("It is a vowel",vowel)

// }else{
//     console.log("It is a consonants",vowel)
// }

// var age;

// if(age){
//     console.log("if works",age)

// }else{
//     console.log("else works",age)
// }

// var ename = "amr"
// if(ename){
//     console.log("if works",ename)

// }else{
//     console.log("else work",ename)
// }


// for(var i = 0; i <= 10; i++ ){
//     console.log("Numbers",i)
// }

// for(var i = 10; i > 0; i--){
//     console.log("Reverse",i)
// }

// var input = prompt("Enter a number to generate a Table")
// input = parseInt(input)

// for(var i = 1; i <= 10; i++){
//     console.log(input+" x "+i+" = "+i*input)
// }


// var arr = [1, 2, 3, 4, 5]

// for(var i=0; i < arr.length; i++){

//     if(i===2){
//         continue
//     }
//     console.log(arr[i])
// }


// arr.forEach(element => {
//     console.log(element[arr])
// });

// var food = ["Burger", "Fries", "Snacks", "Coke"]
// // console.log(food[0])
// // console.log(food)

// for(var i=0; i < food.length; i++){

   

//     console.log(food[i])
// }

// var items = []

// items[0] = "Car";
// items[1] = "Bike"

// items.push("Car", "Bike", "Bus", "Boat")

// items.push(prompt("Enter a value"))
// items.push(prompt("Enter a value"))
// items.push(prompt("Enter a value"))

// for(i=0; i < items.length; i++){
//     console.log(items[i])
// }