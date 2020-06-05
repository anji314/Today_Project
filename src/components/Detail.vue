<template>
  <div class=detail>
    <div id=back v-on:click="goback"> <i class="fas fa-arrow-left"></i> BACK</div>
      <banner :spotid="spotid"></banner>


      <div id=maininfo>
      
      <div id=storename>{{this.name}}</div>
      <div id=address>{{this.address}}</div>
      
      <div id=hd>
        <div id=rt><img src="../assets/star.png"> <span>{{info.avg}}</span>({{info.cnt}})</div>
        <div id=call><a v-bind:href="this.tel" ><i class="fas fa-phone"></i>  {{info.tel}}</a></div>
      </div>
      </div>

     
      <div id=content>
        <div id=summary>
          {{info.info}}
        </div>
          여기엔 태그
      </div>
      <div id=detailinfo>
       <span><i class="fas fa-info-circle"></i> 영업 정보</span>
        <p>주소 : {{this.address}}</p>
        <p>영업 시간 : 준비중</p>
        <p>전화번호 : {{info.tel}}</p>
      </div>


      <kakaomap :addr="addr"></kakaomap>
      <div id=ft>
        <div id=ftcall><a v-bind:href="this.tel" ><i class="fas fa-phone"></i></a></div>
        <div id=ftshare><i class="fas fa-share-alt"></i></div>
        <div id="choice" v-on:click="addlist">오늘은 여기로!</div>
      </div>
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
      tel:"tel:",
      spotid:'',
      info:'',
      maininfo:'',
      name:this.$route.params.name,
      address:this.$route.params.addr,
      addr:{
        lat:'',
        lon:''
      }
    }
  },
  methods:{
    goback:function(){
      this.$router.go(-1);
    },
    addlist:function(){
      var addid=sessionStorage.getItem("userid");
      axios.post('http://project.mintpass.kr:3000/list',{
        id:this.spotid,
        userid:addid
      })
      .then(response=>{
        console.log("추가 성공",response);
      })
      .catch(err=>{
        console.log(err);
      })
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
      this.tel+=this.info.tel;
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

#ft{
  position:fixed;
  left: 0%;
  bottom: 0%;
  width:100%;
  z-index: 1;
  background: white;
  height: 7%;
  box-shadow: 0px -2px 5px gray;
}
#ft div{
 display: inline-block;
}
#ftshare{
  margin-top: 1.5%;
  margin-left: 3%;
  color:gray;
  font-size: 1.5rem;
  padding-left:1%;
  padding-right:1%;
  
}
#ftcall{
  margin-left: 5%;
  margin-top: 1.5%;
  font-size: 1.5rem;
  padding-left:1%;
  padding-right:1%;
}
#ftcall a{
   text-decoration:none;
   color:gray;
}
#choice{
  position:absolute;
  bottom: 18%;
  right:0%;
  padding-top: 1%;
  padding-bottom: 1%;
  text-align: center;
  border-radius: 0.3rem/ 0.3rem;
 
  width: 40%;
  height: 25px;
  color:white;
  background: rgb(255, 121, 148);
  font-size: 1rem;
  margin-right:5%;
}
#content{
  background-color:white;
  padding:3%;
  box-shadow: 2px 2px 3px gray;
  margin-top:2%;
  
}
#summary{
 padding :10%;
 border: 2.5px solid #42b983;
 border-radius: 1rem/ 1rem;
 text-align: center;
 
}
#maininfo{
  padding:5%;
  text-align: center;
  box-shadow: 2px 2px 3px gray;
  margin-bottom: 3%;
  background-color:white;
  position: relative;

}
#back{
  position:absolute;
  font-size: 1.3rem;
  font-weight: bold;
  top:2%;
  left: 3%;
  color: rgb(255, 121, 148);
  z-index: 1;
}
#maininfo img{
  width:1.5rem;
  padding-right: 1%;
}
#maininfo #storename{
  font-size:1.5rem;
  font-weight: bold;
}
#maininfo span{
   font-size:1.5rem;
   font-weight: bold;
}
#detailinfo{
  padding:5%;
  text-align: left;;
  box-shadow: 2px 2px 3px gray;
  margin-bottom: 3%;
  margin-top: 3%;
  background-color:white;

}
#detailinfo span{
  font-weight: bold;
  font-size: 1rem;
}
#detailinfo p{
 font-size: 0.9rem;
}
#call a{
   text-decoration:none;
   color:gray;
}
#hd div{
  display: inline-block;
}
#rt{
  width:100px;
  padding-right: 5%;
}
#call{
  padding-left: 5%;
}
#storename{
  padding:4%;
}
#address{
   padding:3%;
   margin-bottom: 1%;
   font-size: 0.9rem;
}

</style>