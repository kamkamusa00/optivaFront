import { createAction, props } from '@ngrx/store';

export const start = createAction('[Loading Control] Start loading', props<{ target: string }>());
export const stop = createAction('[Loading Control] Stop loading', props<{ target: string }>());
