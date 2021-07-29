import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorruptedGuardianComponent } from './corrupted-guardian.component';

describe('CorruptedGuardianComponent', () => {
  let component: CorruptedGuardianComponent;
  let fixture: ComponentFixture<CorruptedGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorruptedGuardianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorruptedGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
