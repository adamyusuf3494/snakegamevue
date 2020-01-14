<template>
  <div id="home">
    <div id="center-image">
      <img src="../assets/AdamYusufCropped.png" style="width: 100%; height: 100%;">
    </div>

    <div id="description">
      <div id="main-desc">Hi, my name is 
        <span id="my-name">Adam Yusuf</span>
      </div>
      <div id="sub-desc">
        I am an electrical engineering graduate with a passsion for making things work.
      </div>
    </div>

    <div id="links">
      <div class="link" @click="goToResume()">See my resume</div>
      <div class="link" @click="goToProjects()">See my projects</div>
      <div class="link" @click="goToAbout()">Learn about me</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
    },
    methods: {
      goToResume(){
        this.$router.push({ name: 'resume'});
      },

      goToProjects(){
        this.$router.push({ name: 'projects'});
      },

      goToAbout(){
        this.$router.push({name: 'about'});
      }
    }
  }
</script>

<style scoped>
  #home {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  #center-image{
    width: 700px;
    height: 400px;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 5px #7fcd91;
  }

  #my-name {
    border-bottom: 3px solid #7fcd91;
    transition: border-bottom .25s ease-in-out;
    -moz-transition: border-bottom .25s ease-in-out;
    -webkit-transition: border-bottom .25s ease-in-out;
  }

  #my-name:hover {
    border-bottom: 8px solid #7fcd91;
    cursor: pointer;
  }

  #description {
    color: #333;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }

  #main-desc{
    font-size: 30pt;
    font-weight: bold;
    margin-bottom: 20px;
  }

  #sub-desc{
    font-size: 16pt;
  }

  #links {
    width: 600px;
    display: flex;
    justify-content: space-around;
  }

  .link {
    width: 150px;
    height: 50px;
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

  .link:hover {
    background: #7fcd91;
    color: white;
    cursor: pointer;
  }


</style>
