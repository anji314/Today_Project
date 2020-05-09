<template>
  <div >
      <header></header>
      <body></body>
      <footer></footer>
      메인<br>
      {{name}}님 안녕하세요!
  </div>
</template>
<script>
import axios from 'axios';


export default {
    data(){
        return{
        userinfo:{
            nickname:'',
            profile_image_url:'',
            thumbnail_image_url:''

        },
        token:'Bearer ',
        name:''
        }
    },
   created:function(){
       this.token=this.token+sessionStorage.getItem("usertoken")
        axios.get('https://kapi.kakao.com/v2/user/me',{
                  headers:{
                       Authorization: this.token,

                }
              })
            .then((Response)=>{
                console.log("response get info: ",Response);
                this.userinfo=Response.data.kakao_account.profile;
                console.log("user info: ",this.userinfo);
                this.name=this.userinfo.nickname;
            })
            .catch((ex)=>{
                console.log("error!!! : ",ex);
            })

    }
    
    
}
</script>
<style>
</style>