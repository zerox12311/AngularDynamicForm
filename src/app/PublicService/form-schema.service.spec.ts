import { TestBed, inject } from '@angular/core/testing';

import { FormSchemaService } from './form-schema.service';

describe('FormSchemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormSchemaService]
    });
  });

  it('should be created', inject([FormSchemaService], (service: FormSchemaService) => {
    expect(service).toBeTruthy();
  }));
});
