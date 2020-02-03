//이것이 Store 임
//combineReducer?

import { SMOVIE, RMOVIE, BOXOFFICE } from "../actions";
//이벤트 => 사용자 요청 => 요청에 대해 처리하는 부분'
import { combineReducers } from "redux"

/* @Controller */

//state에 대한 초기화
const movieInitialState = {
    //app가 가지고 있는 변수 두개 여기다 가져옴 => app에선 관리하지 않겠다는 이야기
    /* 
        class App extens Component{
            constructor(props){
                super(props)
                this.state={
                    movie:[]
                }
            }
        }
    */
    movieArray: [
        {
            "title": "007 노 타임 투 다이 (2020)",
            "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F372367abb28d40eda280d00bee12d24d1570684696844",
        },
        {
            "title": "10 미니츠 곤 (2019)",
            "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fcd2d4ccb636548eeaba9b392cfeba74b1566126023373",
        },
        {
            "title": "6 언더그라운드 (2019)",
            "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F83988f5bcde14ab68f6b586268d83d6a1545023828811"
        },
        {
            "title": "82년생 김지영 (2019)",
            "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F92e2950859f94e579d712220872a1b931569907721029"
        },
        {
            "title": "EBS 댄스파티! (2019)",
            "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F156df7edb358413eba662fa93290612f1569556543979"
        },
        {
            "title": "감쪽같은 그녀 (2019)",
            "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F9b484f4b5b7741beb3e88ffe5ac0b9631570761847683"
        },
        {
            "title": "걸즈 앤 판처 제 63회 전차도 전국 고교생 대회 (2018)",
            "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0267dac8aa0d411090263a526e0b05de1566523307603"
        },

    ]
    //this.props.store.dispatch(rmovie()) -> type (RMOVIE)넘어옴 
}

const movie = (state = movieInitialState, action) => {
    switch (action.type) {
        case SMOVIE:
            return {
                movieArray: [
                    {
                        "title": "007 노 타임 투 다이 (2020)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F372367abb28d40eda280d00bee12d24d1570684696844",
                    },
                    {
                        "title": "10 미니츠 곤 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fcd2d4ccb636548eeaba9b392cfeba74b1566126023373",
                    },
                    {
                        "title": "6 언더그라운드 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F83988f5bcde14ab68f6b586268d83d6a1545023828811"
                    },
                    {
                        "title": "82년생 김지영 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F92e2950859f94e579d712220872a1b931569907721029"
                    },
                    {
                        "title": "EBS 댄스파티! (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F156df7edb358413eba662fa93290612f1569556543979"
                    },
                    {
                        "title": "감쪽같은 그녀 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F9b484f4b5b7741beb3e88ffe5ac0b9631570761847683"
                    },
                    {
                        "title": "걸즈 앤 판처 제 63회 전차도 전국 고교생 대회 (2018)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0267dac8aa0d411090263a526e0b05de1566523307603"
                    },

                ]
            }
        case RMOVIE:
            return {
                movieArray: [
                    {
                        "title": "조커 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0357a82b7226464b87072c0b8d2246b71567986846719"
                    },
                    {
                        "title": "가장 보통의 연애 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F08603eebe4e740e9a19384f0a0f5cfed1568165443925",
                    },
                    {
                        "title": "6 언더그라운드 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F83988f5bcde14ab68f6b586268d83d6a1545023828811"
                    },
                    {
                        "title": "82년생 김지영 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F92e2950859f94e579d712220872a1b931569907721029"
                    },
                    {
                        "title": "EBS 댄스파티! (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F156df7edb358413eba662fa93290612f1569556543979"
                    },
                    {
                        "title": "감쪽같은 그녀 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F9b484f4b5b7741beb3e88ffe5ac0b9631570761847683"
                    },
                    {
                        "title": "걸즈 앤 판처 제 63회 전차도 전국 고교생 대회 (2018)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0267dac8aa0d411090263a526e0b05de1566523307603"
                    },

                ]
            }
        case BOXOFFICE:
            return {
                movieArray: [
                    {
                        "title": "장사리 : 잊혀진 영웅들 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc6a267ee7c0b4fe4a783c189560cf2971566348594121",
                    },
                    {
                        "title": "원스 어폰 어 타임... 인 할리우드 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F163dae4588ac4484a172dc96140b442a1567041997998",
                    },
                    {
                        "title": "디어 마이 프렌드 (2018)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fbfad9f6c4a6841f1b27371fdd2cd7d421567961702675",
                    },
                    {
                        "title": "82년생 김지영 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F92e2950859f94e579d712220872a1b931569907721029"
                    },
                    {
                        "title": "EBS 댄스파티! (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F156df7edb358413eba662fa93290612f1569556543979"
                    },
                    {
                        "title": "양자물리학 (2019)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F26799b4aa3974982b4a8cac76ba330f51569399707508",
                    },
                    {
                        "title": "걸즈 앤 판처 제 63회 전차도 전국 고교생 대회 (2018)",
                        "poster": "//img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0267dac8aa0d411090263a526e0b05de1566523307603"
                    },

                ]
            }
        default:
            return state
    }
}

const movieApp = combineReducers({
    movie
}//movie 하나가 테이블 처럼 생각하면 편함 
)

export default movieApp;