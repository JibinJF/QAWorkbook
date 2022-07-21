import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-gupta-age-qa',
  template: `<app-display-qa [qas]="guptaAgeQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class GuptaAgeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Gupta Age`;
  constructor() { }

  ngOnInit(): void {
  }

  guptaAgeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Who started the Gupta era in A.D. 319-20?`,
      answer: `Chandragupta I (A.D. 319-334).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In which inscription did Harishena, the court poet of Samudragupta 
      (A.D. 335-380), wrote a glowing account of the military exploits of his patron?`,
      answer: `Allahabad inscription.`,
      description: `<ul>
      <li>The inscription is engraved at Allahabad on the same pillar which carries the 
      inscriptions of the peace-loving Ashoka.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Chandragupta II (A.D. 380-412) adopted the title of _____?`,
      answer: `Vikramaditya.`,
      description: `<ul>
      <li>The title Vikramaditya had been first used by an Ujjain ruler in 57 B.C. as a 
      mark of victory over the Shaka Kshatrapas of western India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `It was in Chandragupta II's time that the Chinese pilgrim _____ (A.D. 399-414) 
      visited India and wrote an elaborate account of the life of its people?`,
      answer: `Fa-hsien.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In central and western India the villagers were subjected to forced labour 
      called _____ for serving the royal army and officials?`,
      answer: `Vishti.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `For the first time civil and criminal laws were clearly demarcated under 
      the Guptas. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Theft and adultery came under criminal law. Disputes regarding various types of 
      property came under civil law.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Gupta empire was divided into divisions called _____?`,
      answer: `Bhuktis.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Under the Gupta rule, each <i>bhukti</i> was placed under the charge of an 
      _____?`,
      answer: `Uparika.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Under the Gupta rule, <i>bhuktis</i> were divided into districts called _____?`,
      answer: `Vishayas.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Under the Gupta rule, <i>vishayas</i> were placed under the charge of _____?`,
      answer: `Vishayapati.`,
      description: `<ul>
      <li>In eastern India, the <i>vishayas</i> were divided into <i>vithis</i>, which 
      again were divided into villages.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
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
