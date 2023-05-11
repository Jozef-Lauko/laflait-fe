import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Auth} from "../model/auth.model";
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  form = new FormGroup({
    username: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required)
  })

  message: string | undefined;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.message = this.route.snapshot.queryParams['message'];
  }

  login(): void {
    if (this.form.valid) {
      if (this.form.controls.username.value && this.form.controls.password.value) {
        const auth: Auth = {
          username: this.form.controls.username.value,
          password: this.form.controls.password.value
        };
        this.authService.login(auth).subscribe(() => { this.router.navigate(['/']); });
      }
    }
  }

}
