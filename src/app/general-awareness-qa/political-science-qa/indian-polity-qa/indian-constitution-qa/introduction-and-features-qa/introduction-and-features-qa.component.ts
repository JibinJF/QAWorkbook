import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-introduction-qa',
  template: `<app-display-qa [qas]="introductionQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class IntroductionAndFeaturesQAComponent {

  qaNumber: number = 1;
  workbookName: string = `Introduction And Features`;

  introductionQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The term 'Constitution' is derived from which Latin term?`,
      answer: `Constituere.`,
      description: `<ul>
      <li>Constituere means to establish.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The idea of constitution originated in which country?`,
      answer: `Britain.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The idea of written constitution originated in which country?`,
      answer: `USA.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country is known as the largest democracy in the world?`,
      answer: `India.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country is known as the first democracy in the world?`,
      answer: `Greece.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country is known as the cradle of democracy?`,
      answer: `Greece.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country is the longest surviving democracy in the world?`,
      answer: `Britain.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country is known as the land of modern democracy?`,
      answer: `Britain.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which book is known as the bible of modern democracy and French revolution?`,
      answer: `The Social Contract.`,
      description: `<ul>
      <li>Jean-Jacques Rousseau's The Social Contract is often referred to as the "bible of 
      modern democracy" because of its influence on the French Revolution and the development 
      of democratic ideas.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country is known as the home of direct democracy?`,
      answer: `Switzerland.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Earliest known mention of 'eye for eye and tooth for a tooth' is found in which 
      law?`,
      answer: `Hamurabi's code.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is considered as the world's first law giver?`,
      answer: `Hammurabi.`,
      description: `<ul>
      <li>The Code of Hammurabi was written in Babylonia around 1755 BC.</li>
      <li>The Code of Ur-Nammu is now found to be compiled around c. 2100 BC.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is considered as the first law giver in India?`,
      answer: `Manu.`,
      description: `<ul>
      <li>
      The Laws of Manu, also known as the Mānava-Dharmaśāstra or Manusmṛti, is a Sanskrit text 
      that is considered one of the most important sources of Hindu law, believed to have been 
      composed in the 2nd or 3rd centuries BCE.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the Modern Manu?`,
      answer: `Dr.B R Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the first written constitution in the world?`,
      answer: `American constitution.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the father of American constitution?`,
      answer: `James Madison.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the shortest and the oldest written constitution in the world?`,
      answer: `American constitution.`,      
      description: `<ul>
      <li>American constitution has only 7 articles.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Amerian constitution came into force in the year _____ ?`,
      answer: `1789.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The first ten amendments of the American constitution are collectively known 
      as _____ ?`,
      answer: `Bill of Rights.`,
      description: `<ul>
      <li>India adopted the idea of Fundamental Rights from the Bill of Rights.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `A written constitution is otherwise known as _____ constitution?`,
      answer: `Enacted constitution.`,
      description: `<ul>
      <li>Indian constitution and American constitution are examples of written constitution.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `An unwritten constitution is also known as 'Cumulative' or _____ constitution?`,
      answer: `Evolved.`,
      description: `<ul>
      <li>British constitution and Israel constitution are examples of unwritten constitution.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Constitution of USA, Canada, Switzerland, Japan, and Australia are examples of 
      flexible constitution. State true or false?`,
      answer: `False.`,
      description: `<ul>
      <li>Constitution of USA, Canada, Switzerland, Japan, and Australia are examples of rigid 
      constitution.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the lengthiest of all the written constitutions of the world?`,
      answer: `Indian constitution.`,
      description: `<ul>
      <li>Originally Indian constitution contained a preamble, 395 articles, 8 schedules,and 
      22 parts.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian constitution is federal in character and unitary in spirit. Hence, it 
      is referred to as _____ ?`,
      answer: `Quasi federal.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the most important features of the Indian Constitution?`,
      answer: `<ol>
      <li>Lengthiest Written Constitution.</li>
      <li>Drawn from Various Sources.</li>
      <li>Blend of Rigidity and Flexibility.</li>
      <li>Federal System with Unitary Bias.</li>
      <li>Parliamentary Form of Government.</li>
      <li>Synthesis of Parliamentary Sovereignty and Judicial Supremacy.</li>
      <li>Rule of Law.</li>
      <li>Integrated and Independent Judiciary.</li>
      <li>Fundamental Rights.</li>
      <li>Directive Principles of State Policy.</li>
      <li>Fundamental Duties.</li>
      <li>Secularism.</li>
      <li>Universal Adult Franchise.</li>
      <li>Single Citizenship.</li>
      <li>Independent Bodies.</li>
      <li>Emergency Provisions.</li>
      <li>Three-tier Government.</li>
      <li>Co-operative Societies.</li>
      </ol>`,
      description: `<ul>
      <li>Lengthiest Written Constitution: The Indian Constitution is the lengthiest written 
      constitution in the world. It has 395 articles, 22 parts, and 12 schedules.</li>
      <li>Drawn from Various Sources: The Indian Constitution was not created in a vacuum. It       
      was inspired by many different sources, including the constitutions of other countries, 
      such as the United States, the United Kingdom, and Canada.</li>
      <li>Blend of Rigidity and Flexibility: The Indian Constitution is a blend of rigidity and 
      flexibility. It is rigid in the sense that it is difficult to amend, but it is also 
      flexible in the sense that it allows for change.</li>
      <li>Federal System with Unitary Bias: The Indian Constitution establishes a federal system 
      of government. This means that there are two levels of government: the central government 
      and the state governments. However, the Constitution also gives the central government more 
      power than the state governments. This is known as a "unitary bias".</li>
      <li>Parliamentary Form of Government: The Indian Constitution establishes a parliamentary 
      form of government. This means that the executive branch is responsible to the legislative 
      branch. The Prime Minister is the head of the government, and he or she is appointed by 
      the President.</li>
      <li>Synthesis of Parliamentary Sovereignty and Judicial Supremacy: The Indian Constitution 
      synthesizes the principles of parliamentary sovereignty and judicial supremacy. This means 
      that the Parliament is supreme in the legislative realm, but the Supreme Court is supreme 
      in the judicial realm.</li>
      <li>Rule of Law: The Indian Constitution guarantees the rule of law. This means that 
      everyone is subject to the law, including the government.</li>
      <li>Integrated and Independent Judiciary: The Indian Constitution establishes an 
      independent judiciary. This means that the judges are not subject to the control of the 
      executive branch.</li>
      <li>Fundamental Rights: The Indian Constitution guarantees fundamental rights to all 
      citizens.</li>
      <li>Directive Principles of State Policy: The Indian Constitution also contains directive 
      principles of state policy. These principles are not enforceable by the courts, but they 
      are nevertheless important guidelines for the government.</li>
      <li>Fundamental Duties: The Indian Constitution also enumerates fundamental duties for all 
      citizens. These duties include the duty to uphold the Constitution, the duty to protect 
      the environment, and the duty to promote harmony among different religious groups.</li>
      <li>Secularism: The Indian Constitution establishes India as a secular state. This 
      means that the government is not affiliated with any particular religion.</li>
      <li>Universal Adult Franchise: The Indian Constitution guarantees universal adult franchise. 
      This means that all adults, regardless of their gender, caste, or religion, have the right 
      to vote.</li>
      <li>Single Citizenship: The Indian Constitution establishes a single citizenship for all 
      Indians. This means that all Indians are citizens of India, regardless of the state in 
      which they live.</li>
      <li>Independent Bodies: The Indian Constitution establishes a number of independent bodies, 
      such as the Election Commission, the Comptroller and Auditor General, and the National 
      Human Rights Commission. These bodies are responsible for ensuring that the government is 
      accountable to the people.</li>
      <li>Emergency Provisions: The Indian Constitution provides for emergency provisions. These 
      provisions can be used by the President to suspend certain fundamental rights and to 
      assume more power. However, the emergency provisions can only be used in very limited 
      circumstances.</li>
      <li>Three-tier Government: The Indian Constitution establishes a three-tier system of 
      government: the central government, the state governments, and the local governments. 
      This system of government is designed to ensure that power is distributed more evenly 
      throughout the country.</li>
      <li>Co-operative Societies: The Indian Constitution recognizes the importance of 
      co-operative societies. These societies are voluntary organizations that are formed to 
      promote the economic interests of their members..</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>quasi federal</i>?`,
      answer: `K C Wheare.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>co-operative federalism</i>?`,
      answer: `Granville Austin.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>Federation with centralising 
      tendency</i>?`,
      answer: `Ivor Jennings.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>lawyer's paradise</i>?`,
      answer: `Ivor Jennings.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>unitary as well as federal</i>?`,
      answer: `Dr. B R Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>extremely federal</i>?`,
      answer: `Paul Appleby.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>bargaining federalism</i>?`,
      answer: `Morris Jones.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>mixture of unitary and federal 
      features</i>?`,
      answer: `D D Basu.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who characterized Indian constitution as <i>a case sui generis</i>?`,
      answer: `Alexandrowics.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    
  ];

}
