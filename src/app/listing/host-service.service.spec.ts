import { TestBed, inject } from '@angular/core/testing';

import { HostServiceService } from './host-service.service';

describe('HostServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostServiceService]
    });
  });

  it('should be created', inject([HostServiceService], (service: HostServiceService) => {
    expect(service).toBeTruthy();
  }));
});
