import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carly-profile',
  templateUrl: './carly-profile.component.html',
  styleUrls: ['./carly-profile.component.scss']
})


export class CarlyProfileComponent implements OnInit {

  public slides = [
    { src:"/assets/img/carly3.jpg" },
    { src:"/assets/img/carly2.jpg" }, 
    { src:"/assets/img/carly4.jpg" },
    { src:"/assets/img/carly5.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}