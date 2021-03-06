import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.auth.login('test').subscribe(() => {
      this.router.navigate(['/admin', 'dashboard'])
    })
  }
}
