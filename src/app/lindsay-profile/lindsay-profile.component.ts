import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lindsay-profile',
  templateUrl: './lindsay-profile.component.html',
  styleUrls: ['./lindsay-profile.component.scss']
})
export class LindsayProfileComponent implements OnInit {

  public slides = [
    { src:"/assets/img/lindsay1.jpg" },
    { src:"/assets/img/lindsay2.jpg" }, 
    { src:"/assets/img/lindsay3.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
