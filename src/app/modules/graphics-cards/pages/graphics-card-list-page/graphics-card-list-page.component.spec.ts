import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsCardListPageComponent } from './graphics-card-list-page.component';

describe('GraphicsCardListPageComponent', () => {
  let component: GraphicsCardListPageComponent;
  let fixture: ComponentFixture<GraphicsCardListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsCardListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
