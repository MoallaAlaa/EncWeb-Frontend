import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAgenceComponent } from './board-agence.component';

describe('BoardAgenceComponent', () => {
  let component: BoardAgenceComponent;
  let fixture: ComponentFixture<BoardAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
