import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component {
  state:boolean=false;
  public constructor(private route:Router){}

  public show()
  {
this.state=!this.state;
  }

  Previous()
  {
    this.route.navigate(['./Lesson2']);
  }
  Next()
  {
    this.route.navigate(['./Lesson4']);
  }
}
