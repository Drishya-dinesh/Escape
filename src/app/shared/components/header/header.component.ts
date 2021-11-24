import { Component, OnInit } from '@angular/core';
import { AppConstantsService } from '../../constants/app-constants.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(public constants: AppConstantsService, private router: Router) {
    }

    public menuItems = [
        {text: 'Dashboard', route: '/dashboard'}
    ];

    ngOnInit(): void {
    }

    isActiveRoute(route: string) {
        return this.router.url.includes(route);
    }

    navigateToRoute(route: string, _i: number) {
    }
}
