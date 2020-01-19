<template>
  <div>
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <div class="username">
        <input type="username" v-model="username" placeholder="username" />
      </div>
      <button type="submit">register</button>
    </form>
    <div v-if="error" class="error">{{error}}</div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "@/main";

export default {
  methods: {
    redirect() {
      if (this.$route.query.redirect == "/login") {
        this.$router.push({ name: "snakeGameBoard" });
      } else {
        this.$router.replace({ name: "home" });
      }
    },

    async pressed() {
      try {
        if (this.username != "" && !this.usernameExists()) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .catch(err => {
              this.error = err.message;
            });
          this.saveData();
          this.redirect();
        } else if (this.username == "") {
          this.error = "missing username";
        } else {
          this.error = "username already exists";
        }
      } catch (err) {
        this.error = err;
      }
    },

    saveData() {
      db.collection("users")
        .doc(this.email)
        .set({
          username: this.username
        })
        .then(function() {
          console.log("Document written with ID: ");
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },

    usernameExists() {
      db.collection("users")
        .where("username", "==", this.username)
        .get()
        .then(querySnapshot => {
          if (querySnapshot == null) {
            return false;
          }
          return true;
        });
    }
  },

  data() {
    return {
      email: "",
      password: "",
      error: "",
      username: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}

input {
  width: 400 px;
  padding: 36px;
  margin: 20px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #333;
  border: 2px solid #7fcd91;
  transition: background 0.25s ease-in-out;
  -moz-transition: background 0.25s ease-in-out;
  -webkit-transition: background 0.25s ease-in-out;
  text-decoration: none;
}
button {
  width: 400px;
  height: 75px;
  font-size: 23px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  cursor: pointer;
}
</style>