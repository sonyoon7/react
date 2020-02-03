import React, { Component } from 'react';
import axios from 'axios';
class BoxOffice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemArray: [],
            item: {},
            showResults: false

        }
        //이벤트 등록
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick(movie_data) {
        this.setState({ item: movie_data, showResults: true })
    }

    componentWillMount() {
        var _this = this;
        axios.get('http://localhost:3355/movie_info', {
            params: {
                no: 1
            }
        }).then((res) => {
            // 타입 확인하기 
            console.log(typeof res);
            _this.setState({ itemArray: res.data });
        })
    }
    render() {
        const html = this.state.itemArray.map((m) =>
            <tr onClick={this.handleClick.bind(this, m)}>
                <td className="text-left">{m.movieNm}</td>
                <td className="text-center">{m.salesAmt}</td>
                <td className="text-center">{m.audiCnt}</td>
                <td className="text-center">{m.rankInten}</td>
            </tr>
        );
        return (
            <div className="row">
                <h3 className="text-center">일별 박스오피스</h3>
                <div className="col-sm-7">
                    {this.state.showResults ? <BoxOfficeDetail movie_data={this.state.item} /> : null}
                </div>
                <div className="col-sm-5">
                    <table className="table table-striped" >
                        <thead>
                            <th className="text-center">영화명</th>
                            <th className="text-center">매출액</th>
                            <th className="text-center">관객수</th>
                            <th className="text-center">증감률</th>
                        </thead>
                        <tbody>{html}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class BoxOfficeDetail extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.movie_data)

    }
    render() {
        return (
            // <div>{this.props.item}</div>
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <td width={"40%"} className="text-center" rowSpan="9">
                            <img src={"http://www.kobis.or.kr" + this.props.movie_data.thumbUrl} alt="" width="100%" />
                        </td>
                        <td colSpan="2" width="70%">
                            <b>{this.props.movie_data.movieNm}</b><br />
                            <sub>{this.props.movie_data.movieNmEn}</sub>
                        </td>
                    </tr>
                    <tr>
                        <td width="20%" className="text-left">
                            <b>개봉일</b>
                        </td>
                        <td width="50%" className="text-right">
                            {this.props.movie_data.showDt}
                        </td>

                    </tr>
                    <tr>
                        <td width="20%" className="text-left">
                            <b>제작상태</b>
                        </td>
                        <td width="50%" className="text-right">
                            {this.props.movie_data.moviePrdtStat}
                        </td>
                    </tr>
                    <tr>
                        <td width="20%" className="text-left">
                            <b>관람등급</b>
                        </td>
                        <td width="50%" className="text-right">
                            {this.props.movie_data.watchGradeNm}
                        </td>
                    </tr>
                    <tr>
                        <td width="20%" className="text-left">
                            <b>상영시간</b>
                        </td>
                        <td width="50%" className="text-right">
                            {this.props.movie_data.showTm}
                        </td>
                    </tr>
                    <tr>
                        <td width="20%" className="text-left">
                            <b>제작국가</b>
                        </td>
                        <td width="50%" className="text-right">
                            {this.props.movie_data.repNationCd}
                        </td>
                    </tr>
                    <tr>
                        <td width="20%" className="text-left">
                            <b>감독</b>
                        </td>
                        <td width="50%" className="text-right">
                            {this.props.movie_data.director}
                        </td>
                    </tr>
                    <tr>
                        <td width="20%" className="text-left">
                            <b>장르</b>
                        </td>
                        <td width="50%" className="text-right">
                            {this.props.movie_data.genre}
                        </td>
                    </tr>
                    <tr>
                        <td width="20%" className="text-left">
                            <b>배급사</b>
                        </td>
                        <td width="50%" className="text-right">
                            {this.props.movie_data.dtNm}
                        </td>
                    </tr>

                </tbody>
            </table >
        );
    }
}
// export default BoxOfficeDetail;
export default BoxOffice;