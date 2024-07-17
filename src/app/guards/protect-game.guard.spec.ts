import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { protectGameGuard } from './protect-game.guard';

describe('protectGameGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protectGameGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
