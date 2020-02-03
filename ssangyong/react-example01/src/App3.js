import React, { Component } from 'react';
import $ from 'jquery'

/* 기능이 하나면 함수형 기능이 여러개라면 클래스 */
/* 
    props 는 불변함 
        :강제로 할 수는 있지만 지양해야 함 
    class Apps{
        public Apps(String name, int age, String addr){
            
        }
    } 
*/
class App3 extends Component {
    //구동할 떄 자동 호출 되는 함수들이 있음 render,willMount 등등 
    constructor(props) {
        super(props);// Component의 생성자를 먼저 호출 


        console.log("constructor Call....")
    }
    componentWillMount() {
        console.log("componentWIllMount() Call")
    }
    render() {
        console.log("render() call")
        /* 
            const html = this.props.music.map((m) => ());
            const html = this.props.music.map((m) => {return()};


            [{rank:1,...},{rank:...},{}]
            map 은 블럭 하나하나씩 loop를 돌려줌 =>foreach로 변경 
            const html = this.props.music.map((function(m){return();});

        */
        const html = this.props.music.map((m) => (
            <tr >
                <td>{m.rank}</td>
                <td><img src={m.poster} width={"30"} height={"30"} /></td>
                <td>{m.title}</td>
                <td>{m.singer}</td>
            </tr>
        ))

        // return 안에서 삼항연산 뺴고 다른 조건문을 들어갈 수 없다. 순수하게 HTML로 들어갈 수 있도록 
        // 보통 서버에서 제어다 하고 뿌려주기만 하는 것이 이상적 
        // 화면 UI 라이브러리

        /* 
            MVC
            ================
            Model
            View =============React :뿌리기 
            Controller
            ================
        */
        return (
            <div>
                {/*   이름:{this.props.name}<br />
                나이:{this.props.age}<br />
                주소:{this.props.addr}<br /> */}

                {/* 테이블 쓰려면, thead tbody 다 써주어함 */}
                <table className={"table"}>
                    <tbody>
                        <input type={"text"} id={"keyword"} size={"20"} className={"input-sm"} />
                    </tbody>
                </table>
                <table className={"table table-hover"} id={"user-table"}>
                    <thead>
                        <tr className={"danger"}>
                            <th>순위</th>
                            <th></th>
                            <th>제목</th>
                            <th>가수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {html}
                    </tbody>
                </table>
            </div>
        );
    }

    componentDidMount() {
        //jquery나 ajax 등등 출력이후 제어
        console.log("componentDidMount() call")
        $('#keyword').keyup(function () {
            var k = $(this).val();
            $('#user-table>tbody>tr').hide();
            // alert(k);
            var temp = $('#user-table>tbody>tr>td:nth-child(4n+3):contains("' + k + '")');
            console.log($(temp).parent())
            $(temp).parent().show();
        });


    }
}


export default App3;