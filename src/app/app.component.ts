import { Component } from '@angular/core';
import { BacklogService } from './modules/backlog/backlog.service';
import { AuthService } from './core/services/auth.service';
import { Store } from './core/app-store';
import { PtUser } from './shared/models/domain';

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
  constructor(
    private authService: AuthService
  ) {
    authService.login({ username: 'alex', password: 'nuvious' });
  }
}
