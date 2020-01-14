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
  apiKey: "AIzaSyAPr2_eWnMbo_uydh7Pa3m3rXE5S4-MJcg",
  authDomain: "officialsnkaegame.firebaseapp.com",
  databaseURL: "https://officialsnkaegame.firebaseio.com",
  projectId: "officialsnkaegame",
  storageBucket: "officialsnkaegame.appspot.com",
  messagingSenderId: "150123891628",
  appId: "1:150123891628:web:eb56914dbbbc337a820809",
  measurementId: "G-PE2N0XC843"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    }
});
