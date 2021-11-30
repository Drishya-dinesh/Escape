import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderModule} from "../shared/components/header/header.module";
import {HomeComponent} from "./home.component";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {HelpmateDetailsComponent} from './helpmate-details/helpmate-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    DashboardComponent, HomeComponent, HelpmateDetailsComponent, ConfirmationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FormsModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({})
  ]
})
export class HomeModule {
}
