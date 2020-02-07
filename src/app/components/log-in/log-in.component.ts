import { Component, OnInit } from '@angular/core';

interface LoginData {
  email: string,
  password: string  
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

loginData : LoginData = {
  email: '',
  password: ''
};
  constructor() { }

  ngOnInit() {
  }

}
