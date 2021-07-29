import { TestBed } from '@angular/core/testing';

import { BatlleManagerService } from './batlle-manager.service';

describe('BatlleManagerService', () => {
  let service: BatlleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatlleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
