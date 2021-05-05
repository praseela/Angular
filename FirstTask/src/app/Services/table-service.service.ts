import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

data=[{username:'prasee',age:22,marks:44},
{username:'prasad',age:10,marks:44},
{username:'surya',age:32,marks:44},
{username:'kalai',age:41,marks:44}]
  constructor() { }

  insertdata(name,age,marks){
this.data.push({username:name,age:age,marks:marks})
  }

  getdata(){
    return this.data
  }

  deletedata(id){
    this.data.splice(id,1)
  }
}
