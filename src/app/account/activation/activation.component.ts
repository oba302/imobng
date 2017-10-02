import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AccountService } from '../account.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css'],
})
export class ActivationComponent implements OnInit {
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AccountService,
  ) { }

  ngOnInit() {
     this.route.queryParams    
    .switchMap((params: Params) => {console.log(params); return this.service.activate(params['token'], params['email'])})
    .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });

  }

}
