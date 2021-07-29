import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpellComponent } from './select-spell.component';

describe('SelectSpellComponent', () => {
  let component: SelectSpellComponent;
  let fixture: ComponentFixture<SelectSpellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
