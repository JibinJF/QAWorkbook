import { Component, OnInit, Input } from '@angular/core';
import { QAModel } from '../qamodel';

@Component({
  selector: 'app-display-qa',
  templateUrl: './display-qa.component.html',
  styleUrls: ['./display-qa.component.css']
})
export class DisplayQAComponent implements OnInit {

  @Input() chapterName: string;
  @Input() qas: QAModel[];
  totalQAs: number;
  currentQAIndex: number;
  previousQAIndex: number;
  nextQAIndex: number;
  showHideButtonText: string;

  constructor() {
  }

  ngOnInit(): void {
    this.totalQAs = this.qas.length;

    if (this.currentQAIndex === undefined) {
      this.currentQAIndex = 0;
    }
    this.resetButtonStates();
  }

  onPrevQaButtonClick() {

    this.currentQAIndex = this.currentQAIndex - 1;
    this.resetButtonStates();
  }

  onShowHideButtonClick() {
    this.qas[this.currentQAIndex].showAnswer = !this.qas[this.currentQAIndex].showAnswer;

    if (this.qas[this.currentQAIndex].showAnswer) {
      this.showHideButtonText = 'Hide Answer'
    }
    else {
      this.showHideButtonText = 'Show Answer'
    }
  }

  onNextQaButtonClick() {
    this.currentQAIndex = this.currentQAIndex + 1;
    this.resetButtonStates();
  }

  resetButtonStates() {
    if (this.currentQAIndex < 0) {
      this.currentQAIndex = this.totalQAs - 1;
    }

    if (this.currentQAIndex > this.totalQAs - 1) {
      this.currentQAIndex = 0;
    }

    this.previousQAIndex = this.currentQAIndex - 1;
    if (this.previousQAIndex < 0) {
      this.previousQAIndex = this.totalQAs - 1;
    }

    this.nextQAIndex = this.currentQAIndex + 1;
    if (this.nextQAIndex > this.totalQAs - 1) {
      this.nextQAIndex = 0;
    }

    this.qas[this.currentQAIndex].showAnswer = false;
    this.showHideButtonText = 'Show Answer';
  }
}
