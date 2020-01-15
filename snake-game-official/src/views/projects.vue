<template>
    <div id="links-projects">
        <div class="link-projects" @click="goToSnakeGameBoard()">
            <img alt="Vue logo" src="../assets/snakeProject.png" width="200px">
            <p id="projects-desc">snakes game, small image with some info. link to login page
                snakes game, small image with some info. link to login page
                snakes game, small image with some info. link to login page
            </p>
        </div>
    </div>
        
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
            goToSnakeGameBoard(){
                if (!this.loggedIn){
                    this.auth()
                }
                else{
                    this.$router.push({ name: 'snakeGameBoard'});
                }
            },
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

div{
    
    float: left;

}

#projects-desc{
    font-size: 16pt;
    float:left;
    padding: 20px;
  }

#links-projects {
    margin: 75px;
    width: 750px;
    display: flex;
    justify-content: space-around;
  }

  .link-projects {
    padding: 20px;
    width: 750px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color:#333;
    font-size: 12pt;
    border: 2px solid #7fcd91;
    transition: background .25s ease-in-out;
    -moz-transition: background .25s ease-in-out;
    -webkit-transition: background .25s ease-in-out;
  }
.link-projects:hover {
    background: #7fcd91;
    color: white;
    cursor: pointer;
  }

</style>