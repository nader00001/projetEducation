import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.component.html',
  styleUrls: ['./lesson11.component.css']
})
export class Lesson11Component {
  public constructor(private route:Router){}

  state:boolean=false;
  public show()
  {
     this.state=!this.state;
  }
  
  Previous()
  {
    this.route.navigate(['./Lesson10']);
  }
  
  Next()
  {
    this.route.navigate(['./Lesson1']);
  }
}
