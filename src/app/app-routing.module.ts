import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'graphics-cards',
    loadChildren: async () =>
      (await import('./modules/graphics-cards/graphics-cards.module'))
        .GraphicsCardsModule,
  },
  { path: '', pathMatch: 'full', redirectTo: 'graphics-cards' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
