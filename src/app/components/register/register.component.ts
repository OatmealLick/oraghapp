import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  logoPath: string = 'assets/oragh-copy.png';
  hidePass: boolean = true;
  email: string = '';

  constructor() { }

  ngOnInit() {
  }
}
