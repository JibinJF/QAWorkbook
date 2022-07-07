import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'dawn-of-history-in-south-india-qa',
  template: `
  <app-display-qa [qas]="dawnOfHistoryInSouthIndiaQAs" [workbookName]="workbookName"></app-display-qa>
  `,
  styles: [
  ]
})
export class DawnOfHistoryInSouthIndia implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Dawn Of History In South India`;
  constructor() { }

  ngOnInit(): void {
  }

  dawnOfHistoryInSouthIndiaQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The megalithic people in the southern districts of Tamil Nadu buried the 
      skeletons of the dead in urns made of _____ in pits?`,
      answer: `Red pottery.`,
      description: `<ul>
      <li>In many cases these urns were not surrounded by stone circles, and grave goods 
      were not too many.</li>
      <li>Their practice of urn burial was different from that of cist-burial or pit-burial 
      surrounded by stone circles, which prevailed in the Krishna-Godavari valley.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The route to the southern India called the _____ was valued by the northerners 
      because the south supplied gold, pearls, and various precious stones?`,
      answer: `Dakshinapatha.`,
      description: `<ul>
      <li>Cultural and economic contacts between the north and the deep south known as the 
      <i>Tamizhakam</i> became extremely important from the fourth century B.C.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Pandyas are mentioned by Megasthenes, who says that their kingdom was 
      celebrated for _____?`,
      answer: `Pearls.`,
      description: `<ul>
      <li>He also speaks of its being ruled by a woman, which may suggest some matriarchal 
      influence in the Pandya society.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Pandya kingdom had its capital at _____?`,
      answer: `Madurai.`,
      description: `<ul>
      <li>The Pandya territory occupied the southern-most and the south-eastern portion of 
      the Indian peninsula.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Pandya kings profited from trade with the Roman empire and sent 
      embassies to the Roman emperor _____?`,
      answer: `Augustus.`,
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
