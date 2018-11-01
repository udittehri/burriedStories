import { TestBed } from '@angular/core/testing';

import { MyDBsService } from './my-dbs.service';

describe('MyDBsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyDBsService = TestBed.get(MyDBsService);
    expect(service).toBeTruthy();
  });
});
