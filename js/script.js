window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    let game = new Game()
    game.start()
    console.log("start game");

    document.onkeydown = ((e) => {
      if (e.key === "ArrowLeft") {
        console.log("MovingLeft")
        game.player.directionX -= .5
      }
      if (e.key === "ArrowRight") {
        game.player.directionX += .5
      }
      if (e.key === "ArrowUp") {
        game.player.directionY -= .5
      }
      if (e.key === "ArrowDown") {
        game.player.directionY += .5
      }
    })
  }
};
