import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { GraphicsCardI } from '@shared/models/graphicsCards.model';
import * as cardsActions from '@store/graphics-cards/graphics-cards.actions';
import { AppState } from '@store/graphics-cards/models/state.model';
import { loadingTargets } from '@store/is-loading/loading.const';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-graphics-card-list-page',
  templateUrl: './graphics-card-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphicsCardListPageComponent {
  graphicsCards$: Observable<GraphicsCardI[]>;
  isLoading$: Observable<string[]>;
  name = new FormControl('', [Validators.maxLength(10)]);
  readonly target = loadingTargets.graphicsCardsList;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.graphicsCards$ = this.store.select('graphicsCards');
    this.isLoading$ = this.store.select('isLoading');
  }

  ngOnInit(): void {
    this.loadGraphicsCards();
    this.filterByName();
  }

  onCardSelected(id: number): void {
    this.router.navigate([String(id)], {
      relativeTo: this.activeRoute,
    });
  }

  onScroll(): void {
    this.store.dispatch(cardsActions.appendCardspage());
  }

  private loadGraphicsCards(): void {
    this.store.dispatch(cardsActions.loadCards());
  }

  private filterByName(): void {
    this.name.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((fieldValue: string) => {
        this.graphicsCards$ = this.store
          .select((state) => state.graphicsCards)
          .pipe(
            map((items) =>
              items.filter((item) => item.name.includes(fieldValue))
            )
          );
      });
  }
}
