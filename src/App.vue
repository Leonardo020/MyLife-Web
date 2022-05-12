<template>
  <!--<img class="inline" alt="Vue logo" src="./assets/logo.png" />-->
  <NavBar />
  <HelloWorld msg="Starting My Life! It's Work" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input:focus {
  outline: none;
  border-color: rgb(25, 1, 243);
  box-shadow: 0 0 10px rgb(25, 1, 243);
}
</style>
