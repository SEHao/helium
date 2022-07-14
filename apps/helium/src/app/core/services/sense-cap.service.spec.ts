import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SenseCapService } from './sense-cap.service';

describe('SenseCapService', () => {
  let service: SenseCapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SenseCapService],
    });
    service = TestBed.inject(SenseCapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
