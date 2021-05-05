import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
data=[];
  


  constructor(public stud:NewService) {
this.data=stud.getdatavalue();


   }

  ngOnInit() {
  }

}
