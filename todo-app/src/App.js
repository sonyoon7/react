import React, { useReducer, useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { dispatch } from '../node_modules/rxjs/internal/observable/pairs';
//2500개 데이터 생성
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

//useReducer는 기존 코드를 많이 고쳐야 한다는 단점이 있지만, 상태를 업데이트하는 로직을 모아서
// 컴포넌트 바깥에 둘 수 있다는 장점이 있다.

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': //새로추가
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos); //2번 째 파라메터에 초기 상태 넣어줌, 3번째 초기상태 만들어 주는 함수 
  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기

  const nextId = useRef(2501);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos(todos => todos.concat(todo));
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);
  const onRemove = useCallback(id => {
    // setTodos(todos => todos.filter(todo => todo.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback(id => {
    // setTodos(todos =>
    // todos.map(todo =>
    //   todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    // ),
    // );
    dispatch({ type: 'TOGGLE', id });
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
