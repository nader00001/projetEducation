import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leson4',
  templateUrl: './leson4.component.html',
  styleUrls: ['./leson4.component.css']
})
export class Leson4Component {

  public constructor(private route:Router ){}
  supp1: boolean = false;
  supp2: boolean = false;
  supp3: boolean = false;
  supp4: boolean = false;
  supp5: boolean = false;
  state:boolean=false;
  
  supp( num:number) {
    switch(num)
    {
      case 1: this.supp1 = !this.supp1; break;
      case 2: this.supp2 = !this.supp2; break;
      case 3: this.supp3 = !this.supp3; break;
      case 4: this.supp4 = !this.supp4; break;
      case 5: this.supp5 = !this.supp5; break;
    }

  }

  public show()
  {
this.state=!this.state;
  }
  Previous()
  {
    this.route.navigate(['./Lesson3']);
  }

  Next()
  {
    this.route.navigate(['./Lesson5']);
  }
}
