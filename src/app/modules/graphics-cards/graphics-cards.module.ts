import { NgModule } from '@angular/core';
import { GraphicsCardsRoutingModule } from './graphics-cards.routing';
import { GraphicsCardListPageComponent } from './pages/graphics-card-list-page/graphics-card-list-page.component';
import { GraphicsCardsListComponent } from './components/graphics-cards-list/graphics-cards-list.component';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GraphicsCardDetailComponent } from './pages/graphics-card-detail/graphics-card-detail.component';
import { FormsModule } from '@shared/modules/forms/forms.module';

@NgModule({
  imports: [GraphicsCardsRoutingModule, InfiniteScrollModule, CommonModule, FormsModule],
  providers: [],
  declarations: [GraphicsCardListPageComponent, GraphicsCardsListComponent, GraphicsCardDetailComponent],
})
export class GraphicsCardsModule {}
