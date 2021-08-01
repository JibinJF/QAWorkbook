import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-european-penetration-and-conquest-qa',
  template: `
  <app-display-qa [qas]="europeanPenetrationAndConquestQAs" [workbookName]="workbookName">
  </app-display-qa>
  `,
  styles: [
  ]
})
export class EuropeanPenetrationAndConquestQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `European Penetration And The Conquest Of India`;

  constructor() { }

  ngOnInit(): void {
  }

  europeanPenetrationAndConquestQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The old trading routes between the East and the West came under Turkish control 
      after the Ottoman conquest of Asia Minor and the capture of Constantinople in the year _____ ?`,
      answer: `1453.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In 1492 _____ of Spain set out to reach India and dircovered America instead?`,
      answer: `Columbus.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In 1498, _____ of Portugal discovered a new and all-sea route from Europe to India?`,
      answer: `Vasco da Gama.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Vasco da Gama sailed Africa via the Cape of Good Hope and reached _____ ?`,
      answer: `Calicut.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The three-legged trade in which the merchant ships carried manufactured goods from 
      Europe to Africa, exchanged them on the coast of Africa for Negroes, took these slaves across 
      the Atlantic and exchanged them them for the colonial produce of plantations or mines, and 
      finally brought back and sold this produce in Europe is popularly known as _____ ?`,
      answer: `Triangular trade (also the transatlantic slave trade).`,
      description: `<ul>
        <li>A great deal of West European and North American prosperity was based on the slave trade 
        and the plantations worked by slave labour.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Under the viceroyalty of _____, who captured Goa in 1510, the Portuguese established 
      their domination over the entire Asian coast from Hormuz in the Persian Gulf to Malacca in 
      Malaya and the Spice Islands in Indonesia?`,
      answer: `Afonso de Albuquerque.`,
      description: `<ul>
        <li>In India, Portuguese established trading settlements at Cochin, Goa, Diu, and Daman.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the later half of the 16th century, after fierce struggle for building empire in 
      the East, _____ gained control over Indonesia and the British over India, Sri Lanka, and Malaya?`,
      answer: `Dutch.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Dutch East India company was formed in the year _____ ?`,
      answer: `1602.`,
      description: `<ul>
        <li>The Dutch States General - the Dutch Parliament - gave it a charter empowering it to 
        make war, conclude treaties, acquire territories, and build fortresses.</li>
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
      <li>.</li>
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
