import React,{Component} from 'react'
import $ from 'jquery'
import io from 'socket.io-client'
const socket=io.connect('http://localhost:3001')
class ChatMain extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            logs:[] // 채팅문자열
        }
    }
    componentDidMount() {
        socket.on('chat-msg',(obj)=>{
             const log2=this.state.logs
             log2.push(obj);
             this.setState({logs:log2})
        })
        $('div#chat').toggleClass('active');
        var $win = $(window);
        var top = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.

        /*사용자 설정 값 시작*/
        var speed          = 1000;     // 따라다닐 속도 : "slow", "normal", or "fast" or numeric(단위:msec)
        var easing         = 'linear'; // 따라다니는 방법 기본 두가지 linear, swing
        var $layer         = $('div#chat_container'); // 레이어 셀렉팅
        var layerTopOffset = 0;   // 레이어 높이 상한선, 단위:px
        $layer.css('position', 'absolute');
        /*사용자 설정 값 끝*/

        // 스크롤 바를 내린 상태에서 리프레시 했을 경우를 위해
        if (top > 0 )
            $win.scrollTop(layerTopOffset+top);
        else
            $win.scrollTop(0);

        //스크롤이벤트가 발생하면
        $(window).scroll(function(){

            var yPosition = $win.scrollTop()+300;
            if (yPosition < 0)
            {
                yPosition = $win.scrollTop()+300;
            }
            $layer.animate({"top":yPosition }, {duration:speed, easing:easing, queue:false});
        });
    }

    render() {
        const html=this.state.logs.map((m)=>

                   <div className="message right">
                       <div className="message-text">{m.message}</div>
                   </div>

        )

        return (
            <div id="chat_container">
                <div id="chat" className='active'>
                    <header><h1>Chat</h1></header>
                    <section className="content">
                        <div className="message_content">
                            {html}
                        </div>
                    </section>
                    <ChatForm/>
                </div>

            </div>
        )
    }
}
class ChatForm extends Component{
     constructor(props)
     {
         super(props);
         this.state={
             message:''
         }
     }
     messageChange(e)
     {
         this.setState({message:e.target.value})
     }
     // 전송
     send(e)
     {
         // 전송 => emit() 받는값 : on
         // socket.emit(전송할 데이터)  socket.on(받는 데이터)
         if(e.key=='Enter')
         {
             e.preventDefault();
             // 데이터 전송
             socket.emit('chat-msg',{
                 message:this.state.message
             })
             this.setState({message:''});
         }
     }
     render()
     {
         return (
             <form action="">
                 <input id="input_chat" type="text"
                        onChange={this.messageChange.bind(this)}
                        onKeyPress={this.send.bind(this)}
                 />
             </form>
         )
     }
}
export default ChatMain;