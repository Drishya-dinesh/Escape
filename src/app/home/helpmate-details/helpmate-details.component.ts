import {AfterViewInit, Component, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-helpmate-details',
  templateUrl: './helpmate-details.component.html',
  styleUrls: ['./helpmate-details.component.scss']
})
export class HelpmateDetailsComponent implements AfterViewInit {

  @ViewChild('detailsModal') detailsModal: TemplateRef<any> | undefined;

  @Output() onDetailsModalClose: EventEmitter<any> = new EventEmitter();

  @Input() mateDetails: any;
  @Input() userDetails: any;

  helpMateMarker: any = {
    url: 'assets/icons/marker.svg',
    scaledSize: {
      height: 50,
      width: 30,
      anchor: {x: 19, y: -10}
    },
    labelOrigin: {x: 15, y: 40}
  }

  myMarker: any = {
    url: 'assets/icons/marker-red.svg',
    scaledSize: {
      height: 50,
      width: 30,
      anchor: {x: 19, y: -10}
    },
    labelOrigin: {x: 15, y: 40}
  }

  center = {
    lat: 0,
    lng: 0
  }

  constructor(
    private modalService: NgbModal,
    private config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngAfterViewInit(): void {
    this.center = this.midpoint(this.mateDetails.lat, this.mateDetails.lng, this.userDetails.lat, this.userDetails.lng);
    const modalRef = this.modalService.open(this.detailsModal, {size: 'lg'});
    modalRef.result.then((data) => {
      this.onDetailsModalClose.emit();
    }, (reason) => {
      this.onDetailsModalClose.emit();
    });
  }

  midpoint(lat1: number, lng1: number, lat2: number, lng2: number) {

    lat1 = this.deg2rad(lat1);
    lng1 = this.deg2rad(lng1);
    lat2 = this.deg2rad(lat2);
    lng2 = this.deg2rad(lng2);

    let dlng = lng2 - lng1;
    let Bx = Math.cos(lat2) * Math.cos(dlng);
    let By = Math.cos(lat2) * Math.sin(dlng);
    let lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2),
      Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By));
    let lng3 = lng1 + Math.atan2(By, (Math.cos(lat1) + Bx));

    return {lat: (lat3 * 180) / Math.PI, lng: (lng3 * 180) / Math.PI}
  }

  deg2rad(degrees: number) {
    return degrees * Math.PI / 180;
  }
}
