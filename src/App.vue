<template>
  <div id="app">
    <WellMap />
  </div>
</template>

<script>
// https://api.openbrewerydb.org/breweries


import WellMap from './components/WellMap.vue'

export default {
  name: 'App',
  components: {
    WellMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
