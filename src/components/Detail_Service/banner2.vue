<template>
  <div id=banner2>
      <div id=bannerimg >
      <img v-bind:src="img_url">
        <div id=beforearr style="color:gray" v-on:click="beforeimg"><i class="fas fa-chevron-left fa-2x"></i></div>
      <!--<div id=bannerimg v-on:click="nextimg"></div>-->
      <div id=nextarr style="color:gray" v-on:click="nextimg"><i class="fas fa-chevron-right fa-2x"></i></div>
      </div>
  </div>
</template>
<script>
export default {
    created:function(){
        this.img_idx=1;
        this.img_url='../dist/1.png';
    },
    data(){
        return {
            img_idx : 1,
            img_url:'',
        }
    },
    methods:{
        nextimg:function(){
            this.img_idx=this.img_idx+1;
            //if(this.img_idx==3)this.img_idx=1;
            if(this.img_idx==4)this.img_idx=1;
            this.img_url="../dist/"+this.img_idx+".png";
          //  console.log(this.img_idx,this.img_url);
           
        },
        beforeimg:function(){
            this.img_idx=this.img_idx-1;
            //if(this.img_idx==3)this.img_idx=1;
            if(this.img_idx==0)this.img_idx=3;
            this.img_url="../dist/"+this.img_idx+".png";
          //  console.log(this.img_idx,this.img_url);
        }
    }
}
</script>
<style>
#banner2{
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
    top: 50%;
    height: 100%;
}
#nextarr {
    display: block;
    position: absolute;
    right: 3%;
    top: 50%;
}
</style>

