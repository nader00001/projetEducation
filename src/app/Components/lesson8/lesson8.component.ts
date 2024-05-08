import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.css']
})
export class Lesson8Component {
  public constructor(private route:Router){}
  state:boolean=false;
  public show()
  {
     this.state=!this.state;
  }
  Previous()
  {
    this.route.navigate(['./Lesson7']);
  }
  
  Next()
  {
    this.route.navigate(['./Lesson9']);
  }
}
