import { TestBed } from '@angular/core/testing';

import { SenseCapService } from './sense-cap.service';

describe('SenseCapService', () => {
  let service: SenseCapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenseCapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
