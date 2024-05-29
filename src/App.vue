<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/page1">Page 1</router-link>
      <router-link to="/page2">Page 2</router-link>
      <router-link to="/page3">Page 3</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  background-color: #eee;
  padding: 10px;
}
nav a {
  text-decoration: none;
  color: #333;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>