import { Component } from '@angular/core';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme: 'light' | 'dark' = 'dark';  // theme style
  draggable: boolean = true;         // enables/disables the -webkit-app-region CSS property on the root element. Allows frameless windows to be dragged in an electron application
  fixed: boolean = false;            // affixes to the top and floats above the rest of the content so only the buttons and title are visible. Ignores transparent rule
  os: 'mac' | 'win' | 'default' = 'mac';  // titlebar style (defaults to current OS, or default if unrecognized)
  tall: boolean = false;             // makes the titlebar taller than usual, with the controls slightly inset (mac only)
  title: string = 'Title';           // app title
  transparent: boolean = false;      // transparent background for an overlay effect
  rtl: boolean = false;              // right to left alignment

  faGithub = faGithub;
  faNpm = faNpm;
}
