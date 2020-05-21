<template>
  <div id="tryLogin">
    <img id=title class="back" src="../../assets/login_img/title.png"/>
    <img id=heart src="../../assets/login_img/heart.png"/>
    <div id="kakao">
    <img id="loginbutton" src="../../assets/login_img/kakao.png" v-on:click="trylogin" />
    </div>
    <img id=couple src="../../assets/login_img/couple.png"/>
    <img id=tree src="../../assets/login_img/tree.png"/>
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
#title{
  position: fixed;
  top:13%;
  left:18%;
  width:15rem;
}
#heart{
  position: fixed;
  top: 35%;
  left: 10%;
  width:80%;
}
#couple{
  position: fixed;
  width:35%;
  top: 65%;
  left: 35%;
}
#tree{
  bottom: 0px;
  left: -2px;
  position: fixed;
  width:100%;
}
#loginbutton{
  width:80%;
  
}
#kakao{
  position: fixed;
  left: 20%;
  top:25%;
}
</style>