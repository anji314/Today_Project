<template>
  <div >
    <div class="clothes_img">
      <div class=tl ><h3>추천의류</h3></div>
      <table>
      <img src="../../../assets/11.png" />
      <img src="../../../assets/22.png" />
      <img src="../../../assets/33.png" />
      <img src="../../../assets/11.png" />
      </table>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.clothes_img{
  margin-top: 4%;
  margin-bottom: 4%;
  border: 2.5px solid rgb(198, 219, 218);
     border-radius: 1rem/ 1rem;
  overflow-x:auto;
  white-space: nowrap;
}
.clothes_img table{
  margin:0;
  width : auto;
}
.clothes_img  img{
  
  margin-top: 0px;
  margin-left: 3%;
  margin-right: 2%;
  width: 70px;
  height: 100%;
}
.tl{
  text-align: center;
}
</style>