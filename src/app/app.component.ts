import { Component } from '@angular/core';
import { Hero } from './shared/models/hero';
import { BacklogService } from './modules/backlog/backlog.service';

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
    `
})
export class AppComponent { }
