<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
import loginservice from './components/Login_service/kakao_login.vue';
import logintoken from './components/Login_service/kakao_token.vue';
import vuerouter from 'vue-router';
import main from './components/Main.vue';
import recommendlist from './components/list.vue';
import detail from './components/Detail.vue';
import mylist from './components/Mypage.vue'
const router=new vuerouter({
  mode:'history',
  routes:[
    {
      path:'/Loginservice',
      component:loginservice,
      //redirect:'/loginkakao',
      children:[
        {
       path : 'code',
       component:logintoken
        }
      ]
    },
   {path:'/Main',component:main},
   {path:'/List/:id',component:recommendlist},
   {path:'/Detail/:id/:name/:addr',component:detail},
   {path:'/mylist/:id',component:mylist},
   // {path:'/Rate',}
  ]
})
export default {
  router
}
</script>

<style>
body{
  
  background-image : url("./assets/login_img/back.png");
  background-size: cover;
  margin: 0;

}
</style>