import { TestBed, inject } from '@angular/core/testing';

import { MasechtotService } from './masechtot.service';

describe('MasechtotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasechtotService]
    });
  });

  it('should be created', inject([MasechtotService], (service: MasechtotService) => {
    expect(service).toBeTruthy();
  }));
});
