var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generates 1 - 6

var randomImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomSource1 =  randomImage; // generate source from dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

if (randomSource1 > randomSource2) {
  
  document.querySelector("h1").innerHTML = "🕺Player 1 Wins!";
  
} else if (randomSource1 < randomSource2) {
  
  document.querySelector("h1").innerHTML = "💃 Player 2 Wins!";
  
} else {
  
  document.querySelector("h1").innerHTML = "🤷‍♂️ It's Draw!";
  
}
