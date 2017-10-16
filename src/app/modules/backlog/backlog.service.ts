import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../../app-config.module';


@Injectable()
export class BacklogService {
    constructor(
        @Inject(APP_CONFIG) config: AppConfig,
        private httpClient: HttpClient) { }

}
