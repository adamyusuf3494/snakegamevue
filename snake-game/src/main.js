import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

//Firebase web app config
const firebaseConfig = {
  apiKey: "AIzaSyC3h3gqRIvVSSlOQdQbatQfXdL0o_O6hwE",
  authDomain: "snake-game-vue.firebaseapp.com",
  databaseURL: "https://snake-game-vue.firebaseio.com",
  projectId: "snake-game-vue",
  storageBucket: "snake-game-vue.appspot.com",
  messagingSenderId: "919450021262",
  appId: "1:919450021262:web:881201449a1f901feb08df",
  measurementId: "G-8XZ6RMYWBY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user=>{
  console.log(user)
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    }
})

