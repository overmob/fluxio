import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  isLoading = false;
  errorMessage = '';
  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.isLoading = true;

    try {
      const { email, password } = this.form.getRawValue();
      if (!email || !password) {
        return;
      }
      await this.authService.signInWithEmail(email, password);
    } catch (error) {
      this.errorMessage = 'Email o password non validi. Riprova.';
    } finally {
      this.isLoading = false;
    }
  }

  async register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.errorMessage = '';
    this.isLoading = true;

    try {
      const { email, password } = this.form.getRawValue();
      if (!email || !password) {
        return;
      }
      await this.authService.registerWithEmail(email, password);
    } catch (error) {
      this.errorMessage = 'Registrazione non riuscita. Verifica i dati.';
    } finally {
      this.isLoading = false;
    }
  }

  async signInWithGoogle() {
    this.errorMessage = '';
    this.isLoading = true;

    try {
      await this.authService.signInWithGoogle();
    } catch (error) {
      this.errorMessage = 'Accesso Google non riuscito. Riprova.';
    } finally {
      this.isLoading = false;
    }
  }
}
