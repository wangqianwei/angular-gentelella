import { Component, OnInit } from '@angular/core';
import { GlobalsService } from './globals.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private globalsService: GlobalsService) {
  }
  title = 'angular-gentelella';
  isNotLogin = false;

  ngOnInit() {
    let that = this
    this.globalsService.globalVar.subscribe(login => {
      that.isNotLogin = login;
    })
    that.isNotLogin = true;
    // this.isNotLogin = true;
    console.info('app')
    // isNotLogin = this.globalsService.getk();
  }

}
