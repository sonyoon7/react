import React from 'react';
import CounterContainer from './containers/using_connect/CounterContainer';
import SampleContainer from './containers/using_connect/SampleContainer';
import TodosContainer from './containers/TodosContainer';
import Counter from './components/Counter'
import Todos from './components/Todos'

const App = () => {
  return (
    // <div>
    //   <CounterContainer number={0}/>
    //   <hr/>
    //   <Todos/>
    // </div>
    <div>
      {/* <CounterContainer /> */}
      <SampleContainer/>
      <hr />
      {/* <TodosContainer /> */}
    </div>
  );
};

export default App;
