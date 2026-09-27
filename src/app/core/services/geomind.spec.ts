import { TestBed } from '@angular/core/testing';
import { Geomind } from './geomind';

describe('Geomind', () => {
  let service: Geomind;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Geomind);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
