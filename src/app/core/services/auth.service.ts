import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { LoginModel } from '../../shared/models/login.model';
import { User } from '../../shared/models/user.model';
import { StorageService } from './storage.service';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';

@Injectable()
export class AuthService {

    constructor(private storageService: StorageService) { }

    isLoggedIn(): boolean {
        return !!this.storageService.getItem(AUTH_TOKEN_KEY);
    }

    login(loginModel: LoginModel): Observable<User> {
        return of(<User>{
            firstName: 'Alex',
            lastName: 'Ziskind',
        });
    }
}
