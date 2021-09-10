import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
// declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // private $BODY:any;
  // private $MENU_TOGGLE:any;
  // private $SIDEBAR_MENU:any;
  // private $SIDEBAR_FOOTER:any;
  // private $LEFT_COL:any;
  // private $RIGHT_COL:any;
  // private $NAV_MENU:any;
  // private $FOOTER:any;

  constructor() { }

  ngOnInit(): void {
  }
  anchorClicked(event: any) {

    let target = event.target.id;
    let $li = $("#" + target.replace("chevron", "li")).parent();

    if ($li.is(".active")) {
      $li.removeClass("active active-sm");
      $("ul:first", $li).slideUp(function() {});
    } else {
      // prevent closing menu if we are on child menu
      if (!$li.parent().is(".child_menu")) {
        $("#sidebar-menu")
          .find("li")
          .removeClass("active active-sm");
        $("#sidebar-menu")
          .find("li ul")
          .slideUp();
      }

      $li.addClass("active");

      $("ul:first", $li).slideDown(function() {});
    }
  }
  //  setContentHeight():void {
  //   // reset height
  //   this.$RIGHT_COL.css("min-height", $(window).height());

  //   const bodyHeight = this.$BODY.outerHeight();
  //   const footerHeight = this.$BODY.hasClass("footer_fixed") ? -10 : this.$FOOTER.height();
  //   const leftColHeight = this.$LEFT_COL.eq(1).height() + this.$SIDEBAR_FOOTER.height();
  //   let contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

  //   // normalize content
  //   contentHeight -= this.$NAV_MENU.height() + footerHeight;

  //   this.$RIGHT_COL.css("min-height", contentHeight);
  // }
  // plot():void {
  //   console.log("in sidebar");

  //   this.$BODY = $("body");
  //   this.$MENU_TOGGLE = $("#menu_toggle");
  //   this.$SIDEBAR_MENU = $("#sidebar-menu");
  //   this.$SIDEBAR_FOOTER = $(".sidebar-footer");
  //   this.$LEFT_COL = $(".left_col");
  //   this.$RIGHT_COL = $(".right_col");
  //   this.$NAV_MENU = $(".nav_menu");
  //   this.$FOOTER = $("footer");

  //   let $a = this.$SIDEBAR_MENU.find("a");
  //   let that = this;
  //   this.$SIDEBAR_MENU.find("a").on("click", function(ev:any) {
  //     let $li = $().parent();

  //     if ($li.is(".active")) {
  //       $li.removeClass("active active-sm");
  //       $("ul:first", $li).slideUp(function() {
  //         that.setContentHeight();
  //       });
  //     } else {
  //       // prevent closing menu if we are on child menu
  //       if (!$li.parent().is(".child_menu")) {
  //         that.$SIDEBAR_MENU.find("li").removeClass("active active-sm");
  //         that.$SIDEBAR_MENU.find("li ul").slideUp();
  //       }

  //       $li.addClass("active");

  //       $("ul:first", $li).slideDown(function() {
  //         that.setContentHeight();
  //       });
  //     }
  //   });

  //   // toggle small or large menu
   
  //  this.$MENU_TOGGLE.on("click", function() {
  //     if (that.$BODY.hasClass("nav-md")) {
  //       that.$SIDEBAR_MENU.find("li.active ul").hide();
  //       that.$SIDEBAR_MENU
  //         .find("li.active")
  //         .addClass("active-sm")
  //         .removeClass("active");
  //     } else {
  //       that.$SIDEBAR_MENU.find("li.active-sm ul").show();
  //       that.$SIDEBAR_MENU
  //         .find("li.active-sm")
  //         .addClass("active")
  //         .removeClass("active-sm");
  //     }

  //     that. $BODY.toggleClass("nav-md nav-sm");

  //     that.setContentHeight();
  //   });
  // }


}


