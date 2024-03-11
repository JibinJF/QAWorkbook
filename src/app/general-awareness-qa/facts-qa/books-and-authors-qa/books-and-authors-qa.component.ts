import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-books-and-authors-qa',
  template: `<app-display-qa [qas]="booksAndAuthorsQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class BooksAndAuthorsQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Books And Authors`;

  constructor() { }

  ngOnInit(): void {
  }

  booksAndAuthorsQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the work, 'The evolution of provincial finance 
      in British India : a study in the provincial decentralization of imperial finance'?`,
      answer: `Dr. B. R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'Poverty and un-British rule in India'?`,
      answer: `Dadabhai Naoroji.`,
    },    
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'The Discovery of India'?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'Annihilation of Caste'?`,
      answer: `Dr. B. R. Ambedkar.`,
      description: `<ul>
      <li>1936.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'India's Message'?`,
      answer: `M N Roy.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'Poverty of India'?`,
      answer: `Dadabhai Naoroji.`,
      description: `<ul>
      <li>1876.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'The European and Asiatic Races'?`,
      answer: `Dadabhai Naoroji.`,
      description: `<ul>
      <li>1866.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'The Buddha and His Dhamma'?`,
      answer: `Dr. B. R. Ambedkar.`,
      description: `<ul>
      <li>1957.</li>
      </ul>`
    },    
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'Letters from a Father to his Daughter'?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'The Problem of the Rupee: Its 
      Origin and Its Solution'?`,
      answer: `Dr. B. R. Ambedkar.`,
      description: `<ul>
      <li>1923.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'Castes in India: Their Mechanism, Genesis 
      and Development'?`,
      answer: `Dr. B. R. Ambedkar.`,
      description: `<ul>
      <li>1917.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'Waiting for a Visa'?`,
      answer: `Dr. B. R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'Glimpses of World History'?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book, 'Toward- Freedom'?`,
      answer: `Jawaharlal Nehru.`,
      description: `<ul>
      <li>An Autobiography of Jawaharlal Nehru.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the author of the book "We the people"?`,
      answer: `Nani Palkhiwala.`,
    },
  ];
}
