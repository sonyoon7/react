import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                {/* a태그 사용 안함 */}
                <NavLink className="btn btn-sm btn-primary" to="/">일일 박스오피스</NavLink>
                <NavLink className="btn btn-sm btn-success" to="/reserve">실시간 예매율</NavLink>
                <NavLink className="btn btn-sm btn-danger" to="/online">온라인 이용순위</NavLink>
                <NavLink className="btn btn-sm btn-info" to="/seat">좌석 점유율</NavLink>
            </div>
        );
    }
}

export default Header;