import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-central-asian-influence-qa',
    template: `<app-display-qa [qas]="centralAsianInfluenceQAs" 
  [workbookName]="workbookName"></app-display-qa>`,
    styles: [],
    standalone: false
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
      question: `The Parthians were followed by the ______, who are also called Yuechis or 
      Tocharians?`,
      answer: `Kushans.`,
      description: `<ul>
      <li>Though a nomadic people from the steppes of north Central Asia living in the 
      neighbourhood of China, their empire extended from the Oxus to the Ganga, from Khorasan 
      in Central Asia to Varanasi in Uttar Pradesh.</li>
      <li>A good part of Central Asia now included in the Commonwealth of Independent 
      States (in former USSR), a portion of Iran, a portion of Afghanistan, almost the whole 
      of Pakistan, and almost the whole of northern India were brought under one rule by the 
      Kushans.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Among the 2 successive dynasties of the Kushans, the first dynasty was 
      founded by a house of chiefs who were called _____, who ruled for 28 years from about 
      A.D. 50 ?`,
      answer: `Kadphises.`,
      description: `<ul>
      <li>
        It had 2 kings.
        <ol>
          <li>The first was Kadphises I, who issued coins south of the Hindukush. He minted 
          coppers in imitation of Roman coins.</li>
          <li>The second king was Kadphises II, who issued a large number of gold money and 
          spread his kingdom east of the Indus.</li>
        </ol>
      </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the Kushan dynasty, the house of Kadphises was succeeded by that of 
      _____ ?`,
      answer: `Kanishka.`,
      description: `<ul>
      <li>Its kings extended the Kushan power over upper India and the lower Indus basin.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The early Kushan Kings issued numerous gold coins with higher degree of 
      metallic purity than is found in the Gupta gold coins. State true or false?`,
      answer: `True.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Kushan coins, inscriptions, constructions and pieces of sculpture found in 
      Mathura show that it was their second capital in India, the first being _____,  where 
      Kanishka erected a monastery and a huge stupa or relic-tower?`,
      answer: `Peshawar.`,
      description: `<ul>
      <li>Peshawar is historically known as Purushapura.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who started an era in A.D. 78, which is now known as the Shaka era?`,
      answer: `Kanishka.`,
      description: `<ul>
      <li>Kanishka was the most famous Kushan ruler.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Kanishka held a Buddhist council in _____, where the doctrines of the 
      Mahayana form of Buddhism were finalized?`,
      answer: `Kashmir.`,
      description: `<ul>
        <li>Fourth Buddhist Council:
          <ul>
            <li>Venue: Kundalavana, Kashmir.</li>
            <li>Year: A.D. 72.</li>
            <li>King: Kanishka.</li>
            <li>Priest: Vasumitra deputed by Asvaghosha.</li>
            <li>Divided Buddhism into Mahayana and Hinayana sects.</li>
          </ul>
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The typical pottery of the Shaka-Kushan phase is _____, both plain and 
      polished?`,
      answer: `Red ware.`,
      description: `<ul>
      <li>The period is also marked by the use of burnt bricks for flooring, use of tiles for 
      both flooring and roofing, and the construction of brick-walls.</li>
      <li>The distinctive pots are sprinklers and spouted channels.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Shakas and Kushans introduced better cavalry and the use of riding horse 
      on a large scale. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>They made common the use of reins and saddles, which appear in the Buddhist 
      sculptures of the second and third centuries A.D.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Shakas and Kushans introduced turban, tunic, trousers, and heavy long 
      coat. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>The Central Asians also brought in cap, helmet, and boots which were used by 
      warriors.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who were the first rulers in India to issue gold coins on a wide scale?`,
      answer: `Kushans.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Kushans introduced the _____ system of government?`,
      answer: `Satrap.`,
      description: `<ul>
      <li>The empire was divided into numerous satrapies, and each satrapy was placed under 
      the rule of a satrap.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Greeks introduced the practice of military governorship. They appointed 
      their governors called _____?`,
      answer: `Strategos.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Greek ambassador _____ set up a pillar in honour of Vasudeva near Vidisa 
      in Madhya Pradesh around the middle of the second century B.C.?`,
      answer: `Heliodorus.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian craftsmen coming into contact with the Central Asians, Greeks, and 
      Romans, especially in the north-western frontier of India in Gandhara gave rise to a 
      new kind of art in which images of the Buddha were made in the _____ style?`,
      answer: `Graeco-Roman style.`,
      description: `<ul>
      <li>The hair of the Buddha was fashioned in the Graeco-Roman style.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The earliest specimen of <i>kavya</i> style is found in the Junagadh 
      inscription of _____ in Kathiawar in about A.D. 150?`,
      answer: `Rudradaman.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ wrote the <i>Buddhacharita</i>, which is a biography of the Buddha?`,
      answer: `Ashvaghosha.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ composed the <i>Saundarananda</i>, which is a fine example of Sanskrit 
      kavya?`,
      answer: `Ashvaghosha.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Greeks contributed to the development of the Indian theatre by introducing 
      the use of the _____?`,
      answer: `Curtain.`,
      description: `<ul>
      <li>Since the curtain was borrowed from the Greeks, it came to be known as <i>yavanika</i>
      </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `<i>Kamasutra</i> was written by _____?`,
      answer: `Vatsyayana.`,
      description: `<ul>
      <li>It is attributed to the third century A.D.</li>
      </ul>`
    },    
  ];
}
