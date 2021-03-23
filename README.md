# Webweb

Frontend: Vue.js 기반 프론트엔드를 사용하여 개선된 나무위키 컨셉으로 MadeWiki를 만들어 보았습니다. 토큰 인증 방식으로 회원가입 및 로그인 방식을 구현해보았고 익명성이 보장되는 위키 특성상 게시판 조회 같은 기능은 로그인을 하지않아도 가능한대 게시판 게시 및 수정시에는 로그인이 필요한대 로그인 후의 정보는 서버에만 저장되게 하였습니다. 각 게시글에는 좋아요, 싫어요, 조회수가 있어서 실시간으로 확인할 수 있고 양옆에 사이드로 좋아요 Top5와 조회수 Top5 글들을 보여주며 들어갈 수 있게 하였습니다.

Backend : node js, express js 기반하여 backend를 작성해보았습니다. mongodb와 frontend를 이어주며 사용자가 게시물을 읽거나 올리는 등의 동작을 할 때 REST api처리를 통하여 연동되게 하였습니다.

## config file definition

    **cfg/cfg.js**

    ```javascript
    module.exports = {
      db: {
        url: 'mongodb://nembv:비밀번호@cluster0-xxx.mongodb.net:27017,cluster0-xxx.mongodb.net:27017,cluster0-xxx.mongodb.net:27017/nembv?ssl=true&replicaSet=Cluster0-xxx&authSource=admin',
        // url : "mongodb://xxx.com:27170/xxx"
        // url : 'mongodb+srv://id:pwd@cluster0-xxx.net/yyy' // 3.6이상
      },
      web: {
        // 추후 http, https, port등 
      },
    };
    ```
   
