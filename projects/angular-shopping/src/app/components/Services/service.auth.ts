import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth_token';

@Injectable({
    providedIn: 'root'
})
export class AuthServiceComponent {
    constructor() { }

    login(token?: string) {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
        }
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
    }

    getToken(): string | null {
        return localStorage.getItem(TOKEN_KEY);
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}