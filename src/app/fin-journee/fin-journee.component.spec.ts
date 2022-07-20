import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinJourneeComponent } from './fin-journee.component';

describe('FinJourneeComponent', () => {
  let component: FinJourneeComponent;
  let fixture: ComponentFixture<FinJourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinJourneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinJourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
