import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {
  constructor(private router:Router){

  }
  next(){
    this.router.navigate(['/contact']);

  }
}
