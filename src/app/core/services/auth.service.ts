import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { StorageService } from './storage.service';
import { PtUser } from '../../shared/models/domain';
import { PtLoginModel } from '../../shared/models';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';

@Injectable()
export class AuthService {

    constructor(private storageService: StorageService) { }

    isLoggedIn(): boolean {
        return !!this.storageService.getItem(AUTH_TOKEN_KEY);
    }

    login(loginModel: PtLoginModel): Observable<PtUser> {
        return of(<PtUser>{
            fullName: 'Alex Ziskind'
        });
    }
}
