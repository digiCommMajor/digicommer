import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router'; // import router from angular router

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
  @Input() total: number;

  @Output() result = new EventEmitter<number>();

  sliderChange(change) {
    this.result.emit(change.value);
  }

  Cardresults: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  /*   goResult() - takes in two paramaters: answer and cardNum of type number
     -- returns the added total of the user as a number */
  gotResult = (answer: number, cardNum: number) => {
    this.Cardresults[cardNum] = answer;
    this.total = this.Cardresults[0]
      + this.Cardresults[1]
      + this.Cardresults[2]
      + this.Cardresults[3]
      + this.Cardresults[4]
      + this.Cardresults[5]
      + this.Cardresults[6]
      + this.Cardresults[7]
      + this.Cardresults[8]
      + this.Cardresults[9];
    // console.log(this.total); // prints the added total to the console
    return this.total;
  }

  /*   onSumbit() - when the person is done with the survey they will click submit
     -- depending on what their total is they will be redirected to another page  */
  onSubmit = () => {
    console.log(this.total);
    if (this.total <= 30) {
      //  Digi Comm might not be for them so route to result-c
      this.route.navigate(['/result-c']);
    } else if (this.total >= 60) {
      //  Digi Comm might looks like a good fit for them so route to result-a
      this.route.navigate(['/result-a']);
    } else {
      //  Digi Comm is a possibility them so route to result-b
      this.route.navigate(['/result-b']);
    }
  }

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}

