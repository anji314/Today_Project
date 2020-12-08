<template>
<div id=makemap>
  <div id="map"></div>
    <div v-show=false> 
     {{addr.lat}}
     {{addr.lon}}
     </div>
</div>
</template>
<script>
export default {
    props:['addr'],
    data:function(){
        return{
        }

    },
    
   mounted() {
    
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=발급키';
            document.head.appendChild(script);
        }
    },
   updated(){
        this.initMap();
    },
    methods: {
        initMap() {
            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(this.addr.lat,this.addr.lon),
              level: 3
            };

            var map2 = new kakao.maps.Map(container, options);

            var markerPosition  = new kakao.maps.LatLng(this.addr.lat,this.addr.lon); 
            var marker = new kakao.maps.Marker({
                 position: markerPosition
            });
            marker.setMap(map2);

        }
    }
}

</script>
<style>
#map {
    width: 99%;
    height: 200px;
    
    
}
#makemap{
    margin-top:4%;
    margin-bottom: 2%;
    margin-bottom: 15%;
    
    
}
</style>
