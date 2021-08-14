import { TestBed } from '@angular/core/testing';

import { ElectronTitlebarService } from './electron-titlebar.service';

describe('ElectronTitlebarService', () => {
  let service: ElectronTitlebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronTitlebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
