import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getRouteParam } from '@shared/functions/getRouteParam.lib';
import { GraphicsCardI } from '@shared/models/graphicsCards.model';
import { AppState } from '@store/graphics-cards/models/state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphicsCardDetailComponent implements  OnInit {
  id: number;
  card$: Observable<GraphicsCardI>;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.id = Number(getRouteParam(this.activeRoute, 'id'));
  }

  ngOnInit():void{
    this.setCard();
  }
  private setCard(): void {
    this.card$ = this.store.select((state) => {
      const card = state?.graphicsCards?.find(
        (item: GraphicsCardI) => item.id === this.id
      );
      if (card) {
        return card;
      }
      this.router.navigate(['/graphics-cards']);
      return null;
    });
  }
}
