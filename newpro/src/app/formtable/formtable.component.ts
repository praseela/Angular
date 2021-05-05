import { Component, OnInit } from '@angular/core';

import { TableserviceService } from '../services/tableservice.service';

@Component({
  selector: 'app-formtable',
  templateUrl: './formtable.component.html',
  styleUrls: ['./formtable.component.css']
})
export class FormtableComponent implements OnInit {

  formdata=[];
  // name;
  // place;
  // courses;
  // gender;
  // duration;

  constructor(public tabserv: TableserviceService) {
this.formdata=this.tabserv.returnformdata();
  }

  ngOnInit() {
  }

}
