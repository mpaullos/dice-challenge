var randonNumber1 = Math.floor(Math.random() * 6) + 1;
var randonNumber2 = Math.floor(Math.random() * 6) + 1;

if (randonNumber1 > randonNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Win!!!";
} else if (randonNumber1 < randonNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win!!!";
} else {
    document.querySelector("h1").innerHTML = "Draw Game!!!";

}
document.querySelector(".dice .img1").setAttribute("src",'images/dice'+ randonNumber1 + '.png');
document.querySelector(".dice .img2").setAttribute("src",'images/dice'+ randonNumber2 + '.png');



