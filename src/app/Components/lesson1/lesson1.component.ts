import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component {
  state:boolean=false;
  public constructor(private route:Router){}

  public show()
  {
this.state=!this.state;
  }

  
  Next()
  {
    this.route.navigate(['./Lesson2']);
  }
}
