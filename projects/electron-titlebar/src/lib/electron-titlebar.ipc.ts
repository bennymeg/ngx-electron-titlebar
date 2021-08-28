import { ipcMain, BrowserWindow } from 'electron';
import { ContextBridgeService } from 'ngx-electron-bridge';


export class ElectronTitlebarContextBridge {
  static contextBridgeService = new ContextBridgeService();

  private constructor() {}

  static registerContextBridges() {
    ElectronTitlebarContextBridge.contextBridgeService
      .addIpcBridge("enterFullscreen", "enter-full-screen")
      .addIpcBridge("leaveFullscreen", "leave-full-screen")
      .addIpcBridge("fullscreen", "fullscreen")
      .addIpcBridge("maximize", "maximize")
      .addIpcBridge("unmaximize", "unmaximize")
      .addIpcBridge("minimize", "minimize")
      .addIpcBridge("close", "close")
      .addIpcBridge("updatePageTitle", "update-page-title")
      .expose('ElectronTitlebarBridge');
  }
}

export class ElectronTitlebarIPC {
  private constructor() {}

  static registerHandlers(browserWindow: BrowserWindow) {
    ipcMain.handle('enter-full-screen', async (event, ...args) => {
      browserWindow.setFullScreen(true);
      return true;
    });

    ipcMain.handle('leave-full-screen', async (event, ...args) => {
      browserWindow.setFullScreen(false);
      return true;
    });

    ipcMain.handle('fullscreen', async (event, ...args) => {
      const fullscreen: boolean = browserWindow.isFullScreen() || true;
      browserWindow.setFullScreen(!fullscreen);
      return true;
    });

    ipcMain.handle('maximize', async (event, ...args) => {
      if (browserWindow.isMaximized()) {
        browserWindow.unmaximize();
      } else {
        browserWindow.maximize();
      }

      return true;
    });

    ipcMain.handle('unmaximize', async (event, ...args) => {
      if (browserWindow.isMaximized()) {
        browserWindow.unmaximize();
      } else {
        browserWindow.maximize();
      }
      
      return true;
    });

    ipcMain.handle('minimize', async (event, ...args) => {
      browserWindow.minimize();
      return true;
    });

    ipcMain.handle('close', async (event, ...args) => {
      browserWindow.close();
      return true;
    });

    ipcMain.handle('update-page-title', async (event, ...args) => {
      browserWindow.setTitle(args[0]);
      return true;
    });
  }
}
