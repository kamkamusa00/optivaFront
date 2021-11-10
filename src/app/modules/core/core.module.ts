import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorManagerService } from './services/error-manager/error-manager.service';
import { UrlInterceptor } from './interceptors/urI.interceptor';
import { StoreModule } from '@ngrx/store';
import { cardsReducer } from './store/graphics-cards/graphics-cards.reducer';
import { GraphicsCardsService } from '@store/graphics-cards/services/graphics-cards.service';
import { EffectsModule } from '@ngrx/effects';
import { GraphicsCardsEffects } from '@store/graphics-cards/graphics-cards.effects';
import { isLoadingReducer } from '@store/is-loading/is-loading.reducer';

@NgModule({
  imports: [HttpClientModule,
    StoreModule.forRoot({
    graphicsCards: cardsReducer,
    isLoading: isLoadingReducer,
  }),
  EffectsModule.forRoot([GraphicsCardsEffects]),

],
  providers: [
    GraphicsCardsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
    ErrorManagerService,
  ],
})
export class CoreModule {}
