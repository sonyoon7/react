import React, {useState, useCallback} from 'react';
import NewsList from './components/NewsList'
import Categories from './components/Categories';
import {Route} from 'react-router-dom'
import NewsPages from './pages/NewsPages';

const App = () => {
  //66e786fbb17f43aab08f82663eaef118
  // const [data, setData] = useState(null);
  
  // const onClick =async () =>{

  //   try {
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=66e786fbb17f43aab08f82663eaef118',)
  //     setData(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }

    // axios.get('http://jsonplaceholder.typicode.com/todos/1')
    //       .then(response =>{
    //         setData(response.data);
    //       })
  // }

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(
      category => setCategory(category)
    ,[])
  return (
    // <Route path="/:category" component={NewsPages}/>

    <>
      <Categories category ={category} onSelect={onSelect}/>
      <NewsList category ={category}/>
    </>

    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && <textarea value={JSON.stringify(data,null, 2)} readOnly={true} cols="30" rows="10"></textarea>}
    // </div>
  );
};
export default App;