import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { GraphicsCardI } from '@shared/models/graphicsCards.model';

@Component({
  selector: 'app-graphics-cards-list',
  templateUrl: './graphics-cards-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardsListComponent {
  @Input() graphicsCards :GraphicsCardI[] = [];
  @Output() cardSelected = new EventEmitter<number>();
  constructor(){}

  onSelect(id:number):void{
    this.cardSelected.emit(id);
  }
}
