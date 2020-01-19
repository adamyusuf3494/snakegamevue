<template>
  <div class="snake-game">
    <div id="game">
      <h1>Note: game gets faster when restart/pla again is pressed</h1>
      <div id="links-snake">
        <div class="link-snake" v-on:click="this.pause ">Play/Pause</div>
        <div
          class="link-snake"
          v-on:click="this.restart"
          id="restartGame"
        >{{gameOver ? "Play again" : "Restart"}}</div>
      </div>

      <canvas id="snake" width="608" height="608" style="border:1px solid #d3d3d3;"></canvas>
      <p id="p1">Khalid score is :</p>
    </div>
    <table id="leaderboard">
      <tr>
        <th id="leaderboard-title" colspan="2">Leaderboard</th>
      </tr>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
      <tr v-for="item in tableContent" :key= "item.id">
        <td>{{item.username}}</td>
        <td>{{item.score}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "@/main";

export default {
  data: function() {
    return {
      loggedIn: null,
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
      user: "",
      username: "",
      email: "",
      message: "",
      tableContent: []
    };
  },

  computed: {},

  methods: {
    init() {
      this.goToSnakeGameBoard();
      this.updateUserScore();

      document.getElementById("p1").innerHTML =
        this.username + "'s score is: " + this.score;

      document.addEventListener("keydown", this.direction);
      document.addEventListener("keydown", this.pauseGameKeyboard);

      this.cvs = document.getElementById("snake");
      this.ctx = this.cvs.getContext("2d");

      this.snake[0] = {
        x: 10 * this.square,
        y: 12 * this.square
      };
      this.user = firebase.auth().currentUser;
      this.email = this.user.email;
      this.fillLeaderBoard();
      this.runGame();
    },

    goToSnakeGameBoard() {
      if (this.loggedIn == null) {
        this.auth();
      } else {
        this.$router.push({ name: "snakeGameBoard" });
      }
    },

    auth() {
      this.$router.push({
        name: "projectsLogin",
        query: { redirect: "/snakeGameBoard" }
      });
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
      document.getElementById("leaderboard").innerHTML =
        "<tr>" +
        '<th id="leaderboard-title" colspan="2">Leaderboard</th>' +
        "</tr>" +
        "<tr>" +
        "<th>Username</th>" +
        "<th>Score</th>" +
        "</tr>";
    },

    playGame() {
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
          this.updateUserScore();
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

        if (this.message == "" && this.username != "") {
          this.message = this.username + "'s score is: ";
        }
        document.getElementById("p1").innerHTML = this.message + this.score;
      }
    },

    runGame() {
      clearInterval(this.game);
      if (this.game == null) {
        this.game = setInterval(this.playGame, 100);
      }
    },

    updateUserScore() {
      db.collection("users")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.id == this.email) {
              var data = doc.data();
              if (data.username != null) {
                this.username = doc.get("username");
                if (doc.get("score") == null) {
                  this.saveData();
                } else if (doc.get("score") < this.score) {
                  this.updateData();
                }
              }
            }
          });
        });
    },

    saveData() {
      var user = firebase.auth().currentUser;
      const dbUsers = db.collection("users").doc(user.email);

      dbUsers.set({
        username: this.username,
        score: this.score
      });
    },

    updateData() {
      var user = firebase.auth().currentUser;
      const dbUsers = db.collection("users").doc(user.email);

      dbUsers.update({ score: this.score });
    },

    fillLeaderBoard() {
      const dbUsers = db.collection("users");
      const query = dbUsers.orderBy("score", "desc").limit(5);

      query.get().then(dbUsers => {
        dbUsers.forEach(doc => {
          
          var data = doc.data();
          this.tableContent.push( data)
          
        });
      });
    }
  },

  mounted() {
    this.loggedIn = firebase.auth().currentUser;
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.snake-game {
  padding: 25px;
  background: #7fcd91;
  border: 1px solid;
  margin: 15px;
  border-radius: 5px;
}

#p1 {
  text-align: center;
}

#leaderboard {
  margin: 0 auto;
  text-align: center;
}

#links-snake {
  width: 350px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px;
}

.link-snake {
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #333;
  font-size: 12pt;
  border: 2px solid #7fcd91;
  transition: background 0.25s ease-in-out;
  -moz-transition: background 0.25s ease-in-out;
  -webkit-transition: background 0.25s ease-in-out;
  background: #7fcd91;
  color: white;
}
.link-snake:hover {
  background: white;
  color: #7fcd91;
  cursor: pointer;
}

#game {
  background: #dfdfdf;
  border: 1px solid;
  padding: 3px 25px 10px 25px;
  margin: 15px;
  border-radius: 5px;
}
table {
  color: #333;
  width: 540px;
  border-collapse: collapse;
  border-spacing: 0;
  margin-left: auto;
  margin-right: auto;
}

td,
th {
  border: 1px solid; /* No more visible border */
  height: 30px;
  transition: all 0.3s; /* Simple transition for hover effect */
}

th {
  background: #dfdfdf; /* Darken header a bit */
  font-weight: bold;
}

td {
  background: #fafafa;
  text-align: center;
  border: 1px solid;
  height: 30px;
  transition: all 0.3s;
}

td:hover {
  background: #666;
  color: #fff;
  cursor: pointer;
}
/* Hover cell effect! */

#leaderboard-title {
  border: 1px solid;
  height: 40px;
  transition: all 0.3s;
  background: #cf5aa0;
}
</style>