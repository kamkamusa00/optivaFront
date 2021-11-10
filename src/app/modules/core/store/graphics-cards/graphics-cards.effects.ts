import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { GraphicsCardsService } from './services/graphics-cards.service';
import * as cardsActions from './graphics-cards.actions';
import { AppState } from './models/state.model';
import { Store } from '@ngrx/store';
import * as loadingActions from '@store/is-loading/is.loading.actions';
import { loadingTargets } from '@store/is-loading/loading.const';

const target = loadingTargets.graphicsCardsList;

@Injectable()
export class GraphicsCardsEffects {
  constructor(
    private actions$: Actions,
    private graphicsCardsService: GraphicsCardsService,
    private store: Store<AppState>
  ) {}

  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cardsActions.loadCards.type),
      tap(() => this.store.dispatch(loadingActions.start({ target }))),
      mergeMap(() =>
        this.graphicsCardsService.getAll().pipe(
          map((cards) => cardsActions.cardsLoaded({ cards })),
          catchError(() => of(cardsActions.cardsLoadError()))
        )
      )
    )
  );

  cardsLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cardsActions.cardsLoaded.type),
      map(() => loadingActions.stop({ target }))
    )
  );

  appendCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cardsActions.appendCardspage.type),
      tap(() => this.store.dispatch(loadingActions.start({ target }))),
      mergeMap(() =>
        this.graphicsCardsService.getAll().pipe(
          map((cards) => cardsActions.appendCardspageLoaded({ cards })),
          catchError(() => of(cardsActions.cardsLoadError()))
        )
      )
    )
  );

  appendCardsLoaded$ = createEffect(() =>
  this.actions$.pipe(
    ofType(cardsActions.appendCardspageLoaded.type),
    map(() => loadingActions.stop({ target }))
  )
);
}
