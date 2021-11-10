import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { GraphicsCardsService } from './graphics-cards/services/graphics-cards.service';
import { EffectsModule } from '@ngrx/effects';
import { GraphicsCardsEffects } from './graphics-cards/graphics-cards.effects';
import { isLoadingReducer } from './is-loading/is-loading.reducer';
import { cardsReducer } from './graphics-cards/graphics-cards.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      graphicsCards: cardsReducer,
      isLoading: isLoadingReducer,
    }),
    EffectsModule.forRoot([GraphicsCardsEffects]),
  ],
  providers: [
    GraphicsCardsService,
  ],
})
export class AppStoreModule {}
