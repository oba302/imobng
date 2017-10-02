import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form;
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AccountService
  ) { }

  ngOnInit() {
  }

  signup() {
      this.loading = true;
      console.log(this.model.email);
      this.authenticationService.signup(this.model.name, this.model.email, this.model.password, this.model.password_confirmation)
          .subscribe(result => {
              if (result === true) {
                  this.router.navigate(['/account/login']);
              } else {
                  this.form.reset();
                  this.error = 'An Error Ocurred...';
                  this.loading = false;
              }
          });
  }

}
