<template>
  <div >
      <a v-if="flag">{{name}}님</a> 안녕하세요!
      <button type="button" name="Logout" v-on:click="Logout">로그아웃</button>
      <header></header>
      <weather></weather>
      <Wcomment></Wcomment>
      <activivies></activivies>
      <footer></footer>
      
  </div>
</template>
<script>
import axios from 'axios';
import weather from './Weather_service/get_weatherinfo.vue'
const config={
    headers:{ Authorization: 'Bearer ${this.token}'}
};
export default {
    data(){
        return{
       
        userinfo:{
            nickname:'',
            profile_image_url:'',
            thumbnail_image_url:''

        },
        flag : true,
        token:'',
        name:''
        }
    },
    methods:{
        // 로그아웃 함수 ->헤더로 뺄까 생각중
    Logout:function(){
        this.token=sessionStorage['usertoken'];
        // unlink or logout
        axios.post('https://kapi.kakao.com/v1/user/unlink','',{
            headers : { 
                Authorization: 'Bearer '+this.token
                }
            }
            )
        .then((Response)=>{
            console.log("Logout response : ",Response);
            
            this.nickname='';
            this.flag=false;
            this.$router.replace("/Loginservice")  // 로그아웃 했을때 로그인페이지로 가는구문

        })
        .catch((err)=>{
            console.log("err : ",err);
        })
    }
    },
   created:function(){
       this.token=sessionStorage.getItem("usertoken")
        axios.get('https://kapi.kakao.com/v2/user/me',{
                  headers:{
                       Authorization: 'Bearer '+this.token
                }
              })
            .then((Response)=>{
                console.log("response get info: ",Response);
                this.userinfo=Response.data.kakao_account.profile;
                console.log("user info: ",this.userinfo);
                this.name=this.userinfo.nickname;
                this.flag=true;
            })
            .catch((ex)=>{
                console.log("error!!! : ",ex);
            })

    },
    components:{
        'weather': weather
    }
    
    
}
</script>
<style>
</style>