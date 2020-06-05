<template>
  <div >
      <div id=letter v-on:click="showrd"><img  src="../../assets/button_img/letter_random.png" /></div>
      <div class="button">
      <router-link to="/list/1"><img src="../../assets/button_img/food.png" /></router-link>
       <router-link to="/list/2"><img src="../../assets/button_img/cafe.png" /></router-link>
       <router-link to="/list/3"><img src="../../assets/button_img/drink.png" /></router-link>
       <router-link to="/list/4"><img src="../../assets/button_img/outside.png" /></router-link>
       <router-link to="/list/5"><img src="../../assets/button_img/inside.png" /></router-link>
     <!--  <div v-on:click="showrd"><img src="../../assets/button_img/random.png" /></div>-->
      </div>

      <modal v-if="randomck" @close="randomck = false">
      <h3 slot="header" >오늘의 픽! <span id=dl @click="randomck = false"><i class="closeModalBtn fa fa-times" aria-hidden="True"></i></span></h3> 
      <span slot="footer">
          <router-link v-bind:to="'/Detail/'+rdlist[rdidx].id+'/'+rdlist[rdidx].name+'/'+rdlist[rdidx].addr" id=rdlink>
          <div id=randompick>
            <img v-bind:src="rdlist[rdidx].img">
            <div id=rdname>{{rdlist[rdidx].name}}</div>
            <div id=rdinfo>{{rdlist[rdidx].addr}}<br>{{rdlist[rdidx].tag}}</div>
        </div>
          </router-link>
      </span>
      </modal>
  </div>
</template>
<script>
import modal from '../Modal.vue';
import axios from 'axios';
export default {
    data(){
        return{
            randomck:false,
            w:sessionStorage.getItem("weather"),
            rdlist:'',
            rdidx:''
        }
    },
    methods:{
        showrd(){
            this.getrandomlist();
            this.randomck= !this.randomck;
        },
        getrandomlist(){
            axios.post('http://project.mintpass.kr:3000/random',{
                weather:"clear"
            })
            .then(response=>{
                this.rdlist=response.data.info;
                var n=Math.random();
                this.rdidx=Math.floor(n*this.rdlist.length);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    components:{
        'modal':modal
    }
}
</script>
<style>
.button{
    display: block;
    text-align: center;

}
#letter{
    border: 2px solid rgb(243, 215, 104);
    border-radius: 1rem/ 1rem;
    text-align:center;
    margin-top:3%;
    margin-bottom: 3%;
    
}
#letter img{
    padding-top:3%;
    padding-bottom:3%;
    width: 65%;

}
.button img{
    padding: 2%;;
    width:6rem;
}
#randompick img{
     border-radius: 1rem 1rem 0rem 0rem/ 1rem 1rem 0rem 0rem;
     width:100%;
     height: 15rem;
}
#rdname{
    font-weight: bold;
    font-size:1.2rem;
    padding-left: 3%;
  
}
#rdinfo{
    font-size: 0.9rem;
    padding-left: 3%;
 
}
#randompick{
 
    border: 2.5px solid rgb(255, 121, 148);
     border-radius: 1rem/ 1rem;
     
}
#rdlink{
    text-decoration:none;
    color:black;
}
#dl{
  margin-left: 60%;
   
}
</style>