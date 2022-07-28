import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChequesTraitesEncaissementComponent } from './liste-cheques-traites-encaissement.component';

describe('ListeChequesTraitesEncaissementComponent', () => {
  let component: ListeChequesTraitesEncaissementComponent;
  let fixture: ComponentFixture<ListeChequesTraitesEncaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChequesTraitesEncaissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChequesTraitesEncaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
