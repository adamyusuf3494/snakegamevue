<template>
  <div>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="email" v-model="email" placeholder="login" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">login</button>
    </form>
    <div v-if="error" class="error">{{error.message}}</div>
    <span>
      Need an account? Click here to
      <a href @click="goToRegister()">register</a>
    </span>
    <br />
    <span>
      Forgot password? Click here to
      <router-link to="/resetPassword">reset password</router-link>
    </span>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  created() {
    this.loggedIn = firebase.auth().currentUser;
    if (this.loggedIn != null) {
      if (this.$route.query.redirect == "/snakeGameBoard") {
        this.$router.push(this.$route.query.redirect || "/");
      } else {
        this.$router.replace({ name: "home" });
      }
    }
  },
  methods: {
    redirect() {
      if (this.$route.query.redirect == "/snakeGameBoard") {
        this.$router.push(this.$route.query.redirect || "/");
      } 
      else {
        this.$router.push(this.$route.query.redirect || "/");
      }
    },

    goToRegister() {
      if (this.$route.query.redirect == "/snakeGameBoard") {
        this.$router.push({
          name: "projectsRegister",
          query: { redirect: "/login" }
        });
      } else {
        this.$router.replace({ name: "projectsRegister" });
      }
    },

    async pressed() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        this.redirect();
      } catch (err) {
        this.error = err;
      }
    }
  },
  data() {
    return {
      loggedIn: null,
      email: "",
      password: "",
      error: ""
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