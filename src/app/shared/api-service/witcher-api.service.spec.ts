import { TestBed } from '@angular/core/testing';

import { WitcherApiService } from './witcher-api.service';

describe('WitcherServiceService', () => {
  let service: WitcherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WitcherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
