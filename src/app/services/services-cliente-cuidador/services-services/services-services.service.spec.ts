import { TestBed } from '@angular/core/testing';

import { ServicesServicesService } from './services-services.service';

describe('ServicesServicesService', () => {
  let service: ServicesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
