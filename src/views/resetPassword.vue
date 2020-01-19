<template>
    <div>
        <form @submit.prevent="pressed">
            <div class="password">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <button type="submit">Reset Password</button>
        </form>
        <div v-if="error" class="error">{{error.message}}</div>
    </div>
</template>

<script>
    import * as firebase from "firebase/app";
    import "firebase/auth";
    

    export default {
        methods: {
            async pressed(){
                try{
                    var auth = firebase.auth();
                   auth.sendPasswordResetEmail(this.email).then(function() {
                // Email sent.
                   });
                }catch(err){
                    this.error = err;
                }
                
            }
        },
        data(){
            return {
                email: "",
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