import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  firstname: string = ''
  dob: Date;
  constructor() { }

  ngOnInit(): void {
    this.dob = new Date()
  }  

}
