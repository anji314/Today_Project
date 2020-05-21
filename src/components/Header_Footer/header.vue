<template>
  <div >

    <input id="toggle" type="checkbox" />
    <div id="header">

    <div class="title">
    <img src="../../assets/login_img/title.png">
    </div>
    

    <label for="toggle" class="right"><i class="addBtn fa fa-plus" aria-hidden="true"></i></label>


    <div id="toggle_list">
      <div id="toggle_gnb">
        <ul>
          <li>{{userinfo.nickname}}</li>
          <li>id : {{userinfo.id}}</li>
          <li>My List</li>
          <li name="logout" v-on:click="Logout">Logout</li>
        </ul>
      </div>
    </div>


  </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data(){
        return{
       
        userinfo:{
            nickname : sessionStorage.getItem("username"),
            id :sessionStorage.getItem("userid"),
            token : sessionStorage.getItem("usertoken"),
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
}
</script>
<style>
#header{
 
 padding-top : 10%;
 padding-bottom : 10%;
 position: relative;
  text-align: center;
}

.lgt{
  float: right;
}
#header img{
  width: 10rem;
}
#header> label{
  display: block;
  position: absolute;
  top:10%;
  right: 5%;
}
#toggle_gnb > ul{
  list-style: none;
  padding-left: 0px;
}
#toggle_gnb li{
  margin-top: 3%;
}
#toggle{display: none;}
#toggle+ #header > #toggle_list{display: none;}

#toggle:checked +#header > #toggle_list{ display: block;}



</style>