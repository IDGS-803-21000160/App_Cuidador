import { TestBed } from '@angular/core/testing';

import { GlobalFuntionsService } from './global-funtions.service';

describe('GlobalFuntionsService', () => {
  let service: GlobalFuntionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalFuntionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
