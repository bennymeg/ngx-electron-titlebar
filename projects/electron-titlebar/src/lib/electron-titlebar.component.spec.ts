import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronTitlebarComponent } from './electron-titlebar.component';

describe('ElectronTitlebarComponent', () => {
  let component: ElectronTitlebarComponent;
  let fixture: ComponentFixture<ElectronTitlebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronTitlebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
