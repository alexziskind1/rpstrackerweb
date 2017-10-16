import { NgModule, InjectionToken, TypeProvider } from '@angular/core';
import { StorageService } from './core/services/storage.service';
import { StorageWebService } from './core/services/web/storage-web.service';
import { StorageNsService } from './core/services/ns/storage-ns.service';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export type AppType = 'Ns' | 'Web';

export interface AppConfig {
    appType: AppType;
    apiEndpoint: string;
    storageServiceClass: TypeProvider;
}

export const APP_WEB_CONFIG: AppConfig = {
    appType: 'Web',
    apiEndpoint: 'http://localhost:8080',
    storageServiceClass: StorageWebService
};

const useConfig = APP_WEB_CONFIG;

@NgModule({
    providers: [
        { provide: APP_CONFIG, useValue: useConfig },
        { provide: StorageService, useClass: useConfig.storageServiceClass }
    ]
})
export class AppConfigModule { }
