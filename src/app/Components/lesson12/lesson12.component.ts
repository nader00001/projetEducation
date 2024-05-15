import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson12',
  templateUrl: './lesson12.component.html',
  styleUrls: ['./lesson12.component.css']
})
export class Lesson12Component {
  public constructor(private route:Router){}

  state:boolean=false;
  supp1: boolean = false;
  supp2: boolean = false;
  supp3: boolean = false;
 
 
  
  supp( num:number) {
    switch(num)
    {
      case 1: this.supp1 = !this.supp1; break;
      case 2: this.supp2 = !this.supp2; break;
      case 3: this.supp3 = !this.supp3; break;
      
    }

  }
  public show()
  {
     this.state=!this.state;
  }
  
  
  
  Next()
  {
    this.route.navigate(['./Lesson1']);
  }
}
