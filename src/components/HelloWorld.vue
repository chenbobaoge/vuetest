<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/home">home</router-link>
      <router-link to="/abort">abort</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
