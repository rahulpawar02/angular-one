import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() control: FormControl; //control property contains FormControl object data 
  @Input() label:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  showErrors(){
    // destructure the object 
    const {dirty,touched,errors} = this.control; 
    return dirty && touched && errors;

  }
}
