<br/>
<p align="center">
  <a href="https://github.com/bennymeg/ngx-electron-titlebar">
    <img src="https://raw.githubusercontent.com/bennymeg/ngx-electron-titlebar/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">NGX Electron Titlebar</h3>

  <p align="center">
    Custom titlebar library for Electron & Angular applications
    <br/>
    <br/>
    <a href="https://github.com/bennymeg/ngx-electron-titlebar"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://bennymeg.github.io/ngx-electron-titlebar/">View Demo</a>
    .
    <a href="https://github.com/bennymeg/ngx-electron-titlebar/issues">Report Bug</a>
    .
    <a href="https://github.com/bennymeg/ngx-electron-titlebar/issues">Request Feature</a>
  </p>

  <br/>

  <div align="center">

  [![licence](https://img.shields.io/github/license/bennymeg/ngx-electron-titlebar.svg)](https://github.com/bennymeg/ngx-electron-titlebar/blob/master/LICENSE)
  [![npm version](https://img.shields.io/npm/v/ngx-electron-titlebar.svg)](https://www.npmjs.com/package/ngx-electron-titlebar)
  
  </div>
</p>

<hr>

## About The Project

![Screen Shot](https://raw.githubusercontent.com/bennymeg/ngx-electron-titlebar/master/images/screenshot.png)

Over the last couple of years many applications started to adopt transparent design language. Unfortunately, in Electron applications, this means you have to use frameless browser window, which means tou loose the application title bar. this project aims to solve this issue by providing high fidelity, cross platform title bar.

> _NOTE:_ this library is design to work with Electron, but it will work gracefully on any standalone Angular application.

## Getting Started

This project work with Electron application that are powered by Angular. We suggest using [Nx Electron](https://github.com/bennymeg/nx-electron) for this purpose.

### Installation

```sh
npm install ngx-electron-titlebar
```

## Usage

1. Import the module - _[renderer process]_
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElectronTitlebarModule } from 'ngx-electron-titlebar';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElectronTitlebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Add the component to you application html - _[renderer process]_
```html
  <ngx-electron-titlebar></ngx-electron-titlebar>
  <!-- or with all the options -->
  <ngx-electron-titlebar 
    [theme]="theme" [os]="os" [title]="title" [draggable]="draggable" [fixed]="fixed"
    [tall]="tall" [transparent]="transparent" [rtl]="rtl">
  </ngx-electron-titlebar>
```

3. Register context bridges - _[main process - preload script]_
```ts
import { ElectronTitlebarContextBridge } from 'ngx-electron-titlebar';

ElectronTitlebarContextBridge.registerContextBridges();
```

4. Register window event handlers - _[main process]_
```ts
import { ElectronTitlebarIPC } from 'ngx-electron-titlebar';

mainWindow.once('ready-to-show', () => {
  ElectronTitlebarIPC.registerHandlers(mainWindow);
  mainWindow.show();
});
```

## Options
- **theme:** 'light' | 'dark' (default: 'light')  -  theme style
- **draggable:** boolean (default: true)        -  enables/disables the -webkit-app-region CSS property on the root element. - Allows frameless windows to be dragged in an electron application
- **fixed:** boolean (default: false)            -  affixes to the top and floats above the rest of the content so only the - buttons and title are visible. Ignores transparent rule
- **os:** 'mac' | 'win' | 'default' (default: 'default')  -  titlebar style (defaults to current OS, or default if unrecognized)
- **tall:** boolean (default: false)             -  makes the titlebar taller than usual, with the controls slightly inset (mac - only)
- **title:** string (default: '')           -  app title
- **transparent:** boolean (default: false)     -  transparent background for an overlay effect
- **rtl:** boolean (default: false)              -  right to left alignment

## Events
- **onClose:** close button was clicked
- **onMinimize:** minimize button was clicked
- **onMaximize:** maximize button was clicked
- **onFullScreen:** full screen button was clicked


## Roadmap

See the [open issues](https://github.com/bennymeg/ngx-electron-titlebar/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/bennymeg/ngx-electron-titlebar/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/bennymeg/ngx-electron-titlebar/blob/master/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the Apache 2.0 License. See [LICENSE](https://github.com/bennymeg/ngx-electron-titlebar/blob/master/LICENSE.md) for more information.

## Authors

* **[Benny Megidish](https://github.com/bennymeg/)**

## Acknowledgements

* [reese](https://gitlab.com/katacarbix)