<template>
  <div class="W_style" v-if="loading">
        <h3>오늘의 날씨</h3>
        <div class="W_box">
            <div class="W_img">
                <img v-bind:src="img_url" >
            </div>
            <div class="W_info"> 
            날씨      : {{W_state.main}}<br>
            현재 기온 : {{main.temp}} °C<br>
            체감 기온 : {{main.feels_like}} °C<br>
            최고/최저 : {{main.temp_max}} / {{main.temp_min}} °C<br>
            습도      : {{main.humidity}}<br>
            </div>
        </div>

  </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            weatherdata:null,
            W_state:null,
            main:null,
            spot:'',
            img_url:'',
            loading:false
        }


    },
    methods:{
        changenum:function(){
            this.main.temp*=1;
            this.main.temp=Math.floor(this.main.temp-=273);

            this.main.feels_like*=1;
            this.main.feels_like=Math.floor(this.main.feels_like-=273);

            this.main.temp_max*=1;
            this.main.temp_max=Math.floor(this.main.temp_max-=273);

            this.main.temp_min*=1;
            this.main.temp_min=Math.floor(this.main.temp_min-=273);
            this.loading=true;

        }

    },
    created:function(){
        Axios.get('https://api.openweathermap.org/data/2.5/weather',{
            params:{id:'1835841',appid:'000c3bd8aeda462393a585761b6c6d10'}
        })
        .then(response=>{        //json 해독이 필요.
            console.log('weather:',response);
            this.weatherdata = response;
            this.main=this.weatherdata.data.main;
            this.changenum();
            this.spot=this.weatherdata.data.name;
            this.W_state=this.weatherdata.data.weather[0];
     

            this.img_url='http://openweathermap.org/img/wn/'+this.W_state.icon+'@2x.png';
            console.log("url : ",this.img_url);
            //console.log(this.pre_weather);

        })
        .catch(err=>{
            console.log('weather err: ',err);
             alert("날씨 정보를 받아오는 중 문제가 발생하였습니다.");
             
        })
        




    }
}
</script>
<style>
.W_style{
     border: 2px solid rgb(255, 121, 148);
     border-radius: 1rem/ 1rem;
     max-width: 100%;
     height: auto;
}
.W_style>h3{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0px;
}
.W_box div{
    padding:1rem;
    display: inline-block;
    padding: 3%;
}
.W_img >img{
    width: 7rem;
}
</style>