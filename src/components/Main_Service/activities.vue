<template>
  <div >
      <div id=letter ><router-link to="/list/6"><img  src="../../assets/button_img/letter_random.png" /></router-link></div>
      <div class="button">
      <router-link to="/list/1"><img src="../../assets/button_img/food.png" /></router-link>
       <router-link to="/list/2"><img src="../../assets/button_img/cafe.png" /></router-link>
       <router-link to="/list/3"><img src="../../assets/button_img/drink.png" /></router-link>
       <router-link to="/list/4"><img src="../../assets/button_img/outside.png" /></router-link>
       <router-link to="/list/5"><img src="../../assets/button_img/inside.png" /></router-link>
       <router-link to="/list/6"><img src="../../assets/button_img/random.png" /></router-link>
      </div>
  </div>
</template>
<script>
export default {
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
</style>