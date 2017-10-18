import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';

import { StorageService } from './storage.service';
import { PtUser } from '../../shared/models/domain';
import { PtLoginModel, PtAuthToken } from '../../shared/models';
import { Store } from '../app-store';
import { AppConfig, APP_CONFIG } from '../../app-config.module';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';

@Injectable()
export class AuthService {

    private get authUrl() { return `${this.config.apiEndpoint}/auth` }

    get token(): PtAuthToken {
        const t = this.storageService.getItem(AUTH_TOKEN_KEY);
        return JSON.parse(t);
    }

    set token(authToken: PtAuthToken) {
        this.storageService.setItem(AUTH_TOKEN_KEY, JSON.stringify(authToken));
    }

    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: Http,
        private store: Store,
        private storageService: StorageService
    ) { }

    public isLoggedIn(): boolean {
        return !!this.storageService.getItem(AUTH_TOKEN_KEY);
    }

    public login(loginModel: PtLoginModel): Observable<PtUser> {
        this.loginInternal(loginModel)
            .subscribe();
        return this.store.select<PtUser>('currentUser');
    }

    private loginInternal(user: PtLoginModel) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(
            this.authUrl,
            JSON.stringify({
                username: user.username,
                password: user.password,
                grant_type: 'password'
            }),
            { headers: headers }
        )
            .map(response => response.json())
            .do(data => {
                this.store.set<PtUser>('currentUser', data.user);
                this.token = data.authToken.access_token;
            })
            .catch(this.handleErrors);
    }

    public logout() {
        this.storageService.setItem(AUTH_TOKEN_KEY, '');
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
