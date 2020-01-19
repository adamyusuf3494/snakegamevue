<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div class="card" style="width: 18rem;">
      <img alt="Profile Picture" src="../assets/AdamYusuf.png" >

      <div class="card-body">
        <h5 class="card-title">Adam Yusuf</h5>
        <p class="card-text">I am an electrical engineering graduate with a passsion for software.<br>
        For my personal Curriculum Vitae, please have a look at my profile</p>
        <h3>
          <span class="btn "> 
            <router-link to="/resume">See Profile</router-link>
          </span>
        </h3>
      </div>
    </div>
    
    <h3>To interact with the projects I developed, Please click
      <span class="btn"> 
        <router-link to="/projects">Projects</router-link>
      </span>
    </h3>


    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">GitHub</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.card{
  margin: 0 auto;
  background-color: #13cf1c;

}
.btn{
  color: black;
}

.hello{
  padding: 300px 0;
}
</style>
