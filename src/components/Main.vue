<template>
  <div >
      <makeheader class="makeheader" v-bind:propsdata="userinfo"></makeheader>
      <weather class="weather" ></weather>
      <clothes class="clothes"></clothes>
      <activities ></activities>
   <!--   <makefooter></makefooter>-->
  </div>
</template>
<script>
import axios from 'axios';
import weather from './Main_Service/Weather_service/get_weatherinfo.vue';
import header from'./Header_Footer/header.vue';
import clothes from'./Main_Service/Clothes_Service/recommend.vue';
import activities from'./Main_Service/activities.vue';

const config={
    headers:{ Authorization: 'Bearer ${this.token}'}
};
export default {
    data(){
        return{
        userinfo:{
            name:sessionStorage.getItem("username"),
            profile_image_url:'',
            thumbnail_image_url:'1348280938',
            id:sessionStorage.getItem("userid"),

        },
        flag : true,
        token:'',
        name:'',
        }
    },
    methods:{
        Logintoserver:function(){
            axios.post('http://project.mintpass.kr:3000/login',{
                user:this.userinfo.id
            })
            .then((response)=>{
                console.log("서버 연결 : ",response);
            })
            .catch((err)=>{
                console.log("서버 에러",err);
                alert("서버연결에 문제가 생겼습니다.");
               this.$router.replace("/Loginservice")
            })
        },

    },
   created:function(){
       this.Logintoserver();
       /*this.token=sessionStorage.getItem("usertoken");
        axios.get('https://kapi.kakao.com/v2/user/me',{
                  headers:{
                      "Access-Control-Allow-Origin": "https://kapi.kakao.com/v2/user/me" ,
                      "Access-Control-Allow-Headers":"X-Requested-With",
                       Authorization: 'Bearer '+this.token
                }
              })
            .then((Response)=>{
                console.log("response get info: ",Response);
                this.userinfo=Response.data;
                console.log("user info: ",this.userinfo);
                sessionStorage.setItem("username",this.userinfo.properties.nickname);
                sessionStorage.setItem("userid",this.userinfo.id)
                this.name=this.userinfo.properties.nickname;
                this.flag=true;
                this.Logintoserver();

            })
            .catch((ex)=>{
                console.log("error!!! : ",ex);
                 alert("로그인에서  문제가 생겼습니다.");
                 sessionStorage.setItem("username",'안지혜');
                sessionStorage.setItem("userid",'1348280938');
                this.name='안지혜';
                this.flag=true;
                 this.Logintoserver();
               //this.$router.replace("/Loginservice");
            });   */

    },
    components:{
        'weather': weather,
        'makeheader':header,
        'clothes': clothes,
        'activities':activities
    }
    
    
}
</script>
<style>

</style>