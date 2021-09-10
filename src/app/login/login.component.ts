import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from '../globals.service';
// declare var  isNotLogin:boolean ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,private globalsService: GlobalsService) {
  }


  ngOnInit(): void {
   this.globalsService.isNotLogin = false;
  }

  /**
   * 登录
   */
  login(): void {
    this.router.navigate(['', {}]);
  }
}
