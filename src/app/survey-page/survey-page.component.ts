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

  Cardresults: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  gotResult = (answer: number, cardNum: number): void => {
    this.Cardresults[cardNum] = answer;
    console.log(this.Cardresults);
    let total = this.Cardresults[0]
      + this.Cardresults[1]
      + this.Cardresults[2]
      + this.Cardresults[3]
      + this.Cardresults[4]
      + this.Cardresults[5]
      + this.Cardresults[6]
      + this.Cardresults[7]
      + this.Cardresults[8]
      + this.Cardresults[9];

    console.log(total);

    // for (i = 0; i < 10; i++) {
    //   total = this.Cardresults[i] + this.Cardresults[prev_num];
    //   console.log(total);
    //   console.log(this.Cardresults[i]);
    // }

  }

  addResult = () => {

  }

  constructor() { }

  ngOnInit(): void {
  }

}

