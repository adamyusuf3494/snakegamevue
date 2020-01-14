<template>
    <div>
        Reset Password
        <form @submit.prevent="pressed">
            <div class="password">
                <input type="email" v-model="email" placeholder="login">
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