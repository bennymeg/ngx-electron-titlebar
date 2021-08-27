import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronTitlebarComponent } from './electron-titlebar.component';
import { NgxElectronModule } from 'ngx-electron';



@NgModule({
  declarations: [
    ElectronTitlebarComponent
  ],
  imports: [
    CommonModule,
    NgxElectronModule
  ],
  exports: [
    ElectronTitlebarComponent
  ]
})
export class ElectronTitlebarModule { }
