<template>
  <div id=banner>     
      <banner-img :image="images[this.img_idx]"></banner-img>
      <div class=leftarr style="color:gray" v-on:click="left_move"><i class="fas fa-chevron-left fa-2x"></i></div>
      <div class=rightarr style="color:gray"  v-on:click="right_move"><i class="fas fa-chevron-right fa-2x"></i></div>
  </div>
</template>



<script>
import banner_img from './banner_img.vue';
import axios from 'axios';
export default {
    props:['spotid'],
    components:{
        'banner-img':banner_img
    },
    data(){
        return {
            spotid:'',
            img_idx : 0,
            img_url:'',
            images:[ ]
        }
    },
    created:function(){
        var self=this;
      /*  setInterval(()=>{
            self.move();
        },5000);*/
        console.log("spotid,",this.spotid);
        axios.get('http://img.mintpass.kr/api/'+this.spotid,{

    }).then(response=>{
      console.log(response);
      this.images=response.data.imginfo;
      console.log("이미지:",this.images);

    })
    .catch(err=>{

    })

    },
    methods:{
        move:function(){
            this.img_idx++;
            if(this.img_idx==this.images.length)this.img_idx=0;
        },
        left_move:function(){
             this.img_idx--;
            if(this.img_idx<0)this.img_idx=this.images.length-1;

        },
        right_move:function(){
             this.img_idx++;
            if(this.img_idx==this.images.length)this.img_idx=0;

        },
        
    }
}
</script>
<style>

#banner{
    width: 100%;  
    position: relative;
}
#bannerimg img{
    width: 100%;
    height: 300px;
}
#beforearr {
    display: block;
    position: absolute;
    left: 3%;
    top: 20%;
    height: 100%;
}
#nextarr {
    display: block;
    position: absolute;
    right: 3%;
    top: 20%;
}

#banner .leftarr{
    top:50%;
     position:absolute;
}
#banner .rightarr{
    right: 0;
    top:50%;
     position:absolute;

    
}
</style>