import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegisterRepository } from 'src/app/domain/register/register.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private registerRepository:RegisterRepository,private http:HttpClient){}

  getAllUsers() {
    this.registerRepository.getList().subscribe((result) => {
    console.log(result);
    });
  }
  ngOnInit(){
    this.getAllUsers();
  }
}
