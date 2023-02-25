import { TestBed } from '@angular/core/testing';

import { ExperienceItemsService } from './experience-items.service';

describe('ExperienceServiceService', () => {
  let service: ExperienceItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
