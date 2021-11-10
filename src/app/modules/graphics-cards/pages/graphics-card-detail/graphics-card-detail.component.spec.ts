import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { activatedRouteMock } from '@shared/mocks/activated-routed-service.mock';
import { routerMock } from '@shared/mocks/router.mock';
import { storeMock } from '@shared/mocks/store.mock';

import { GraphicsCardDetailComponent } from './graphics-card-detail.component';

describe('GraphicsCardDetailComponent without routeParams', () => {
  let component: GraphicsCardDetailComponent;
  let fixture: ComponentFixture<GraphicsCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(testingConfig ())
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
    const router = TestBed.inject(Router);
    const spy = jest.spyOn(router,'navigate');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});

describe('GraphicsCardDetailComponent with routeParams', () => {
  let component: GraphicsCardDetailComponent;
  let fixture: ComponentFixture<GraphicsCardDetailComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule(testingConfig ('3'))
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have card$ with value', () => {
    expect(component.card$).toBeTruthy();
  });

});


function testingConfig (id=''):TestModuleMetadata  {
  return {
    declarations: [ GraphicsCardDetailComponent ],
    imports: [RouterTestingModule],
    providers: [
      { provide: ActivatedRoute, useValue: activatedRouteMock({routeParam:id}) },
      { provide: Store, useValue: storeMock() },
      { provide: Router, useValue: routerMock() },
    ],
    schemas: [NO_ERRORS_SCHEMA],
  }
}
