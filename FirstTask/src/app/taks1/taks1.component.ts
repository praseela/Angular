import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TableServiceService } from '../Services/table-service.service';

@Component({
  selector: 'app-taks1',
  templateUrl: './taks1.component.html',
  styleUrls: ['./taks1.component.css']
})
export class Taks1Component implements OnInit {

 username:String
 age:number;
 marks:number;
 searchText:String
 data=[]
 
  constructor(public tableSer: TableServiceService) { 
    this.data = this.tableSer.getdata()
  }


  ngOnInit() {
  }

  register(){
    this.tableSer.insertdata(this.username,this.age,this.marks)

  }
  delete(id){
    this.tableSer.deletedata(id)
  }

}
