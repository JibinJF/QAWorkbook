import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-fundamental-rights-qa',
  template: `<app-display-qa [qas]="fundamentalRightsQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class FundamentalRightsQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Fundamental Rights`;

  constructor() { }

  ngOnInit(): void {
  }

  fundamentalRightsQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Fundamental Rights are defined in which part of the Constitution 
      of India?`,
      answer: `Part III.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `What does Article 13 deal with?`,
      answer: `Laws inconsistent with or in derogation of the fundamental rights.`,
      description: `<ul>
        <li>As per Article 13, laws inconsistent with or in derogation of the fundamental 
        rights shall, to the extent of such inconsistency or contravention, be void.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many fundamental rights are provided by the Constitution of India?`,
      answer: `5.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `What are the fundamental rights provided by the Constitution of India?`,
      answer: `<ol>
      <li>Right to Equality (Article 14 to 18).</li>
      <li>Right to Freedom (Article 19 to )</li>
      <li> (Article )</li>
      <li> (Article )</li>
      <li> (Article )</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 14 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India`,
      answer: `Equality before law.`,
      description: `<ul>
        <li>Article 14: The State shall not deny to any person equality before 
        the law or the equal protection of the laws within the territory of India.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 15 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Prohibition of discrimination on grounds only of religion, race, caste, 
      sex or place of birth.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 16 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Equality of opportunity in matters of public employment.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 17 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Abolition of Untouchability.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 18 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Abolition of titles.`,
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