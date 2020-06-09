<template>
  <div id=recommends >
    <div id=clothesinfo v-on:click="showinfo"><i class="addBtn fa fa-plus" aria-hidden="true"></i></div>
      <div class=tl ><h3>추천의류</h3></div>
    <div class="clothes_img">
      
      <table>
        <!--<img src="@/assets/clothes_img/4/1.png"/>-->
     
      </table>
    </div>
  
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
export default {
  data(){
    return{
      showModal:false,
      content:'',
      temp:'',
      clothes:[],
      ck1:true,
      ck2:false,
      ck3:false,
      ck4:false,
      ck5:false,
      ck6:false,
      ck7:false,
      ck8:false,
    }
  },
  created(){
    //this.showinfo();
    //this.showModal=false;
    //this.writecontent();
     console.log("clothe",this.clothes);
  },
  updated(){
    //this.clothes=[];
  this.writecontent();
  console.log("clothes",this.clothes);
  },
  components:{
    Modal:Modal
  },
  methods:{
    showinfo(){
      this.temp=10;
      this.showModal= !this.showModal;
    },
    writecontent(){
      //this.clothes=[];
     if(this.temp<=4){
      this.content="패딩, 두꺼운 코트를 입고 목도리와 기모제품으로 추위에 대비해주세요!";

      this.ck1=true;
    }else if(this.temp<=8){
      this.content= "코트와 가죽자켓으로 추위에 대비하고 히트텍, 니트, 레깅스를 입으면 딱!!";
    
      this.ck2=true;
    }else if(this.temp<=11){
      this.content= "자켓, 트렌치코트, 야상을 입고 안에는 니트, 청바지, 스타킹을 입어주면 될 거에요!";

      this.ck3=true;
    }else if(this.temp<=16){
      this.content= "본격적으로 쌀쌀해지는 날씨에 맞춰 자켓,가디건, 야상을 챙겨입으세요!";

      this.ck4=true;
    }else if(this.temp<=19){
      this.content= "이때부터는 얇은 니트와 맨투맨 가디건과 청바지를 입으면 좋습니다.";

      this.ck5=true;
    }else if(this.temp<=22){
      this.content="얇은 가디던, 긴팔, 면바지, 청바지로 코디해서 입으면 최고!!";
    
      this.ck6=true;
    }else if(this.temp<=27){
      this.content="본격적으로 더워지니 반팔이나 얇은 셔츠와 함게 반바지나 면바지가 좋아요!";
 
      this.ck7=true;
    }else{
      this.content= "정말 덥군요,,,, 민소매 또는 반팔, 반바지, 원피스를 추천할게요!";

      this.ck8=true;
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
.clothes_img{
  position: relative;
  margin-top: 2%;
  margin-bottom: 2%;
  
  overflow-x:auto;
  white-space: nowrap;
}
.clothes_img table{
  margin:0;
  width : 100%;
  text-align: center;
}
.clothes_img  img{
  margin-top: 0px;
  margin-left: 3%;
  margin-right: 2%;
  width: 55px;
  height: 100%;
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