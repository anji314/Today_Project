<template>
  <div id="tryLogin">
    <img id=title class="back" src="../../assets/login_img/title.png"/>
    <img id=heart src="../../assets/login_img/heart.png"/>
    <div id="kakao">
    <!--<img id="loginbutton" src="../../assets/login_img/kakao.png" v-on:click="trylogin" />-->
    </div>
    <KakaoLogin id=loginbutton
      api-key="83cad9447b59eeb4ae6b7385b5307162"
      
      :on-success=onSuccess
      :on-failure=onFailure
      />
    <img id=couple src="../../assets/login_img/couple.png"/>
    <img id=tree src="../../assets/login_img/tree.png"/>
  <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios';
import KakaoLogin from 'vue-kakao-login';
import vuerouter from 'vue-router';


let onSuccess = (data) => {
  console.log(data);
  sessionStorage.setItem("usertoken",data.access_token);
  console.log("Loginsuccess");
  Kakao.API.request({
    url: '/v2/user/me',
    success: function(response) {
        console.log("여기는 사용자정보요청",response);
        sessionStorage.setItem("username",response.properties.nickname);
        sessionStorage.setItem("userid",response.id);
       //console.log(this.$router);
        location.href="/Main";
    },
    fail: function(error) {
        console.log(error);
    }
});
  //this.$router.replace('/main');
}
let onFailure = (data) => {
  console.log(data)
  console.log("failure")
}

export default {
    methods:{
        trylogin:function(){
            location.href="https://kauth.kakao.com/oauth/authorize?client_id=331a7d6f3656132d7e88f650993a830f&redirect_uri=http://localhost:8080/Loginservice/code&response_type=code";
        },
        onSuccess,
        onFailure,

        

    },
    components: {
    'KakaoLogin':KakaoLogin
  },
}
</script>
<style>

#title{
  position: fixed;
  top:13%;
  left:23%;
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
  position: absolute;
  background-image: "../../assets/login_img/kakao.png";
  left:14%;
  top:25%;
}
#kakao{
  position: fixed;
  left: 20%;
  top:25%;
}
</style>