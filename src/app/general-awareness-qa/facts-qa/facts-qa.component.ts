import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-facts-qa',
  template: `<app-display-qawb-list [qaWbList]="factsQAWbList" [workbookName]="workbookName">
  </app-display-qawb-list>`,
  styles: [
  ]
})
export class FactsQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Facts`;

  constructor() { }

  ngOnInit(): void {
  }

  factsQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Books And Authors QA`,
      wbRoute: '/FactsQA/BooksAndAuthorsQA'
    },    
  ];
}