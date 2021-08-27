import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronTitlebarIPC } from './electron-titlebar.ipc';

describe('ElectronTitlebarComponent', () => {
  let component: ElectronTitlebarIPC;
  let fixture: ComponentFixture<ElectronTitlebarIPC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronTitlebarIPC ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronTitlebarIPC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
