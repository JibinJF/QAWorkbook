import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-harappan-culture-bronze-age-civilization-qa',
  template: `<app-display-qa [qas]="harappanCultureBronzeAgeCivilizationQAs" [workbookName]="workbookName"></app-display-qa>`
})
export class HarappanCultureBronzeAgeCivilizationQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Bronze Age and Harappan Civilization`;

  constructor() { }

  ngOnInit(): void {
  }

  harappanCultureBronzeAgeCivilizationQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The Indus culture/civilization arose in which part of the Indian subcontinent?`,
      answer: `North-western`,
      description: `<ul>
      <li>Also called Harappan culture.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Indus civilization is also called as Harappan civilization because this civilization was first discovered 
      in the year ____ at the modern Harappa in the West Punjab province of Pakistan?`,
      answer: `1921`,
      description: `<ul>
      <li>The central zone of the mature Harappan culture lay in Sindh and Punjab, mainly in the Indus valley.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Extend of Harappan culture was larger than any other culture zone in the 3rd and 2nd millenium B.C. 
      State true or false?`,
      answer: `True`,
      description: `<ul>
      <li>The Harappan culture extended from Jammu in the north to the Narmada estuary in the south, and from Makran coast of
      Baluchistan in the west to Meerut in the east.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Harappa, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?`,
      answer: `Punjab (Pakistan)`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Mohenjo-daro, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?`,
      answer: `Sindh (Pakistan)`,
      description: `<ul>
      <li>Mohenjo-daro literally means 'the mound of the dead'.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Chanhu-daro, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?`,
      answer: `Sindh (Pakistan)`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Lothal, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?`,
      answer: `Gujarat`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Kalibangan, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?`,
      answer: `Rajasthan`,
      description: `<ul>
      <li>Kalibangan means black bangles.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Banawali, a prominent city of the mature and flourishing stage of Harappan culture, is located at _____?`,
      answer: `Hissar district in Haryana`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Harappa and Mohenjo-daro did not had citadel. State true or falses?`,
      answer: `Flase.`,
      description: `<ul>
      <li>Harappa and Mohenjo-daro each had its own citadel or acropolis, which is believed to have been occupied by members 
      of the ruling class.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The arrangement of houses in the Harappan cities followed _____ system/pattern?`,
      answer: `Grid.`,
      description: `<ul>
      <li>Apart from the city being divided into so many blocks, roads cut across one another almost at right angles.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Great Bath, which is considered one of the earliest public water tank, is located at _____?`,
      answer: `Mohenjo-daro.`,
      description: `<ul>
      <li>It was part of a large citadel.</li>
      <li>Measures 11.88 x 7.01 metres; Depth: 2.43 metres.</li>
      <li>Flights of steps at either ends.</li>
      <li>Had side rooms for changing clothes.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Floor of Great Bath was made of _____?`,
      answer: `Burnt bricks.`,
      description: `<ul>
      <li>Water was drawn from a large well in an adjacent room.</li>
      <li>Outlet from the corner of the Bath led to a drain.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The largest building in Mohenjo-daro is a _____?`,
      answer: `Granary.`,
      description: `<ul>
      <li>Length: 45.71 metres; Width: 15.23 metres.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Brick platforms of two rows of six rooms each, which appear to be foundations of granaries 
      is found in _____?`,
      answer: `Harappa.`,
      description: `<ul>
      <li>Each room (granary) measured 15.23 x 6.09 metres.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Harappans used baked bricks to a much larger extent than any other contemporary civilization. 
      State true or false?`,
      answer: `True.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Since the Indus people were the earliest to produce cotton, Greeks called it _____?`,
      answer: `Sindon.`,
      description: `<ul>
      <li>Derived from Sindh.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `A piece of woven cotton has been recovered from _____?`,
      answer: `Mohenjo-daro.`,
      description: `<ul>
      <li>Weavers wove cloth of wool and cotton.</li>
      <li>Spindle whorls were used for spinning.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Harappans used metal money. State true or false?`,
      answer: `False.`,
      description: `<ul>
      <li>Harappans did not use metal money. It is believed that they carried out all exchanges through barter.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In which place did Harappans set up a trading colony, which facilitated trade with Central Asia?`,
      answer: `Northern Afghanistan.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Many Harappan seals have been discovered in Mesopotamia. State true or false?`,
      answer: `True.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `What was the ancient name given to the Indus region, which is referred to in the Mesopotamian records?`,
      answer: `Meluha.`,
      description: `<ul>
      <li>The Mesopotamian records from about 2350 B.C. onwards refer to trade relations with Meluha.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Temples have been found at some Harappan sites. State true or false?`,
      answer: `False.`,
      description: `<ul>
      <li>Unlike Egypt and Mesopotamia, no temples have been found at any Harappan site.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `A male deity is found to have been represented on a harappan seal. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>The deity has 3 horned head.</li>
      <li>Represented in the sitting posture of a yogi, placing one foot on the other.</li>
      <li>Deity is surrounded by an elephant, a tiger, and a rhinoceros. He has a buffalo below his throne. At his feet appear 
      2 deer.</li>
      <li>The depicted god is supposedly identified as Pashupati Mahadeva.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Numerous symbols of the phallus and female sex organs made of stone have been found in Harappa. 
      State true or false?`,
      answer: `True.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Among many animals represented on Harappan seals, which animal is considered to be the most important one?`,
      answer: `Unicorn.`,
      description: `<ul>
      <li>Unicorn is a one horned animal, which may be identified with the rhinoceros.</li>
      <li>Next in importance is the humped bull.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Harappan script was deciphered in 1923. State true or false?`,
      answer: `False.`,
      description: `<ul>
      <li>Harappan script has not been deciphered so far.</li>
      <li>Earliest specimen of the script was recovered by 1853, while the complete script was discovered by 1923.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Harappans wrote long inscriptions. State true or false?`,
      answer: `False.`,
      description: `<ul>
      <li>Unlike the Egyptians and Mesopotamians, the Harappans did not write long inscriptions.</li>
      <li>Most inscriptions were recorded on seals, and contain only a few words.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Harappan script is mainly a _____ script than an alphabetical one?`,
      answer: `Pictographic.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Harappan weights discovered so far indicate that, in wheighing mostly _____ or its multiples were used?`,
      answer: `16.`,
      description: `<ul>
      <li>The tradition of 16 has continued in India till modern times, and till recently 16 annas made 1 ruppee.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Harappans knew the art of measurement. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Sticks inscribed with measure marks have been discovered; one of these is made of bronze.</li>
      <li>In the late Harappan phase, no object for measuring the length is noticed.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Harappan pots were generally decorated with the designs of _____?`,
      answer: `Tress and circles.`,
      description: `<ul>
      <li>Numerous pots painted in various designs have been discovered.</li>
      <li>The images of men also appear on some pottery fragments.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Great majority of about 2000 Harappan seals found so far carry short inscriptions with pictures. State true or false?`,
      answer: `True.`,
      description: `<ul>
      <li>Pictures are usually that of humped bull, buffalo, tiger, rhinoneros, goat, and elephant.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Harappan seals and images were manufactured with great skill, and so were Terracotta figurines. State true or false?`,
      answer: `False.`,
      description: `<ul>
      <li>The Harappan seals and images were manufatured with great skill, whereas the terracotta pieces represent unsophisticated 
      artistic works.</li>
      <li>The Harappan culture is poor in artistic works made of stone.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The post-urban phase of the Harappan culture is also knaown as _____?`,
      answer: `Sub-Indus culture.`,
      description: `<ul>
      <li>It is also known as the late Harappan culture.</li>
      <li>The post-urban phase broadly cover the period from 1900 B.C. to 1200 B.C.</li>
      <li>The late Harappan cultures are primarily chalcolithic in which tools of stone and copper are used.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The people of post-urban Harappan settlements of Swat valley used _____ ware, produced on a slow wheel?`,
      answer: `Black-grey burnished ware.`,
      description: `<ul>
      <li>The Swat valley people also produced black-on-red painted and wheel-turned pottery.</li>
      </ul>`
    },    
  ];
}
