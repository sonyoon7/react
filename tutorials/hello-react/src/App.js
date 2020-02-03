import React from 'react';
import logo from './logo.svg';
import MyComponet from './components/MyComponent'
import './App.css';

function App() {
  const name ='리액트'
  return (
    <div className="react">
      <MyComponet name='sss'/>
    </div>
  );
}

export default App;
