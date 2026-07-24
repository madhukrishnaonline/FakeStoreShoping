import { Component, OnInit } from '@angular/core';
import { FakestoreServiceAPI } from '../Services/service.fakestoreapi';
import { FakestoreUsersContract } from '../Contracts/FakestoreUsersContract';
import { Router } from '@angular/router';
import { AuthServiceComponent } from '../Services/service.auth';

@Component({
  selector: 'app-shopping-register',
  templateUrl: './shopping-register.component.html',
  styleUrls: ['./shopping-register.component.css']
})
export class ShoppingRegisterComponent implements OnInit {
  public Users: any;
  public key: any;
  public isFetching: boolean = true;

  constructor(private users: FakestoreServiceAPI, private auth: AuthServiceComponent, private router:Router) { }

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
       this.isFetching=false;
    });
  }

  public isSubmitted: boolean = false;
  public error = null;
  public SubmitClick(data: any) {
    // alert(JSON.stringify(data));
    this.isSubmitted = true;
    this.users.loginUser(data).subscribe(token => {
      this.key = token;
        this.auth.login();
        this.isSubmitted = false;
        alert("Login Successfull...now you can add a Product");
        this.router.navigate(['add/product']);
      data.reset();
    }, (error) => {
      this.error = error.status
      this.isSubmitted = false;
      alert(this.error + " UnAuthorized...");
    });//loginUser
       
  }//SubmitClick()

}
