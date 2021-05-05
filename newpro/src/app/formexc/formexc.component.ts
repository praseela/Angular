import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { TableserviceService } from '../services/tableservice.service';

@Component({
  selector: 'app-formexc',
  templateUrl: './formexc.component.html',
  styleUrls: ['./formexc.component.css']
})
export class FormexcComponent implements OnInit {
  
  
  value:any;
  viewValue;
  name;
  val
  time;
  gender = ["male", "female"];
  place;
  courses = [
    { value: 'Java-0', viewValue: 'Java' },
    { value: 'Spring-1', viewValue: 'Spring' },
    { value: 'Angular-2', viewValue: 'Angular' }
  ];
  times = [
    { val: 1, time: "3 months" },
    { val: 2, time: "6 months" },
    { val: 3, time: " 1 year" }]

  constructor(public tabserv: TableserviceService) {

  }

  ngOnInit() {
  }


  submit(form: NgForm) {
  
    console.log(form)
    this.tabserv.fomradddata(form.value)
  }
}
