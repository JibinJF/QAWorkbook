import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-age-of-mahajanapadas',
    template: `<app-display-qa [qas]="ageOfMahajanapadasQAs" [workbookName]="workbookName"></app-display-qa>`,
    styles: [],
    standalone: false
})
export class AgeOfMahajanapadasQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Age Of Mahajanapadas`;

  constructor() { }

  ngOnInit(): void {
  }

  ageOfMahajanapadasQAs: QAModel[] = [
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
    {
      qaNumber: this.qaNumber++,
      question: `The Iranian ruler _____ penetrated into north-west India in 516 B.C and annexed 
      Punjab - west of the Indus, the north-west frontier, and Sindh?`,
      answer: `Darius.`,
      description: `<ul>
      <li>This area constituted the 20th province or satrapy of Iran, the total number of satrapies 
      in the Iranian empire being 28.</li>
      <li>It was the most fertile and populous part of the empire. It paid a tribute of 360 
      talents of gold, which accounted for one-third of the total revenue of Iran from its Asian 
      provinces.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Iranian scribes brought into India a form of writing which came to be known as 
      the _____ script?`,
      answer: `Kharoshthi script.`,
      description: `<ul>
      <li>It was written from right to left like the Arabic.</li>
      <li>Some Ashokan inscriptions in north-west India were written in the 3rd century B.C. in 
      this script, which continued to be used in the country till the 3rd century A.D.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `After the conquest of Iran, Alexander moved on to Kabul, from where he marched to 
      India through _____ pass in 326 B.C.?`,
      answer: `Khyber pass.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Alexander advanced as far as the _____ river in India?`,
      answer: `Beas river.`,
    },
  ];
}
