<template>
  <div id=banner_slide>
        <transition-group name="fade" mode="out-in" tag="div">
        <div class=banner_img :style="setBackground" :key="image.id">
        </div>
        </transition-group>
  </div>
</template>
<script>

export default {
    props:['image'],
    computed:{
        setBackground(){
            return{backgroundImage:"url("+this.image.url+")"};
        }
    }
}
</script>
<style>
#banner_slide{

}
#banner_slide .banner_img{
    width: 100%;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
}
.fade-move{
    transition : all 1s;
}
.fade-enter-active{
    animation-name:fadeenter;
    animation-duration: 2s;
    animation-iteration-count: 1;
}
.fade-leave-active{
    animation-name:fadeleave;
    animation-duration: 2s;
    animation-iteration-count: 1;
    position:absolute;
}
@keyframes fadeenter {
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
    
}
@keyframes fadeleave {
    from{
        opacity:1;
    }
    to{
        opacity:0;
    }
    
}
</style>