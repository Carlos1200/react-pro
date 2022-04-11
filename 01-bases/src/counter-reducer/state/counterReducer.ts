import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (
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
