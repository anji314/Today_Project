<template>
  <div >
      <li id="logout" v-on:click=logoutwithkakao>Logout</li>
  </div>
</template>
<script>
export default {
    name:'kakaologout',
    mounted: function () {
    const scriptId = 'kakao_logout'
    const isExist = !!document.getElementById(scriptId)
    if (!isExist) {
      const script = document.createElement('script')
      script.src = this.scriptUrl
      script.onload = () => this.initiate(this)
      script.onerror = error => this.handleError(error)
      script.id = scriptId
      document.body.appendChild(script)
    } else this.initiate(this)
  },
    data(){
      return{
       initiate: (comp) => {
        Kakao.init('발급키');
      },
      logoutwithkakao : ()=>{
        Kakao.Auth.logout(function() {
          console.log(Kakao.Auth.getAccessToken());
      });
      },
      handleError : (err) => {
        console.warn(`This component threw an error (in '${err.target.outerHTML}'):`, this)
      },
      }
    }
  
        
    
}
</script>
<style>
</style>
