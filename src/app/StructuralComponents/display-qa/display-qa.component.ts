import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { QAModel } from '../qamodel';

@Component({
  selector: 'app-display-qa',
  templateUrl: './display-qa.component.html',
  styleUrls: ['./display-qa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayQAComponent {

  @Input() chapterName: string;
  @Input() qas: QAModel;

  

  constructor() {
  }

}