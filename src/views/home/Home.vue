<template>
  <div id="home_container">
    <HomeLeft/>
    <HomeRight/>
  </div>
</template>

<script>
import HomeLeft from "@/views/home/component/HomeLeft";
import HomeRight from "@/views/home/component/HomeRight";
export default {
  name: "Home",
  components: {HomeRight, HomeLeft},
  created() {
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
#home_container{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;

}
</style>