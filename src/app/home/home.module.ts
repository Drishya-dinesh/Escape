import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {HomeComponent} from "./home.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent, HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FormsModule
  ]
})
export class HomeModule {
}
