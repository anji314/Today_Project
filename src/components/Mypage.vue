<template>
  <div >
    여기는 마이페이지
      <!--<header></header>
      <mylist></mylist>
      <footer></footer>-->
  </div>
</template>
<script>
import axios from'axios'

export default {
  data(){
    return{
      Userid:this.$route.params.id,
      userlist:''
    }
  },
  created(){
    this.showuserlist();
  },
  methods:{
    showuserlist(){
    this.Userid=this.$route.params.id;
    axios.get('http://project.mintpass.kr:3000/list/'+this.Userid,{
    })
    .then(response=>{
      console.log(response);
      this.userlist=response.data.listdetail;
    })
    .catch(err=>{
      console.log(err);
    })
    }

  }
}
</script>
<style>
</style>