import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChequesRejetesEncaissementComponent } from './liste-cheques-rejetes-encaissement.component';

describe('ListeChequesRejetesEncaissementComponent', () => {
  let component: ListeChequesRejetesEncaissementComponent;
  let fixture: ComponentFixture<ListeChequesRejetesEncaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChequesRejetesEncaissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChequesRejetesEncaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
