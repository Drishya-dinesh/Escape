import {AfterViewInit, Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit, AfterViewInit {

  modalRef: any;

  @ViewChild('help') help: TemplateRef<any> | undefined;

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.modalRef = this.modalService.open(this.help, {size: 'xl'});
    this.modalRef.result.then((data: any) => {
      this.close.emit(false);
    }, (reason: any) => {
      this.close.emit();
    });
  }

}
