import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AppConstantsService} from "./shared/constants/app-constants.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: Title, private constants: AppConstantsService) {
    titleService.setTitle(this.constants.APPLICATION_NAME);
  }
}
