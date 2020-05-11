<template>
  <div class="W_style">
        <h3>오늘의 날씨</h3>
        <div class="W_info">
            <div>
                <img v-bind:src="img_url" >
            </div>
            <div>
            날씨      : {{W_state.main}}<br>
            현재 기온 : {{main.temp}}<br>
            체감 기온 : {{main.feels_like}}<br>
            최저 기온 : {{main.temp_min}}<br>
            최고 기온 : {{main.temp_max}}<br>
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
            img_url:''
        }


    },
    created:function(){
        Axios.get('https://api.openweathermap.org/data/2.5/weather',{
            params:{id:'1835841',appid:'000c3bd8aeda462393a585761b6c6d10'}
        })
        .then(response=>{        //json 해독이 필요.
            console.log('weather:',response);
            this.weatherdata = response;
            console.log('weatherdata : ',this.weatherdata);
            this.main=this.weatherdata.data.main;
            console.log("main : ",this.main);
            this.spot=this.weatherdata.data.name;
            console.log('지역 : ',this.spot);
            this.W_state=this.weatherdata.data.weather[0];
            console.log('날씨 : ',this.W_state);

            this.img_url='http://openweathermap.org/img/wn/'+this.W_state.icon+'@2x.png';
            console.log("url : ",this.img_url);
            //console.log(this.pre_weather);

        })
        .catch(err=>{
            console.log('weather err: ',err);
        })
        




    }
}
</script>
<style>
.W_style{
     border: 1px solid rgba(0,0,0,0.2);
}
.W_info div{
    padding:1rem;
    display: inline-block;
}
</style>