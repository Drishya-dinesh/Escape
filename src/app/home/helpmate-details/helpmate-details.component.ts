import { AfterViewInit, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

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

    constructor(
        private modalService: NgbModal,
        private config: NgbModalConfig) {
        config.backdrop = 'static';
        config.keyboard = false;
    }


    ngAfterViewInit(): void {
        const modalRef = this.modalService.open(this.detailsModal, {size: 'lg'});
        modalRef.result.then((data) => {
            this.onDetailsModalClose.emit();
        }, (reason) => {
            this.onDetailsModalClose.emit();
        });
    }
}
