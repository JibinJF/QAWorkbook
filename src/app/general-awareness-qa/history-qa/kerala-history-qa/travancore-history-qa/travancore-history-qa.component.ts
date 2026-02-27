import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-travancore-history-qa',
  template: `<app-display-qa [qas]="travancoreHistoryQAs" [workbookName]="workbookName">
  </app-display-qa>`,
    styles: [],
    standalone: false
})
export class TravancoreHistoryQAComponent {
  qaNumber: number = 1;
  workbookName: string = `Travancore History`;

  travancoreHistoryQAs: QAModel[] = [
      {
        qaNumber: this.qaNumber++,
        question: `What is the geographical and historical significance of the Kingdom of Travancore?`,
        answer: `The Kingdom of Travancore, historically known as the Thiruvithamkoor Kingdom, represents one of 
        the most critical socio-political entities in the history of the Indian subcontinent. Emerging from the 
        fragmented medieval principality of Venad, the Kingdom of Travancore lasted as a centralized, modernized 
        sovereign state from 1729 until its integration into the Indian Union in 1949. Geographically, at its zenith, 
        the kingdom encompassed the vast expanse of modern-day southern and central Kerala—covering the districts of 
        Thiruvananthapuram, Kollam, Pathanamthitta, Alappuzha, Kottayam, Idukki, and major portions of Ernakulam—as 
        well as the southernmost extremities of modern Tamil Nadu, specifically the Kanyakumari district and parts of 
        Tenkasi.  
        <br>
        The state served as the primary crucible for Kerala's modern socio-economic and political architecture. The 
        timeline spanning from Anizham Thirunal Marthanda Varma to Sree Chithira Thirunal Balarama Varma is not merely 
        a chronological sequence of monarchs; it is the definitive blueprint of Kerala's transition from a rigid, feudal, 
        and caste-bound society into a progressive, highly literate, and democratically conscious state. This era 
        witnessed the earliest instances of organized anti-colonial resistance in India, the systematic dismantling of 
        the agrarian feudal structure, pioneering state-sponsored educational initiatives, and some of the most profound 
        anti-caste social reform movements in global history. Kingdom of Travancore defined foundational administrative, 
        judicial, and cultural frameworks that define modern Kerala.`,
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
    ]
}
