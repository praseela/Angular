import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

details=[]
msg:any


  constructor(public artser : ArticleService ) { }

  ngOnInit() {
  
  this.artser.getDetails().subscribe((data: any[]) => {

    console.log("my data", data);
    
    this.details = data;
    
    }, (error) => {
    
    console.log("my error", error);
    
    }, () => {
    
    console.log("completed");
    
    });
    
    }
    
    
    
    register(form: NgForm) {
    
    this.artser.register(form.value).subscribe((data: any) => {
    
    console.log("my data", data);
    
    this.msg = data;
    this.ngOnInit();
    }, (error) => {
    
    console.log("my error", error);
    
    }, () => {
    
    console.log("completed");
    
    });
    
    
    }
    
    
    delete(data: any) {
    
    this.artser.deletedata(data).subscribe((data: any) => {
    
    console.log("my data", data);
    data = "sussess"
    this.msg = data;
    this.ngOnInit();
    }, (error) => {
    
    console.log("my error", error);
    
    }, () => {
    
    console.log("completed");
    
    });
    
    }

}
