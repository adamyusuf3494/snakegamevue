<template>
  <div id="app">
    <div id="nav" >
      <div class="link" @click="goToProjects()">Projects</div>
      <div class="link" @click="goToProfileSettings()" v-show="this.loggedIn == true">profileSettings</div>
      <div class="link" v-show="$route.name == 'projects' || this.loggedIn" @click="goTologInOrOut()" >{{this.loggedIn ? "Log Out" : "Log In"}}</div>
      

    </div>
    <router-view />
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

  components: {},

  methods: {

    goToProjects(){
      this.$router.push({ name: "projects"  });
    },

    goToProfileSettings(){
      this.$router.push({ name: "profileSettings"  });
    },

    goTologInOrOut(){
      if(this.loggedIn){
        //Log Out
        this.signOut()
      }else{
        this.$router.push({ name: "projectsLogin" , query: {redirect: this.$route.name} });
      }
    },

    async signOut() {
      try {
        firebase.auth().signOut();
        this.$router.push({ name: this.$route.name });
      } catch (err) {
        err;
      }
    }
  },

  watch: {
    $route: {
      handler: function(route) {
        route;
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
  width: 100px;
  height: 30px;
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
  text-decoration: none;
}

.link:hover {
  background: #7fcd91;
  color: white;
  cursor: pointer;
}
</style>
