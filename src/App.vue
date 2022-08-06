<template>
  <div id="app">
    <navi-bar/>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

/*设置点击前的样式 */
a{
  text-decoration: none;
  color: white;
}
/*设置点击后的样式 */
.router-link-active {
  text-decoration: none;
}
input{
  color: white;
}
</style>
<script>
import NaviBar from "@/views/navibar/NaviBar";
export default {
  components: {NaviBar}
}
</script>