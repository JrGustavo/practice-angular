import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent],
  template: `
    <app-hello-world></app-hello-world>
  `
})
export class AppComponent { }
