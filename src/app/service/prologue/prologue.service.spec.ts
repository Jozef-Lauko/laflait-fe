import { TestBed } from '@angular/core/testing';

import { PrologueService } from './prologue.service';

describe('PrologueService', () => {
  let service: PrologueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrologueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
