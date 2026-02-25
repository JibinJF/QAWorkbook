import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-union-and-its-territory-qa',
    template: `<app-display-qa [qas]="unionAndItsTerritoryQAs" [workbookName]="workbookName"></app-display-qa>`,
    styles: [],
    standalone: false
})
export class UnionAndItsTerritoryQAComponent {
  qaNumber: number = 1;
  workbookName: string = `Union And Its Territory`;

  unionAndItsTerritoryQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Which Part of the Indian Constitution deals with Union and 
      its terrirories?`,
      answer: `Part I.`,
      description: `<ul>
      <li>Article 1 to 4.</li>
      </ul>`
    },    
    {
      qaNumber: this.qaNumber++,
      question: `According to Indian Constitution, India is otherwise known 
      as ______?`,
      answer: `Bharat.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `According to Article 1 of Indian Constitution, India shall 
      be a ______?`,
      answer: `Union of States.`,      
      description: `<ul>
      <li>India is known as "Indestructible union of destructible states".</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The States and the territories thereof are specified in
      which Schedule of the Indian Constitution?`,
      answer: `First Schedule.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `No Bill for the purpose of formation of new States and 
      alteration of areas, boundaries or names of existing States shall be 
      introduced in either House of Parliament except on the recommendation 
      of ______?`,
      answer: `President.`,
      description: `<ul>
      <li>And also, unless, where the proposal contained in the Bill affects
      the area, boundaries or name of any of the States, the Bill has been
      referred by the President to the Legislature of that State for 
      expressing its views thereon within such period as may be specified in 
      the reference or within such further period as the President may allow 
      and the period so specified or allowed has expired.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The majority required to form a new state by the Parliament 
      is ______?`,
      answer: `Simple majority.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Article of the Indian Constitution deals with the 
      formation of new states?`,
      answer: `Article 3.`,
    },
  ];
}
