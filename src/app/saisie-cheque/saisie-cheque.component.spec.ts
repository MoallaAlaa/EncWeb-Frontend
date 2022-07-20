import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieChequeComponent } from './saisie-cheque.component';

describe('SaisieChequeComponent', () => {
  let component: SaisieChequeComponent;
  let fixture: ComponentFixture<SaisieChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
