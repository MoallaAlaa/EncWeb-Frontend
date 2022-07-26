import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirChequesComponent } from './saisir-cheques.component';

describe('SaisirChequesComponent', () => {
  let component: SaisirChequesComponent;
  let fixture: ComponentFixture<SaisirChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
