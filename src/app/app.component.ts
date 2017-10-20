import { Component } from '@angular/core';

import { Store } from './core/app-store';
import { PtUser } from './shared/models/domain';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }
}
