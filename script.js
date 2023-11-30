const checkbox = document.getElementById('checkbox');
const image = document.getElementById('poster');


checkbox.addEventListener('change', function() {
    if (checkbox.checked) {

        image.style.display = 'none';
    } else {

        image.style.display = 'block';
    }
});



const developmenthead = document.getElementById('developmenthead');
const development = document.getElementById('development');

const mediaQuery = window.matchMedia("(max-width: 992px)")
developmenthead.addEventListener('click', function() {
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


var indexValue = 1;
showgroup(1);
function side_slide(e) {
    if (typeof indexValue === 'undefined' || isNaN(indexValue)) {
        console.error("indexValue is undefined or NaN, re-initializing to 0");
        indexValue = 1;
    }
    console.log("Value received in side_slide: ", e);
    console.log("Before updating, indexValue in side_slide:", indexValue);
    indexValue+=e;
    showgroup(indexValue)
    console.log("Updated indexValue: ", indexValue);
}
function showgroup(e){
    
    const group = document.querySelectorAll('.cast-group');
    console.log("indexValue in showImg:", indexValue);
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
