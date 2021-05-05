import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor() { }
  mydata = [{ name: "prasee", marks: 50, subject: "maths" },
  { name: "kowshik", marks: 80, subject: "ddd" },
  { name: "sanjay", marks: 70, subject: "dff" }]


  getdatavalue()
  {
    return this.mydata;
  }
formdata()
{
  
}

}
