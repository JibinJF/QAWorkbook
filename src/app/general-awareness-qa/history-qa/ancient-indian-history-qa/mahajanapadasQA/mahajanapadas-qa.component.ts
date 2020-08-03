import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-mahajanapadas',
  template: `<app-display-qa [qas]="mahajanapadasQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class MahajanapadasQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Mahajanapadas`;

  constructor() { }

  ngOnInit(): void {
  }

  mahajanapadasQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
  ];
}
