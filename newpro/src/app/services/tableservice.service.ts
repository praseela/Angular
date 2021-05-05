import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {

  data = [{ name: "Praseela", marks: 60, subject: "PDS" },
  { name: "Sanjay", marks: 80, subject: "Maths" },
  { name: "Jaya", marks: 80, subject: "DBMS" },
  { name: "Kowshik", marks: 70, subject: "Network" }]

  formdata = []
  constructor() { }

  getdata() {

    return this.data;
  }

  adddata(name, marks, subject) {

    this.data.push({ name: name, marks: marks, subject: subject })
  }

  deletedata(id) {
    this.data.splice(id, 1);
  }

  fomradddata(formid) {
    console.log(name)
    this.formdata.push(formid)
  }

  returnformdata() {
    return this.formdata;
  }
}
