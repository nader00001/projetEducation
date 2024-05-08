import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css']
})
export class Lesson7Component {
  public constructor(private route:Router){}
  state:boolean=false;
  public show()
  {
     this.state=!this.state;
  }
  Previous()
  {
    this.route.navigate(['./Lesson6']);
  }
  
  Next()
  {
    this.route.navigate(['./Lesson8']);
  }
}
