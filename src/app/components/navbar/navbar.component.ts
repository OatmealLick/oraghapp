import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public navbarService: NavbarService,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.navbarService.hide();
    this.router.navigateByUrl("/home");
  }
}
