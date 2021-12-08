import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.action';
import { CounterState } from '../models/counter';

const initialState: CounterState = {
  current: 0,
  previous: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    previous: state.current,
    current: state.current + 1,
  })),
  on(decrement, (state) => ({
    ...state,
    previous: state.current,
    current: state.current - 1,
  })),
  on(reset, () => initialState)
);
