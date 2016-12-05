var playerx = "200"
var playery = "100"
var foodMovementSpeed1 = "2.5"
var foodMovementSpeed2 = "2.5"
var foodEaten = "0"
var scoreText = document.getElementById("score")
var totalTimeTaken = document.getElementById("timeTaken")
var timeStart = Date.now()
var timeCount = true
var playerModel = document.getElementById("player")

document.addEventListener("keydown", function (e) {

//Left Arrow Movement\\
  if (e.keyCode == 37 || e.keyCode == 65) {

    playerx -=15;

    document.getElementById("player").setAttribute("x", playerx)

  }
//Right Arrow Movement\\
  else if (e.keyCode == 39 || e.keyCode == 68) {

    playerx += 15;

    document.getElementById("player").setAttribute("x", playerx)

  }
//Up Arrow Movement\\
  else if (e.keyCode == 38 || e.keyCode == 87) {

    playery -=15;

    document.getElementById("player").setAttribute("y", playery)

  }

  //Down Arrow Movement\\
  else if (e.keyCode == 40 || e.keyCode == 83) {

    playery +=15;

    document.getElementById("player").setAttribute("y", playery)

  }





var food1x = Number(document.getElementById("food1").getAttribute("x"))

var food1y = Number(document.getElementById("food1").getAttribute("y"))

var food2x = Number(document.getElementById("food2").getAttribute("x"))

var food2y = Number(document.getElementById("food2").getAttribute("y"))


//Overlap Check for Food Item 1\\
if(playerx >= food1x - 10 && playerx <= food1x + 10 && playery >= food1y - 10 && playery <= food1y + 10) {

foodMovementSpeed1 *= 0.8

document.getElementById("food1").setAttribute("x", RandomNumberGen(25, 375))

  document.getElementById("food1Animation").setAttribute("dur", foodMovementSpeed1)

  ScoreUpdate();
}

//Overlap Check for Food Item 2\\
if(playerx >= food2x - 10 && playerx <= food2x + 10 && playery >= food2y - 10 && playery <= food2y + 10) {

  foodMovementSpeed2 *= 0.8

  document.getElementById("food2").setAttribute("x", RandomNumberGen(25, 375))

  document.getElementById("food2Animation").setAttribute("dur", foodMovementSpeed2)

  ScoreUpdate();

}

if (foodEaten == 10 && timeCount == true) {

  document.getElementById("canvas").pauseAnimations()

  var timeStop = Date.now()

  var totalTimeMS = timeStop - timeStart

  var totalTimeS = totalTimeMS / 1000

  console.log(totalTimeS)

  document.getElementById("food1").setAttribute("opacity", 0)

  document.getElementById("food2").setAttribute("opacity", 0)

  totalTimeTaken.textContent = "Time Taken:" + Math.round(totalTimeS) + "seconds."

  timeCount = false

  scoreText.setAttribute("opacity", 1)

  playerModel.setAttribute("opacity", 0)

}

})
function RandomNumberGen(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min)

}

function ScoreUpdate() {

foodEaten++

scoreText.textContent = "Food Eaten:" + foodEaten

console.log(foodEaten)

}
