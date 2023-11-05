let svg = document.querySelector('.svg');

window.addEventListener('load', changesvg);
window.addEventListener('resize', changesvg);

function changesvg() {
    if (window.innerWidth > 375 ) {
        svg.innerHTML = "<svg width=\"444\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#4F5D74\" d=\"M0 8h196v1H0zM248 8h196v1H248z\"/><g transform=\"translate(212)\" fill=\"#CEE3E9\"><rect width=\"6\" height=\"16\" rx=\"3\"/><rect x=\"14\" width=\"6\" height=\"16\" rx=\"3\"/></g></g></svg>";
    }else{
        svg.innerHTML = "<svg width=\"295\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#4F5D74\" d=\"M0 8h122v1H0zM173 8h122v1H173z\"/><g transform=\"translate(138)\" fill=\"#CEE3E9\"><rect width=\"6\" height=\"16\" rx=\"3\"/><rect x=\"14\" width=\"6\" height=\"16\" rx=\"3\"/></g></g></svg>";
    }
}


let intext = document.getElementById('intext');
let num = document.getElementById('num');

let btn = document.querySelector('.mybtn');

btn.onclick = function(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        const advice = data.slip.advice;
        const id = data.slip.id;
        num.innerHTML = id;
        intext.innerHTML = advice;
    })
    .catch(error => {
        console.error("Error fetching advice:", error);
    });
}














