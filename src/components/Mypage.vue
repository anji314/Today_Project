<template>
  <div id=mypage>
    <div id=backmypage v-on:click="goback"> <i class="fas fa-arrow-left"></i> BACK</div>
    <div id=mylistfirst>
      <router-link v-bind:to="'/Detail/'+userlist[0].id+'/'+userlist[0].name+'/'+userlist[0].addr" >
              <div id="firstinfo" >
                  <img v-bind:src="userlist[0].img">
                  <div id=firstname>My List</div>
              </div>
            </router-link>
    </div>
    
       <div id=mylistul >
          <div v-for="choice in userlist" :key="choice.id" id=mylistli>
            <div id=mylistmenu v-on:click="mylistmenu(choice.id)"><i class="fas fa-bars"></i></div>
            <router-link v-bind:to="'/Detail/'+choice.id+'/'+choice.name+'/'+choice.addr" >
              <div id="choiceob" >
                  <img v-bind:src="choice.img">
                  <p id=mylistname>{{choice.name}}</p>
              </div>
            </router-link>
          </div>
      </div>

      <modal v-if="menuck" @close="menuck = false">
      <h3 slot="header" id=mylistmodalhd>
        <div>선택해주세요</div>
        <div id=mylistdl @click="menuck = false"><i class="closeModalBtn fa fa-times" aria-hidden="True"></i></div>
        </h3> 
      <span slot="footer" id=mypagemodalft>
        <div id=setscore v-on:click="setscore">별점 주기</div>
        <div v-on:click="choicedl" id=dlchoice>삭제하기</div>
      </span>
      </modal>

      <modal v-if="starck" @close="starck = false">
      <h3 slot="header" id=starmodalhd>
        <div>어떠셨나요?</div>
        <div id=stardl @click="starck = false"><i class="closeModalBtn fa fa-times" aria-hidden="True"></i></div>
        </h3> 
      <span slot="footer" id=starft>
        <div id=touchstar>별을 눌러주세요</div>
        <star-rating id=setstar :star-size="30" v-model="rating" :border-width="5" border-color="#d8d8d8" :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
        <div v-on:click="putscore" id=submit> 평가하기</div>
      </span>
      </modal>

  </div> 
</template>
<script>
import axios from'axios'
import modal from './Modal.vue'
import StarRating from 'vue-star-rating'

export default {
  components:{
    'modal':modal,
    'star-rating':StarRating
  },
  data(){
    return{
      Userid:this.$route.params.id,
      userlist:'',
      menuck:false,
      dlidx:-1,
      starck:false,
      rating:3,
    }
  },
  created(){
    this.showuserlist();
  },
  methods:{
    putscore(){
      console.log(this.rating);
      axios.put('http://project.mintpass.kr:3000/rating',{
        id:this.dlidx,
        user:this.Userid,
        rating:this.rating      
      })
      .then(response=>{
        console.log(response);
        this.starck=false;
        alert('반영되었습니다.');
      })
      .catch(err=>{
        console.log(err);
      })
    },
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
    },
    mylistmenu(idx){
    this.menuck= !this.menuck;
    this.dlidx=idx;
    console.log(this.menuck,idx);
    },
    setscore(){
      this.menuck=false;
      this.starck= !this.starck;
    },
    choicedl(){
      this.Userid=this.$route.params.id;
      console.log(this.dlidx,this.Userid);
      axios.delete('http://project.mintpass.kr:3000/list',{
        data:{
        id:this.dlidx,
        userid:this.Userid
        }
    })
    .then(response=>{
      console.log(response);
      this.showuserlist();
   
      this.menuck=false;
    })
    .catch(err=>{
      console.log(err);
    })
    },
    goback:function(){
      this.$router.go(-1);
    },

  },
  
  
}
</script>
<style>
#submit{
 font-weight: bold;
}
#setstar{
  margin-left:18%;
  margin-top:3%;
  margin-bottom:3%;
}
#starft{
  text-align: center;
}
#backmypage{
  position: absolute;
  top:2%;
  left:2%;
  font-size: 1.2rem;
  font-weight: bold;
  color:rgb(255, 121, 148);
  z-index: 1;
}
#mylistmodalhd{
  position: relative;
  margin-left: 2%;
}
#mylistdl{
  position: absolute;
  right:0%;
  top:3%;
}
#mylistfirst{
   position: relative;
   padding:1%;
   margin-bottom: 2%;
}
#mylistfirst img{
   width:100%;
}
#starmodalhd{
  position: relative;
  margin-left: 2%;
}
#stardl{
  position: absolute;
  right:0%;
  top:3%;
}
#firstname{
  position: absolute;
  bottom: 0%;
  background-color: hsl(0, 0%, 0%,0.7);
  width:95%;
  color:white;
  padding-top:2%;
  padding-bottom: 2%;
  font-size: 1.1rem;
  padding-left: 3%;

}
#mylistul{
  list-style: none;
  padding:0;  
}
#mylistul div{
  display: inline-block;
}
#mylistli{
   position: relative;
display: block;
 width:48.5%;
 margin-left:1%;
 margin-bottom: 2%;
}
#choiceob{
  
  width:100%;
}
#mylistname{
  position:absolute;
  bottom: -10%;
  z-index: 1;
  background-color: hsl(0, 0%, 0%,0.7);
  width:94%;
  color:white;
  font-size: 0.8rem;
  padding:2%;
  padding-left: 4%;
  
}
#mylistmenu{
  position: absolute;
  right: 3%;
  top:3%;
  color:white;
  padding-left:2%;
  padding-right:2%;
  background-color: hsl(0, 0%, 0%,0.7);
  border-radius:0.2rem/0.2rem;
}
#choiceob img{
  width:100%;
  height: 130px;
}
#mypagemodalft div{
  display:inline-block;
  position: relative;
}
#setscore{
  padding-right: 15%;
  padding-left: 11%;
  color:blue;
  font-weight: bold;
 
}
#dlchoice{
  padding-left: 17%;
   border-left: 1px solid black;
   color:red;
   font-weight: bold;
  
}
</style>