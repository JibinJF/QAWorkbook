import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-eighteenth-century-india-qa',
  template: `<app-display-qa [qas]="eighteenthCenturyIndiaQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class EighteenthCenturyIndiaQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Eighteenth Century India`;

  constructor() { }

  ngOnInit(): void {
  }

  eighteenthCenturyIndiaQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Mughal emperor Aurangzeb died in the year _____ ?`,
      answer: `1707.`,
      description: `<ul>
      <li>Aurangzeb died on 1707 March 3.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `On Aurangzeb's death, his 3 sons fought among themselves for the throne 
      and _____ emerged victorious?`,
      answer: `Bahadur Shah.`,
      description: `<ul>
        <li>Bahadur Shah died in Lahore on 1712 February 27.</li>
        <li>He was the only Mughal Emperor who used the title of Sayyid. His full name 
        was 'Abul-nasr Sayyid Qutb-ud-din Muhammad Shah Alam Bahadur Shah Badshah'.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____, historically, is a tax paid by non-Muslim populations to their Muslim rulers?`,
      answer: `Jizyah (also spelled jizya).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In 1679 _____ reintroduced the jizyah, a poll tax for non-Muslims that had been 
      abolished by Akbar the Great a century earlier?`,
      answer: `Aurangzeb.`,
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
  ]
}
