<template>

  <div id=recommends >
    <div v-show=false>
    {{this.idx}}
      </div>
    <div id=clothesinfo v-on:click="showinfo"><i class="addBtn fa fa-plus" aria-hidden="true"></i></div>
      <div class=tl ><h3>추천의류</h3></div>
      <clothesimg :image="clothes[this.idx]"></clothesimg>
      
  
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header" >추천 의상   <span id=cthdl @click="showModal = false"><i class="closeModalBtn fa fa-times" aria-hidden="True"></i></span></h3> 
      <span slot="footer">
        {{this.content}}
      </span>
      </modal>
  </div>
</template>
<script>
import Modal from '../../Modal.vue';
import clothesimg from './clothes_image.vue';
import Axios from 'axios';
export default {
  data(){
    return{
      showModal:false,
      content:'',
      temp:'',
      idx:'5',
      weather:'',
      a:  [
          {
            url:"/images/27/1.png"
          },
          {
            url:"/images/27/2.png"
          },
          {
            url:"/images/27/3.png"
          },
          {
            url:"/images/27/4.png"
          }
        ],
      clothes:[
        [
          {
            url:"/images/4/1.png"
          },
          {
            url:"/images/4/2.png"
          },
          {
            url:"/images/4/3.png"
          },
          {
            url:"/images/4/4.png"
          },
          {
            url:"/images/4/5.png"
          },
          {
            url:"/images/4/6.png"
          }
        ],
        [
          {
            url:"/images/8-5/1.png"
          },
          {
            url:"/images/8-5/2.png"
          },
          {
            url:"/images/8-5/3.png"
          },
          {
            url:"/images/8-5/4.png"
          },
          {
            url:"/images/8-5/5.png"
          }
        ],
        [
          {
            url:"/images/11-9/1.png"
          },
          {
            url:"/images/11-9/2.png"
          },
          {
            url:"/images/11-9/3.png"
          },
          {
            url:"/images/11-9/4.png"
          },
          {
            url:"/images/11-9/5.png"
          }
        ],
        [
          {
            url:"/images/16-12/1.png"
          },
          {
            url:"/images/16-12/2.png"
          },
          {
            url:"/images/16-12/3.png"
          },
          {
            url:"/images/16-12/4.png"
          },
          {
            url:"/images/16-12/5.png"
          }
        ],
        [
          {
            url:"/images/19-17/1.png"
          },
          {
            url:"/images/19-17/2.png"
          },
          {
            url:"/images/19-17/3.png"
          },
          {
            url:"/images/19-17/4.png"
          }
        ],
        [
          {
            url:"/images/22-20/1.png"
          },
          {
            url:"/images/22-20/2.png"
          },
          {
            url:"/images/22-20/3.png"
          },
          {
            url:"/images/22-20/4.png"
          },
          {
            url:"/images/22-20/5.png"
          }
        ],
        [
          {
            url:"/images/27-23/1.png"
          },
          {
            url:"/images/27-23/2.png"
          },
          {
            url:"/images/27-23/3.png"
          },
          {
            url:"/images/27-23/4.png"
          }
        ],
        [
          {
            url:"/images/28/1.png"
          },
          {
            url:"/images/28/2.png"
          },
          {
            url:"/images/28/3.png"
          },
          {
            url:"/images/28/4.png"
          }
        ]
      ],
      
    }
  },
  created(){
          let prelat=37.4857291;
          let prelon=126.79271159999999;
          Axios.get('https://api.openweathermap.org/data/2.5/weather',{
            params:{lat:prelat,lon:prelon,appid:'000c3bd8aeda462393a585761b6c6d10'}
        })
        .then(response=>{
          this.weatherdata = response;
          this.temp=Math.floor(this.weatherdata.data.main.temp-273);   
          //this.temp=21;
          this.writecontent(); //json 해독이 필요.       
         // console.log("before idx",this.idx,this.temp);     
        })
        .catch(err=>{
            console.log('weather err: ',err);
             alert("날씨 정보를 받아오는 중 문제가 발생하였습니다.");
             
        })
  },
  updated(){
    //this.clothes=[];
  this.writecontent();
  //console.log("update idx",this.idx);
  },
  components:{
    Modal:Modal,
    'clothesimg':clothesimg
  },
  methods:{
    showinfo(){
      this.temp=sessionStorage.getItem("pretemp");
      this.showModal= !this.showModal;
    },
    writecontent(){
      //this.clothes=[];
     if(this.temp<=4){
      this.content="패딩, 두꺼운 코트를 입고 목도리와 기모제품으로 추위에 대비해주세요!";
      this.idx=0;
    }else if(this.temp<=8){
      this.content= "코트와 가죽자켓으로 추위에 대비하고 히트텍, 니트, 레깅스를 입으면 딱!!";
       this.idx=1;
    }else if(this.temp<=11){
      this.content= "자켓, 트렌치코트, 야상을 입고 안에는 니트, 청바지, 스타킹을 입어주면 될 거에요!";
      this.idx=2;
    }else if(this.temp<=16){
      this.content= "본격적으로 쌀쌀해지는 날씨에 맞춰 자켓,가디건, 야상을 챙겨입으세요!";
       this.idx=3;
    }else if(this.temp<=19){
      this.content= "이때부터는 얇은 니트와 맨투맨 가디건과 청바지를 입으면 좋습니다.";
       this.idx=4;
    }else if(this.temp<=22){
      this.content="얇은 가디던, 긴팔, 면바지, 청바지로 코디해서 입으면 최고!!";
       this.idx=5;
    }else if(this.temp<=27){
      this.content="본격적으로 더워지니 반팔이나 얇은 셔츠와 함게 반바지나 면바지가 좋아요!";
      this.idx=6;
    }else{
      this.content= "정말 덥군요,,,, 민소매 또는 반팔, 반바지, 원피스를 추천할게요!";
      this.idx=7;
    }
    },
    
  }

}
</script>
<style>
#recommends{
  margin-top: 2%;
  position: relative;
  border: 2.5px solid rgb(198, 219, 218);
  border-radius: 1rem/ 1rem;
}


.tl{
  text-align: center;
}
#clothesinfo{
position: absolute;
right: 7%;
top:6%;
color:gray;
}
#cthdl{
   margin-left: 60%;
}
</style>