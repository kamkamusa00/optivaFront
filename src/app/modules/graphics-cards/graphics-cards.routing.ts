import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsCardDetailComponent } from './pages/graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardListPageComponent } from './pages/graphics-card-list-page/graphics-card-list-page.component';

const routes: Routes = [
  { path: '', component: GraphicsCardListPageComponent },
  {
    path: ':id',
    component: GraphicsCardDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphicsCardsRoutingModule {}
