import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './Newsitem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;



const sampleArticle ={
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = ({category}) => {

    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
          `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
        );
      }, [category]);

    // useEffect(() => {
        
    //     // useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또다른 함수를 만들어서 사용해 주어야 한다.
    //     const fetchData = async ()=>{
    //         setLoading(true)
    //         try {
    //             const  query = category === 'all'? '' : `&category=${category}`;

    //             const response = await axios.get(
    //                 `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=66e786fbb17f43aab08f82663eaef118`,
    //             );

    //             setArticles(response.data.articles)
    //         } catch (error) {
    //             console.log(error)
    //         }

    //         setLoading(false)
    //     };


    //     fetchData();
    // }, [category])

 // 대기중일 때
 if (loading) {
    return <NewsListBlock>loading...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};


export default NewsList;