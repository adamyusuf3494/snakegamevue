import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/firestore'
require('firebase/auth')

Vue.prototype.$axios = axios
Vue.config.productionTip = false

//Firebase web app config


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

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
