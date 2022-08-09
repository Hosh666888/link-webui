<template>
  <div id="navibar_container">

    <div id="log_search_navis">

      <div id="logo_container">
        <img id="logo" src="https://avatars.githubusercontent.com/u/61966371?s=40&v=4" alt="">
      </div>

      <input id="search_container" v-model="search" placeholder="search ..."/>

      <div id="navis">
        <router-link to="/issues">Issues</router-link>
        <router-link to="/marketplace">Marketplace</router-link>
        <router-link to="/explore">Explore</router-link>
      </div>
    </div>


    <div id="avatar_container">
      <div v-if="user.nickName.length>0">
        <div id="bell_container">
          <div>🔔</div>
        </div>
        <img id="avatar" src="https://avatars.githubusercontent.com/u/61966371?s=40&v=4" alt="">
      </div>

      <div v-else  style="color: #aac8e0;font-size: 14px;margin-right:20px" @click="loginInGithub">
        Sign in
      </div>
    </div>

  </div>


</template>

<script>
import TokenUtil from "@/utils/TokenUtil";

export default {
  name: "NaviBar",
  created() {
    let loginUser = TokenUtil.getLoginUser();
    if (loginUser != null) {
      this.user.nickName = loginUser.nickName
      this.user.avatarUrl = loginUser.avatarUrl
    }
  },
  data() {
    return {
      search: '',
      user: {
        nickName: '',
        avatarUrl: ''
      }
    }
  },
  methods: {
    loginInGithub(){
      window.location.replace('https://github.com/login/oauth/authorize?client_id=883857950cb7ee43a362')
    }
  }
}
</script>

<style scoped>
#navibar_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  min-height: 60px;
  background-color: #161b22;
  box-shadow: 0 20px 30px rgba(0, 0, 0, .4);
}

#search_container {
  border: 1px solid #342f2f;
  border-radius: 6px;
  width: 250px;
  min-height: 30px;
  text-align: left;
  line-height: 30px;
  transition: width .3s ease-in;
  font-size: 1.2em;
  background-color: #0d1117;
  color: #a3c0c4;
  padding-left: 5px;
}

#search_container:focus {
  width: 500px;
}

#navis {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
}

#navis * {
  color: #aac8e0;
  font-size: 14px;
  text-decoration: none;
}

#log_search_navis {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

#logo_container {
  margin-left: 20px;
}

#avatar_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

#logo, #avatar {
  border-radius: 50%;
  margin-right: 20px;
  height: 30px;
}

#bell_container {
  font-size: 14px;
  color: #aac8e0;
  line-height: 60px;
}


</style>