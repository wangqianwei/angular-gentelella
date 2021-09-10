import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { Error403Component } from './error403/error403.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { GlobalsService } from './globals.service';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopnavbarComponent,
    FooterComponent,
    Error404Component,
    HomeComponent,
    Error403Component,
    Error500Component,
    LoginComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
