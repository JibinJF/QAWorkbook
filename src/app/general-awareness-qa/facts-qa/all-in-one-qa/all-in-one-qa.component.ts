import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-all-in-one-qa',
  template: `
    <app-display-qa [qas]="allInOneQAs" [workbookName]="workbookName">
    </app-display-qa>`,
  styles: [
  ]
})
export class AllInOneQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `All In One`;

  constructor() { }

  ngOnInit(): void {
  }

  allInOneQAs: QAModel[] = 
    [
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
    ];
  }
  