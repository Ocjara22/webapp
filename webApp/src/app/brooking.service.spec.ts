import { TestBed } from '@angular/core/testing';

import { BrookingService } from './brooking.service';

describe('BrookingService', () => {
  let service: BrookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
