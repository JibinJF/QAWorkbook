import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-maurya-age-qa',
    template: `<app-display-qa [qas]="mauryaAgeQAs" [workbookName]="workbookName">
  </app-display-qa>`,
    styles: [],
    standalone: false
})
export class MauryaAgeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Maurya Age`;

  constructor() { }

  ngOnInit(): void {
  }

  mauryaAgeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The Maurya dynasty was founded by _____ ?`,
      answer: `Chandragupta Maurya.`,
      description: `<ul>
      <li>With the help of Chanakya, Chandragupta Maurya overthrew the Nandas and established the 
      rule of the Maurya dynasty.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Chanakya is also known as _____ ?`,
      answer: `Kautilya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The machinations of Chanakya against Chandragupta's enemies are described in 
      detail in the _____, a drama written by Vishakhadatta in the 9th century?`,
      answer: `Mudrarakshasa.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Arthashastra was authored by _____ ?`,
      answer: `Kautilya.`,
      description: `<ul>
      <li>It provides information about the Mauryan administration system.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ was a Greek ambassador sent by Seleucus to the court of Chandragupta Maurya?`,
      answer: `Megasthenes.`,
      description: `<ul>
      <li>Megasthenes lived in Pataliputra and wrote an account not only of the administration 
      of the city of Pataliputra but also of the Maurya empire as a whole.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ was the capital of Maurya?`,
      answer: `Pataliputra.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The account of Megasthenes about the Maurya Empire does not survive in full, but quotations occur in the 
      works of several subsequent Greek writers. These fragments have been collected and published 
      in the form of a book called _____ ?`,
      answer: `Indika.`,
      description: `<ul>
      <li>It throws valuable light on the administration, society, and economy of Maurya times.</li>
      </ul>`
    },   
    {
      qaNumber: this.qaNumber++,
      question: `Ashoka was the son of _____, who succeeded Chandragupta Maurya?`,
      answer: `Bindusara.`,
      description: `<ul>
      <li>He is the first Indian King to speak directly to the people through his inscriptions, which 
      carry royal orders.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Among all Ashokan inscriptions, the name of Ashoka occurs only in copies of Minor 
      Rock Edict I found at 3 places in __(1)__ and at 1 place in __(2)__ ?`,
      answer: `<ol>
      <li>Karnataka.</li>
      <li>Madhya Pradesh.</li>
      </ol>`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Most of the Ashokan inscriptions mention only _____, meaning dear to gods, and 
      leave out the word Ashoka?`,
      answer: `Devanampiya piyadasi.`,
      description: `<ul>
      <li>The Ashokan inscriptions are found in India, Nepal, Pakistan, and Afghanistan.</li>
      <li>They were generally placed on ancient highways.</li>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Composed in __(1)__, Ashokan inscriptions were written in __(2)__ script in the 
      greater part of the subcontinent?`,
      answer: `<ol>
      <li>Prakrit.</li>
      <li>Brahmi.</li>
      </ol>`,
      description: `<ul>
      <li>But in its north-western part they appeared in Aramic language and Kharoshthi script, 
      and in Afghanistan they were written in both Aramic and Greek scripts and languages.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `After his accession to the throne, Ashoka fought only one major war called 
      _____ war?`,
      answer: `Kalinga war.`,
      description: `<ul>
      <li>After Kalinga war, Ashoka abandoned the policy of physical occupation in favour of 
      a policy of cultural conquest. In other words, <i>bherighosha</i> was replaced with 
      <i>dhammaghosha</i>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Within the empire, Ashoka appointed a class of officers known as the _____, 
      who were vested with the authority of not only rewarding people but also punishing them, 
      wherever necessary?`,
      answer: `Rajukas.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The _____ inscription speaks of the success of Ashoka's policy of dhamma with 
      the hunters and fishermen, who gave up killing animals and possibly took to a settled life?`,
      answer: `Kandhar inscription.`,
      description: `<ul>
      <li>After Kalinga war, Ashoka adopted a policy of consolidating his empire through dhamma 
      (dharma). He now made an ideological appeal towards the tribal people to follow the 
      principles of dhamma.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The fact of Ashoka visiting the Buddhist shrines is suggested by the _____ 
      mentioned in his inscriptions?`,
      answer: `Dhamma yatras.`,
      description: `<ul>
      <li>According to tradition, Ashoka became a monk, made huge gifts to the Buddhists and 
      undertook pilgrimages to the Buddhist shrines.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `According to tradition, which Buddhist council (Sangiti) was held by Ashoka?`,
      answer: `3<sup>rd</sup> Buddhist council.`,
      description: `<ul>
      <li>According to tradition, the third Buddhist council (Sangiti) was held by Ashoka and 
      missionaries were sent not only to south India but also to Sri Lanka, Burma, and other 
      countries to convert the people there.</li>
      <li>Brahmi inscriptions of the second and first centuries B.C. have been found in Sri 
      Lanka.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Ashoka appointed _____ for propagating dhamma among various social groups 
      including women?`,
      answer: `Dhammamahamatras.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `During Mauryan peorid __(1)__ was the highest officer in charge of assessment 
      and the __(2)__ was the chief custodian of the state treasury and store-house?`,
      answer: `<ol>
      <li>Samaharta.</li>
      <li>Sannidhata.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Mauryas introduced _____ masonry on a wide scale?`,
      answer: `Stone masonry.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Maurya empire was destroyed by _____ in 185 B.C?`,
      answer: `Pushyamitra Shunga.`,
      description: `<ul>
      <li>He is said to have killed the last Maurya king called Brihadratha in public and 
      forcibly usurped the throne of Pataliputra.</li>
      </ul>`
    }
  ];
}
