import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-satavahanas-qa',
  template: `
  <app-display-qa [qas]="satavahanasQAs" [workbookName]="workbookName"></app-display-qa>
  `,
  styles: [
  ]
})
export class SatavahanasQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Age of the Satavahanas`;
  constructor() { }

  ngOnInit(): void {
  }

  satavahanasQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The Satavahanas issued mostly coins of _____, which is found in the Deccan?`,
      answer: `Lead.`,
      description: `<ul>
      <li>They also issued potin, copper, and bronze money.</li>
      <li>The Satavahanas may have used gold as bullion, for they did not issue gold coins as 
      the Kushans did.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `District of the Satavahanas was called _____, as it was known in the time of 
      Ashoka?`,
      answer: `Ahara.`,
      description: `<ul>
      <li>Their officials were known as <i>amatyas</i> and <i>mahamatras</i>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `During Satavahana rule, the administration in the rural areas was placed in 
      the hands of _____?`,
      answer: `Gaulmika.`,
      description: `<ul>
      <li>Gaulmika was the head of a military regiment consisting of nine chariots, nine 
      elephants, 25 horses, and 45 foot-soldiers.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Satavahanas started the practice of granting tax-free villages to 
      brahmanas and Buddhist monks. State true or false?`,
      answer: `True.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Satavahana kingdom had _____ grades of feudatories?`,
      answer: `Three.`,
      description: `<ul>
      <li>The highest grade was formed by the king who was called <i>raja</i>.</li>
      <li>The second grade was formed by the <i>mahabhoja</i>.</li>
      <li>The third grade was formed by the <i>senapati</i>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The _____ is a large round structure erected over some relic of the 
      Buddha?`,
      answer: `Stupa.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The official language of the Satavahanas was _____?`,
      answer: `Prakrit.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `All Satavahana inscriptions were composed in Prakrit and written in the 
      _____ script, as was the case in Ashokan times?`,
      answer: `Brahmi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `One Prakrit text called Gathasattasai or the Gathasaptasati is attributed 
      to a Satavahana king called _____?`,
      answer: `Hala.`,
      description: `<ul>
      <li>It consisted of 700 verses, all written in Prakrit, but it seems to have been 
      finally re-touched much later, possibly after the sixth century A.D.</li>
      </ul>`
    },
  ]
}
