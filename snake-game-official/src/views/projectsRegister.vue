<template>
    <div>
        <form @submit.prevent="pressed">
            
            <div class="email">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <div class="username">
                <input type="username" v-model="username" placeholder="username">
            </div>
            <button type="submit">register</button>
        </form>
        <div v-if="error" class="error">{{error}}</div>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import db from '@/main'

    export default {
        methods:{
            async pressed(){
                try{
                    if(this.username != "" && !this.usernameExists()){
                        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).catch(err => {
                        this.error = err.message;
                        });

                        var user = firebase.auth().currentUser;

                        if(user){
                            console.log("how")
                            this.saveData();
                            this.$router.replace({name:"home"})
                        }
                    }
                    else if (this.username == ""){
                        this.error = "missing username"
                    }

                    else {
                        this.error = "username already exists"
                    }

                }catch(err){
                    this.error = err;
                }
                
            },

            saveData(){
                db.collection("users").doc(this.email).set({
                    username: this.username
                })
                .then(function() {
                    console.log("Document written with ID: ");
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
            },

            usernameExists(){
                db.collection("users").where('username', '==', this.username)
                .get().then( querySnapshot =>{
                    if(querySnapshot == null){
                        return false;
                    }
                    return true;
                    });
                }
            },
        
        data(){
            return {
                email: "",
                password: "",
                error: "",
                username: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
.error {
    color: red;
    font-size: 18px;
}
input{
    width: 400 px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
}
button{
    width: 400px;
    height: 75px;
    font-size: 100%;
}
</style>