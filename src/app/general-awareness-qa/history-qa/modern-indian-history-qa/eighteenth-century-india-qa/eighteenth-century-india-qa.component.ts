import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-eighteenth-century-india-qa',
    template: `<app-display-qa [qas]="eighteenthCenturyIndiaQAs" [workbookName]="workbookName">
  </app-display-qa>`,
    styles: [],
    standalone: false
})
export class EighteenthCenturyIndiaQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Eighteenth Century India`;

  constructor() { }

  ngOnInit(): void {
  }

  eighteenthCenturyIndiaQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Mughal emperor Aurangzeb died in the year _____ ?`,
      answer: `1707.`,
      description: `<ul>
      <li>Aurangzeb died on 1707 March 3.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `On Aurangzeb's death, his 3 sons fought among themselves for the throne 
      and _____ emerged victorious?`,
      answer: `Bahadur Shah.`,
      description: `<ul>
        <li>Bahadur Shah died in Lahore on 1712 February 27.</li>
        <li>He was the only Mughal Emperor who used the title of Sayyid. His full name 
        was 'Abul-nasr Sayyid Qutb-ud-din Muhammad Shah Alam Bahadur Shah Badshah'.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In 1679 _____ reintroduced the jizyah, a poll tax for non-Muslims that had been 
      abolished by Akbar the Great a century earlier?`,
      answer: `Aurangzeb.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Under _____ system, encouraged by Jahandar Shah (1712-1713), Government contracted 
      with revenue farmers and middlemen to pay the government a fixed amount of money while they 
      were left free to collect whatever they could from the peasant?`,
      answer: `Ijarah or revenue-farming.`,
      description: `
      <ul>
        <li>As per this system, when peasants lacked the means to cultivate their land or cultivation 
        was impossible due to some calamity, the lands were farmed out on ijarah to a third party 
        known as revenue farmers.</li>
        <li>This led to the increased oppression of the peasant.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Jahandar Shah's reign came to an end in 1713 January when he was defeated at Agra 
      by Farrukh Siyar, with the help of Sayyid brothers, _____ and _____ ?`,
      answer: `Abdullah Khan and Hussain Ali Khan.`,
      description: `<ul>
        <li>After the victory, Abdullah Khan was appointed Wazir and Hussain Ali Khan was appointed 
        Mir Bakshi.</li>
        <li>They are known in Indian history as 'King makers'.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ was a tax or tribute imposed nominally at 25% on revenue or produce, by the 
      Maratha Empire?`,
      answer: `Chauth.`,
      description: `<ul>
       <li>The name was derived from the Sanskrit word meaning “one-fourth”.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: ` In 1739, the Persian King _____ defeated the Mughal ruler Muhammad Shah in the 
      Battle of Karnal?`,
      answer: `Nadir Shah.`,
      description: `<ul>
        <li>Nadir Shah carried away the famous Koh-i-Noor diamond and the jewel studded Peacock Throne 
        of Shahjahan.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Third Battle of Panipat took place in 1761, at Panipat, between a northern 
      expeditionary force of the Maratha Empire and a coalition of the King of Afghanistan, _____ 
      with two Indian Muslim allies—the Rohilla Afghans of the Doab, and Shuja-ud-Daula, the Nawab of Oudh?`,
      answer: `Ahmad Shah Durrani (also known as Ahmad Shah Abdali).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Battle of Buxar was fought in the year _____, between the English Forces led by Hector Munro, 
      and a joint army of Shuja-ud-Daula, the Nawab of Oudh, Mir Qasim, the Nawab of Bengal, and Shah Alam II, 
      the Mughal Emperor?`,
      answer: `1764.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The battle of Buxar ended with the Treaty of _____ in 1765?`,
      answer: `Treaty of Allahabad.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ signed the treaties of Allahabad with Shuja-Ud-Daulah and Shah Alam-II after winning 
      the battle of Buxar?`,
      answer: `Robert Clive.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ established  a modern arsenal in Dindigal in 1755 with the help of French experts?`,
      answer: `Haidar Ali.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Tipu Sultan planted 'Tree of Liberty' at ______?`,
      answer: `Srirangapatnam.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ founded the city of Jaipur?`,
      answer: `Maharaja Sawai Jai Singh II.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Maharaja Sawai Jai Singh II compiled planetary tables entitled _____ to enable people 
      to make astronomical observations?`,
      answer: `Zij-i Muhammad Shahi.`,
      description: `<ul>
        <li>He had Euclid's "Elements of Geometry" translated into Sanskrit as also several works on 
        Trigonometry, and Napier's work on the construction and use of logarithms.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Tayaumanavar (1706-44) was one of the best exponents of _____ poetry in Tamil?`,
      answer: `Sittar poetry.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Heer Ranjha, the famous romantic epic in Punjabi was composed in the 18th century 
      by _____ ?`,
      answer: `Waris Shah.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `During 18th century, _____ composed his famous collection of poems, 'Risalo', 
      which is considered as the greatest classic of Sindhi literature?`,
      answer: `Shah Abdul Latif.`,
    },
  ]
}
