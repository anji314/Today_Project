<template>
  <div >
      로그인 진행중
  </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
        code:'',
        token:'',
        au:''
        }
        
    },methods:{
        get_token(){
            axios({
                method:'POST',
                url:'https://kauth.kakao.com/oauth/token',
                params:{
                    grant_type : 'authorization_code',
                    client_id : '331a7d6f3656132d7e88f650993a830f',
                    redirect_uri:'http://localhost:8080/Loginservice/code',
                    code: this.code
                }
            })
            .then((Response)=>{
                console.log("response : ",Response);
                this.token=Response.data.access_token;
                console.log("access_token : ",this.token);
                sessionStorage.setItem('usertoken',this.token);
                this.$router.replace('/main');
            })
            .catch((request,status,error)=>{
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                
            })
        }
    },
    created:function(){
        /*this.code=this.$route.query.code;
        console.log("code: ",this.$route.query.code);
        this.get_token();*/
    
    }

    


}
</script>
<style>
</style>