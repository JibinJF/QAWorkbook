import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-european-penetration-and-conquest-qa',
    template: `
    <app-display-qa [qas]="europeanPenetrationAndConquestQAs" [workbookName]="workbookName">
    </app-display-qa>
  `,
    styles: [],
    standalone: false
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
      question: `In 1492, _____ of Spain set out to reach India and dircovered America instead?`,
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
        <li>They established trading depots at
          <ul>
            <li>Surat, Broach, Cambay, and Ahmedabad in Gujarat.</li>
            <li>Cochin in Kerala.</li>
            <li>Nagapattinam in Madras.</li>
            <li>Masulipatnam in Andhra.</li>
            <li>Chinsura in Bengal.</li>
            <li>Patna in Bihar.</li>
            <li>Agra in Uttar Pradesh.</li>
          </ul>
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `An English association or company to trade with the East, popularly known as the 
      East India Company, was formed in the year _____ ?`,
      answer: `1599.`,
      description: `<ul>
        <li>The East India Company was formed in 1599 under the auspices of a group of merchants 
        known as the Merchant Adventurers.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The English East India Company was granted a royal charter and the exclusive privilage 
      to trade in the East by _____ on 1600 December 31?`,
      answer: `Queen Elizabeth.`,
      description: `<ul>
        <li>The Charter of 1600 granted the East India Company the exclusive privilege of trading 
        east of the Cape of Good Hope for a period of 15 years.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In 1608, the English East India Company decided to open a 'factory' (trading depot) 
      at Surat on the west coast of India and sent _____ to Jahangir's court to obtain royal favours?`,
      answer: `Captain Hawkins.`,
      description: `<ul>
        <li>Consequently, the English Company was given permission by a royal farman to open 
        factories at several places on the west coast.
        </li>
        <li>In 1615, Sir Thomas Roe succeeded in getting an imperial farman to trade and establish 
        factories in all parts of the Mughal Empire.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In 1662, the Portuguese gave the island of _____ to King Charles II of England 
      as dowry for marrying a Portuguese princess?`,
      answer: `Bombay.`,
      description: `<ul>
        <li> The island of Bombay was acquired by the East India Company from the British government 
        in 1668.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The English opened their first 'factory' (trading depot) in the south at _____ 
      in 1611?`,
      answer: `Masulipatnam.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The French East India Company was founded in the year ____ ?`,
      answer: `1664.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Battle of _____ was fought on 22 January 1760 between the army of the British East 
      India Company, commanded by Colonel Eyre Coote (1726-83) and the French, commanded by Thomas 
      Arthur, comte de Lally, Baron de Tollendal (1702-66), resulting in a British victory?`,
      answer: `Battle of Wandiwash.`,
      description: `<ul>
        <li>This battle established Britain as the paramount European power in India and the path 
        was cleared for the establishment of a British colonial rule in India.</li>
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
