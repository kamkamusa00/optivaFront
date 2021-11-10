import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { graphicsCardsMock } from './../../../shared/mocks/graphics-cards-mock';

import { GraphicsCardsListComponent } from './graphics-cards-list.component';

describe('GraphicsCardsListComponent', () => {
  let component: GraphicsCardsListComponent;
  let fixture: ComponentFixture<GraphicsCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardsListComponent);
    component = fixture.componentInstance;
    component.graphicsCards = graphicsCardsMock();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should at least one row', () => {
    const row = fixture.debugElement.nativeElement.querySelector('.listItem');
    expect(row).toBeTruthy();
  });

  it('should emit when row is clicked', fakeAsync(() => {
    const spy = jest.spyOn(component.cardSelected,'emit')
    const row = fixture.debugElement.nativeElement.querySelector('.listItem');
    row.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
});
