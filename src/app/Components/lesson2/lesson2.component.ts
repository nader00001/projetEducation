import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component {
  state:boolean=false;
  public constructor(private route:Router){}

  public show()
  {
this.state=!this.state;
  }

  Previous()
  {
    this.route.navigate(['./']);
  }
  Next()
  {
    this.route.navigate(['./Lesson3']);
  }
}
