import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirBordereauComponent } from './saisir-bordereau.component';

describe('SaisirBordereauComponent', () => {
  let component: SaisirBordereauComponent;
  let fixture: ComponentFixture<SaisirBordereauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirBordereauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirBordereauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
