<template>
  <div id=clothes_imgs>
        <table>
        <!--<img src="@/assets/clothes_img/4/1.png"/>-->
       <!-- <div v-for="ur in im[0]" class=clothes_img  :key="ur.url" >
            <img v-bind:src="im[0]" />
        </div>-->
        <div class=clothes_img>
         <img src="/images/27-23/1.png" /></div>
        <div class=clothes_img> <img src="/images/27-23/2.png" /></div>
        <div class=clothes_img> <img src="/images/27-23/3.png" /></div>
        <div class=clothes_img> <img src="/images/27-23/4.png" />
        </div>
      </table>
        
  </div>
</template>
<script>

export default {
    props:['image'],
    
}
</script>
<style >
#clothes_imgs{
  position: relative;
  margin-top: 2%;
  margin-bottom: 2%;
  overflow-x:auto;
  white-space: nowrap;
}
#clothes_imgs table{
  margin:0;
  width : 100%;
  text-align: center;
}
#clothes_imgs div{
  display: inline-block;
  margin:0;
  margin-left: 5%;
   margin-right: 5%;
  text-align: center;
}
#clothes_imgs  img{
  margin-top: 0px;
  margin-left: 3%;
  margin-right: 2%;
  width: 55px;
  height: 100%;
}
</style>