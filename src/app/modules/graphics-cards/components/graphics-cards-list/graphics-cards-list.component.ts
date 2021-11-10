import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { trackById } from '@shared/functions/trackById.lib';
import { GraphicsCardI } from '@shared/models/graphicsCards.model';

@Component({
  selector: 'app-graphics-cards-list',
  templateUrl: './graphics-cards-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardsListComponent {
  @Input() graphicsCards :GraphicsCardI[] = [];
  @Output() cardSelected = new EventEmitter<number>();
  trackById=trackById;
  constructor(){}

  onSelect(id:number):void{
    this.cardSelected.emit(id);
  }
}
