import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEncaissementComponent } from './board-encaissement.component';

describe('BoardEncaissementComponent', () => {
  let component: BoardEncaissementComponent;
  let fixture: ComponentFixture<BoardEncaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardEncaissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardEncaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
