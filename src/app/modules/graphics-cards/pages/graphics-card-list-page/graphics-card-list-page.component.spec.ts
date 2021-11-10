import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { GraphicsCardListPageComponent } from './graphics-card-list-page.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@shared/modules/forms/forms.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GraphicsCardsService } from '@store/graphics-cards/services/graphics-cards.service';
import { errorManagerMock } from '@shared/mocks/error-manager-service.mock';
import { ErrorManagerService } from './../../../core/services/error-manager/error-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { graphicsCardsServiceMock } from '@shared/mocks/graphics-card-service.mock';
import { Store } from '@ngrx/store';
import { storeMock } from '@shared/mocks/store.mock';
import { RouterTestingModule } from '@angular/router/testing';

describe('GraphicsCardListPageComponent', () => {
  let component: GraphicsCardListPageComponent;
  let fixture: ComponentFixture<GraphicsCardListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicsCardListPageComponent],
      imports: [FormsModule, InfiniteScrollModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useVale: {} },
        { provide: Store, useValue: storeMock() },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate if cardSelected event is emitted', () => {
    const router = TestBed.inject(Router);
    const spy = jest.spyOn<any, any>(router, 'navigate').mockReturnValue(null);
    const event = new CustomEvent('cardSelected', {
      detail: 8,
    });
    const cardList = fixture.debugElement.nativeElement.querySelector(
      'app-graphics-cards-list'
    ) as HTMLElement;
    cardList.dispatchEvent(event);
    expect(spy).toHaveBeenCalled();
  });

  it('should dispatch store action when scrolled event is emitted', () => {
    const store = TestBed.inject(Store);
    const spy = jest.spyOn(store, 'dispatch');
    const scrollEvent = new CustomEvent('scrolled', {
      detail: null,
    });
    const eventEmitter = fixture.debugElement.nativeElement.querySelector(
      'section'
      ) as HTMLElement;
      eventEmitter.dispatchEvent(scrollEvent);
      expect(spy).toHaveBeenCalled();
  });

});
