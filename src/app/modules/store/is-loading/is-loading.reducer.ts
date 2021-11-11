import { Action, createReducer, on } from '@ngrx/store';
import * as loadingActions from './is.loading.actions';

const initialState: string[] = [];

const _loadingReducer = createReducer(
  initialState,
  on(loadingActions.start, (state, action) => {
    const added = state.includes(action.target)
    return added ? [...state] : [...state, action.target];
  }),
  on(loadingActions.stop, (state, action) => {
    const index = state.indexOf(action.target);
    const stateCopy = [...state];
    if(index > -1){
      stateCopy.splice(index, 1)
    }
    return stateCopy;
  })
);

export function isLoadingReducer(state: string[], action: Action) {
  return _loadingReducer(state, action);
}
