import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  constructor(private router:Router){

  }
  next(){
    this.router.navigate(['/attachment']);

  }
}
