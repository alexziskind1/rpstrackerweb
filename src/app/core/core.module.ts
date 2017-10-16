import { NgModule, Optional, SkipSelf, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { LoggerService } from './services/logger.service';
// import { NavComponent } from './nav/nav.component';
import { StorageService } from './services/storage.service';
import { StorageWebService } from './services/web/storage-web.service';
import { APP_CONFIG, AppConfig } from '../app-config.module';



@NgModule({
    imports: [
        CommonModule
    ],
    // exports: [NavComponent],
    // declarations: [NavComponent],
    providers: [
        AuthService,
        LoggerService
    ]
})
export class CoreModule {
    constructor(
        @Inject(APP_CONFIG) config: AppConfig,
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
        }
    }
}
