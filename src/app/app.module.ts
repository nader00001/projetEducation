import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { Leson4Component } from './Components/leson4/leson4.component';
import { Leson5Component } from './Components/leson5/leson5.component';
import { Lesson6Component } from './Components/lesson6/lesson6.component';
import { Lesson7Component } from './Components/lesson7/lesson7.component';
import { Lesson8Component } from './Components/lesson8/lesson8.component';
import { Lesson9Component } from './Components/lesson9/lesson9.component';
import { Lesson10Component } from './Components/lesson10/lesson10.component';
import { Lesson11Component } from './Components/lesson11/lesson11.component';
import { Lesson1Component } from './Components/lesson1/lesson1.component';
import { Lesson2Component } from './Components/lesson2/lesson2.component';
import { Lesson3Component } from './Components/lesson3/lesson3.component';

@NgModule({
  declarations: [
    AppComponent,
    Leson4Component,
    Leson5Component,
    Lesson6Component,
    Lesson7Component,
    Lesson8Component,
    Lesson9Component,
    Lesson10Component,
    Lesson11Component,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
