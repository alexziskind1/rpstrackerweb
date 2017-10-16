import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppConfigModule } from './app-config.module';
import { BacklogModule } from './modules/backlog/backlog.module';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppConfigModule,
    AppRoutingModule,
    BacklogModule,
    BrowserModule,
    CoreModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
