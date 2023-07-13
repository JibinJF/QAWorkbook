import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-gupta-age-qa',
  template: `<app-display-qa [qas]="guptaAgeQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class GuptaAgeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Gupta Age`;
  constructor() { }

  ngOnInit(): void {
  }

  guptaAgeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Who started the Gupta era in A.D. 319-20?`,
      answer: `Chandragupta I (A.D. 319-334).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In which inscription did Harishena, the court poet of Samudragupta 
      (A.D. 335-380), wrote a glowing account of the military exploits of his patron?`,
      answer: `Allahabad inscription.`,
      description: `<ul>
      <li>The inscription is engraved at Allahabad on the same pillar which carries the 
      inscriptions of the peace-loving Ashoka.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Chandragupta II (A.D. 380-412) adopted the title of _____?`,
      answer: `Vikramaditya.`,
      description: `<ul>
      <li>The title Vikramaditya had been first used by an Ujjain ruler in 57 B.C. as a 
      mark of victory over the Shaka Kshatrapas of western India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `It was in Chandragupta II's time that the Chinese pilgrim _____ (A.D. 399-414) 
      visited India and wrote an elaborate account of the life of its people?`,
      answer: `Fa-hsien.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In central and western India the villagers were subjected to forced labour 
      called _____ for serving the royal army and officials?`,
      answer: `Vishti.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `For the first time civil and criminal laws were clearly demarcated under 
      the Guptas. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Theft and adultery came under criminal law. Disputes regarding various types of 
      property came under civil law.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Gupta empire was divided into divisions called _____?`,
      answer: `Bhuktis.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Under the Gupta rule, each <i>bhukti</i> was placed under the charge of an 
      _____?`,
      answer: `Uparika.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Under the Gupta rule, <i>bhuktis</i> were divided into districts called _____?`,
      answer: `Vishayas.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Under the Gupta rule, <i>vishayas</i> were placed under the charge of _____?`,
      answer: `Vishayapati.`,
      description: `<ul>
      <li>In eastern India, the <i>vishayas</i> were divided into <i>vithis</i>, which 
      again were divided into villages.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In ancient India, the Guptas issued the largest number of gold coins, 
      which were called _____ in their inscriptions?`,
      answer: `Dinaras.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____, the law book of Narads, is a work of about the fifth century A.D.?`,
      answer: `Narada Smriti.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The first example of the immolation of widow after the death of her husband 
      appears in Gupta times in A.D. _____?`,
      answer: `510.`,
    },{
      qaNumber: this.qaNumber++,
      question: `Who is credited with maintaining in his court nine luminaries or great 
      scholars?`,
      answer: `Chandragupta II.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the Gupta period we find an over 2 metre high bronze image of the Buddha, 
      which was recovered from _____ near Bhagalpur?`,
      answer: `Sultanganj.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The greatest specimen of Buddhist art in Gupta times is provided by the 
      _____ paintings?`,
      answer: `Ajanta paintings.`,
      description: `<ul>
      <li>Although these paintings covered the period from the first to the seventh century 
      A.D., most of them belong to Gupta times. However, there is nothing to show that the 
      Guptas were the patrons of the Ajanta paintings.</li>
      <li>They depict various events in the life of Gautama Buddha and the previous Buddhas.
      </li>
      <li>These paintings are life-like and natural and the brilliance of their colours has 
      not faded even after fourteen centuries.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Buddhist university at Nalanda was set up in the _____ century, and its 
      earliest structure, made of brick, belongs to this period?`,
      answer: `Fifth century.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The 13 plays written by Bhasa belong to the Gupta period. State true or false?`,
      answer: `True.`,
      description: `<ul> 
      <li>The Gupta period is remarkable for the production of secular literature.</li>
      </ul>`
    },{
      qaNumber: this.qaNumber++,
      question: `The <i>Mrichchhakatika</i> or the <i>Little Clay Court</i> is written by _____?`,
      answer: `Shudraka.`,
      description: `<ul>
      <li>It deals with the love affair of a poor brahmana with the beautiful daughter of a 
      courtesan, and is considered one of the best works of ancient drama.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who wrote Abhijnanashakuntalam?`,
      answer: `Kalidasa.`,
      description: `<ul>
      <li>It tells us about the love story of King Dushyanta and Shakuntala.</li>
      <li>The Shakuntalam was one of the earliest Indian works to be translated into
      European languages, the other work being the Bhagavadgita.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Two things can be noted about the plays produced in India in the Gupta 
      period. First, these are all comedies. We do not come across any tragedies. Secondly, 
      characters of the higher and lower classes do not speak the same language; women 
      and shudras featuring in these plays use __(1)__ while the higher classes use __(2)__?`,
      answer: `<br> (1) Prakrit <br> (2) Sanskrit.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Gupta period is memorable for the compilation of the Amarakosha by 
      _____ ?`,
      answer: `Amarasimha.`,
      description: `<ul>
      <li>This lexicon is learnt by heart by students who were taught Sanskrit in the 
      traditional fashion.</li>
      <li>Amarasimha was a luminary in the court of Chandragupta II.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `During the Gupta Age, in the field of mathematics, we come across a work 
      called _____ written by Aryabhata, who belonged to Pataliputra ?`,
      answer: `Aryabhatiya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `For a century from A.D. 432-33, we notice a series of land sale documents 
      recorded on copper-plates in Pundravardhanabhukti, which covered almost the whole of 
      north Bengal, now mostly in Bangladesh. Most land grants indicate that land was 
      purchased with gold coins called _____ ?`,
      answer: `Dinara.`,
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
    },{
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
