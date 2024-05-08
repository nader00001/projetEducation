import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Leson4Component } from './Components/leson4/leson4.component';
import { Leson5Component } from './Components/leson5/leson5.component';
import { Lesson6Component } from './Components/lesson6/lesson6.component';
import { Lesson7Component } from './Components/lesson7/lesson7.component';
import { Lesson8Component } from './Components/lesson8/lesson8.component';
import { Lesson9Component } from './Components/lesson9/lesson9.component';
import { Lesson10Component } from './Components/lesson10/lesson10.component';
import { Lesson11Component } from './Components/lesson11/lesson11.component';
import { Lesson1Component } from './Components/lesson1/lesson1.component';
import { Lesson3Component } from './Components/lesson3/lesson3.component';
import { Lesson2Component } from './Components/lesson2/lesson2.component';

const routes: Routes = [
  {path:"",component:Lesson1Component},
  {path:"Lesson2",component:Lesson2Component},
  {path:"Lesson3",component:Lesson3Component},
  {path:"Lesson4",component:Leson4Component},
  {path:"Lesson5",component:Leson5Component},
  {path:"Lesson6",component:Lesson6Component},
  {path:"Lesson7",component:Lesson7Component},
  {path:"Lesson8",component:Lesson8Component},
  {path:"Lesson9",component:Lesson9Component},
  {path:"Lesson10",component:Lesson10Component},
  {path:"Lesson11",component:Lesson11Component},


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
