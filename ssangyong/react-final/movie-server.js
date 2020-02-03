// 몽고디비 라이브러리
const Client=require('mongodb').MongoClient
// 서버 생성 (express)
const express=require('express')
const app=express()
// 서버 구동 => port (0~65535) => 0~1023사용중 / 4000,8080
/*
    var a=10
    var a=20
    지역변수 => 범위(사용) => let
 */
const port=3355
/*
   app.listen(port,function(){
    console.log("Server Start~~","http://localhost:3355")
   })
 */
// 크로스 도메인
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.listen(port,()=>{
    console.log("Server Start~~","http://localhost:3355")
})



// 현재 상영 영화 출력 => 상세보기
//  /movie_release?page=1
app.get('/movie_release',(req,res) =>{
    var page=req.query.page;
    var rowSize=12;
    var skip=(rowSize*page)-rowSize;
    var url='mongodb://211.238.142.181:27017';
    // 연결
    Client.connect(url,function(error,client){
        // 1. database => mydb
        var db=client.db('mydb');
        // 2. table => 요청 => find , findOne
        // find({}) => select * from movie
        db.collection('movie').find({}).skip(skip).limit(rowSize).toArray(function (err,docs) {
            // docs => [{},{},{}...]
            res.json(docs);
            client.close();
        })
    })
})
app.get('/movie_schedule',(req,res) =>{
    var page=req.query.page;
    var rowSize=12;
    var skip=(rowSize*page)-rowSize;
    var url='mongodb://211.238.142.181:27017';
    // 연결
    Client.connect(url,function(error,client){
        // 1. database => mydb
        var db=client.db('mydb');
        // 2. table => 요청 => find , findOne
        // find({}) => select * from movie
        db.collection('movie2').find({}).skip(skip).limit(rowSize).toArray(function (err,docs) {
            // docs => [{},{},{}...]
            res.json(docs);
            client.close();
        })
    })
})
app.get('/movie_detail',function (req,res) {
    var mno=req.query.mno;

    var url='mongodb://211.238.142.181:27017';
    // 연결
    Client.connect(url,function(error,client){
        // 1. database => mydb
        var db=client.db('mydb');
        // 2. table => 요청 => find , findOne
        // find({}) => select * from movie
        db.collection('movie2').find({mno:Number(mno)}).toArray(function (err,docs) {
            // docs => [{},{},{}...]
            res.json(docs[0]);
            console.log(docs[0]);
            client.close();
        })
    })
})
// 영화 찾기 => SearchBar , Chat => Component 개발
app.get('/movie_find',(req,res) =>{
    var url='mongodb://211.238.142.181:27017';
    // 연결
    Client.connect(url,function(error,client){
        // 1. database => mydb
        var db=client.db('mydb');
        // 2. table => 요청 => find , findOne
        // find({}) => select * from movie
        db.collection('movie').find({}).toArray(function (err,docs) {
            // docs => [{},{},{}...]
            res.json(docs);
            client.close();
        })
    })
})

app.get('/movie_boxoffice',(req,res) =>{
    var no=req.query.no;

    var url='mongodb://211.238.142.181:27017';
    // 연결
    Client.connect(url,function(error,client){
        // 1. database => mydb
        var db=client.db('mydb');
        // 2. table => 요청 => find , findOne
        // find({}) => select * from movie
        var dname='';
        if(no==1)
            dname='movie_w';
        else if(no==2)
            dname='movie_m';
        else if(no==3)
            dname='movie_y';
        db.collection(dname).find({}).toArray(function (err,docs) {
            // docs => [{},{},{}...]
            res.json(docs);
            client.close();
        })
    })
})
