import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AccountGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        console.log("guard called");
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/account/login']);
        return false;
    }
}