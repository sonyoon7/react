import React from 'react';
import Categories from '../components/Categories'
import NewsList from '../components/NewsList'

const NewsPages = ({match}) => {
    //url 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의
    // params값을 참조 한다.
    const category  = match.params.category || 'all'

    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    );
};

export default NewsPages;