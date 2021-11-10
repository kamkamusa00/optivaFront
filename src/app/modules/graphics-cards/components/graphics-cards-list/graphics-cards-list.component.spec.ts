import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
