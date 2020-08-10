import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-mahajanapadas',
  template: `<app-display-qa [qas]="mahajanapadasQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class MahajanapadasQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Mahajanapadas`;

  constructor() { }

  ngOnInit(): void {
  }

  mahajanapadasQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Mahajanapadas were a set of _____ large states/kingdoms that existed in the iron age?`,
      answer: `16.`,
      description: `<ul>
      <li>With the rise of large states using iron tools, people changed their allegiance from the jana or 
      the tribe to which they belonged to the janapada or the territory to which they belonged. Mahajanapadas 
      were 16 such large states/kingdoms.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Magadha came into prominence under the leadership of _____, who belonged to the Haryanka 
      dynasty?`,
      answer: `Bimbisara.`,
      description: `<ul>
      <li>He was a contemporary of Buddha.</li>
      <li>The rulers of Magadha during their prominenece (in the order of succession) were: \n
      <p>Bimbisara > Ajatashatru > Udayin > Shishunagas > Nandas > Maurya dynasty.</p>
      </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The earliest capital of Magadha was at _____, which was called Girivraja at that time?`,
      answer: `Rajgir.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ succeeded in destroying Vaishali and enlarging Magadhan empire?`,
      answer: `Ajatashatru.`,
      description: `Ajatashatru succeeded in destroying Vaishali and enlarging Magadhan empire because of 
      mainly 2 reasons:
      <ol>
      <li>A war engine which was used to throw stones like catapults.</li>
      <li>A chariot to which a mace was attached, which facilitated mass killings.</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Magadha was the first Indian state to use elephants on a large scale in its wars. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Although contemporary Indian states were well aquainted with the use of horses and chariots, it was 
      Magadha which first used elephants on a large scale in its wars.</li>
      </ul>`
    },
  ];
}
