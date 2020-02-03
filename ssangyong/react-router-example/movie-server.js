const express = require('express');
const app = express(); // 세팅 들어가는 방법

//port 지정 0~1024는 이미 사용중
const port = 3355;
app.listen(port, () => {
    console.log(' Server Start!!! ', 'http://localhost:3355')
});
//크로스도메인 사용하기 => webpack 사용하면 동일한 포트 사용 가능 
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
/* 
    response.send() 일반 문자열
    response.json() react, vue
*/
const request = require('request');
app.get('/movie_info', function (req, res, next) {
    var no = req.query.no;
    var site = '';
    if (no == 1) {
        site = 'searchMainDailyBoxOffice.do';//일일 박스오피스
    } else if (no == 2) {
        site = 'searchMainRealTicket.do';//실시간 예매
    } else if (no == 3) {
        site = 'searchMainDailySeatTicket.do'; //좌석점유율
    } else if (no == 4) {
        site = 'searchMainOnlineDailyBoxOffice.do'; //
    }
    var url = 'http://www.kobis.or.kr/kobis/business/main/' + site;
    request({ url: url }, (err, req, json) => {
        var s = eval(json)
        console.log(s);
        res.json(s);

    })
});