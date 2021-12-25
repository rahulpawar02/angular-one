import { Component, OnInit, TemplateRef } from '@angular/core';  
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 

@Component({
  selector: 'app-modaldemo',
  templateUrl: './modaldemo.component.html',
  styleUrls: ['./modaldemo.component.css']
})
export class ModaldemoComponent implements OnInit {

  modalRef: BsModalRef;  
  constructor(private modalService: BsModalService) { }  
  
  ngOnInit() {  
  }  
  openModalWithClass(template: TemplateRef<any>) {  
    this.modalRef = this.modalService.show(  
      template,  
      Object.assign({}, { class: 'gray modal-lg' })  
    );  
  }  
}  

