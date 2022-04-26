import { TestBed } from '@angular/core/testing';

import { SuportDevicesService } from './suport-devices.service';

describe('SuportDevicesService', () => {
  let service: SuportDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuportDevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
