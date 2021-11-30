import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import { HelpComponent } from './help/help.component';
import {NgbPopoverModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [HeaderComponent, HelpComponent],
    imports: [CommonModule, NgbPopoverModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
