import { TestBed, inject } from '@angular/core/testing';

import { GlobalValidationServicesService } from './global-validation-services.service';

describe('GlobalValidationServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalValidationServicesService]
    });
  });

  it('should be created', inject([GlobalValidationServicesService], (service: GlobalValidationServicesService) => {
    expect(service).toBeTruthy();
  }));
});
