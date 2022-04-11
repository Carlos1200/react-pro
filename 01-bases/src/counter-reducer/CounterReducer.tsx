import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const IncreaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  const handleReset = () => {
    dispatch(doReset());
  };

  return (
    <>
      <h1>Counter Reducer Segmentado</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => IncreaseBy(1)}>+1</button>
      <button onClick={() => IncreaseBy(5)}>+5</button>
      <button onClick={() => IncreaseBy(10)}>+10</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};
