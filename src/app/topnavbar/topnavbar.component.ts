import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from '../globals.service';
import * as $ from "jquery";

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})

export class TopnavbarComponent implements OnInit {

  constructor(private router: Router, private globalsService: GlobalsService) {
  }


  /**
   * 
   * @param event 
   */
  toggleClicked(event: any) {
    console.info(event.target.id);
    var body = $("body");
    var menu = $("#sidebar-menu");

    // toggle small or large menu
    if (body.hasClass("nav-md")) {
      menu.find("li.active ul").hide();
      menu
        .find("li.active")
        .addClass("active-sm")
        .removeClass("active");
    } else {
      menu.find("li.active-sm ul").show();
      menu
        .find("li.active-sm")
        .addClass("active")
        .removeClass("active-sm");
    }
    body.toggleClass("nav-md nav-sm");
  }

  /**
   * 初始化
   */
  ngOnInit(): void {
  }

  /**
   * 退出登录
   */
  logout(): void {
    // TODO：清空缓存
    this.globalsService.isNotLogin = false;
    this.globalsService.globalVar.next(false);
    this.router.navigate(['/login', {}]);
  }

}
