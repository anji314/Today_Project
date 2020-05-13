# today

> 오늘어때 프로젝트 


### 로그인
> 카카오 REST API 사용

#### 이슈
> 사용자 토큰을 받아와 사용자 정보를 요청하는 get부분 요청에서 cors정책이슈가 생김.
> No 'Access-Control-Allow-Origin' header is present on the requested resource 이슈
> cors 헤더는 응답하는쪽, api를 제공하는 서버에서 response 헤더에 설정하는 것.
> cors는 브라우저에서 처리하는데 아마 서버측에서 설정이 안되어있어서 생기는 문제라고 파악.
> 카카오 서버를 고칠순 없으니 브라우저 측에서 동일 출처간 접근 허용 옵션이나 
> 크롬의 플러그인을 통해서 처리해야한다는 의견을 보아 시도하였으나 

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

---

###날씨 API 이용

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
