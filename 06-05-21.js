//for player 1
var dice1 = Math.floor(Math.random() * 6 + 1); //(0 TO 0.9)*6=(0 TO 5)+1//=1 TO 6
console.log(dice1);
//⭐ line 👇 😃
var img1 = "/Dicee Challenge - Starting Files/images/dice" + dice1 + ".png"; //⭐ 🧠
// fist we make image name with it no =<dice+it no> so we only change number  in image add tag after that we save it image add in " var=img1"

var preimg1 = document.querySelectorAll("img")[0]; //in this line we select the image, with it image add in HTML by using this = [add]
preimg1.setAttribute("src", img1); // in this line we change the image HTML add  =<src> to new image add which we make in js =<image> by using element "setAttribute"

//for player 2
var dice2 = Math.floor(Math.random() * 6 + 1); 
console.log(dice2);
var img2 = "/Dicee Challenge - Starting Files/images/dice" + dice2 + ".png";
var preimg2 = document.querySelectorAll("img")[1];
preimg2.setAttribute("src", img2);

// result
if (dice1 > dice2) {
  document.querySelector("h2").innerHTML = " 🥇  player 1 win!"; // in this line we change the HTML statement text by select = document.querySelector
} else if (dice1 < dice2) {
  document.querySelector("h2").innerHTML = "player 2 win! 🥇";
} else {
  document.querySelector("h2").innerHTML = "Draw!";
}
