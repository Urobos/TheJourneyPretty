import { TestBed } from '@angular/core/testing';

import { HelpfulValuesService } from './helpful-values.service';

describe('HelpfulValuesService', () => {
  let service: HelpfulValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpfulValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
