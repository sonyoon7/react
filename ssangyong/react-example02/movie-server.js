//mongodb 설정

var Client = require('mongodb').MongoClient; //라이브러리 안에다가 MOngoClient 가져오는 것 
/* 
    Mong0Client mc=new MongoClient()

    import => require 

    리액트에서는 XML사용 불가능 함 
    XML을 JSON으로 바꿔주는 라이브러리 필요함  xml2js
*/
//xml2js

const xml2js = require('xml2js');
//express 설정

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

app.get('/movie', function (request, response) {
    //mongodb에서 데이터 읽기 
    var page = request.query.page;//getParameter("page")  movie?page=1 일치해야함 
    var rowSize = 8;
    var skip = (rowSize * page) - rowSize; //8개씩만 가져옴 0, 8, 16....
    /* 
        0~7번 까지 1page;
        8~15 까지 2 page;
    */
    var url = 'mongodb://211.238.142.181:27017'
    Client.connect(url, (err, client) => {//연결
        var db = client.db('mydb'); //데이터베이스 이름 
        db.collection('movie').find({}).skip(skip).limit(rowSize).toArray((err, docs) => {
            response.json(docs);//배열을 json으로 날려줌
            client.close();
        });//테이블 이름  배열 단위로 전부 가져옴 docs가 배열로 가져와줌
    });
})


// app.get('/movie', (request, response) => {
//     response.send('Hello Node!!!')
// });
var request = require("request");
app.get('/news', (req, res) => {
    var fd = encodeURIComponent(req.query.fd);  //넘어오는 파라미터
    // console.log("fd=" + fd) //fd=%EC%98%81%ED%99%94
    var url = "http://newssearch.naver.com/search.naver?where=rss&query=" + fd;
    /* 
        서버=> 전송값
         1) axios
         2) fetch
         3) request
    */
    var parser = new xml2js.Parser({}); //파서기
    request({ url: url }, (err, req, xml) => {
        // console.log(xml)
        parser.parseString(xml, (err, pJson) => {
            //xml을 파서해서 json으로 바꿔줌
            // console.log(pJson.rss.channel[0].item)
            res.json(pJson.rss.channel[0].item);
        })
    })
})
