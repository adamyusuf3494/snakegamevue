<template>
  <div id="app">
    <div id="nav" v-show="$route.name !== 'home'">
      <router-link class="link" to="/">Home</router-link> 
      <router-link  class="link" to="/resume">Resume</router-link>
      <router-link  class="link" to="/projects">Projects</router-link>
      <router-link class="link" to="/about">About</router-link>
      <router-link class="link" to="/profileSettings" v-show="this.loggedIn == true">profileSettings</router-link>
      <span v-if="this.loggedIn" @click="signOut"><router-link class="link" to="/projectsLogin">LogOut</router-link></span>
        <span v-else><router-link class="link" to="/projectsLogin">Login</router-link>
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
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
}



#nav {
    margin: 25px;
    width: 900px;
    display: flex;
    justify-content: space-around;
  }

  .link {
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color:#333;
    font-size: 12pt;
    border: 2px solid #7fcd91;
    transition: background .25s ease-in-out;
    -moz-transition: background .25s ease-in-out;
    -webkit-transition: background .25s ease-in-out;
  }

  .link:hover {
    background: #7fcd91;
    color: white;
    cursor: pointer;
  }
</style>
