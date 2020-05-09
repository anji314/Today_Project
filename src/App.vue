<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
import loginservice from './components/Login_service/kakao_login.vue';
import logintoken from './components/Login_service/kakao_token.vue';
import vuerouter from 'vue-router';
import main from './components/Main.vue'
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
   // {path:'/RecommendList',},
    //{path:'/SpotInformation',},
    //{path:'Mylist',},
   // {path:'Rate',}
  ]
})
export default {
  router
}
</script>

<style>

</style>