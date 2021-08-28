import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronTitlebarComponent } from './electron-titlebar.component';


@NgModule({
  declarations: [
    ElectronTitlebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ElectronTitlebarComponent
  ]
})
export class ElectronTitlebarModule { }
