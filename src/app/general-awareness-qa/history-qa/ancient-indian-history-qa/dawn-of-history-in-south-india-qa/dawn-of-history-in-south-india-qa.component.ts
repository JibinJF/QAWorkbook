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
      question: `The Chola kingdom, which was situated to the north-east of the territory of 
      the Pandyas, between the Pennar and the Velar rivers, came to be called _____ in early 
      medieval times?`,
      answer: `Cholamandalam (Coromandel).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The chief centre of political power of the Cholas lay at _____,  a place famous 
      for cotton trade?`,
      answer: `Uraiyur.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Chola king founded Puhar and constructed 160km of embankment along the 
      Kaveri river?`,
      answer: `Karikala.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Puhar is identical with _____, which was the Chola capital?`,
      answer: `Kaveripattnam.`,      
      description: `<ul>
      <li>It was a great centre of trade and commerce, and excavations show that it had a 
      large dock.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `One of the main sources of the wealth of the Cholas was trade in _____ cloth?`,
      answer: `Cotton.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country was situated to the west and north of the land of the Pandyas?`,
      answer: `The Chera or the Kerala country.`,
      description: `<ul>
      <li>It included the narrow strip of land between the sea and the mountains, and covered 
      portions of both Kerala and Tamil Nadu.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Where did the Romans set up two regiments in the Chera country?`,
      answer: `Muziris (identical with Cranganore).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Sangam literature can roughly be divided into 2 groups, narrative and 
      didactic. The narrative texts are called _____?`,
      answer: `Melkanakku (or 18 major works).`,
      description: `<ul>
      <li>They comprise 18 major works consisting of 8 anthologies and 10 idylls.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Sangam literature can roughly be divided into 2 groups, narrative and 
      didactic. The didactic works are called _____?`,
      answer: `Kilkanakku (or 18 minor works).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Tolkkappiyam in an important tamil text which deals with philosophy and wise 
      maxims. State true or false?`,
      answer: `False.`,
      description: `<ul>
      <li>Tolkkappiyam deals with grammar and poetics.</li>
      <li>Tirukkural deals with philosophy and wise maxims.</li>
      </ul>`
    },
  ];
}
