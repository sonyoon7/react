const express=require('express')
const app=express()
const server=require('http').createServer(app)
const port=3001
server.listen(port,()=>{
    console.log('Chat-Server Start..')
})
app.use('/public',express.static('./public'))
app.get('/',function(req,res){
    res.redirect(302,'./public')
})
const socketio=require('socket.io')
const io=socketio.listen(server);
// 연결되었을 때
io.on('connection',(socket)=>{
    // 사용자가 데이터를 전송했을 경우
    socket.on('chat-msg',(msg)=>{
        console.log("message",msg);
        // 접속자 모든 사람에게 전송
        io.emit('chat-msg',msg);
    })
})