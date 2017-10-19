import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppConfigModule } from './app-config.module';
import { BacklogModule } from './modules/backlog/backlog.module';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { Store } from './core/app-store';
import { AuthModule } from './modules/auth/auth.module';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(<any>http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    HttpModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),

    AuthModule,
    AppConfigModule,
    AppRoutingModule,
    BacklogModule,
    CoreModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
