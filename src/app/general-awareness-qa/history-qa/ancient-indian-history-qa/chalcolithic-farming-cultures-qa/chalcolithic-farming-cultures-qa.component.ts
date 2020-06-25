import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-chalcolithic-farming-cultures-qa',
  template: `<app-display-qa [qas]="chalcolithicFarmingCulturesQAs" [workbookName]="workbookName"></app-display-qa>`
})
export class ChalcolithicFarmingCulturesQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Chalcolithic Farming Cultures`;

  constructor() { }

  ngOnInit(): void {
  }

  chalcolithicFarmingCulturesQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Which was the first metal to be used?`,
      answer: `Copper`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `The culture based on the use of copper and stone implements is called _____?`,
      answer: `Chalcolithic`,
      description: `<ul>
      <li>Chalcolithic means stone-copper phase.</li>
      <li>Though, many of the chalcolithic cultures appear after the end of the bronze based Harappan culture, 
      chalcolithic cultures seems to be technologically less advanced than the Harappan cultures.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Occasionally, the chalcolithic people used bronze as well. State true or false?`,
      answer: `True`,
      description: `<ul>
      <li>The bronze they used was found to be of low-grade.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `While the Harappans attained urbanisation, the chalcolithic people were primarily rural communities. 
      State true or false?`,
      answer: `True`,
      description: `<ul>
      <li>The chalcolithic people spread over places where hilly land and rivers were available.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ is considered the richest among the chalcolithic ceramics?`,
      answer: `Malwa ware`,
      description: `<ul>
      <li>Malwa ware is typical of the Malwa chalcolithic culture of central and western India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which chalcolithic culture covered majority of modern Maharashtra?`,
      answer: `Jorwe culture (C. 1400 B.C to 700 B.C)`,
      description: `<ul>
      <li>Jorwe culture sites were located in semi-arid areas in the riverine tracts, 
      mostly on brown-black soil which had ber and babul vegetation.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Unlike the other chalcolithic farming cultures, Ahar (Between C. 2,100 and 1,500 B.C.) practically did not use microlithic tools. 
      State true or false?`,
      answer: `True`,
      description: `<ul>
      <li>Stone axes or blades were almost absent.</li>
      <li>Almost all of its objects were made of copper.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Black-and-red pottery was widely prevalent during the chalcolithic phase. State true of false?`,
      answer: `True`,
      description: `<ul>
      <li>It was thrown on wheel and occasionally painted with white linear designs.</li>
      <li>Considering the pre-bronze phase of chalcolithic cultures, chalcolithic people seems to be the first ones to use painted pottery.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Though people of the chalcolithic age domesticated animals and practised agriculture, they generally were not 
      acquainted with _____?`,
      answer: `Horse`,
      description: `<ul>
      <li>Some animal remains are identified as belonging either to the horse or donkey or wild ass.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `People of the chalcolithic age produced wheat and rice. State true or false?`,
      answer: `True`,
      description: `<ul>
      <li>They also produced bajra, ber, linseed, cotton (mainly in Deccan), ragi, bajra, millets, and several pulses 
      (such as the lentil, black gram, green gram, and grass pea.)</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Generally, the houses of the chalcolithic people were made of _____ and _____ ?`,
      answer: `Wattle and daub`,
      description: `<ul>
      <li>Burnt bricks were seldom used.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The largest Jorwe site discoverd so far is _____ in the Godavari valley?`,
      answer: `Daimabad`,
      description: `<ul>
      <li>Seems to have been fortified with a mud wall.</li>
      <li>Large number of bronze goods have been discovered from here.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `At Inamgaon, a house of later chalcolithic phase with 4 _____ shaped rooms and 1 _____ shaped room, have been discovered?`,
      answer: `4 rectangular and 1 circular`,
      description: `<ul>
      <li>Of the earlier chalcolithic phase, large mud houses with ovens and circular pit houses, have been discovered from here.</li>
      <li>A granary lies close to it.</li>
      <li>Despite the Inamgaon being a large chalcolithic settlement with more than 100 houses and numerous burials, 
      it was fortified and surrounded by a moat.</li>
      <li>Works of potters, smiths, ivory carvers, lime makers, and terracotta artisans were found at Inamgaon.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Chalcolithic people manufactured beads of semi-precious stones such as carnelian, steatite, and quartz crystal. 
      State true or false?`,
      answer: `True`,
      description: `<ul>
      <li>Copper bangles were also recovered.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Chalcolithic people didn't knew the art of spinning and weaving. State true or false?`,
      answer: `False`,
      description: `<ul>
      <li>They knew spinning and weaving. Spindle whorls have been discovered in Malwa.</li>
      <li>Cotton, flax, and silk threads have been found in Maharashtra.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In which age/phase did regional differences with regard to cereals, pottery, etc., appear?`,
      answer: `Stone-copper or Chalcolithic phase`,
      description: `<ul>
      <li>Western India cultivated barley and wheat, while eastern India produced rice.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Chalcolithic people of Maharashtra buried their dead in urns under the _____ in the north-to-south position?`,
      answer: `Floor of their house`,
      description: `<ul>
      <li>Unlike Harappans, they did not use separate cemeteries.</li>
      <li>Valuables like pots and some copper objects were deposited in the graves.</li>
      <li>In south India, dead body was placed in the east-west position.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ suggests that the mother goddess was venerated by the chalcolithic people?`,
      answer: `Terracotta figures of women`,
      description: `<ul>
      <li>Some unbaked nude clay figurines were also used for worship.</li>
      <li>Stylized bull terracottas suggests that the bull was the symbol of a religious cult.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `There were no social inequalities in the chalcolithic society. State true or false?`,
      answer: `False`,
      description: `<ul>
      <li>The settlement pattern and burial practices of the chalcolithic people suggest beginning of
      social inequalities.</li>
      <li>It is believed that the chief and his kinsmen who lived in rectanular houses dominated others who lived in round huts.</li>
      <li>In Inamgaon, while the chief lived probably in the centre, the craftsmen lived in the western fringes.</li>
      <li>While the grave goods of affluent consisted of bangles, necklaces of semi-precious stones, and copper objects, 
      the grave goods of some others consisted of only pots.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Traces of chalcolithic cultures have been discovered almost all over the country, except for the 
      _____ and the _____?`,
      answer: `Alluvial plains and thickly forested areas`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Since the neolithic phase imperceptibly faded into the chalcolithic phase in south India, these cultures are called _____?`,
      answer: `Neolithic-chalcolithic`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Plough and hoe were found at chalcolithic sites. State true or false?`,
      answer: `False`,
      description: `<ul>
      <li>Neither plough nor hoe has been found at chalcolithic sites.</li>
      <li>Perforated stone discs were tied as weights to the digging sticks.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Chalcolithic people did not know the art of writing. State true or false?`,
      answer: `True`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Ochre-coloured pottery (OCP) culture period may roughly be placed in the range _____ B.C. to _____ B.C.?`,
      answer: `2,000 B.C. to 1,500 B.C.`,
      description: `<ul>
      <li>OCP people lived in areas not far removed from that of the Harappans.</li>
      </ul>`
    },
  ];
}
