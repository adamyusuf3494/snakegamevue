<template>
  <div id="app">
    <div id="nav" v-show="$route.name !== 'home'">
      <router-link to="/">Home</router-link> |
      <router-link to="/resume">Resume</router-link>|
      <router-link to="/projects">Projects</router-link>|
      <router-link to="/about">About</router-link>|
      <span v-if="this.loggedIn" @click="signOut"><router-link to="/projectsLogin">LogOut</router-link></span>
        <span v-else><router-link to="/projectsLogin">Login</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
    });
  },

  data() {
    return {
      loggedIn: false
    };
  },

  components: {
  },

  methods: {
    async signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "home" });
      } catch (err) {
        console.log(err);
      }
    }
  },

  watch: { 
     '$route': {
        handler: function(route) {
           console.log(route);
        },
        deep: true,
        immediate: true
      }
}
};
</script>

<style lang="scss">
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0d23e7;
    }
  }
}
</style>
