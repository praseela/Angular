import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  id;
  name;
  marks;
  subject;
  data = { id: "", name: "",marks:"", subject:"" }

  constructor() { }

  ngOnInit() {
  }

  getdata()
  {

    

this.data.id=this.id
this.data.name=this.name
this.data.marks=this.marks
this.data.subject=this.subject

  }



}