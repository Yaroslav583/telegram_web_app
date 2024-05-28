<template>
  <div id="app">
    <router-view><router-link to="/">Home</router-link></router-view>
    <router-view><router-link to="/AboutPage">AboutPage</router-link></router-view>
    <router-view><router-link to="/NotificationPage">NotificationPage</router-link></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>
<style>

</style>