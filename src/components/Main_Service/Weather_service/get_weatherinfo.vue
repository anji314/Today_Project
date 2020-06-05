<template>
  <div class="W_style" v-if="loading">
        <h3>오늘의 날씨</h3>
        <div class="W_box">
            <div id="W_img">
                <img v-bind:src="img_url" >
            </div>
            <div id="W_info"> 
            날씨      : {{W_state.main}}<br>
            현재 기온 : {{main.temp}} °C<br>
            체감 기온 : {{main.feels_like}} °C<br>
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
            loading:false,
            lat:0,
            lon:0,
        }
    },
    
    created:function(){
        this.lat=0;
        this.lon=0;
        this.findspot();
        this.getwheather();
        
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
        },
        findspot(){
            var prelat=0;
            var prelon=0;
             if (navigator.geolocation) { // GPS를 지원하면
                 navigator.geolocation.getCurrentPosition(
                    function(position) {
                        //console.log("위도경도",position.coords.latitude,position.coords.longitude);                   
                        prelat=position.coords.latitude
                        prelon=position.coords.longitude;
                        //console.log("위도경도 받아와",prelat,prelon);
                    }, 
                    function(error) {
                    console.error(error);
                    }, 
                    {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity
                    });
            } else {
             alert('GPS를 지원하지 않습니다');
            }
           // console.log("위도경도 받아와2",prelat,prelon);
            //this.getwheather(prelat,prelon);
        },
       
        getwheather(prelat,prelon){
            prelat=37.4857291;
            prelon=126.79271159999999;
             Axios.get('https://api.openweathermap.org/data/2.5/weather',{
            params:{lat:prelat,lon:prelon,appid:'000c3bd8aeda462393a585761b6c6d10'}
        })
        .then(response=>{     //json 해독이 필요.          
            this.weatherdata = response;
            this.main=this.weatherdata.data.main;
            this.changenum();
            this.spot=this.weatherdata.data.name;
            this.W_state=this.weatherdata.data.weather[0];
            sessionStorage.setItem("weather",this.W_state.main);
            sessionStorage.setItem("pretemp",this.main.temp);
            this.img_url='http://openweathermap.org/img/wn/'+this.W_state.icon+'@2x.png';
  
        })
        .catch(err=>{
            console.log('weather err: ',err);
             alert("날씨 정보를 받아오는 중 문제가 발생하였습니다.");
             
        })
        },
        
      
    },
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
.W_box{
    text-align: center;
}
.W_box div{
    padding:1rem;
    display: inline-block;
    padding: 3%;
}
#W_img {
    padding-top: 0%;
    padding-bottom: 0%;
    
}
#W_info{
    text-align: left;
}
</style>