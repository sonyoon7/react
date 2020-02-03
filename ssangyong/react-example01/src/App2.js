import React, { Component } from 'react'
// import React from 'react'
// class App2 extends React.Component
// 리액트 라이브러리를 가지고 옴
/* 
    리액트는 기존 돔을 메모리에 띄우고 가상 virtualDom을 통해 변경된 사항만 렌더 시켜줌
    가상돔에서 변경후 실제 돔에 적용: 깜빡거리는 효과를 없앨 수 있음 기존엔 변경마다 다 지우고 새로 만들어 줌... 시간 오래걸림 
    단, 단점은 부모계층을 거쳐서 데이터를 계속 받아와야 함 
    이러한 단점을 보안 하기 위해 리덕스가 나옴 : 데이터를 모아두고 직접 가져옴 

    리액트란 데이터를 관리하는 화면 UI다 라고 정의하면 편함 

    엔터를 칠때마다 노드개수사 늘어남 => build해줌

    VIEW는 ANGULa.js와 비슷. 전체를 만들 떈 VIEW가 조금 더 편하고 
    필요한 부분들은 Component 로 만들어서 React로 뿌려주는게 좋을 듯 
    ex) 금융권에서 계속해서 통계를 새로 그리는데 그런곳에 적절 

    리액트 호출 방법 
    new App2() => <App2/>
    =App2
    1) constructor()         : 생성자 호출 =>메모리에 저장
    2) componentWillMount    : render()전에 호출
    3) render()              : XML=>HTML 변환(파싱)
    4) componentDidMount     : 완료 (window.onload)
    ======================================================== 컴포넌트 실행

    HTML 에 inneerHTML 수행 
    <div id="root"></div>

    사용법 
    JSX => javascript+XML => XML을 번역 (파싱)

    1) 최상위 루트가 필요하다(계층구조)
        <div>aaa</div>
        <div> bbb</div> ====> error => DOM

        <App2 name="홍길동"/> function disp(name)=> disp("홍길동")


 */
class App2 extends Component {

    // 속성값 받기, 변수선언, 이벤트 등록
    constructor(props) {
        super(props); // 속성값 읽기
    }

    //외부 서버에서 들어오는 값은 이쪽으로 들어오게 함 
    componentWillMount() {

    }
    // 받은 값을 출력=> HTML코딩 되어야 함 => 실제 HTML 에서 반영되어 출력
    render() {
        // JSX 문법  반드시 return 함수가 필요함 이 안에 JSx 문법 넣어줌
        /* 
            1) 전체를 감싸는 태그 : 최상위 태그 
            2) 태그는 소문자로! (대문자 소문자를 구분함)
                => 사용자 정의 태그는 대문자로 시작함 (App2)
            3) 여는 태그 닫는 태그가 동일 대칭을 맡춰주어야 함 
                <a><b><c></b></c></a> => 순서오류
            4) 속성값
                <a href=""> => ""을 사용한다  : 편집기에 따라 오류를 바로바로 잡아줌
            5) 외부 css =>  <a class="">  => <a className="">  className 으로 속성 사용해야 css 적용가능
                5-1) 내부 css => <a style={{font-size:"10px"}}>   => <a style={{fontSize="10px"}}> Camel 표기법 사용 
            6) 데이터가 많을 떄 
                ============================== loop (for문)=> map() 
            7) 람다식 (화살표 함수)
                function display(){
                    return
                }

                display ()=>{}

                map(function(){return ""}) => map(()=>{})
        */
        return (//가로는 return 바로 옆에 달아야 한다
            //태그명, 속성(클래스명..), 자손, 
            /*             <ol>
                            <li>홍길동</li>
                            <li>심청이</li>
                            <li>홍굴동</li>
                            <li>홍박동</li>
                        </ol>
             */

            //이렇게 변환됨 JSX는 가독성이 편하지만 변환을 시켜야 하므로 조금 더 느릴 수 있다
            // React.createElement("ol", null, React.createElement("li", null, "홍길동"), React.createElement("li", null, "심청이"), React.createElement("li", null, "심청이"))
            <div> {/* 최상위 태그 root가 있어야 함 아니면 오류뜸  */}
                <ol>
                    <li>홍길동</li>
                    <li>심청이</li>
                    <li>홍굴동</li>
                    <li>홍박동</li>
                </ol>
                <ul>
                    <li>홍길동</li>
                    <li>심청이</li>
                    <li>홍굴동</li>
                    <li>홍박동</li>
                </ul>
            </div>
        );


    }
    // onload-> Jquery연동, 서버종료
    componentDidMount() {

    }

}
export default App2;
