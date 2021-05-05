import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Taks1Component } from './taks1/taks1.component';
import { FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { SearchPipe } from './CustomePipe/search.pipe';
import { RegisterFormComponent } from './register-form/register-form.component';
@NgModule({
  declarations: [
    AppComponent,
    Taks1Component,
    SearchPipe,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
