import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { potectCategoryPageGuard } from './potect-category-page.guard';

describe('potectCategoryPageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => potectCategoryPageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
