import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class AuthServiceComponent 
{
    isLoggedIn: boolean = false;

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    isAuthenticated()
    {
       return this.isLoggedIn;
    }
}