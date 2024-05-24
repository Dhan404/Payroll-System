import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn = false;

  // Replace 'demoUser' and 'demoPassword' with your desired username and password
  private validUsername = 'admin';
  private validPassword = 'admin@123';

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.isLoggedIn = true;
      // Set isLoggedIn to true and store it in local storage
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    // Clear isLoggedIn from local storage on logout
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  setLoggedIn(status: boolean): void {
    this.isLoggedIn = status;
  }
}
