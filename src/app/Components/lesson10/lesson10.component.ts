import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson10',
  templateUrl: './lesson10.component.html',
  styleUrls: ['./lesson10.component.css']
})
export class Lesson10Component {
  public constructor(private route:Router){}
  state:boolean=false;
  public show()
  {
     this.state=!this.state;
  }
  Previous()
  {
    this.route.navigate(['./Lesson9']);
  }
  
  Next()
  {
    this.route.navigate(['./Lesson11']);
  }
}
