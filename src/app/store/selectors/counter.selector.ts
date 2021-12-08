import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState, COUNTER_REDUCER } from '../models/counter';

export const counterSelector = createFeatureSelector<CounterState>(COUNTER_REDUCER);

export const selectCurrentCount = createSelector(
  counterSelector,
  (state: CounterState) => state.current
);

export const selectPreviousCount = createSelector(
  counterSelector,
  (state: CounterState) => state.previous
);
