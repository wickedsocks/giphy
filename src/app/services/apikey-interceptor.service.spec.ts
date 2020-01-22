import { TestBed } from '@angular/core/testing';

import { ApikeyInterceptorService } from './apikey-interceptor.service';

describe('ApikeyInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApikeyInterceptorService = TestBed.get(ApikeyInterceptorService);
    expect(service).toBeTruthy();
  });
});
