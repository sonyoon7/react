import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink to="" className="navbar-brand" href="#">React Movie</NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li><NavLink to="/released">현재상영</NavLink></li>
                                <li><NavLink to="/scheduled">개봉예정</NavLink></li>
                                <li><NavLink to="boxoffice">박스오피스</NavLink></li>
                                <li><NavLink to="/news">커뮤니티</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;