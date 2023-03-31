import { TestBed } from '@angular/core/testing';

import { DataJsonServiceService } from './data-json-service.service';

describe('DataJsonServiceService', () => {
  let service: DataJsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataJsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
