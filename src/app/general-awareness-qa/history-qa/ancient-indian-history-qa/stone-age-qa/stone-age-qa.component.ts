import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-stone-age-qa',
  template: `<app-display-qa [qas]="stoneAgeQAs" [workbookName]="workbookName"></app-display-qa>`
})
export class StoneAgeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Stone Age And The Early Man`;

  constructor() { }

  ngOnInit(): void {
  }

  stoneAgeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Which period represents the time during which recognizable modern humans evolved?`,
      answer: `Quaternary period`,
      description: `<p>Quaternary period is often considered the "Age of Humans". The quaternary period began
       2.588 million years ago and extends into the present. It's a part of the Cenozoic Era.<p>
       <p>But now, though not officially accepted, appearance of modern man seems to have occured in Africa 
       about 3 million years ago.<p>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Quaternary Period is divided into two epochs. Which are they?`,
      answer: `Pleistocene Epoch and Holocene Epoch`,
      description: `<p>Pleistocene Epoch: 2.588 million years ago to 11,700 years ago<p> 
              <p>Holocene Epoch: 11,700 years ago to present<p>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which are the three classifications of Stone age?`,
      answer: `<ol>
      <li>Palaeolithic age</li>
      <li>Mesolithic age</li>
      <li>Neolithic age</li>
      </ol>`,
      description: `<p>Palaeolithic age: Considered to have begun in India around 500,000 B.C. 
      Humans were hunters and food gatherers.<p>
      <p>Mesolithic age: Considered to have begun in India around 9,000 B.C. 
      Humans were largely hunters and herders.<p>
      <p>Neolithic age: Considered to have begun in India around 5,000 B.C. 
      Humans became food producers.<p>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Considering the nature of the stone tools used as well as the nature of climate change, 
      the Palaeolithic Age in India is divided into 3 phases. Which are they?`,
      answer: `<ol>
      <li>Early or Lower Palaeolithic</li>
      <li>Middle Palaeolithic</li>
      <li>Upper Palaeolithic</li>
      </ol>`,
      description: `<p>Early or Lower Palaeolithic: Roughly between 500,000 B.C. and 50,000 B.C.
      Hand-axes, cleavers, and choppers were used.<p>
      <p>Middle Palaeolithic: Roughly between 50,000 B.C. and 40,000 B.C. 
      Blades, points, borers, and scrapers made of flakes were used.<p>
      <p>Upper Palaeolithic: Roughly between 40,000 B.C. and 10,000 B.C. 
      Blades, burins, scrapers, and flakes were used.<p>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Since the fossils of early men have not been found in India, _____ obtained from the excavations
      are being considered as the evidence of earliest human presence?`,
      answer: `Stone tools`,
      description: `<p>The early man in India used stone tools roughly dressed by crude chipping. Since man did not had 
      knowledge of cultivation and house building during the stone age, chipped stone tools were mainly used for hunting,
       cutting, and gathering food.<p>
      <p>As of now, earliest human presence in India, based on the analysis of stone tools, is dated to somewhere between 
      500,000 B.C and 250,000 B.C.<p>
      <p>Though the evolution of Stone tools and related technology is similar to that in Africa, it is believed 
      that modern humans appeared in India much later than in Africa.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Palaeolithic stone tools used by the early man in India have been discovered throughout the country except the _____?`,
      answer: `Alluvial plains of Indus, Ganga, and Yamuna rivers`,
      description: `Palaeolithic sites are mainly found in river valleys and hill slopes.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ are the characteristic tools of the Mesolithic age?`,
      answer: `Microliths`,
      description: `A microlith is a minute stone tool, usually made of flint, typically used as a part of a composite tool such as 
      a spear or arrow.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Earliest evidence for the domestication of animals provided by Adamgarh in Madhya Pradesh and Bagor in Rajasthan
      is dated to around _____ B.C.?`,
      answer: `5,000 B.C.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `A study of deposits of the Sambhar salt lake of Rajasthan hints cultivation of plants around _____ B.C.??`,
      answer: `7,000 - 6,000 B.C.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Name 2 valleys where all the three phases of the Palaeolithic followed by the Mesolithic and then by the Neolithic
      have been found in sequence?`,
      answer: `Belan Valley, and Narmada Valley`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `With more than 500 painted rock shelters, _____ in Madhya Pradesh is a striking site having prehistoric art?`,
      answer: `Bhimbetka`,
      description: `The time period of rock paintings spans from the Palaeolithic to recent times. Human beings, animals, and birds are painted.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ in Baluchistan is the only neolithic settlement in the Indian subcontinent attributed to 7,000 B.C.`,
      answer: `Mehrgarh`,
      description: `Considering world as a whole, neolithic age is believed to have begun by 9,000 B.C. But, in India, generally, neolithic 
      settlements are considered to range between 5,000 B.C. and 1,000 B.C.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `People of Neolithic age generally used tools and implements of _____?`,
      answer: `Polished stone`,
      description: `Stone axes need special mention, as they were very popular.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which neolithic culture was distinguished by its dwelling pits, and the complete absence of the microliths?`,
      answer: `Kashmiri neolithic culture`,
      description: `<p>It is distinguished by its range of ceramics, and the variety of stone, and bone tools as well.<p>
      <p>Burzahom and Gufkral are two such prominent sites.<p>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Apart from Kashmir, _____ is the only place in India which yielded considerable neolithic bone implements?`,
      answer: `Chirand`,
      description: `These bone implements were mostly made of antlers (horns of deer).`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Burying domestic dogs with their masters in their graves seems to be a practice unique to the neolithic people of _____?`,
      answer: `Burzahom`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ pottery were used by the neolithic people of Burzahom?`,
      answer: `Coarse grey pottery`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `The neolithic people who lived to the south of Godavari had the knowledge of making/using fire-baked earthern figurines 
      as well as rubbing stone querns. State true or false?`,
      answer: `True`,
      description: `<p>Fire-baked earthern figurines recovered suggests that they possesed cattle, sheep, and goats.<p>
      <p>Rubbing stone querns recovered suggests that they were acquainted with the art of producing cereals.<p>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `From the neolithic sites in Allahabad district, evidence for the cultivation of _____ in the sixth millenium B.C has been obtained?`,
      answer: `Rice`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `In general, neolithic settlers lived in circular or rectangular houses made of _____ and _____?`,
      answer: `Mud, and reed`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `Neolithic people of Mehrgarh lived in houses made of _____ and _____?`,
      answer: `Mud, and brick`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `Pottery first appears in which phase of the stone age?`,
      answer: `Neolithic phase`,
      description: `<p>Settled life necesseciated the use of pots for storing foodgrains, cooking, eating, and drinking.<p>
      <p>Hand-made pottery is found in the early neolithic phase while footwheel turned pottery emerged towards later neolithic phase.<p>
      <p>Black-burnished ware, grey ware, and mat-impressed ware were used.<p>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `From the perspective of general progress in technology, the neolithic age in Indian subcontinent can be said to have 
      begun around _____ millennium B.C.?`,
      answer: `Sixth millennium B.C.`,
      description: `<p>Rice, wheat, and barley started to be cultivated.<p>
      <p>Villages started appearing.<p>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The people of stone age could settle down only on the hilly river valleys, slopes of the hills, and in the rock-shelters.
      State True or False?`,
      answer: `True`,
      description: `<p>With just tools and weapons made of stone, and bones, they could not establish settlements far away from the hilly areas.<p>
      <p>Also, they could not produce much more than what they needed for their subsistence.<p>`
    },
  ];
}