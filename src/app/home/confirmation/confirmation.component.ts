import {AfterViewInit, Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit, AfterViewInit {

  @ViewChild('confirmation') confirmation: TemplateRef<any> | undefined;

  @Output() close:EventEmitter<any> = new EventEmitter();

  modalRef:any;

  showLoader = false;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.modalRef = this.modalService.open(this.confirmation, {size: 'lg'});
    this.modalRef.result.then((data:any) => {
      this.close.emit(false);
    }, (reason:any) => {
      this.close.emit();
    });
  }

  proceedClick() {
    if (this.showLoader) {
      this.modalRef.close();
    } else {
      this.showLoader = true;
    }
  }


}
