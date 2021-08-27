import { IpcMain, BrowserWindow } from 'electron';

export class ElectronTitlebarIPC {
  constructor(private _ipcMain: IpcMain, private _browserWindow: BrowserWindow) { 
    this._ipcMain.handle('enter-full-screen', async (event, ...args) => {
      this._browserWindow.setFullScreen(true);
      return true;
    });

    this._ipcMain.handle('leave-full-screen', async (event, ...args) => {
      this._browserWindow.setFullScreen(false);
      return true;
    });

    this._ipcMain.handle('fullscreen', async (event, ...args) => {
      const fullscreen: boolean = this._browserWindow.isFullScreen() || true;
      this._browserWindow.setFullScreen(!fullscreen);
      return true;
    });

    this._ipcMain.handle('maximize', async (event, ...args) => {
      if (this._browserWindow.isMaximized()) {
        this._browserWindow.unmaximize();
      } else {
        this._browserWindow.maximize();
      }

      return true;
    });

    this._ipcMain.handle('unmaximize', async (event, ...args) => {
      if (this._browserWindow.isMaximized()) {
        this._browserWindow.unmaximize();
      } else {
        this._browserWindow.maximize();
      }
      
      return true;
    });

    this._ipcMain.handle('minimize', async (event, ...args) => {
      this._browserWindow.minimize();
      return true;
    });

    this._ipcMain.handle('close', async (event, ...args) => {
      this._browserWindow.close();
      return true;
    });

    this._ipcMain.handle('update-page-title', async (event, ...args) => {
      this._browserWindow.setTitle(args[0]);
      return true;
    });
  }
}
