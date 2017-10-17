import { NgModule, Optional, SkipSelf, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { LoggerService } from './services/logger.service';

import { StorageService } from './services/storage.service';
import { StorageWebService } from './services/web/storage-web.service';
import { APP_CONFIG, AppConfig } from '../app-config.module';
import { NavigationService } from './services/navigation.service';



@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        LoggerService,
        NavigationService
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
