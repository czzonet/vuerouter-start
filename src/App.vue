<template>
  <div id="app">
    <h2>nav:</h2>
    <div>
      <router-link to="/one">one</router-link>&nbsp;
      <router-link to="/two">two</router-link>
    </div>
    
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: "app"
  };
</script>

<style scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>