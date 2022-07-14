import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSclienteleComponent } from './board-sclientele.component';

describe('BoardSclienteleComponent', () => {
  let component: BoardSclienteleComponent;
  let fixture: ComponentFixture<BoardSclienteleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSclienteleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSclienteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
