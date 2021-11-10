import { Action, createReducer, on } from '@ngrx/store';
import * as cardsActions from './graphics-cards.actions';
import { GraphicsCardI } from '@shared/models/graphicsCards.model';
import { cloneDeep } from 'lodash';

const initialState: GraphicsCardI[] = [];

const _cardsReducer = createReducer(
  initialState,
  on(cardsActions.loadCards, (state) => {
    return state;
  }),
  on(cardsActions.cardsLoaded, (state, action) => {
    return [...action.cards];
  }),
  on(cardsActions.appendCardspage, (state) => {
    return state;
  }),
  on(cardsActions.appendCardspageLoaded, (state, action) => {
    const newState = cloneDeep(state);
    return [...newState, ...action.cards];
  }),
);

export function cardsReducer(state: GraphicsCardI[], action: Action) {
  return _cardsReducer(state, action);
}
