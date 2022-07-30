import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheRemisesChequesComponent } from './recherche-remises-cheques.component';

describe('RechercheRemisesChequesComponent', () => {
  let component: RechercheRemisesChequesComponent;
  let fixture: ComponentFixture<RechercheRemisesChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheRemisesChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheRemisesChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
