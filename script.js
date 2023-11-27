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
