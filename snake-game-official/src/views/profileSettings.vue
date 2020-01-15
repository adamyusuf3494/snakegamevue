<template>
  <div>
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="username">
        <input type="username" v-model="username" placeholder="username" />
      </div>
      <div class="password">
        <input type="password" v-model="newPassword" placeholder="new password" />
      </div>
      <div class="password">
        <input type="password" v-model="confirmPassword" placeholder="Confirm password" />
      </div>
      <button type="submit">Save Changes</button>
    </form>
    <div v-if="error" class="error">{{error.message}}</div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from "@/main";

export default {
  methods: {
    updateUsername() {
      var user = firebase.auth().currentUser;
      const dbUsers = db.collection('users').doc(user.email);

      dbUsers.update({username:this.username})
    },
    updateEmailAddress() {
      var user = firebase.auth().currentUser;

      user
        .updateProfile({email: this.email})
        .then(function() {
          // Update successful.
          console.log("succes")
        })
        .catch(error=>{
          // An error happened.
          this.error = error.message;
        });
    },
    updatePassword() {
      var user = firebase.auth().currentUser;
      var newPassword = this.newPassword;
      var confirmPassword = this.confirmPassword;

      if (confirmPassword == newPassword) {
        user
          .updatePassword(newPassword)
          .then(function() {
            // Update successful.
          })
          .catch(function(error) {
            // An error happened.
            this.error = error.message;
          });
      } else {
        this.error = "passwords don't match";
      }
    },

    async pressed() {
      if (this.email != null) {
          console.log(this.email)
        this.updateEmailAddress();
        this.email=""
      }
      if (this.username != null) {
        this.updateUsername();
        this.username = ""
      }
      if (this.newPassword != null && this.confirmPassword != null) {
        this.updatePassword();
        this.newPassword =""
        this.confirmPassword=""

      }
      this.error = "no changes";
    }
  },
  data() {
    return {
      newPassword: null,
      confirmPassword: null,
      username: null,
      email: null,
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
input{
    width: 400 px;
    padding: 36px;
    margin: 20px;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color:#333;
    border: 2px solid #7fcd91;
    transition: background .25s ease-in-out;
    -moz-transition: background .25s ease-in-out;
    -webkit-transition: background .25s ease-in-out;
    text-decoration: none;
  
}
button{
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