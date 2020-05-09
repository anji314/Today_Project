# today

> 오늘어때 프로젝트 


###로그인
> 카카오 REST API 사용

> 이슈
>> 사용자 토큰을 받아와 사용자 정보를 요청하는 get부분 요청에서 cors정책이슈가 생김.
>> No 'Access-Control-Allow-Origin' header is present on the requested resource 이슈
>> cors 헤더는 응답하는쪽, api를 제공하는 서버에서 response 헤더에 설정하는 것.
>> cors는 브라우저에서 처리하는데 아마 서버측에서 설정이 안되어있어서 생기는 문제라고 파악.
>> 카카오 서버를 고칠순 없으니 브라우저 측에서 동일 출처간 접근 허용 옵션이나 
>> 크롬의 플러그인을 통해서 처리해야한다는 의견을 보아 시도하였으나 

> 해결 시도
>> 1.
>> 2.
>> 3.

> 결론
>> 크롬의 보안기능을 내리고 사용하는것으로 우선 개발하기로 하였다.


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
