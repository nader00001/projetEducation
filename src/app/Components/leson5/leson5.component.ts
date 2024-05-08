import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leson5',
  templateUrl: './leson5.component.html',
  styleUrls: ['./leson5.component.css']
})
export class Leson5Component {
  
  public constructor(private route:Router){}
  state:boolean=false;
  public show()
  {
this.state=!this.state;
  }
  Previous()
  {
    this.route.navigate(['./Lesson4']);
  }
  
  Next()
  {
    this.route.navigate(['./Lesson6']);
  }
}
