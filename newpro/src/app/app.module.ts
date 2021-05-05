import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { SearchPipe } from './custompipe/search.pipe';
import { FormexcComponent } from './formexc/formexc.component';
import { FormtableComponent } from './formtable/formtable.component';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { ArticleComponent } from './article/article.component';
import {HttpClientModule} from '@angular/common/http';



const route: Routes = [
  { path: '', component: FourthComponent },
  { path: 'register', component: FormexcComponent },
  { path: 'home', component: FormtableComponent },
  { path: 'Back', component: FourthComponent  },
  { path: '**', component: LinkComponent }]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    SearchPipe,
    FormexcComponent,
    FormtableComponent,
    LinkComponent,
    ArticleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
