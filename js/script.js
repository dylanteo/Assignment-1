// JavaScript code for interactive elements like dropdowns and sliders 

// Dropdown function for about page
const developmenthead = document.getElementById('developmenthead'); 
const development = document.getElementById('development');

const mediaQuery = window.matchMedia("(max-width: 768px)")
developmenthead.addEventListener('click', function() { // Toggle function
    if (mediaQuery.matches){
        if (development.style.display === 'none') {
            development.style.display = 'block';
        }else {
            development.style.display = 'none';
        }
    }
});

const writinghead = document.getElementById('writinghead');
const writing = document.getElementById('writing');

writinghead.addEventListener('click', function() {
    if (mediaQuery.matches){
        if (writing.style.display === 'none') {
            writing.style.display = 'block';
        }else {
            writing.style.display = 'none';
        }
    }
});



// Sliding function for cast and plot pages
var indexValue = 1;
showgroup(1);
function side_slide(e) {
    if (typeof indexValue === 'undefined' || isNaN(indexValue)) { // Re defining indexValue if undefined as I had issues with it
        console.error("indexValue is undefined or NaN, re-initializing to 0"); //testing
        indexValue = 1;
    }
    console.log("Value received in side_slide: ", e); //testing
    console.log("Before updating, indexValue in side_slide:", indexValue); //testing
    indexValue+=e;
    showgroup(indexValue)
    console.log("Updated indexValue: ", indexValue); //testing
}
function showgroup(e){
    
    const group = document.querySelectorAll('.cast-group');
    console.log("indexValue in showImg:", indexValue); //testing
    if(e > group.length){
        indexValue = 1
    }
    else if(e<1){
        indexValue = group.length
    }
    for(let i=0; i<group.length;i++){
        group[i].style.display = "none";
    }
    group[indexValue-1].style.display = "flex"
}

var indexValue = 1;
showplot(1);
function side_slide1(e) {
    if (typeof indexValue === 'undefined' || isNaN(indexValue)) {
        console.error("indexValue is undefined or NaN, re-initializing to 0"); //testing
        indexValue = 1;
    }
    console.log("Value received in side_slide: ", e); //testing
    console.log("Before updating, indexValue in side_slide:", indexValue); //testing
    indexValue+=e;
    showplot(indexValue)
    console.log("Updated indexValue: ", indexValue); //testing
}
function showplot(e){
    
    const section = document.querySelectorAll('.plot-section');
    console.log("indexValue in showImg:", indexValue); //testing
    if(e > section.length){
        indexValue = 1
    }
    else if(e<1){
        indexValue = section.length
    }
    for(let i=0; i<section.length;i++){
        section[i].style.display = "none";
    }
    section[indexValue-1].style.display = "flex"
}
