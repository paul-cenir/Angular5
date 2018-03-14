import { TestBed, inject } from '@angular/core/testing';

import { GlobalDataServiceService } from './global-data-service.service';

describe('GlobalDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDataServiceService]
    });
  });

  it('should be created', inject([GlobalDataServiceService], (service: GlobalDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
