<template>
  <div >

    <input id="toggle" type="checkbox" />
    <div id="header">

    <div class="title">
    <img src="../../assets/login_img/title.png">
    </div>
    

    <label for="toggle" class="right"><i class="fas fa-user-circle"></i></label>


    <div id="toggle_list" >
      <div id="toggle_gnb">
        <ul>
          <li>{{propsdata.name}}</li> <!-- 1348280938 -->
          <li>id : {{propsdata.id}}</li>
          <li><router-link v-bind:to="'/mylist/'+propsdata.id" id=gomylist>My List</router-link></li>
          <!--<vue-kakao-logout></vue-kakao-logout>-->
          <li id="logout" v-on:click="logout">Logout</li>
        </ul>
      </div>
    </div>


  </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  props:['propsdata'],
 
  data(){
        return{
        flag : true,
        token:'',
        name:'',
        logoutwithkakao:()=>{
          Kakao.Auth.logout(function() {
            console.log(Kakao.Auth.getAccessToken());
          });
          }
        }

  },
  methods:{
    logout(){
      sessionStorage.clear();
      this.$router.replace("/Loginservice");
    }
        // 로그아웃 함수 ->헤더로 뺄까 생각중
    },
}
</script>
<style>
#header{
 
 padding-top : 10%;
 padding-bottom : 10%;
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
  top:5%;
  right: 7%;
  font-size: 1.7rem;
  color:gray;
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
#gomylist{
  text-decoration: none;
  color: black;
}


</style>