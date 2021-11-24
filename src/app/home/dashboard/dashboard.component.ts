import { Component, OnInit } from '@angular/core';
import { AppConstantsService } from "../../shared/constants/app-constants.service";


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    isLocationFetched = false;

    helpMates = [
        {
            mateId: '1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'sample@mail.com',
            location: 'Scarborough',
            phone: '+1 453 553 333',
            lat: 43.766966,
            lng: -79.262134,
            img: 'john.png',
            distance: 0
        },
        {
            mateId: '2',
            firstName: 'Joey',
            lastName: 'Mathew',
            email: 'sample@mail.com',
            location: 'Scarborough',
            phone: '+1 453 553 333',
            lat: 43.769923,
            lng: -79.261415,
            img: 'john.png',
            distance: 0
        },
        {
            mateId: '3',
            firstName: 'Edward',
            lastName: 'Jenner',
            email: 'sample@mail.com',
            location: 'Scarborough',
            phone: '+1 453 553 333',
            lat: 43.765236,
            lng: -79.259578,
            img: 'john.png',
            distance: 0
        },
        {
            mateId: '4',
            firstName: 'Gurleen',
            lastName: 'Singh',
            email: 'sample@mail.com',
            location: 'Scarborough',
            phone: '+1 453 553 333',
            lat: 43.769844,
            lng: -79.256570,
            img: 'john.png',
            distance: 0
        },
        {
            mateId: '5',
            firstName: 'Jean',
            lastName: 'Marie',
            email: 'sample@mail.com',
            location: 'Scarborough',
            phone: '+1 453 553 333',
            lat: 43.767176,
            lng: -79.266432,
            img: 'john.png',
            distance: 0
        },
        {
            mateId: '6',
            firstName: 'Carol',
            lastName: 'Gagne',
            email: 'sample@mail.com',
            location: 'Scarborough',
            phone: '+1 453 553 333',
            lat: 43.768513,
            lng: -79.257142,
            img: 'john.png',
            distance: 0
        },
        {
            mateId: '7',
            firstName: 'Anu',
            lastName: 'Tanna',
            email: 'sample@mail.com',
            location: 'Scarborough',
            phone: '+1 453 553 333',
            lat: 43.769346,
            lng: -79.264673,
            img: 'john.png',
            distance: 0
        }
    ];

    selectedMate: any;

    userDetails = {
        firstName: 'Drishya',
        lastName: 'Dinesh',
        location: 'Scarborough',
        phone: '+1 453 553 333',
        lat: 43.768357,
        lng: -79.260781,
        img: 'john.png',
        distance: 0
    };

    showDetailsModal = true;


    constructor(public constants: AppConstantsService) {
    }


    ngOnInit(): void {
        this.getUserLocation();
    }

    getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                // this.userDetails.lat = position.coords.latitude;
                // this.userDetails.lng = position.coords.longitude;
                this.isLocationFetched = true;
                this.findMateDistance();
            }, (err) => {
                console.log(err)
            });
        } else {
            alert('Please allow location permission.')
        }
    }

    findMateDistance() {
        this.helpMates.forEach(mate => {
            mate.distance = this.getDistanceFromLatLonInMeter(mate.lat, mate.lng)
        })
        this.helpMates.sort((mate1, mate2) => mate1.distance > mate2.distance ? 1 : mate1.distance < mate2.distance ? -1 : 0)

    }

    onMateSelect(mate: any) {
        this.selectedMate = mate;
        this.showDetailsModal = true;
    }

    getDistanceFromLatLonInMeter(lat2: number, lon2: number) {
        let lat1 = this.userDetails.lat;
        let lon1 = this.userDetails.lng;
        let R = 6371; // Radius of the earth in km
        let dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        let dLon = this.deg2rad(lon2 - lon1);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round((R * c) * 1000); // Distance in km
    }

    deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }

    onDetailsModalClose() {
        this.showDetailsModal = false;
    }
}