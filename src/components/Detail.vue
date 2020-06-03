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
      <div id=maininfo>
      <div id=storename>가게이름 : 치즈 크라이 버거</div>
      <div>주소</div>
      
      <div><img src="../assets/star.png"> <span>{{info.avg}}</span>({{info.cnt}})</div>
      <div><i class="fas fa-phone"></i>  {{info.tel}}</div>
      </div>

      <div id=content>
        <div id=summary>
          {{info.info}}
        </div>
          여기엔 태그
      </div>


      <kakaomap :addr="addr"></kakaomap>
      <div id="choice">이곳으로 결정하기</div>
  </div>
</template>
<script>
import axios from 'axios';
import banner from './Detail_Service/banner.vue';
import banner2 from './Detail_Service/banner2.vue';
import kakaomap from './Detail_Service/kakaomap.vue';
export default {
  data(){
    return{
      spotid:'',
      info:'',
      maininfo:'',
      addr:{
        lat:'',
        lon:''
      }
    }
  },
  created:function(){
    this.spotid=this.$route.params.id;
    axios.get('http://project.mintpass.kr:3000/location/'+this.spotid,{
    })
    .then(response=>{
      console.log("세부 정보 : ",response);
      this.info=response.data.infodetail[0];
      this.addr.lat=this.info.latitude;
      this.addr.lon=this.info.longitude;
       this.show();

    })
    .catch(err=>{
      console.log(err);
    })

  
  },

  components:{
    'banner':banner,
    'banner2':banner2,
    'kakaomap':kakaomap
  }
}
</script>
<style>
.detail{
 
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
  z-index: 1;
  background: white;
}
#content{
  background-color:white;
  padding:3%;
  box-shadow: 2px 2px 3px gray;
  margin-top:2%;
  
}
#summary{
 padding :10%;
 border: 2.5px solid rgb(255, 121, 148);
 border-radius: 1rem/ 1rem;
 text-align: center;
 
}
#maininfo{
  padding:5%;
  text-align: center;
  box-shadow: 2px 2px 3px gray;
  margin-bottom: 3%;
  background-color:white;

}
#maininfo img{
  width:2rem;
  padding-right: 1%;
}
#maininfo #storename{
  font-size:1.5rem;
  font-weight: bold;
}
#maininfo span{
   font-size:2rem;
   font-weight: bold;
}

</style>