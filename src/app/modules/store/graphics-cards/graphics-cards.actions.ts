import { createAction, props } from '@ngrx/store';
import { GraphicsCardI } from '@shared/models/graphicsCards.model';

export const appendCardspage = createAction('[Graphics Cards] Append cards page');
export const appendCardspageLoaded = createAction('[Graphics Cards] Append Cards page loaded', props<{cards:GraphicsCardI[]}>());
export const loadCards = createAction('[Graphics Cards] Load cards');
export const cardsLoaded = createAction('[Graphics Cards] Cards loaded', props<{cards:GraphicsCardI[]}>());
