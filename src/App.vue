<template>
  <div id="app">
    <div>
        <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <!-- <EgWindow></EgWindow> -->
      <!-- <isAttribute></isAttribute>
      <ceshimixin></ceshimixin>
      <ceshimixin1></ceshimixin1> -->
      <movedialog></movedialog>
    </div>
  
  </div>
</template>

<script>
// import EgWindow from './components/EgWindow'
import isAttribute from './components/isAttribute'
// import ceshimixin from './components/ceshimixin/ceshimixin'
import ceshimixin from './components/ceshimixin/ceshimixin.vue'
import ceshimixin1 from './components/ceshimixin/ceshimixin1.vue'
import movedialog from './components/movedialog/movedialog.vue'
export default {
  name: 'App',
  components: {
    // EgWindow,
    isAttribute,
    ceshimixin,
    ceshimixin1,
    movedialog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
