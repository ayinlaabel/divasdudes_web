import { TestBed } from '@angular/core/testing';

import { WebReqInterceptor } from './web-req.interceptor';

describe('WebReqInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      WebReqInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: WebReqInterceptor = TestBed.inject(WebReqInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
