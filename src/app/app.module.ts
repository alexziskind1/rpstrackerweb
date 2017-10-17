import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppConfigModule } from './app-config.module';
import { BacklogModule } from './modules/backlog/backlog.module';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { Store } from './core/app-store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpModule,

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
