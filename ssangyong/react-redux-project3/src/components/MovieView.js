import React, { Component } from 'react';

class MovieView extends Component {

    render() {
        const html = this.props.store.getState().movie.movieArray.map((m) => (
            <div className="row">
                <div className="col-md-4">
                    <div className="thumbnail">
                        <img src={m.poster} alt="Lights" style={{ "width": "100%" }} />
                        <div className="caption">
                            <p>{m.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
        return (
            <div className="row">
                {html}
            </div>
        );
    }
}

export default MovieView;