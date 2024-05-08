import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson9',
  templateUrl: './lesson9.component.html',
  styleUrls: ['./lesson9.component.css']
})
export class Lesson9Component {
  public constructor(private route:Router){}
  state:boolean=false;
  public show()
  {
     this.state=!this.state;
  }
  Previous()
  {
    this.route.navigate(['./Lesson8']);
  }
  
  Next()
  {
    this.route.navigate(['./Lesson10']);
  }
}
