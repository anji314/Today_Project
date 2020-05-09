<template>
  <div>
      <p v-on:click="trylogin">
        <img src="../../assets/login_img/kakao_login_btn_medium_narrow.png">
      </p>
  <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    methods:{
        trylogin:function(){
            location.href="https://kauth.kakao.com/oauth/authorize?client_id=331a7d6f3656132d7e88f650993a830f&redirect_uri=http://localhost:8080/Loginservice/code&response_type=code";
        }

    }
}
</script>
<style>
</style>