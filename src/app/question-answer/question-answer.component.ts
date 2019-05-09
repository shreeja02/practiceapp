import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {
  @Input() questionArray=[];

  drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
    moveItemInArray(this.questionArray, event.previousIndex, event.currentIndex);
    console.log(this.questionArray);
  }

  constructor() { }

  ngOnInit() {
  }

}
