import { Component, Input, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})

export class ProfileCardComponent implements OnInit {

  constructor(){ }

  @Input() name: string;
  @Input() year: string;
  @Input() img: string;
  @Input() profile: string;

  ngOnInit(): void {
  }

}