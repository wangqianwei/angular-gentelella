import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tables', component: TablesComponent },
  { path: '403', component: Error403Component },
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
