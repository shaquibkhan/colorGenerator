function generateColor(){
    var randomColor = Math.floor(Math.random()*16277716).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = '#' +randomColor;
    var text = document.getElementById('text');
    text.innerText = '#' +randomColor;
}