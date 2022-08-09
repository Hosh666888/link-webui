<template>
  <div></div>
</template>

<script>

export default {
  name: "CallBack",
  created() {
    //解析参数

    let code = window.location.href.split("=")[1]

    console.log("code：",code);

    //发送请求去拿用户信息并缓存

    this.$axios.get("github/callback?code="+code)
      .then(res=>{
        console.log("res:"+res);
      })
    .catch(err=>{
      console.log(err);
    })

    //写入localstorage redirect /

  },
  data() {
    return {
      state:""
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>