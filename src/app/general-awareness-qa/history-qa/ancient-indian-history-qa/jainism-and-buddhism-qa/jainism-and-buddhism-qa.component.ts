import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-jainism-and-buddhism-qa',
  template: `<app-display-qa [qas]="jainismAndBuddhismQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class JainismAndBuddhismQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Jainism And Buddhism`;

  constructor() { }

  ngOnInit(): void {
  }

  jainismAndBuddhismQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The earliest coins used in India which belong to the 5th century B.C. are called _____ coins?`,
      answer: `Punch-marked coins.`,
      description: `<ul>
      <li>They circulated for the first time in eastern Uttar Pradesh and Bihar.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the middle Gangetic plains, large-scale habitations began in about 600 B.C. when _____ came to be used 
      in this area?`,
      answer: `Iron.`,
      description: `<ul>
      <li>The use of iron tools made possible clearance, agriculture, and large settlements.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The vaishyas extended generous support to both Vardhamana Mahavira and Gautama Buddha. State true or false?`,
      answer: `True.`,
      description: `Despite the fact that Vardhamana Mahavira who founded Jainism and Gautama Buddha who founded Buddhism 
      belonged to the kshatriya clan, vaishyas extended generous support to them. Some reasons for this are: 
      <ol>
      <li>Jainism and Buddhism in the initial stage did not attach any importance to the existing varna system. 
      And both disputed the authority of the Brahmanas.</li>
      <li>They preached the gospel of non-violence, which would put an end to wars between different kingdoms and consequently 
      promote trade and commerce.</li>
      <li>The brahmanical law books, called the Dharmasutras, decried lending money on interest. A person who lived on interest 
      was condemned by them. Therefore, the vaishyas, who lent money on account of growing trade and commerce, were not held in 
      esteem and were eager to improve their social status.</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
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
