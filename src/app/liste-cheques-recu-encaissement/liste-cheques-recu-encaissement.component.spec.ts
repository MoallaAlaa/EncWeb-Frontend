import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChequesRecuEncaissementComponent } from './liste-cheques-recu-encaissement.component';

describe('ListeChequesRecuEncaissementComponent', () => {
  let component: ListeChequesRecuEncaissementComponent;
  let fixture: ComponentFixture<ListeChequesRecuEncaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChequesRecuEncaissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChequesRecuEncaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
