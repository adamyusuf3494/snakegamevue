<template>
        
        <span v-if = "!this.loggedIn" v-on:click = "auth"> 
            <router-link to="/projectsLogin"  >
                <div >
                    <!-- Change image to a snak game-->
                    <img alt="Vue logo" src="../assets/snakeProject.png" width="200px">
                    <p>snakes game, small image with some info. link to login page</p>
                </div>
            </router-link> 
        </span>
        <span v-else>
            <router-link to="/snakeGameBoard">
                <div >
                    <!-- Change image to a snak game-->
                    <img alt="Vue logo" src="../assets/snakeProject.png" width="200px">
                    <p>snakes game, small image with some info. link to login page</p>
                </div>
            </router-link> 
        </span>
</template>

<script>
    import * as firebase from "firebase/app";
    import "firebase/auth";

    export default {
        created(){
            firebase.auth().onAuthStateChanged(user=> {
                this.loggedIn = !!user;
            })
        },
        data() {
            return {
                loggedIn: false
            }
        },
        methods:{
            auth(){
                this.$router.push({ name: 'projectsLogin', query: { redirect: '/snakeGameBoard' } });
            }
        }
    }
</script>

<style lang="scss" scoped>
img{
    float: left;
}
p{
    float:left;
    padding-top: 50px;
    padding-left: 25px;
}
div{
    margin: 30px;
    padding: 20px;
    float: left;
    background:#ff9d2f;
    color: white;

}
span{
    float: left;
}

</style>