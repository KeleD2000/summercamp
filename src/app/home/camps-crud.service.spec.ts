import { TestBed } from '@angular/core/testing';

import { CampsCrudService } from './camps-crud.service';

describe('CampsCrudService', () => {
  let service: CampsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
