import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface AuthUserRecord {
  email: string;
  password: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly sessionKey = 'datagrad-session-user';
  private readonly usersKey = 'datagrad-registered-users';
  private readonly authState = new BehaviorSubject<boolean>(this.hasStoredSession());
  private readonly currentUserState = new BehaviorSubject<string | null>(this.getStoredSessionUser());

  readonly isLoggedIn$ = this.authState.asObservable();
  readonly currentUser$ = this.currentUserState.asObservable();

  login(email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();
    const matchedUser = this.getUsers().find(user => user.email === normalizedEmail && user.password === password);
    const isValid = !!matchedUser;

    if (isValid) {
      sessionStorage.setItem(this.sessionKey, normalizedEmail);
      this.authState.next(true);
      this.currentUserState.next(normalizedEmail);
    }

    return isValid;
  }

  register(email: string, password: string): { success: boolean; message: string } {
    const normalizedEmail = email.trim().toLowerCase();
    const users = this.getUsers();

    if (users.some(user => user.email === normalizedEmail)) {
      return {
        success: false,
        message: 'An account with that email already exists.'
      };
    }

    const updatedUsers: AuthUserRecord[] = [
      ...users,
      {
        email: normalizedEmail,
        password,
        createdAt: new Date().toISOString()
      }
    ];

    localStorage.setItem(this.usersKey, JSON.stringify(updatedUsers));
    sessionStorage.setItem(this.sessionKey, normalizedEmail);
    this.authState.next(true);
    this.currentUserState.next(normalizedEmail);

    return {
      success: true,
      message: 'Registration successful.'
    };
  }

  logout(): void {
    sessionStorage.removeItem(this.sessionKey);
    this.authState.next(false);
    this.currentUserState.next(null);
  }

  isAuthenticated(): boolean {
    return this.authState.value;
  }

  getCurrentUser(): string | null {
    return this.currentUserState.value;
  }

  private hasStoredSession(): boolean {
    return !!this.getStoredSessionUser();
  }

  private getStoredSessionUser(): string | null {
    return sessionStorage.getItem(this.sessionKey);
  }

  private getUsers(): AuthUserRecord[] {
    const storedUsers = localStorage.getItem(this.usersKey);

    if (!storedUsers) {
      return [];
    }

    try {
      return JSON.parse(storedUsers) as AuthUserRecord[];
    } catch {
      return [];
    }
  }
}