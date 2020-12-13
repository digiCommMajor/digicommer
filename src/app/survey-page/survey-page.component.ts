import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent implements OnInit {
  @Input() question: string;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() units?: string = '';
  @Input() title: string = '';

  @Output() result = new EventEmitter<number>();

  sliderChange(change) {
    this.result.emit(change.value);
  }

  Cardresults: number[] = [0, 0, 0, 0]

  gotResult = (answer: number, cardNum: number): void => {
    this.Cardresults[cardNum] = answer;
    console.log(this.Cardresults);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

