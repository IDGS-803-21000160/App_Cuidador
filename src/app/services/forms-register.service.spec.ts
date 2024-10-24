import { TestBed } from '@angular/core/testing';

import { FormsRegisterService } from './forms-register.service';

describe('FormsRegisterService', () => {
  let service: FormsRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
