import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부른다. 
const CounterContainer = () => {

  //connect  함수 대신 컨테이너 컴포넌트 만들기 
  // const mapStateToProps = state=>({
  //   number: state.counter.number,
  // })
  const number = useSelector(state => state.counter.number);

  // const mapDispatchToProps = dispatch=>({
  //   increase:()=>{
  //     console.log('increase');
  //   },
  //   decrease:()=>{
  //     console.log('decrease');
  //   }
  // })
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase(4)), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
