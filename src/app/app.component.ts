import { Component } from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  themeClass: string;

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    //todo dynamic theme changing for overlay components
    // // subscribe to some source of theme change events, then...
    // this.themeClass = 'dark-theme';
    //
    // const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    // const themeClassesToRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    // if (themeClassesToRemove.length) {
    //   overlayContainerClasses.remove(...themeClassesToRemove);
    // }
    // overlayContainerClasses.add('dark-theme');
  }
}
