import {Component, OnInit} from '@angular/core';
import {AppConstantsService} from "../../shared/constants/app-constants.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sections = [
    {
      text: 'Bullish',
      image: '',
      description: ''
    },
    {
      text: 'Bullish',
      image: '',
      description: ''
    },
    {
      text: 'Bullish',
      image: '',
      description: ''
    }
  ]

  constructor(
    public constants: AppConstantsService
  ) {
  }

  ngOnInit(): void {
  }

}
