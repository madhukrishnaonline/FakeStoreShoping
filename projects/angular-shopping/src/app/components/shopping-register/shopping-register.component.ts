import { Component, OnInit } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { Router } from '@angular/router';
import { AuthServiceComponent } from '../Services/service.auth';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-shopping-register',
  templateUrl: './shopping-register.component.html',
  styleUrls: ['./shopping-register.component.css']
})
export class ShoppingRegisterComponent implements OnInit {
  public Users: any;
  public key: any;
  public isFetching: boolean = true;

  constructor(private users: FakestoreServiceAPI, private auth: AuthServiceComponent, private router: Router, private notifier: NotificationService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  public usersError = null;
  public fetchUsers() {
    this.isFetching = true;
    this.users.getAllUsers().subscribe(data => {
      this.Users = data
      this.isFetching = false;
    }, (error) => {
      this.usersError = error.message
      this.isFetching = false;
    });
  }

  public isSubmitted: boolean = false;
  public error = null;
  public SubmitClick(form: NgForm) {
    this.isSubmitted = true;
    this.users.loginUser(form.value).subscribe(tokenResp => {
      this.key = tokenResp;
      const token = tokenResp && (tokenResp.token || tokenResp);
      if (token) {
        this.auth.login(token);
      }
      this.isSubmitted = false;
      this.notifier.showSuccess('Login successful — you can add a product');
      this.router.navigate(['add/product']);
      form.reset();
    }, (error) => {
      this.error = error.status;
      this.isSubmitted = false;
      this.notifier.showError(this.error + " UnAuthorized...");
    });

  }//SubmitClick()

}
