import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {NavbarService} from "../../services/navbar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoPath: string = 'assets/oragh-copy.png';
  hidePass: boolean = true;
  email: string;
  password: string;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.hide();
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl("/dashboard");
    }
  }

  loginClick() {
    //todo validate
    this.authenticationService.login(this.email, this.password);
    //if server said ok - he gud boi ->
    this.router.navigateByUrl("/dashboard");
  }

  registerClick() {
    this.router.navigateByUrl("/register");
  }
}
