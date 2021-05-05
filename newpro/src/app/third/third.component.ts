import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../services/tableservice.service';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  name:String;
  marks : String;
  subject : String;
  


  constructor(public tabserv : TableserviceService) { 


  }

  ngOnInit() {
  }

  adddata()
  {
    
this.tabserv.adddata(this.name,this.marks,this.subject);

  }

  

}
