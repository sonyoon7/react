var Client = require('mongodb').MongoClient;

const express = require('express');
const app = express();
//서버 가동
const port = 3355;
app.listen(port, () => {
    console.log("Start server ...", "http://localhost:3355");
})
// app.get('/', (req, res) => {

// });
app.get('/released', (req, res) => {
    var page = req.query.page;
    var rowSize = 12;
    var skip = (page * rowSize) - rowSize; //0-11,12-23, 24-35 씩 버리고 감
    var url = 'mongodb://211.238.142.181:27017';
    Client.connect(url, (err, conn) => {
        var db = conn.db('mydb');//데이터 베이스 
        //연결 
        db.collection('boxoffice_m')
            .find({})
            .skip(skip)
            .limit(rowSize)
            .toArray((err, docs) => {//몽고디비는 배열이 아니라 배열 형태로 만들어 주어야 함
                console.log(docs);
                //클라이 언트로 전송 res(요청한 사람의 ip)=> socket
                res.json(docs);
                conn.close();
            });//collection이 테이블 역할 함 skip만큼 버리고 rowSize만큼가져와라,
    });

});
app.get('/scheduled', (req, res) => {

});
app.get('/news', (req, res) => {

});
app.get('/boxoffice', (req, res) => {

});