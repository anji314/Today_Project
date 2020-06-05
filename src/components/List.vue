<template>
  <div >
    
    <!--  <makeheader v-bind:propsdata="userinfo"></makeheader>-->
      <div id=listhd >
          <div id=listback v-on:click="goback"><i class="fas fa-arrow-left"></i> BACK</div>
           <div id=showtag v-on:click="modalshow">태그보기</div>

          
     </div>
      <div class=Rlist>
      <div v-show="false"> {{idx=0}}</div>
      <ul>
          <li v-for="spot in listarr" :key="spot.id">
              <div class="spotob" >
                 <div v-show="false"> {{idx++}}</div>
                 <div id=best v-show="idx<=3">강력추천</div>
                  <router-link v-bind:to="'/Detail/'+spot.id+'/'+spot.name+'/'+spot.addr" id=list>
                    <img v-bind:src="spot.img" />
                    <div id=listinfo>
                    <div id=sname>{{spot.name}}</div>
                    <div class="info">
                        {{spot.addr}}
                         <!-- {{spot.tag}}-->
                    </div>
                    
                    </div>
              </router-link>
              </div>
          </li>
      </ul>
      </div>

      <modal v-if="showck" @close="showck = false">
      <h3 slot="header" >태그<span id=deletetag @click="showck = false"><i class="closeModalBtn fa fa-times" aria-hidden="True"></i></span></h3> 
      <span slot="footer">
        태그들어갈 예정
      </span>
      </modal>
 
  </div>
</template>
<script>
import axios from 'axios';
import modal from './Modal.vue'

export default {
  data(){
    return {
    showck:false,
    idx:0,
    case:this.$route.params.id,
    listarr:{},
      
    }
  },
  components:{
      'modal':modal
  },
  methods:{
     listsort:function(){
         let w=sessionStorage.getItem("weather");

                this.listarr.sort(function(a,b){
                    return a[w]>b[w] ?-1: a[w]>b[w] ?1:0;
                })
               console.log("정렬후: ",this.listarr);
     },
     goback:function(){
      this.$router.go(-1);
    },
    ckidx(idx){
        console.log(idx);
        if(idx<=3)return true;
        else return false;

    },
    modalshow(){
        this.showck= !this.showck;
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
               this.listsort();
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
                this.listsort();
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
                this.listsort();
            })
            .catch((err)=>{
                console.log(err);
            })

    }else if(this.case==4){//야외활동
    axios.post('http://project.mintpass.kr:3000/tag',{
                tag:"야외활동"
            })
            .then((response)=>{
                console.log("서버 연결태그 : ",response);
                this.listarr=response.data.info;
                this.listsort();
            })
            .catch((err)=>{
                console.log(err);
            })

    }else if(this.case==5){//실내활동
    axios.post('http://project.mintpass.kr:3000/tag',{
                tag:"실내활동"
            })
            .then((response)=>{
                console.log("서버 연결 태그: ",response);
                this.listarr=response.data.info;
                this.listsort();
            })
            .catch((err)=>{
                console.log(err);
            })

    }else if(this.case==6){//아무거나
    let ww=sessionStorage.getItem("weather");
    axios.post('http://project.mintpass.kr:3000/random',{
               weather:ww
            })
            .then((response)=>{
                console.log("아무거나서버 연결 태그: ",response);
                this.listarr=response.data.info;
                this.listsort();
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
  border-radius: 0.4rem/0.4rem;
    box-shadow: 3px 3px 2px gray;

}     

.info{
    font-size: 0.9rem;
}

.spotob img{
    border-radius: 0.4rem/0.4rem;
   width:99.8%;
   height: 15rem;
}
.spotob{
    width:100%;
    position: relative;
}
#listinfo{
    position:absolute;
    width:97%;
    background-color:rgb(73,159,120,0.7);
    bottom: 0%;
    padding-top:3%;
    padding-bottom:1% ;
    padding-left: 6%;
    border-radius: 0.4rem/0.4rem;
    color: white;
}
#list{
    text-decoration:none;
}

#sname{
    font-weight: bold;
    font-size:1.15rem;
    margin-bottom: 0.4%;
}
#best{
    position: absolute;
    bottom: 21%;
    left: 2%;
    padding: 0.3%;
    z-index:1;
    font-size: 0.9rem;
    border: 2px solid rgb(255, 121, 148);
    color: rgb(255, 121, 148);
     border-radius: 0.4rem/0.4rem;
    background-color:white;
}
#listhd{
    position: relative;
    width: 100%;
    height: 50px;
    margin:0%;
}

#listback{
    position: absolute;
    font-weight: bold;
    left: 3%;
    top:46%;
    font-size: 1rem;
    color:rgb(255, 121, 148);
}
#sortinfo{
    position: absolute;
    right: 5%;
    top:44%;
    font-size: 1.2rem;
    color:rgb(255, 121, 148);
}
#showtag{
    right: 5%;
    top:50%;
    position: absolute;
    color:rgb(255, 121, 148);
}
#deletetag{
    margin-right:50%;
}
</style>