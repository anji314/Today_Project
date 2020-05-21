<template>
  <div >
      <makeheader></makeheader>
      <Wcomment></Wcomment>
      <showlist></showlist>
      <div class=Rlist>
      <ul>
          <li v-for="spot in listarr">
              <div class="spotob">
              <img v-bind:src="spot.img" />
              <div>{{spot.name}}<br>
              <div class="info">
                  {{spot.addr}}<br>
                  {{spot.tag}}
              </div>
              </div>
              </div>
          </li>
      </ul>
      </div>


      <footer></footer>
  </div>
</template>
<script>
import makeheader from './Header_Footer/header.vue'
import axios from 'axios';
export default {
  data(){
    return {
      case:this.$route.params.id,
      listarr:{},
    }
  },
  components:{
    'makeheader':makeheader,
  },
  methods:{
      devide:function(){

      }

  },
  created:function(){
    if(this.case==1){ //식사
     axios.post('http://project.mintpass.kr:3000/tag',{
                tag:"식사"
            })
            .then((response)=>{
                console.log("서버 연결태그 : ",response);

                this.listarr=response.data.info;
                console.log("장소들: ",this.listarr);
               
            })
            .catch((err)=>{
                console.log(err);
            })

    }else if(this.case==2){//카페
    axios.post('http://project.mintpass.kr:3000/tag',{
                tag:"카페"
            })
            .then((response)=>{
                console.log("서버 연결태그 : ",response);
                this.listarr=response.data.info;
            })
            .catch((err)=>{
                console.log(err);
            })

    }else if(this.case==3){//술
    axios.post('http://project.mintpass.kr:3000/tag',{
                tag:"술"
            })
            .then((response)=>{
                console.log("서버 연결태그 : ",response);
                this.listarr=response.data.info;
            })
            .catch((err)=>{
                console.log(err);
            })

    }else if(this.case==4){//야외활동
    axios.post('http://project.mintpass.kr:3000/tag',{
                tag:"야외"
            })
            .then((response)=>{
                console.log("서버 연결태그 : ",response);
                this.listarr=response.data.info;
            })
            .catch((err)=>{
                console.log(err);
            })

    }else if(this.case==5){//실내활동
    axios.post('http://project.mintpass.kr:3000/tag',{
                tag:"실내"
            })
            .then((response)=>{
                console.log("서버 연결 태그: ",response);
                this.listarr=response.data.info;
            })
            .catch((err)=>{
                console.log(err);
            })

    }else if(this.case==6){//아무거나
    axios.post('http://project.mintpass.kr:3000/tag',{
                tag:"아무거나"
            })
            .then((response)=>{
                console.log("서버 연결 태그: ",response);
                this.listarr=response.data.info;
            })
            .catch((err)=>{
                console.log(err);
            })

    }
  }
}
</script>
<style>

.Rlist ul{
    list-style: none;
    padding-left: 0px;
}
.Rlist li{
    margin-top: 2%;
    margin-bottom: 2%;
     border: 2.5px solid rgb(255, 121, 148);
     border-radius: 1rem/ 1rem;
}
.Rlist img{
    border-radius: 1rem 1rem 0rem 0rem/ 1rem 1rem 0rem 0rem;
}

.info{
    font-size: 0.8rem;
}

.spotob img{
   width:100%;
}
</style>