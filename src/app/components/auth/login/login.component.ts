import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeView: 'login' | 'register' = 'login';
  loginError = '';
  registerError = '';
  registerSuccess = '';
  readonly loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  readonly registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-zA-Z]).{12,}$/)]],
    confirmPassword: ['', Validators.required]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    if (this.authService.isAuthenticated()) {
      void this.router.navigate(['/portal']);
    }
  }

  setActiveView(view: 'login' | 'register'): void {
    this.activeView = view;
    this.loginError = '';
    this.registerError = '';
    this.registerSuccess = '';
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();
    const isValid = this.authService.login(email ?? '', password ?? '');

    if (!isValid) {
      this.loginError = 'Invalid email or password.';
      return;
    }

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/portal';
    void this.router.navigateByUrl(returnUrl);
  }

  register(): void {
    this.registerError = '';
    this.registerSuccess = '';

    if (this.registerForm.invalid || !this.passwordsMatch()) {
      this.registerForm.markAllAsTouched();

      if (!this.passwordsMatch()) {
        this.registerError = 'Passwords do not match.';
      }

      return;
    }

    const { email, password } = this.registerForm.getRawValue();
    const result = this.authService.register(email ?? '', password ?? '');

    if (!result.success) {
      this.registerError = result.message;
      return;
    }

    this.registerSuccess = 'Account created successfully. Redirecting to your training portal.';
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/portal';
    void this.router.navigateByUrl(returnUrl);
  }

  passwordsMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return !!password && password === confirmPassword;
  }

  fieldHasError(control: AbstractControl | null, errorName: string): boolean {
    return !!control && control.hasError(errorName) && (control.touched || control.dirty);
  }
}