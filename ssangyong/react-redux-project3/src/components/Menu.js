import React, { Component } from 'react';
import { rmovie } from '../actions';
import { smovie } from '../actions';
import { boxoffice } from '../actions';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.onRMovie = this.onRMovie.bind(this);
        this.onSMovie = this.onSMovie.bind(this);
        this.onBoxOffice = this.onBoxOffice.bind(this);
    }
    onRMovie() {
        this.props.store.dispatch(rmovie())
    }
    onSMovie() {
        this.props.store.dispatch(smovie())

    }
    onBoxOffice() {
        this.props.store.dispatch(boxoffice())

    }
    render() {
        return (
            <div className="row">
                <button className="btn btn-sm btn-primary" onClick={this.onRMovie}>현재 상영영화</button>
                <button className="btn btn-sm btn-danger" onClick={this.onBoxOffice}>박스오피스</button>
                <button className="btn btn-sm btn-success" onClick={this.onSMovie}>개봉예정</button>
            </div>
        );
    }
}

export default Menu;