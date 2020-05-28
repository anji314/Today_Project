<template>
  <div class=detail>
    <!--  <header></header>
      <imags></imags>
      <content></content>
      <styles></styles>
      <spot></spot> 
      <button type="button">이곳으로 결정하기</button>
      <rating></rating>
      <footer></footer>-->
      <banner :spotid="spotid"></banner>
    
      {{info.info}}<br>
      {{info.tel}}<br>
      {{info.avg}}<br>
      {{info.cnt}}<br>
      {{info.latitude}},{{info.longitude}}




      <div id="choice">이곳으로 결정하기</div>
  </div>
</template>
<script>
import axios from 'axios';
import banner from './Detail_Service/banner.vue';
import banner2 from './Detail_Service/banner2.vue';
export default {
  data(){
    return{
      spotid:'',
      info:''
    }
  },
  created:function(){
    this.spotid=this.$route.params.id;
    axios.get('http://project.mintpass.kr:3000/location/'+this.spotid,{
    })
    .then(response=>{
      console.log("세부 정보 : ",response);
      this.info=response.data.infodetail[0];
    })
    .catch(err=>{
      console.log(err);
    })

  },
  methods:{

  },
  components:{
    'banner':banner,
    'banner2':banner2,
  }
}
</script>
<style>
.detail{
  height: 2000px;
}
#choice{
  position:fixed;
  left: 0%;
  bottom: 0%;
  width:99%;
  padding-top: 3%;
  padding-bottom: 3%;
  text-align: center;
   border-radius: 1rem/ 1rem;
  border: 2px solid rgb(255, 121, 148);
}
</style>