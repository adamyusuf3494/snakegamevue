<template>
    <div>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" v-model="email" placeholder="login">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">login</button>
        </form>
        <div v-if="error" class="error">{{error.message}}</div>
        <span>Need an account? Click here to <router-link to="/projectsRegister">register</router-link> </span><br>
        <span>Forgot password? Click here to <router-link to="/retrievePassword">retrieve password</router-link> </span>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
       methods:{
           redirect(){
                if(this.$route.query.redirect == "/snakeGameBoard"){
                        this.$router.push(this.$route.query.redirect || '/')
                    }else{
                        this.$router.replace({name:"home"})
                    }
            },

            async pressed(){
                try{
                    await firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                    
                    this.redirect();
                }catch(err){
                    this.error = err;
                }
                
            }

            
        },
        data(){
            return {
                email: "",
                password: "",
                error: ""
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