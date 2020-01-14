<template>
  <div>
    <div>
      <button v-on:click="this.pause ">Play/Pause</button>
      <button v-on:click="this.restart" id="restartGame">{{gameOver ? "Play again" : "Restart"}}</button>
    </div>
    <canvas id="snake" width="608" height="608" style="border:1px solid #d3d3d3;"></canvas>
    <p id="p1">Khalid score is :</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      square: 16,
      snake: [],
      game: null,
      food: {
        x: Math.floor(Math.random() * 37) * 16,
        y: Math.floor(Math.random() * 37) * 16
      },
      gameOver: false,
      d: "",
      isPaused: false,
      score: 0,
      oldScore: 0,

      cvs: null,
      ctx: null,
      user: {
        displayName: "Guest"
      }
    };
  },

  computed: {},

  methods: {
    init() {
      console.log("init");
      document.addEventListener("keydown", this.direction);
      document.addEventListener("keydown", this.pauseGameKeyboard);

      this.cvs = document.getElementById("snake");
      console.log('Canvas', this.cvs);
      this.ctx = this.cvs.getContext("2d");

      this.snake[0] = {
        x: 10 * this.square,
        y: 12 * this.square
      };

      this.runGame();
    },

    direction() {
      let key = event.keyCode;
      if (key == 37 && this.d != "RIGHT") {
        this.d = "LEFT";
      } else if (key == 38 && this.d != "DOWN") {
        this.d = "UP";
      } else if (key == 39 && this.d != "LEFT") {
        this.d = "RIGHT";
      } else if (key == 40 && this.d != "UP") {
        this.d = "DOWN";
      }
    },

    collision(head, array) {
      for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
          return true;
        }
      }
      return false;
    },

    pauseGameKeyboard() {
      let key = event.keyCode;
      if (key == 32) {
        this.pause();
      }
    },

    pause() {
      this.isPaused = !this.isPaused;
    },

    restart() {
        console.log('Restarting...');
        this.clearBoard();
        this.init();
    },

    clearBoard() {
      this.game = null;
      this.snake = [];
      this.food = {
        x: Math.floor(Math.random() * 37) * this.square,
        y: Math.floor(Math.random() * 37) * this.square
      };
      this.gameOver = false;
      this.d = "";
      this.isPaused = false;
      this.score = 0;
      this.oldScore = 0;

      this.cvs = null;
      this.ctx = null;
      document.getElementById("restartGame").innerHTML = "Restart";
    },

    playGame() {
      console.log("playGame");

      // draw background
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, 608, 608);

      // draw snake
      for (let i = 0; i < this.snake.length; i++) {
        this.ctx.fillStyle = i == 0 ? "black" : "white";
        this.ctx.fillRect(
          this.snake[i].x,
          this.snake[i].y,
          this.square,
          this.square
        );
      }

      // draw food
      this.ctx.fillStyle = "blue";
      this.ctx.fillRect(this.food.x, this.food.y, this.square, this.square);

      if (!this.isPaused) {
        //snake move
        // old head position
        let oldX = this.snake[0].x;
        let oldY = this.snake[0].y;

        // which direction
        if (this.d == "LEFT") {
          oldX -= this.square;
        }
        if (this.d == "UP") {
          oldY -= this.square;
        }
        if (this.d == "RIGHT") {
          oldX += this.square;
        }
        if (this.d == "DOWN") {
          oldY += this.square;
        }

        if (oldX < 0) {
          oldX = 37 * this.square;
        }
        if (oldX > 37 * this.square) {
          oldX = 0;
        }
        if (oldY < 0) {
          oldY = 37 * this.square;
        }
        if (oldY > 37 * this.square) {
          oldY = 0;
        }

        // if the snake eats the food
        if (oldX == this.food.x && oldY == this.food.y) {
          this.score++;
          this.food = {
            x: Math.floor(Math.random() * 37) * this.square,
            y: Math.floor(Math.random() * 37) * this.square
          };
          // we don't remove the tail
        } else {
          // remove the tail
          this.snake.pop();
        }

        if (this.score > this.oldScore) {
          //updateTable();
          this.oldScore = this.score;
        }

        // add new Head
        let newHead = {
          x: oldX,
          y: oldY
        };

        // game over
        if (
          oldX < 0 ||
          oldX > 37 * this.square ||
          oldY < 0 ||
          oldY > 37 * this.square ||
          this.collision(newHead, this.snake)
        ) {
          this.ctx.font = "30px Arial";
          this.ctx.strokeText("Game Over, Score: " + this.score, 10, 50);
          this.gameOver = true;
          clearInterval(this.game);
        }
        this.snake.unshift(newHead);

        document.getElementById("p1").innerHTML =
          this.user.displayName + this.score;
      }
    },

    runGame() {
      this.game = setInterval(this.playGame, 100);
    }
  },

  mounted() {
    console.log("mounted");
    this.init();
  }
};
</script>

<style lang="scss" scoped>
canvas {
  display: block;
  margin: 0 auto;
}
</style>