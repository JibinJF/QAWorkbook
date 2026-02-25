import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-science-and-civilization-legacy-qa',
    template: `<app-display-qa [qas]="scienceAndCivilizationLegacyQAs" 
    [workbookName]="workbookName"></app-display-qa>`,
    styles: [],
    standalone: false
})
export class ScienceAndCivilizationLegacyQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Legacy in Science And Civilization`;

  constructor() { }

  ngOnInit(): void {
  }

  scienceAndCivilizationLegacyQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `_____ of Panini, a work on Sanskrit grammar, was composed around 500 BCE?`,
      answer: `Ashtadhyayi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ of Bharata is a detailed treatise and handbook on dramaturgy in Sanskrit ?`,
      answer: `Natyashastra.`,
      description: `<ul>
      <li>It is the principal work of dramatic theory, encompassing dance, music, poetics, and 
      general aesthetics.</li>
      <li>It is attributed to the Bharatamuni and is believed to have been written during the period 
      between 200 BCE and 200 CE.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Natyashastra is also known as the _____ ?`,
      answer: `Fifth veda.`,
      description: `<ul>
      <li>It is known as the fifth veda as it has been evolved by taking words from the Rigveda, 
      music from the Samaveda, gestures from the Yajurveda and emotions from the Atharvaveda.</li>
      <li>The text contains a set of precepts on the writing and performance of dance, music and 
      theater, and while it primarily deals with stagecraft, it has influenced Indian music, dance, 
      sculpture, painting and literature as well. Thus, the Natya Shastra is considered the foundation 
      of the fine arts in India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Bharata’s theory of drama refers to _____, the imitations of emotions that the actors 
      perform, and the _____ (emotional responses), that they inspire in the audience.?`,
      answer: `Bhavas, and rasas.`,
      description: `<ul>
      <li>The eight basic bhavas (emotions) are: love, humor, energy, anger, fear, grief, disgust 
      and astonishment.</li>
      <li>In observing and imagining the bhavas, the audience experiences eight principal 
      responses, or rasas, which are: love, pity, anger, disgust, heroism, awe, terror and comedy.</li>
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
