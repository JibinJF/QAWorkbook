import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-constitutional-history-qa',
  template: `<app-display-qa [qas]="constitutionalHistoryQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class ConstitutionalHistoryQAComponent {

  qaNumber: number = 1;
  workbookName: string = `Constitutional History`;

  constitutionalHistoryQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Which was the first law passed by the British Parliament for India?`,
      answer: `Regulating Act, 1773.`,
      description: `<ul>
      <li>Regulating Act, 1773 was the first step taken by the British Government to control 
      the affairs of the British East India Company in India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which was the last law passed by the British Parliament for India?`,
      answer: `Indian Independence Act, 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act laid the foundation for a Central administration in India?`,
      answer: `Regulating Act, 1773.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Regulating Act, 1773, changed the post of <i>Governor</i> of Bengal to 
      ______ of Bengal?`,
      answer: `Governor General of Bengal.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first Governor General of Bengal?`,
      answer: `Warren Hastings.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Regulating Act, 1773, created an executive council containing ______ number 
      of members to assist the Governor General?`,
      answer: `4.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Regulating Act, 1773, provided for the establishment of a Supreme Court 
      at ______?`,
      answer: `Calcutta.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Calcuatta Supreme Court came into being in the year ______?`,
      answer: `1774.`,      
      description: `<ul>
      <li>It comprised of 1 Chief Justice and 3 other judges.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first Chief Justice of Calcuatta Supreme Court?`,
      answer: `Sir Elija Impey.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Regulating Act, 1773?`,
      answer: `<ul>
      <li>It was the first step taken by the British Government to control the affairs of the 
      British East India Company in India.</li>
      <li>The Act laid the foundation for a Central administration in India.</li>
      <li>The Act changed the post of <i>Governor of Bengal</i> to <i>Governor General of 
      Bengal</i>.</li>
      <li>The Act created an executive council containing 4 members to assist the Governor 
      General.</li>
      <li>The Act provided for the establishment of a Supreme Court at Culcatta.</li>
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `After the eneactment of which act did the East India Company's territories 
      in India were for the first time called the British possessions in India?`,
      answer: `Pitts India Act, 1784.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act has given the British Government supreme control over East India 
      company's affairs and its administration in India?`,
      answer: `Pitts India Act, 1784.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Pitts India Act, 1784?`,
      answer: `<ul>
      <li>Pitts Indian Act was passed to rectify the defects of the Regulating Act, 1773.</li>
      <li>After the enactment of the Act, East India Company's territories in India were for 
      the first time called the British possessions in India.</li>
      <li>The Act had given the British Government supreme control over East India company's 
      affairs and its administration in India.</li>
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Charter Act of 1793?`,
      answer: `<ul>
      <li>The Act renewed the charter issued to the British East India Company to a further 
      period of 20 years.</li>
      <li>Royal approval was mandated for the appointment of the Governor General, the Governors, 
      and the commander-in-chief.</li>
      <li>The civil and criminal justice system was reorganized by the regulations of the 
      Charter Act of 1793.</li>
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Charter Act of 1813 abolished the English East India Company's commercial 
      monopoly, except for the ______ ?`,
      answer: `Tea and opinum trade with China.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Charter Act of 1813 provided for a financial grant towards the revival of 
      __(1)__ and promotion of __(2)__?`,
      answer: `<ol>
      <li>Indian literature.</li>
      <li>Science.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The charter Act of 1813 permitted christian missionaries to ______?`,
      answer: `Propagate English and preach their religion.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Charter Act of 1813?`,
      answer: `<ul>
      <li>The Charter Act of 1813 renewed the East India Company's charter for another 20 years.</li>
      <li>.The company's commercial monopoly was abolished, except for the tea and opium tradewith 
      China.</li>
      <li>It asserted the sovereignty of the British crown over the Indian territories held by the 
      company.</li>
      <li>The charter Act of 1813 permitted christian missionaries to propagate English and preach 
      their religion.</li>
      <li>It empowered the local governments to tax people subject to the Jurisdiction of the 
      Supreme Court.</li>
      <li>The company's dividend was fixed at 10.5%.</li>
      <li>The Act provided for a financial grant towards the revival of Indian literature and the 
      promotion of science.</li>
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `As per the provisions of which Act did Governor General of Bengal became the 
      Governor General of India?`,
      answer: `Charter Act of 1833.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first Governor General of British India?`,
      answer: `William Bentinck.`,
    },    
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Charter Act of 1833?`,
      answer: `<ul>
      <li>Charter Act of 1833 was the final step towards centralisation in British India.</li>
      <li>Governor General of Bengal became the Governor General of India.</li>
      <li>The Governor-General of India was given executive and legislative powers for the entire 
      British India.</li>
      <li>It ended the activities of the East India Company as a commercial body. It became a 
      purely administrative body.</li>
      <li>The Charter Act of 1833 introduced a system of nomination to Indian Civil Service.</li>
      <li>It stated that the Indians should not be debarred from holding any office under the 
      company. However this provision was invalidated because of the opposition from the Court 
      of Directors.</li>
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act introduced a system of open competition for recruitment of civil 
      servants?`,
      answer: `Charter Act of 1853.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act introduced, for the first time, local representation in the Central 
      Legislative Council?`,
      answer: `Charter Act of 1853.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Committee on the Indian Civil Service is also known as ______?`,
      answer: `The Macaulay Committee.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Committee on the Indian Civil Service was appointed in which year?`,
      answer: `1854.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Charter Act of 1853?`,
      answer: `<ul>
      <li>This was the last of Charter Acts passed by the British Parliament.</li>
      <li>It separated for the first time, the legislative and executive functions of the 
      Governor General's Council.</li>
      <li>It established a separate Governor General's executive council which came to be known 
      as the Indian Legislative Council.</li>
      <li>It introduced a system of open competition for recruitment of civil servants. The 
      higher civil service was thus thrown open to the Indians also.</li>
      <li>It introduced, for the first time, local representation in the Central Legislative 
      Council.</li>
      </ul>`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Government of India Act, 1858 was followed by Queen's Proclamation which 
      was made on ______?`,
      answer: `1st November 1858.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Government of India Act 1858 changed the designation of Governor General of 
      India to the ______ ?`,
      answer: `Viceroy of India.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `______ was the last Governor General and the first Viceroy of British India?`,
      answer: `Lord Canning.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Queen's Proclamation was read out by Lord Canning at a durbar held at ______?`,
      answer: `Allahabad.`,
    },    
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Government of India Act 1858?`,
      answer: `<ul>
      <li>Government of India Act 1858 was enacted in the wake of the First War of Indian 
      Independence 1857.</li>
      <li>Government of India Act 1858 is otherwise known as the Act for the Better Government 
      of India.</li>
      <li>The Government of India Act, 1858 was followed by Queen's Proclamation which was made 
      on 1st November 1858.</li>
      <li>This proclamation was read out by Lord Canning at a durbar held in Allahabad.</li>
      <li>This proclamation is otherwise known as the Magnacarta of the people of India.</li>
      <li>It abolished the East India Company and transferred the powers of government 
      territories and revenues to the British Crown.</li>
      <li>It changed the designation of Governor General of India to the Viceroy of India.</li>
      <li>It ended the system of double government by abolishing the Board of Control and Court 
      of Directors.</li>
      <li>It created a new office called Secretary of State for India. He had the full authority 
      and control over Indian administration.</li>
      <li>It established a 15 member council of India to assist the Secretary of State. The 
      Secretary of State was the Chairman of the council.</li>
      </ul>`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `First Secretary of State for India ?`,
      answer: `Edward Henry Stanley.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Last Secretary of State for India ?`,
      answer: `William Francis Harre.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The longest serving secretary of State for India ?`,
      answer: `George Hamilton.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who introduced the 'Portfolio' system in 1859?`,
      answer: `Lord Canning.`,
      description: `<ul>
      <li>Indian Councils Act of 1861 gave recognition to the 'Portfolio' system introduced by 
      Lord Canning in 1859.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Name the Indians whom Lord Canning, the then Viceroy nominated to his 
      legislative council in 1862?`,
      answer: `Raja of Banaras, Maharaja of Patiala and Sir Dinkar Rao.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian Councils Act of 1861 authorised Viceroy to issue ordinances during 
      emergencies for a maximum period of ______ months?`,
      answer: `6 months.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act authorised Viceroy to issue ordinances during emergencies for a 
      maximum period of 6 months?`,
      answer: `Indian Councils Act of 1861.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Indian Councils Act of 1861?`,
      answer: `<ul>
      <li>It was the beginning of representative institutions in India by associating Indians 
      in the law making process.</li>
      <li>Lord Canning, the then Viceroy nominated three Indians (Raja of Banaras, Maharaja of 
      Patiala and Sir Dinkar Rao) to his legislative council in 1862.</li>
      <li>It initiated the process of decentralisation.</li>
      <li>The Viceroy was authorised to issue ordinances during emergencies for a maximum period 
      of six months.</li>
      <li>It gave recognition to the 'Portfolio' system introduced by Lord Canning in 1859.</li>
      </ul>`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act empowered legislative councils to discuss the budget and to address 
      the questions to the executive?`,
      answer: `Indian Council Act 1892.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Indian Council Act 1892?`,
      answer: `<ul>
      <li>It increased the number of additional (non- official) members in the Central and 
      provincial legislative councils, but maintained the official majority in them.</li>
      <li>It increased the functions of legislative councils and gave them the power to discuss 
      the budget and to address the questions to the executive.</li>
      </ul>`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act introduced a system of communal representation in India by accepting 
      the concept of separate electorate for Muslims?`,
      answer: `Indian Council Act 1909.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first Indian to become a member of the Viceroy's Executive Council 
      (1909)?`,
      answer: `Satyendra Prasanna Sinha.`,
      description: `<ul>
      <li>He was appointed as the law member.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the father of Communal Electorate in India?`,
      answer: `Lord Minto.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Indian Council Act 1909?`,
      answer: `<ul>
      <li>This Act is also known as Minto-Morley Reforms. Lord Minto was the then Viceroy and 
      Morley was the then Secretary of State for India.</li>
      <li>It provided for the first time, for the association of Indians with the executive 
      councils of the Viceroy and Governors.</li>
      <li>Satyendra Prasanna Sinha became the first Indian to become a member of the Viceroy's 
      Executive Council (1909). He was appointed as the law member.</li>
      <li>It introduced a system of communal representation in India by accepting the concept of 
      separate electorate for Muslims.</li>
      </ul>.`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act provided the right to vote for women in India?`,
      answer: `Government of India Act 1919.`,
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
      question: `Government of India Act 1919 is popularly known known as ______?`,
      answer: `Montague-Chelmsford Reforms.`,
      description: `<ul>
      <li>Montague was the Secretary of State for India and Chelmsford was the Viceroy of India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Government of India Act 1919?`,
      answer: `<ul>
      <li>This Act is popularly known as the Montague-Chelmsford Reforms. Montague was the 
      Secretary of State for India and Chelmsford was the Viceroy of India.
      .</li>
      <li>This Act provided the right to vote for women in India.</li>
      <li>It introduced 'dyarchy' in provinces by dividing the provincial subjects into two parts,      
      transferred and reserved.</li>
      <li>It introduced for the first time bicameralism and direct elections in the country. 
      The Act clearly defined The jurisdiction of the central and provincial governments.</li>
      <li>Out of the 6 members of the Viceroy's executive council (except Commander-in Chief) 3 
      were to be Indian members.</li>
      <li>It extended the principle of communal representation by providing separate electorates 
      for Sikhs, Indian Christians, Anglo Indians and Europeans.</li>
      <li>It provided for the Establishment of a public service commission which was set up in 
      1926 for recruiting civil servants.</li>
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Montague Chelmsford Reforms came into force in the year ______?`,
      answer: `1921.`,
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
  ];

}
