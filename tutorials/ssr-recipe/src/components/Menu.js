import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
  return (

    //Link 컴포넌트는 클릭하면 다른 주소로 이동시켜 주는 컴포넌트입니다. 
    //일반 웹 애플리케이션에서는 a 태그를 사용하여 페이지를 전환하는데, 리액트 라우터를 사용할 떄는 이 태그를 직접 사용 하면 안된다. 
    // a 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문이다. spa에선 단일 페이지므로 새로 페이지를 불러오면 상태 값들이 다 날아가 버림
    // Link 컴포넌트는 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경해 줍니다.
      
    <ul>
      <li>
        <Link to="/red">Red</Link>
      </li>
      <li>
        <Link to="/blue">Blue</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
};

export default Menu;
