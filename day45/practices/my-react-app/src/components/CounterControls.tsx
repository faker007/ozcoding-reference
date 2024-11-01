const CounterControls = (props) => {
  return (
    <div>
      <button onClick={props.increment}>증가</button>
      <button onClick={props.decrement}>감소</button>
    </div>
  );
};

export default CounterControls;
