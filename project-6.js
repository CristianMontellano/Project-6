var playerx = "200"
var playery = "100"

document.addEventListener("keydown", function (e) {
//Left Arrow Movement\\
  if (e.keyCode == 37) {

    playerx -= 15;

    document.getElementById("player").setAttribute("x", playerx)

  }
//Right Arrow Movement\\
  else if (e.keyCode == 39) {

    playerx += 15;

    document.getElementById("player").setAttribute("x", playerx)

  }
//Up Arrow Movement\\
  else if (e.keyCode == 38) {

    playery -= 15;

    document.getElementById("player").setAttribute("y", playery)

  }

  //Down Arrow Movement\\
  else if (e.keyCode == 40) {

    playery +=15;

    document.getElementById("player").setAttribute("y", playery)

  }

})
