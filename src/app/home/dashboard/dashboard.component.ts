import { Component, OnInit } from '@angular/core';
import { AppConstantsService } from '../../shared/constants/app-constants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isLocationFetched = false;

  helpMates = [
    // {
    //   mateId: '1',
    //   firstName: '911',
    //   lastName: '',
    //   email: 'email 33 division',
    //   location: '50 Upjohn Rd., Toronto, ON , M3B 2W1',
    //   phone: '911',
    //   lat: 43.769923,
    //   lng: -79.261415,
    //   img: '911.jpg',
    //   distance: 0,
    // },
    {
      mateId: '2',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe34@mail.com',
      location: '23 kingsbury st,scarborough M1S1W3',
      phone: '+1 476 345 8076',
      lat: 43.766966,
      lng: -79.262134,
      img: 'john.jpg',
      distance: 0,
    },
    {
      mateId: '2',
      firstName: 'Joey',
      lastName: 'Mathew',
      email: 'jmathewe@gmail.com',
      location: '125 villege green sq, Agincourt,scarborough M1S0G3',
      phone: '+1 409 678 3241',
      lat: 43.767176,
      lng: -79.266432,
      img: 'joey.jpg',
      distance: 0,
    },
    {
      mateId: '3',
      firstName: 'Edward',
      lastName: 'Jenner',
      email: 'sjenneredward345@gmail.com',
      location: '8 welcott ave, scarborough M1L4K1',
      phone: '+1 489 675 4433',
      lat: 43.765236,
      lng: -79.259578,
      img: 'edward.jpg',
      distance: 0,
    },
    {
      mateId: '4',
      firstName: 'Gurleen',
      lastName: 'Singh',
      email: 'gurleenkaur45@gmail.com',
      location: 'Scarborough',
      phone: '+1 437 345 7646',
      lat: 43.769844,
      lng: -79.25657,
      img: 'gurleen.jpg',
      distance: 0,
    },
    {
      mateId: '5',
      firstName: 'Jean',
      lastName: 'Marie',
      email: 'crystalclear5590@mail.com',
      location: '20 stonehill crt,scarborough M1W2Y6',
      phone: '+1 453 553 333',
      lat: 43.766966,
      lng: -79.262134,
      img: 'jean.jpg',
      distance: 0,
    },
    {
      mateId: '6',
      firstName: 'Carol',
      lastName: 'Gagne',
      email: 'carolgagne@gmail.com',
      location: 'Scarborough',
      phone: '+1 437 235 9745',
      lat: 43.768513,
      lng: -79.257142,
      img: 'carol.jpg',
      distance: 0,
    },
    {
      mateId: '7',
      firstName: 'Anu',
      lastName: 'Tanna',
      email: 'annutanna@gmail.com',
      location: '1498 rendale ave,scarborugh m3W 1u7',
      phone: '+1 498 567 3421',
      lat: 43.769346,
      lng: -79.264673,
      img: 'anu.jpg',
      distance: 0,
    },
  ];

  selectedMate: any;

  userDetails = {
    firstName: 'Drishya',
    lastName: 'Dinesh',
    location: '20 stonehill crt scarborough m1w2y6',
    phone: '+1 454 345 8765',
    lat: 43.768357,
    lng: -79.260781,
    img: 'john.png',
    distance: 0,
  };

  showDetailsModal = false;

  showConfirmationModal = false;

  helpMateMarker: any = {
    url: 'assets/icons/marker.svg',
    scaledSize: {
      height: 80,
      width: 30,
    },
    labelOrigin: { x: 15, y: 50 },
  };

  myMarker: any = {
    url: 'assets/icons/marker-red.svg',
    scaledSize: {
      height: 80,
      width: 30,
    },
    labelOrigin: { x: 15, y: 60 },
  };

  constructor(public constants: AppConstantsService) {}

  ngOnInit(): void {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // this.userDetails.lat = position.coords.latitude;
          // this.userDetails.lng = position.coords.longitude;
          this.isLocationFetched = true;
          this.findMateDistance();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert('Please allow location permission.');
    }
  }

  findMateDistance() {
    this.helpMates.forEach((mate) => {
      mate.distance = this.getDistanceFromLatLonInMeter(mate.lat, mate.lng);
    });
    this.helpMates.sort((mate1, mate2) =>
      mate1.distance > mate2.distance
        ? 1
        : mate1.distance < mate2.distance
        ? -1
        : 0
    );
  }

  onMateSelect(mate: any) {
    this.selectedMate = mate;
    this.showDetailsModal = true;
  }

  getDistanceFromLatLonInMeter(lat2: number, lon2: number) {
    let lat1 = this.userDetails.lat;
    let lon1 = this.userDetails.lng;
    let R = 6371; // Radius of the earth in km
    let dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    let dLon = this.deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 1000); // Distance in km
  }

  deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  onDetailsModalClose() {
    this.showDetailsModal = false;
  }

  onConfirmationModalClose() {
    this.showConfirmationModal = false;
  }

  onPanicButtonClick() {
    this.showConfirmationModal = true;
  }
}
