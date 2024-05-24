import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Payroll Management System';

  constructor(private router: Router, private loginService: LoginService) {}

  // Logout function
  logout(): void {
    // Call the logout method from the login service
    this.loginService.logout();
    // Navigate the user to the login page
    this.router.navigate(['/login']);
  }
}
