import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-jainism-and-buddhism-age-qa',
  template: `<app-display-qa [qas]="jainismAndBuddhismAgeQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class JainismAndBuddhismAgeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Jainism And Buddhism Age`;

  constructor() { }

  ngOnInit(): void {
  }

  jainismAndBuddhismAgeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The earliest coins used in India which belong to the 5th century B.C. are called 
      _____ coins?`,
      answer: `Punch-marked coins.`,
      description: `<ul>
      <li>Coins made of metal appear first in the age of Gautama Buddha.</li>
      <li>The earliest were made largely of silver though a few coppers also appear.</li>
      <li>They are called punch-marked because pieces of these metals were punched with 
      certain marks such as hill, tree, fish, bull, elephant, crescent, etc.</li>
      <li>They circulated for the first time in eastern Uttar Pradesh and Bihar.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the middle Gangetic plains, large-scale habitations began in about 600 B.C. when 
      _____ came to be used in this area?`,
      answer: `Iron.`,
      description: `<ul>
      <li>The use of iron tools made possible clearance, agriculture, and large settlements.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The vaishyas extended generous support to both Vardhamana Mahavira and Gautama Buddha. State true or false?`,
      answer: `True.`,
      description: `Despite the fact that Vardhamana Mahavira who founded Jainism and Gautama Buddha who founded Buddhism 
      belonged to the kshatriya clan, vaishyas extended generous support to them. Some reasons for this are: 
      <ol>
      <li>Jainism and Buddhism in the initial stage did not attach any importance to the existing varna system. 
      And both disputed the authority of the Brahmanas.</li>
      <li>They preached the gospel of non-violence, which would put an end to wars between different kingdoms and consequently 
      promote trade and commerce.</li>
      <li>The brahmanical law books, called the Dharmasutras, decried lending money on interest. A person who lived on interest 
      was condemned by them. Therefore, the vaishyas, who lent money on account of growing trade and commerce, were not held in 
      esteem and were eager to improve their social status.</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Jainas consider ______ as the first tirthankara or great teacher?`,
      answer: `Rishabhadev.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ is the 23rd tirthankara or great teacher of Jainas?`,
      answer: `Parshvanath.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The last, 24th, tirthankara or great teacher of Jainas is _____?`,
      answer: `Vardhamana Mahavira.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many doctrines are taught by Jainism?`,
      answer: `5.`,
      description: `<ol>
      <li>Do not commit violence.</li>
      <li>Do not speak a lie.</li>
      <li>Do not steal.</li>
      <li>Do not acquire property.</li>
      <li>Observe continence (brahmacharya).</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Jainas were divided into 2 sects: _____ or those who put on white dress, and _____ or those who 
      keep themselves naked?`,
      answer: `Shvetambaras and Digambaras.`,
      description: `<ul>
      <li>While Parshvanath had asked his followers to cover the upper and lower portions of their body, 
      Mahavira asked them to discard clothes altogether.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `According to Jaina tradition, the spread of Jainism in Karnataka is attributed to _____?`,
      answer: `Chandragupta Maurya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The early Jainas, discarded Sanskrit language mainly patronized by the brahmanas, and adopted 
      _____ language of the common people to preach their doctrines?`,
      answer: `Prakrit.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The religious literature of the early Jainas were written in _____?`,
      answer: `Ardhamagadhi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Jaina texts were compiled in the 6th century A.D. in Gujarat at a place called _____?`,
      answer: `Valabhi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `According to Buddhist tradition, Gautama Buddha was born in _____ in Nepal.?`,
      answer: `Lumbini.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Gautama attained enlightment at _____, under a pipal tree?`,
      answer: `Bodh Gaya.`,
      description: `<ul>
      <li>After that Gautama began to be called the Buddha or the enlightened.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Gautama Buddha delivered his first sermons at _____ in Banaras?`,
      answer: `Sarnath.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `According to Buddhist tradition, Gautama Buddha passed away at a place called _____ in Uttar Pradesh?`,
      answer: `Kushinagar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Gautama Buddha recommended _____ or an 8 fold path for the elimination of human misery?`,
      answer: `Ashtangika marga.`,
      description: `<ol>
      <li>Right observation.</li>
      <li>Right determination.</li>
      <li>Right speech.</li>
      <li>Right action.</li>
      <li>Right livelihood.</li>
      <li>Right exercise.</li>
      <li>Right memory.</li>
      <li>Right meditation.</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Gautama Buddha advised people to follow extreme austerity. State true or false?`,
      answer: `False.`,
      description: `<ul>
      <li>Gautama taught that a person should avoid the excess of both luxury and austerity. He 
      prescribed the middle path.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The use of _____, the language of the common people, contributed to the spread of Buddhism?`,
      answer: `Pali.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Gautama Buddha organized the sangha or the religious order, whose doors were kept open to 
      everybody, irrespective of caste and sex. State true or false?`,
      answer: `True.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `3 main elements in Buddhism are Buddha, sangha, and _____?`,
      answer: `Dhamma.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Buddhist text _____ declares the cattle to be givers of food, beauty, and happiness 
      (annada, vannada, sukhada), and thus pleads for their protection?`,
      answer: `Suttanipata.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Greek and the Indian sculptors worked together to create a new kind of art on the 
      north-west frontier of India, which is known as the _____?`,
      answer: `Gandhara Art.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Archaeologically, the 6th century B.C. marks the beginning of the _____ phase?`,
      answer: `NBPW (Northern Black Polished Ware) phase.`,
      description: `<ul>
      <li>NBPW was a very glossy, shining type of pottery made of very fine fabric and apparently 
      served as the tableware of richer people.</li>
      <li>In association with this pottery are found iron implements, especially those meant for 
      crafts and agriculture.</li>
      <li>This phase also saw the beginning of metal money.</li>
      <li>The use of burnt bricks and ringwells appreared in the middle of the NBPW phase, i.e. in 
      the 3rd century B.C.</li>
      <li>The NBPW phase marked the beginning of the second urbanization in India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Pali texts speak of _____ types of villages ?`,
      answer: `3.`,
      description: `<ul>
      <li>The first category included the typical village inhabited by various castes and 
      communities. Its number seems to have been the largest, and it was headed by a village 
      headman called bhojaka.</li>
      <li>The second included suburban villages which were in the nature of craft villages; 
      for instance, a carpenter's village or chariotmaker's village lay in the vicinity of 
      Varanasi. Obviously these villages served as markets for the other villages and linked 
      the towns with the countryside.</li>
      <li>The third category consisted of border villages situated on the limits of the 
      countryside which merged into forests. People living in these villages were mainly 
      fowlers and hunters, who mostly lived on food gathering.</li>
      <li>It seems that the nucleated rural settlement in which all people settled at one 
      place with their agricultural lands mostly outside the settlement first appeared in 
      the middle Gangetic plain in the age of Gautama Buddha.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the age of the Buddha, kings' higher officials who performed 
      various functions such as those of the minister (mantrin), commander (senanayaka), 
      judge, chief accountant and head of the royal harem were called _____ ?`,
      answer: `Mahamatras.`,
      description: `<ul>
      <li>It is likely that a class of officers called 'ayuktas' also performed similar 
      functions in some of the states.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the age of the Buddha, the rural administration was in the hands of 
      the village headmen who functioned as leaders of the tribal regiments, and so they 
      were called _____, which means the leader of the grama or a tribal military unit ?`,
      answer: `Gramini.`,
      description: `<ul>
      <li>The village headmen were known by different titles such as gramabhojaka, gramini, 
      or gramika.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Bali, a voluntary payment made by the tribesmen to their chiefs in Vedic 
      times became a compulsory payment to be made by the peasants in the age of the Buddha, 
      and officers called _____ were appointed to collect it ?`,
      answer: `Balisadhakas.`,
      description: `<ul>
      <li>It seems that one-sixth of the produce was collected as tax by the king from 
      the peasants.</li>
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