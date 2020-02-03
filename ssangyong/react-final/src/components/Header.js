import React,{Component} from 'react'
import {NavLink} from "react-router-dom"
class Header extends Component{
    render(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to={"/"}>SIST Movie Center</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to={"/"}>현재상영</NavLink></li>
                            <li><NavLink to={"/schedule"}>개봉예정</NavLink></li>
                            <li><NavLink to={"/boxoffice"}>박스오피스</NavLink></li>
                            <li><NavLink to={"/find"}>영화찾기</NavLink></li>
                            <li><NavLink to={"/news"}>뉴스</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header;