import { TestBed } from '@angular/core/testing';

import { PersoncrudService } from './personcrud.service';

describe('PersoncrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersoncrudService = TestBed.get(PersoncrudService);
    expect(service).toBeTruthy();
  });
});
