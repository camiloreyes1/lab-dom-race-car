class Game {
    constructor () {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen == document.getElementById("game-end");
        this.player = new Player(this.gameScreen, 200, 500, 100, 150, "./images/car.png");        
        this.height = "600px";
        this.width = "500px";
        this.obstacles = [];
        this.counter = 0;
        this.score = 0;
        this.live = 3;
        this.gameIsOver = false;
    }
        start () {

            this.gameScreen.style.height = this.height;
            this.gameScreen.style.width = this.width;
            this.startScreen.style.display = "none";
            this.startScreen.style.height = "0px"
            this.gameScreen.style.display = "block"
            
            this.gameLoop()
        }

        gameLoop() {
            if (this.gameIsOver){
                return;
            }

            this.counter++
            if(this.counter % 120 === 0) {
                this.obstacles.push(new Obstacle(this.gameScreen))
            }

            this.update()

            window.requestAnimationFrame(() => this.gameLoop())
        }

        update () {
            for (let i = 0; i < this.obstacles.length; i++) {

                console.log(this.obstacles[i])
                this.obstacles[i].move()
                
                if (this.obstacles[i].top > 1200) {
                    this.obstacles[i].element.remove();
                    this.obstacles.splice(i, 1)
                }
                
                if (this.player.didCollide(this.obstacles[i])) {
                    this.obstacles[i].element.remove();
                    this.obstacles.splice(i, 1)
                    this.lives--
                }
                
            }
            
            this.player.move()
    
            if (this.lives <= 0) {
                this.endGame()
            }
        }
}
