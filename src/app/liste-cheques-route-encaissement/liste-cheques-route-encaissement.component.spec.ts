import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChequesRouteEncaissementComponent } from './liste-cheques-route-encaissement.component';

describe('ListeChequesRouteEncaissementComponent', () => {
  let component: ListeChequesRouteEncaissementComponent;
  let fixture: ComponentFixture<ListeChequesRouteEncaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChequesRouteEncaissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChequesRouteEncaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
