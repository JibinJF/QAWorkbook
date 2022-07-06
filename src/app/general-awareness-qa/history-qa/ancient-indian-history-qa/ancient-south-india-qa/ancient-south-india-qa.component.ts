import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-ancient-south-india-qa',
  template: `
  <app-display-qa [qas]="ancientSouthIndiaQAs" [workbookName]="workbookName"></app-display-qa>
  `,
  styles: [
  ]
})
export class AncientSouthIndiaQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Ancient Southern India`;
  constructor() { }

  ngOnInit(): void {
  }

  ancientSouthIndiaQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
  ];
}
