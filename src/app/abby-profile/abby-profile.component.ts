import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abby-profile',
  templateUrl: './abby-profile.component.html',
  styleUrls: ['./abby-profile.component.scss']
})
export class AbbyProfileComponent implements OnInit {

  public slides = [
    { src:"/assets/img/abby1.jpg" },
    { src:"/assets/img/abby2.jpg" }, 
    { src:"/assets/img/abby3.jpg" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
