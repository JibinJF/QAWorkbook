import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-central-asian-influence-qa',
  template: `<app-display-qa [qas]="centralAsianInfluenceQAs" 
  [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class CentralAsianInfluenceQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Central Asian Influence`;
  constructor() { }

  ngOnInit(): void {
  }

  centralAsianInfluenceQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The famous Indo-Greek ruler Menander (165-145 B.C.) is also known by the name 
      _____ ?`,
      answer: `Milinda.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The famous Indo-Greek ruler Menander (165-145 B.C.) had his capital at _____ 
      in Punjab ?`,
      answer: `Sakala (modern Sialkot).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The famous Indo-Greek ruler Menander (165-145 B.C.) was converted to Buddhism 
      by _____ ?`,
      answer: `Nagasena (also known as Nagarjuna).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The questions relating to Buddhism which Menander asked Nagasena, and Nagasena's 
      answers were recorded in the form of a book known as _____ ?`,
      answer: `Milinda Panho (or the 'Question of Milinda').`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The _____ were the first rulers in India to issue coins which can be definitely 
      attributed to the kings ?`,
      answer: `Indo-Greeks.`,
      description: `<ul>
      <li>The Punch-marked coins, which were issued in earlier period, cannot be assigned 
      with certainty to any dynasty.</li>
      <li>The Indo-Greek rule is important in the history of India because of the large number 
      of coins which the Greeks issued.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The _____ were the first rulers to issue gold coins in India, which increased 
      in number under the Kushans?`,
      answer: `Indo-Greeks.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Greek rulers introduced features of _____ art in the north-west frontier 
      of India?`,
      answer: `Hellenistic art.`,
      description: `<ul>
      <li>This art was not purely Greek. It was the outcome of the Greek contact with 
      non-Greek conquered peoples after Alexander's death.</li>
      <li>Gandhara art was its best example in India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The invasion of the Greeks were followed by that of the Shakas. There were 
      _____ branches of the Shakas with their seats of power in different parts of India and 
      Afghanistan?`,
      answer: `5 branches.`,
      description: `<ul>
      <li>One branch of the Shakas settled in Afghanistan.</li>
      <li>The second branch settled in Punjab with Taxila as its capital.</li>
      <li>The third branch settled in Mathura.</li>
      <li>The fourth branch established its hold over western India.</li>
      <li>The fifth branch of the Shakas established its power in the upper Deccan.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In about 57-58 B.C, _____, the king of Ujjain effectively fought against 
      the Shakas and succeeded in driving them out in his time?`,
      answer: `Vikramaditya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `An era called the _____ is reckoned from the event of Vikramaditya's victory 
      over Shakas in 57 B.C.?`,
      answer: `Vikrama Samvat.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Shaka ruler Rudradaman I (AD 130 - 150) is famous because of the repairs 
      he undertook to improve _____ lake in the semi-arid zone of Kathiawar?`,
      answer: `Sudarshana lake.`,
      description: `<ul>
      <li>This lake had been in use for irrigation for a long time, and was as old as the 
      time of the Mauryas.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Although a foreigner settled in India, _____ issued the first-ever long 
      inscription in chaste Sanskrit?`,
      answer: `Rudradaman I (AD 130 - 150).`,
      description: `<ul>
      <li>All the earlier longer inscriptions that we have in this country were composed in 
      Prakrit.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Shaka domination in north-western India was followed by that of the 
      _____ ?`,
      answer: `Parthians.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Originally the Parthians lived in _____, from where they moved to India ?`,
      answer: `Iran.`,
      description: `<ul>
      <li>In comparison with the Greeks and the Shakas, they occupied only a small portion 
      of north-western India in the first century.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The most famous Parthian king was _____, in whose reign St. Thomas is said to 
      have come to India for the propagation of Christianity?`,
      answer: `Gondophernes.`,
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
