import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../services/tableservice.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  data = []

  name: String;
  marks: String;
  subject: String;
  searchText: String;

  constructor(public tabserv: TableserviceService) {
    this.data = this.tabserv.getdata()
  }

  ngOnInit() {
  }
  adddata() {

    this.tabserv.adddata(this.name, this.marks, this.subject);

  }

  deletedata(id) {
    this.tabserv.deletedata(id);

  }



}
