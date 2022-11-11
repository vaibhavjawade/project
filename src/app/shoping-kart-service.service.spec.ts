import { TestBed } from '@angular/core/testing';

import { ShopingKartServiceService } from './shoping-kart-service.service';

describe('ShopingKartServiceService', () => {
  let service: ShopingKartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingKartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
