import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component {
  public constructor(private route:Router){}
  state:boolean=false;
  public show()
  {
this.state=!this.state;
  }
  Previous()
  {
    this.route.navigate(['./Lesson5']);
  }
  
  Next()
  {
    this.route.navigate(['./Lesson7']);
  }
}
