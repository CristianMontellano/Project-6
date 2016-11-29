var playerx = "200"
var playery = "100"
var foodMovementSpeed1 = "2.5"
var foodMovementSpeed2 = "2.5"
var foodEaten = 0
var scoreText = document.getElementById(score)

document.addEventListener("keydown", function (e) {
//Left Arrow Movement\\
  if (e.keyCode == 37) {

    playerx -=15;

    document.getElementById("player").setAttribute("x", playerx)

  }
//Right Arrow Movement\\
  else if (e.keyCode == 39) {

    playerx += 10;

    document.getElementById("player").setAttribute("x", playerx)

  }
//Up Arrow Movement\\
  else if (e.keyCode == 38) {

    playery -=15;

    document.getElementById("player").setAttribute("y", playery)

  }

  //Down Arrow Movement\\
  else if (e.keyCode == 40) {

    playery +=15;

    document.getElementById("player").setAttribute("y", playery)

  }





var food1x = Number(document.getElementById("food1").getAttribute("x"))

var food1y = Number(document.getElementById("food1").getAttribute("y"))

var food2x = Number(document.getElementById("food2").getAttribute("x"))

var food2y = Number(document.getElementById("food2").getAttribute("y"))


//Overlap Check for Food Item 1\\
if(playerx >= food1x - 10 && playerx <= food1x + 10 && playery >= food1y - 10 && playery <= food1y + 10) {

console.log("Food Item 1 Overlap")

foodMovementSpeed1 *= 0.8

document.getElementById("food1").setAttribute("x", RandomNumberGen(25, 375))

  document.getElementById("food1Animation").setAttribute("dur", foodMovementSpeed1)

}

//Overlap Check for Food Item 2\\
if(playerx >= food2x - 10 && playerx <= food2x + 10 && playery >= food2y - 10 && playery <= food2y + 10) {

  console.log("Food Item 2 Overlap")

  foodMovementSpeed2 *= 0.8

  document.getElementById("food2").setAttribute("x", RandomNumberGen(25, 375))

  document.getElementById("food2Animation").setAttribute("dur", foodMovementSpeed2)

}

})
function RandomNumberGen(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min)

}

function ScoreUpdate() {



}
