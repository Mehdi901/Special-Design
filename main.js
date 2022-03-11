//Get Start 
let myArray = document.querySelector(".landing-page");

//Get Array of image
let imgsArray = ["04.jpg","004.jpg"];




setInterval(() => {
    // Get Random Number
    let RandomNumber = Math.floor(Math.random()* imgsArray.length);

    //change Background Image Url 
    myArray.style.background = 'url("imgs/'+ imgsArray[RandomNumber] +'")';

}, 10000);
