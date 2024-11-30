import { TestBed } from '@angular/core/testing';

import { FamiliarServicesService } from './familiar-services.service';

describe('FamiliarServicesService', () => {
  let service: FamiliarServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamiliarServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
