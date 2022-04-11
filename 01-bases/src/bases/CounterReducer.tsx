import { useReducer, useState } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        ...state,
        previous: state.counter,
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
      };
    case "reset":
      return {
        ...state,
        previous: 0,
        counter: 0,
        changes: 0,
      };
    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const IncreaseBy = (value: number) => {
    dispatch({
      type: "increaseBy",
      payload: { value },
    });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => IncreaseBy(1)}>+1</button>
      <button onClick={() => IncreaseBy(5)}>+5</button>
      <button onClick={() => IncreaseBy(10)}>+10</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};
