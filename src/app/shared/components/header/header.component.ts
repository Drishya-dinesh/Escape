import {Component, OnInit} from '@angular/core';
import {AppConstantsService} from '../../constants/app-constants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menuItems = [
    {text: 'Dashboard', route: '/dashboard'}
  ];

  showHelp: boolean = false;

  constructor(public constants: AppConstantsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  isActiveRoute(route: string) {
    return this.router.url.includes(route);
  }

  navigateToRoute(route: string, _i: number) {
  }

  onHelpClick() {
    this.showHelp = true;
  }

  onHelpClose() {
    this.showHelp = false;
  }

  logout() {
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
