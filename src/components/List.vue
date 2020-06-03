<template>
  <div >
    <!--  <makeheader v-bind:propsdata="userinfo"></makeheader>-->
      <div id=listhd >
          <div id=listback v-on:click="goback"><i class="fas fa-arrow-left"></i> BACK</div>

          <div id=sortinfo ><i class="fas fa-book-open"></i></div>
     </div>
      <div class=Rlist>
      <ul>
          <li v-for="spot in listarr">
              <div class="spotob" v-on:click="infodetail" >
                  <router-link v-bind:to="'/Detail/'+spot.id+'/'+spot.name+'/'+spot.addr" id=list>
                    <img v-bind:src="spot.img" />
                    <div id=listinfo>
                    <div id=sname>{{spot.name}}<br>
                    <div class="info">
                        {{spot.addr}}<br>
                          {{spot.tag}}
                    </div>
                    </div>
                    </div>
              </router-link>
              </div>
          </li>
      </ul>
      </div>
   
     
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
      showck:false,
     
      case:this.$route.params.id,
      listarr:{},
      
    }
  },
  components:{
 
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
                tag:"야외"
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
                tag:"실내"
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
   height: 15rem;
}
#listinfo{
    padding-left: 3%;
    background-color:white;
     border-radius: 0rem 0rem 1rem 1rem/ 0rem 0rem 1rem 1rem;
    color:black;
}
#list{
    text-decoration:none;
}
#sname{
    font-weight: bold;
    font-size:1.1rem;
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
</style>