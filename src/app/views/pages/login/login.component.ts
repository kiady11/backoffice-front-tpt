import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  mail: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private route: Router
  ) { }

  public user: User =    {
      mail: 'kikirkt11@yahoo.com',
      password: 'BonjourO1234!'
    }

  userInput = {
    mail:'',
    password:''
  }

  ngOnInit() {

  }

  connect() {
    this.connexion();
  }

  connexion() {
    if(this.userInput.mail === this.user.mail && this.userInput.password === this.user.password) {
      console.log('userInput ', this.userInput)
      console.log('user ', this.user)
      console.log(this.userInput.mail === this.user.mail)
      console.log(this.userInput.password === this.user.password)
      console.log(    (this.userInput.mail === this.user.mail && this.userInput.password === this.user.password)         )
      this.route.navigateByUrl('/dashboard');
    } else {
      this.route.navigateByUrl('/404');
    }
  }

}
