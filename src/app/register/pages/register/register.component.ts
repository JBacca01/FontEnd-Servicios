import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name: string | number = '';
  email: string | number = '';
  password: string | number = '';
  blockChars: RegExp = /^[^<>*!'`]+$/;
}
