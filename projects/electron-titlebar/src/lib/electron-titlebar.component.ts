import { Component, Input, OnInit, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { ElectronBridgeFactory, isBridgeExposed, isElectronApp } from 'ngx-electron-bridge';


@Component({
  selector: 'ngx-electron-titlebar',
  templateUrl: './electron-titlebar.component.html',
  styleUrls: ['./electron-titlebar.component.scss']
})
export class ElectronTitlebarComponent implements OnInit {
  @Input() theme: 'light' | 'dark' = 'light'; // theme style
  @Input() draggable : boolean = true;        // enables/disables the -webkit-app-region CSS property on the root element. Allows frameless windows to be dragged in an electron application
  @Input() fixed: boolean = false;            // affixes to the top and floats above the rest of the content so only the buttons and title are visible. Ignores transparent rule
  @Input() os: 'mac' | 'win' | 'default' = 'default';  // titlebar style (defaults to current OS, or default if unrecognized)
  @Input() tall: boolean = false;             // makes the titlebar taller than usual, with the controls slightly inset (mac only)
  @Input() title: string = '';                // app title
  @Input() transparent : boolean = false;     // transparent background for an overlay effect
  @Input() rtl: boolean = false;              // right to left alignment

  @Output() onClose: EventEmitter<string> = new EventEmitter<string>();
  @Output() onMinimize: EventEmitter<string> = new EventEmitter<string>();
  @Output() onMaximize: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFullScreen: EventEmitter<string> = new EventEmitter<string>();

  altPressed: boolean = false;
  isFullScreen: boolean = false;

  constructor(@Inject(ElectronBridgeFactory('ElectronTitlebarBridge')) private _electronBridge: any) { }

  ngOnInit(): void {
    // Set proper style
		if (!['mac','win','default'].includes(this.os)) {
      this.getPlatform();
		}
  }

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    if (event.altKey) {
      this.altPressed = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    if (!event.altKey) {
      this.altPressed = false;
    }
  }

  private async getPlatform() {
    const platform: string = isElectronApp && isBridgeExposed ? await this._electronBridge.platform() : undefined;

    switch (platform) {
      case "darwin":
        this.os = 'mac';
        break;
      case "win32":
        this.os = 'win';
        break;
      default:
        this.os = 'default';
        break;
    }
  }

  onCloseClicked() { 
    if (isElectronApp && isBridgeExposed) {
      this._electronBridge.close();
    }

    this.onClose.emit('close'); 
  }
	
	onMinimizeClicked() { 
    if (isElectronApp && isBridgeExposed) {
      this._electronBridge.minimize();
    }

    this.onMinimize.emit('minimize'); 
  }
	
	onMaximizeClicked() {
		if (this.os === 'mac') {
			if (this.altPressed && !this.isFullScreen) {
        if (isElectronApp && isBridgeExposed) {
          this._electronBridge.maximize();
        }

        this.onMaximize.emit('maximize');
      } else {
        if (isElectronApp && isBridgeExposed) {
          this._electronBridge.fullscreen();
        }

				this.isFullScreen = !this.isFullScreen;
				this.onFullScreen.emit('fullscreen');
			}
		} else {
      if (isElectronApp && isBridgeExposed) {
        this._electronBridge.maximize();
      }

			this.isFullScreen = !this.isFullScreen;
			this.onMaximize.emit('maximize');
		}
	}

}
