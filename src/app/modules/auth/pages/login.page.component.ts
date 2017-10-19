import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../core/services/navigation.service';
import { AuthService } from '../../../core/services/auth.service';
import { PtUser } from '../../../shared/models/domain';


@Component({
    moduleId: module.id,
    selector: 'app-login-page',
    templateUrl: 'login.page.component.html'
})
export class LoginPageComponent implements OnInit {

    public email = 'alex@email.com';
    public password = 'nuvious';

    constructor(
        private authService: AuthService,
        private navigationService: NavigationService
    ) { }

    ngOnInit() { }

    public onLoginTap(args) {
        this.login(true);
    }

    public login(isValid: boolean) {
        if (isValid) {
            this.authService.login({ username: this.email, password: this.password })
                .subscribe((user: PtUser) => {
                    this.navigationService.navigate(['/backlog'], { clearHistory: true });
                });
        }
    }

    /*
    public register(isValid: boolean) {
        if (isValid) {
            this.userService.register(this.email, this.password, this.displayName)
                .then(user => {
                    this.navigationService.navigate(['/home'], { clearHistory: true });
                });
        }
    }
    */

    public logout() {
        this.authService.logout();
    }

    /*
    public update() {
        this.authService.updateUserDetails({
            displayName: this.displayName,
            photoURL: null,
            email: this.email
        });
    }

    public reset() {
        this.authService.resetPassword(email);
    }*/
}
