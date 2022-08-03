import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuListeComponent } from './sub-menu-liste.component';

describe('SubMenuListeComponent', () => {
  let component: SubMenuListeComponent;
  let fixture: ComponentFixture<SubMenuListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
