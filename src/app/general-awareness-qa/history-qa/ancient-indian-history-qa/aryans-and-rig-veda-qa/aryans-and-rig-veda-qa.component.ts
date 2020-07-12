import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-aryans-and-rig-veda-qa',
  template: `<app-display-qa [qas]="aryansAndRigVedaQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class AryansAndRigVedaQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Aryans And Rig Veda`;

  constructor() { }

  ngOnInit(): void {
  }

  aryansAndRigVedaQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Originally the Aryans seem to have lived somewhere in the steppes stretching from southern Russia 
      to  Central Asia. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>They spoke Indo-European languages.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is the source of knowledge about the Aryans in India?`,
      answer: `Rig Veda.`,
      description: `<ul>
      <li>The term Arya occurs 36 times in this text, and generally indicates a cultural community.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the earliest text of the Indo-European languages?`,
      answer: `Rig Veda.`,
      description: `<ul>
      <li>It is a collection of prayers offered to Indra, Agni, Mitra, Varuna, and other gods by various families 
      of poets or sages.</li>
      <li>The Rig Veda has many things in common with the Avesta, which is the oldest text in the Iranian language.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Rig Veda consists of how many mandalas or books?`,
      answer: `10.`,
      description: `<ul>
      <li>Books II to VII form its earliest portions.</li>
      <li>Books I and X seems to be the latest additions.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Aryans appeared in India a little earlier than 1,500 B.C. State true or false?`,
      answer: `True.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indus and its 5 branches are mentioned in the Rig Veda. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>The Sindhu, currently known as the Indus, was the river par excellence of the Aryans.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The river Saraswati is called _____ or the best of the rivers in the Rig Veda?`,
      answer: `Naditarna.`,
      description: `<ul>
      <li>It is identified with the Ghaggar-Hakra channel in Haryana and Rajasthan. But its Rig Vedic description shows 
      it to be the Avestan river Harakhwati or the present Helmand river in south Afghanistan from where the name Saraswati 
      was transferred to India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The whole region in which the Aryans first settled in the Indian suncontinent is called _____?`,
      answer: `The land of the seven rivers.`,
      description: `<ul>
      <li>Also known as the Vedic land.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Rig Veda mentions the defeat of Sambara by a chief called _____, who belonged to the Bharata clan?`,
      answer: `Divodasa.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Possibly the dasyus in the Rig Veda represent the original inhabitants of the country, and an Aryan chief who 
      overpowered them was called _____?`,
      answer: `Trasadasyu.`,
      description: `<ul>
      <li>The term dasyuhatya, slaughter of the dasyus, is repeatedly mentioned in the Rig Veda.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the Rig Veda, Indra is called _____, which means that he was the breaker of forts?`,
      answer: `Purandara.`,
      description: `<ul>
      <li>Indra played the role of a warload.</li>
      <li>He was also considered to be the rain god.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who introduced chariots driven by horses for the first time into West Asia and India?`,
      answer: `The Aryans.`,
      description: `<ul>
      <li>It played a crucial role in their successes as well.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `According to tradition, the Aryans were divided into 5 tribes called _____?`,
      answer: `Panchajana.`,
      description: `<ul>
      <li>There might have been other tribes also.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The country 'Bharatavarsha' was named after the tribe _____, which appears first in the Rig Veda?`,
      answer: `Bharata.`,
      description: `<ul>
      <li>The Bharatas and the Tritsu were the ruling Aryan clans, and they were supported by priest Vasishtha.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Battle of Ten Kings was fought on the river _____, identical with the modern river Ravi?`,
      answer: `Parushni.`,
      description: `<ul>
      <li>The battle was fought between the Bharatas on the one side and a host of 10 chiefs (5 of whom were heads of 
        Aryan tribes and the remaining 5 were heads of non-Aryan people.) on the other side.</li>
      <li>Sudas, the king of Bharatas, emerged victorious in the battle which established the supremacy of Bharatas.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Ploughshare is mentioned in the earliest part of the Rig Veda. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Some consider it an interpolation.</li>
      <li>Possibly, this ploughshare was made of wood.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `There are so many references to the cow and the bull in the Rig Veda that the Rig Vedic Aryans can be called 
      predominantly pastoral people. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Though agriculture was known, agriculture was perhaps used mainly to produce fodder.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The term for war in the Rig Veda is _____ or search for cows?`,
      answer: `Gavishthi.`,
      description: `<ul>
      <li>Most of their wars were fought for the sake of cows.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The tribal chief of the Aryans in the Rig Vedic period was called _____?`,
      answer: `Rajan.`,
      description: `<ul>
      <li>He was the pivot of the administrative machinery of the Aryans in the Rig Vedic perioed because of his successful 
      leadership in war.</li>
      <li>Rajan did not exercise unlimited power, for he had to reckon with the tribal organizations.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Rig Vedic references suggest that the rajan (or king) was elected by the tribal assembly called the _____?`,
      answer: `Samiti.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Women attended the sabha and vidatha in Rig Vedic times. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Not only that women could attend assemblies, but also they could offer sacrifices along with their husbands.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The priest who assisted king in the day-to-day administration during Rig Vedic times was called _____?`,
      answer: `Purohita.`,
      description: `<ul>
      <li>The two priests who played major part in the time of Rig Veda are Vasishtha and Vishvamitra.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who composed the Gayatri mantra?`,
      answer: `Vishvamitra.`,
      description: `<ul>
      <li>The Gayatri Mantra, a highly revered mantra from the Rig Veda, is also known as the Savitri Mantra.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `During the Rig Vedic period, the one who commanded the army was called _____?`,
      answer: `Senani.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The voluntary offerings from the Rig Vedic people, which probably was received by the chiefs, was called _____?`,
      answer: `Bali.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `During the Rig Vedic period, the officer who enjoyed authority over a large land or pasture ground 
      was called _____?`,
      answer: `Vrajapati.`,
      description: `<ul>
      <li>He led heads of the families called Kulapas, or the heads of the fighting hordes called Gramanis, to battle.</li>
      <li>In the beginning, the gramani was just the head of a small tribal fighting unit. But when the unit settled, 
      the gramani became the head of the village, and in course of time he became identical with the vrajapati.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `During the Rig Vedic period, people gave their primary loyalty to the tribe, which was called _____?`,
      answer: `Jana.`,
      description: `<ul>
      <li>Another important term for the tribe is vis.</li>
      <li>Kinship was the basis of social structure, and a man was identified by the clan to which he belonged, as can be seen in the 
      names of several Rig Vedic kings.</li>
      <li>The term jana occurs at about 275 places in the Rig Veda, and the term janapada or territory is not used even once.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `When the Rig Vedic gramas clashed with one another, it caused _____ or war?`,
      answer: `Samgrama.`,
      description: `<ul>
      <li>Gramas probably were the smaller units of vis or tribe, meant for fighting.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `There are some indications of polyandry in Rig Vedic period. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Rodasi is stated to be the consort of the Maruts, and the 2 Asvin brothers are represented as living with Surya, 
      the daughter of the sun god.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Shudras, a division of the tribal society, seems to have appeared towards the end of the Rig Vedic 
      period, because it is mentioned for the first in which mandala or book of the Rig Veda?`,
      answer: `10th.`,
      description: `<ul>
      <li>10th mandala is the latest addition to the Rig Veda.</li>
      <li>During Rig Vedic period, differentiation based on occupations had started.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `During the Rig Vedic period, _____ was considered to be the fire god?`,
      answer: `Agni.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `During the Rig Vedic period, _____ was considered to be the water god?`,
      answer: `Varuna.`,
      description: `<ul>
      <li>Varuna was also supposed to uphold the natural order.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `During the Rig Vedic period, _____ was considered to be the god of plants?`,
      answer: `Soma.`,
      description: `<ul>
      <li>An intoxicating drink is named after him.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `During the Rig Vedic period, _____ personified the storm?`,
      answer: `Maruts.`,
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
  ]
}
