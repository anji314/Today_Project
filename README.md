# today

> 오늘어때 프로젝트 
> 날씨 데이터를 기반으로 데이트 장소를 추천해주는 모바일 웹


### 로그인
> 카카오 REST API 사용

#### 이슈
> 사용자 토큰을 받아와 사용자 정보를 요청하는 get부분 요청에서 cors정책이슈가 생김.
> No 'Access-Control-Allow-Origin' header is present on the requested resource 이슈
> cors 헤더는 응답하는쪽, api를 제공하는 서버에서 response 헤더에 설정하는 것.
> cors는 브라우저에서 처리하는데 아마 서버측에서 설정이 안되어있어서 생기는 문제라고 파악.
> 카카오 서버를 고칠순 없으니 브라우저 측에서 동일 출처간 접근 허용 옵션이나 
> 크롬의 플러그인을 통해서 처리해야한다는 의견을 보아 시도하였으나 해결 되지 않음.ㅜㅜ       

... 이슈 관련 내용 블로그 포스팅 => [이슈 사항 자세히](https://footprint-of-nawin.tistory.com/36?category=875736)


#### 해결 시도   
1. post header에  'Access-Control-Allow-Origin' 내용을 추가. => 해결 되지 않음.
2. javascript로 개발을 시도 => 로그인을 위한 새로운 창이 열였을 때, blank 화면만 뜸.
3. 플러그인 설치 => 해결되지 않음.
4. jsonp을 이용해 편법으로라도 동일출처원칙을 피해보고자함 => jsonp은 헤더를 추가할 수 없다.
5. 크롬의 보안기능을 내리는 속성을 추가. => 보안에 취약하지만 개발을 우선 해야하므로 이 방법으로 진행.

#### 결론
> 크롬의 보안기능을 내리고 사용하는것으로 우선 개발하기로 하였다.
> 5일 동안 정말 열심히 고쳐보려고 노력했으나 서버쪽에서 해결하는 것이 가장 좋고, 불가피하다면 우회하는것을 추천한다고 하지만... 내경우 axios에서는 정말 해결이 되지 않아서 개발 시점에서만 cors를 피하는 크롬속성을 추가해 보안을 끄는 방법으로 진행하였다.    
> 현재 개발기간때문에 이렇게 넘어 가지만 진행이 완료되면 다시 붙잡고 해결해 보고 싶다.         


... 자세한 기록은 블로그에 => [해결과정 자세한 내용](https://footprint-of-nawin.tistory.com/37)



---

### 날씨 API 이용
> 기존에 사용하려던 오픈 API sk 날씨데이터 서비스가 종료가 되어 불가피하게 API를 바꾸게 되었다.    
> 새로 찾은 API => [프로젝트에 사용한 날씨 API](https://openweathermap.org/current)        
> 날씨정보와 그림까지 제공해 주기 때문에 사용하기 용이했다.         
> Republic of Korea의 ID값인 1835841과 회원가입해서 발급받은 개인키를 이용해 정보를 가져올 수 있다.      
> 지역 이름으로도 가져올 수 있다.       
#### 날씨 정보 가져오기 
```
GET  api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
```
#### 이미지 가져오기     
```
<div class="W_img">
                <img v-bind:src="img_url" >
</div>

 this.img_url='http://openweathermap.org/img/wn/'+this.W_state.icon+'@2x.png';
 this.W_state.icon : get으로 가져온 데이터에서 아이콘 정보(weather.icon from response)를 가져와야한다.
```
#### API Response 예시
```
{"coord": { "lon": 139,"lat": 35},
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 281.52,
    "feels_like": 278.99,
    "temp_min": 280.15,
    "temp_max": 283.71,
    "pressure": 1016,
    "humidity": 93
  },
  "wind": {
    "speed": 0.47,
    "deg": 107.538
  },
  "clouds": {
    "all": 2
  },
  "dt": 1560350192,
  "sys": {
    "type": 3,
    "id": 2019346,
    "message": 0.0065,
    "country": "JP",
    "sunrise": 1560281377,
    "sunset": 1560333478
  },
  "timezone": 32400,
  "id": 1851632,
  "name": "Shuzenji",
  "cod": 200
}
```
> API를 이용한 프로젝트 결과 블로그에 기록 => [실행 결과](https://footprint-of-nawin.tistory.com/39)



### 상세 페이지 이미지 슬라이드 구현
=> 과정과 자세한 내용은 블로그에 기록 =>[이미지 슬라이드 구현](https://footprint-of-nawin.tistory.com/41?category=875736)



### KAKAO MAP API 사용
> 상세페이지에 들어갈 장소의 위치를 KAKAO MAP API를 사용하여 표시 하였다.
=> [블로그 기록](https://footprint-of-nawin.tistory.com/44)
#### 진행하면서 발생했던 이슈 
> vue에서 인스턴스 사이클의 순서에 따른 부모 인스턴스에서 받은 위치의 위도,경도가 화면에 표시가 안되는 문제가 발생하였다.
> 부모로 부터  props 데이터(위도,경도)를 받아 화면에 표시해야하는데 받은 데이터를 바탕으로 표시되는것이아니라 undefine의 상태로 표시하려고 하니 
> map이 표시가 되지 않았다.
#### 해결
> 화면에 표시되는 mounted가 실행될때 그 순간의 props 데이터는 undefine 상태이다. 따라서 후에 props데이터를 받아 업데이트가 된다면 
> 업데이트된 데이터는 수정이 일어났으므로 update가 실행된다. 이 부분에 맵을 그리는 함수를 다시 실행 시키면 map이 정상적으로 화면에 출력된다.        



### RANDOM SERVICE 구현
> 카테고리 6개중 랜덤으로 날씨에 맞는 장소들 중 하나를 추천해주는 기능이다. 
> api를 통해 해당 날씨에서 level3이상의 장소들을 리스트로 받아와 그중 modal을 통해 새창을 만들어 하나를 보여준다.
> 랜덤 pick 이기때문에 버튼을 누를때마다 선택되는 장소들은 달라진다.

### 리스트 정렬 알고리즘
> 각 리스트의 객체데이터에 날씨(9개)별로 level을 가지고 있다. 
> 해당 날씨에 맞는 level을 토대로 정렬하여 보여준다.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
