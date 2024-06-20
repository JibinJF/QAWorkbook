import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-fundamental-rights-qa',
  template: `<app-display-qa [qas]="fundamentalRightsQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class FundamentalRightsQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Fundamental Rights`;

  constructor() { }

  ngOnInit(): void {
  }

  fundamentalRightsQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Fundamental Rights are defined in which part of the Constitution 
      of India?`,
      answer: `Part III (Articles 12 to 35).`,
      description: `<ul>
      <li>Part III of the Constitution is known as the 'Magnacarta of India' or the 'keystone of the Constitution'.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is considered as the father of Fundamental rights in India?`,
      answer: `Sardar Vallabhbhai Patel.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The idea of Fundamental Rights has been taken from which constitution?`,
      answer: `US Constitution (Bill of Rights).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many categories of Fundamental Rights were there in the Original Constitution?`,
      answer: `7.`,
      description: `<ul>
      <li>Now, there are only 6 categories of Fundamental Rights.</li>
      <li>Right to property is no longer a fundamental right.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Right to property as a fundamental right was abolished by which amendment?`,
      answer: `44th Constitutional Amendment Act of 1978.`,
      description: `<ul>
      <li>44th Constitutional Amendment Act of 1978 abolished the Right to Property as a Fundamental Right, by repealing Article 19(1)(f) 
      and Article 31 from Part III of the Constitution.</li>
      <li>Instead, Article 300-A was insterted in Part XII, under heading 'Right to Property'.</li>
      <li>Presently, right to property is a Constitutional or Legal right, but not fundamental right.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `What does Article 13 deal with?`,
      answer: `Laws inconsistent with or in derogation of the fundamental rights.`,
      description: `<ul>
        <li>As per Article 13, laws inconsistent with or in derogation of the fundamental 
        rights shall, to the extent of such inconsistency or contravention, be void.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many fundamental rights are provided by the Constitution of India?`,
      answer: `6.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `What are the fundamental rights provided by the Constitution of India?`,
      answer: `<ol>
      <li>Right to Equality.</li>
      <li>Right to Freedom.</li>
      <li>Right against Exploitation.</li>
      <li>Right to Freedom of Religion.</li>
      <li>Cultural and Educational Rights.</li>
      <li>Right to Constitutional Remedies.</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Right to Equality is guaranteed by the Constitution of India through 
      articles _____ to _____ ?`,
      answer: `Article 14 to 18.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Right to Freedom is guaranteed by the Constitution of India through 
      articles _____ to _____ ?`,
      answer: `Article 19 to 22.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Right against Exploitation is guaranteed by the Constitution of India 
      through articles _____ to _____ ?`,
      answer: `Article 23 to 24.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Right to Freedom of Religion is guaranteed by the Constitution of India 
      through articles _____ to _____ ?`,
      answer: `Article 25 to 28.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Cultural and Educational Rights is guaranteed by the Constitution of India 
      through articles _____ to _____ ?`,
      answer: `Article 29 to 31.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Right to Constitutional Remedies is guaranteed by the Constitution of India 
      through article _____ ?`,
      answer: `Article 32.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 14 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India`,
      answer: `Equality before law.`,
      description: `<ul>
        <li>Article 14: The State shall not deny to any person equality before 
        the law or the equal protection of the laws within the territory of India.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The idea of equality before law was borrowed from __(1)__ whereas the idea of equal protection of the laws was 
      borrowed from __(2)__?`,
      answer: `<ol>
      <li>Britain.</li>
      <li>USA.</li>
      </ol>`,
      description: `<ul>
      <li>The idea of equality before law was borrowed from Britain whereas the idea of equal protection of the laws was 
      borrowed from USA.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 14 is based on the concept of Rule of Law prepared by whom?`,
      answer: `A V Dicey.`,
      description: `<ul>
      <li>Rule of law was borrowed from Britain.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Article is an exception to Article 14?`,
      answer: `Article 31-C.`,
      description: `<ul>
      <li>It provides that the laws made by the State for implementing Directive Principles of State Policy contained in clause (b) 
      or clause (c) of Article 39 cannot be challenged on the ground that they are violative of Article 14.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 15 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Prohibition of discrimination on grounds only of religion, race, caste, 
      sex or place of birth.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 16 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Equality of opportunity in matters of public employment.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which was the 7 member committee constituted in 2005 to study the social, economic and educational condition of 
      Muslims in India?`,
      answer: `Sachar Committee.`,
      description: `<ul>
      <li>It recommended setting up of an equal opportunity commission.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 17 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Abolition of Untouchability.`,
      description: `<ul>
      <li>Untouchability is abolished by Article 17 and through the Protection of Civil Rights Act, 1955.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Article was adopted by the Constituent Assembly with the slogan 'Mahatma Gandhi Ki Jai'?`,
      answer: `Article 17.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 18 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Abolition of titles.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 19 deals with _____, which comes under the Right to Freedom 
      guaranteed by the Constitution of India?`,
      answer: `Protection of certain rights regarding freedom of speech, assembly, etc.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 19(1)(a) guarantees that all citizens shall have the right
      to _____?`,
      answer: `Freedom of speech and expression.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The freedom of press (Fourth Estate) is implicit in which Article?`,
      answer: `Article 19(1)(a).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who coined the term 'Fourth Estate'?`,
      answer: `Edmund Burke.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `To curtail the freedom of the Indian Press, which Act was enacted by British 
      in the year 1878?`,
      answer: `Vernacular Press Act.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the Viceroy of British India when the Vernacular Press Act was enacted?`,
      answer: `Lord Lytton.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the Viceroy of British India when the Vernacular Press Act was repealed?`,
      answer: `Lord Rippon.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the liberator of Indian Press?`,
      answer: `Charles Metcalfe.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 19(1)(b) guarantees that all citizens shall have the right
      to _____?`,
      answer: `Assemble peaceably and without arms.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 19(1)(c) guarantees that all citizens shall have the right
      to _____?`,
      answer: `Form associations or unions.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 19(1)(d) guarantees that all citizens shall have the right
      to _____?`,
      answer: `Move freely throughout the territory of India.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 19(1)(e) guarantees that all citizens shall have the right
      to _____?`,
      answer: `Reside and settle in any part of the territory of India.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 19(1)(g) guarantees that all citizens shall have the right
      to _____?`,
      answer: `Practise any profession, or to carry on any occupation, trade or business.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 20 deals with _____, which comes under the Right to Freedom 
      guaranteed by the Constitution of India?`,
      answer: `Protection in respect of conviction for offences.`,
      description: `<ul>
        <li>Article 20(1): No ex post facto laws.
          <ul>
          <li>No person shall be convicted of any offence except for violation of a law 
          in force at the time of the commission of the Act charged as an offence, nor be
          subjected to a penalty greater than that which might have been inflicted under 
          the law in force at the time of the commission of the offence.</li>
          </ul>
        </li>
        <li>Article 20(2): No double jeopardy.
          <ul>
          <li>No person shall be prosecuted and punished for the same offence more 
          than once.</li>
          </ul>
        </li>
        <li>Article 20(3): No self incrimination.
          <ul>
          <li>No person accused of any offence shall be compelled to be a witness against 
          himself.</li>
          </ul>
        </li>
      </ul>`
    },
    
    {
      qaNumber: this.qaNumber++,
      question: `Article 20(1) of the Constitution ensures that there should be no ______?`,
      answer: `Ex-post-facto law.`,
      description: `<ul>
      <li>No person shall be convicted of any offence except for violation of a law 
      in force at the time of the commission of the Act charged as an offence, nor be
      subjected to a penalty greater than that which might have been inflicted under 
      the law in force at the time of the commission of the offence.</li>
      <li>The limitation is imposed only on criminal laws and not on civil laws or tax laws, which 
      can be imposed retrospectively.</li>
      <li>This immunity is not available in case of preventive detention or demanding security from 
      a person.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 20(2) of the Constitution ensures that there should be no ______?`,
      answer: `Double jeopardy.`,
      description: `<ul>
      <li>No person shall be prosecuted and punished for the same offence more than once.</li>
      <li>This protection is available only for proceedings before a court of law or judicial tribunal, and 
      is not available against proceedings before departmental or administrative authorities which are 
      not judicial in nature.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 20(3) of the Constitution ensures that there should be no ______?`,
      answer: `: Self incrimination.`,
      description: `<ul>
      <li>No person accused of any offence shall be compelled to be a witness against himself.</li>
      <li>This protection is not available against the need to give thumb impression, specimen signature, 
      and blood sample, etc.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Article is known as the base of fundamental rights?`,
      answer: `Article 21.`,
    },    
    {
      qaNumber: this.qaNumber++,
      question: `Which are the Articles which are considered as the Golden triangle of Indian Constitution?`,
      answer: `Article 14, 19, and 21.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 21 deals with _____, which comes under the Right to Freedom 
      guaranteed by the Constitution of India?`,
      answer: `Protection of life and personal liberty.`,
      description: `<ul>
      <li>Article 21: No person shall be deprived of his life or personal liberty except
       according to procedure established by law.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 21A deals with _____, which comes under the Right to Freedom 
      guaranteed by the Constitution of India?`,
      answer: `Right to education.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 21A is inserted into the Constitution by which amendment act?`,
      answer: `Eighty-sixth Amendment Act, 2002.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Right to education is guaranteed by the Constitution of India to all 
      children of the age of _____ to _____ years?`,
      answer: `6 to 14 years.`,
      description: `<ul>
      <li>Article 21A: The State shall provide free and compulsory education to all 
      children of the age of six to fourteen years in such manner as the State may, by law, 
      determine.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Based on Article 21A, Parliament enacted Right to Education Act, which came into force on
      ______?`,
      answer: `2010 April 01.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 22 deals with _____, which comes under the Right to Freedom 
      guaranteed by the Constitution of India?`,
      answer: `Protection against arrest and detention in certain cases.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `As per Article 22(2) of the Constitution of India, arrested person 
      shall be produced before magistrate within a period of _____ hours of such arrest?`,
      answer: `24 hours.`,
      description: `<ul>
      <li>Article 22(2): Every person who is arrested and detained in custody shall be 
      produced before the nearest magistrate within a period of twenty-four hours of such 
      arrest excluding the time necessary for the journey from the place of arrest to the 
      court of the magistrate and no such person shall be detained in custody beyond the 
      said period without the authority of a magistrate.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 23 deals with _____, which comes under the Right against 
      Exploitation guaranteed by the Constitution of India?`,
      answer: `Prohibition of traffic in human beings and forced labour.`,
      description: `<ul>
      <li>Article 23(1): Traffic in human beings and begar and other similar forms of 
      forced labour are prohibited and any contravention of this provision shall be an 
      offence punishable in accordance with law.</li>
      <li>State can impose compulsory service for public purposes without any 
      discrimination.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 24 deals with _____, which comes under the Right against 
      Exploitation guaranteed by the Constitution of India?`,
      answer: `Prohibition of employment of children in factories, etc.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Constitution of India prohibits employment of children under _____ 
      years of age in hazardous employment?`,
      answer: `14 years.`,
      description: `<ul>
      <li>Article 24: No child below the age of fourteen years shall be employed 
      to work in any factory or mine or engaged in any other hazardous employment.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the label given to products to certify that no child, forced or bonded labor was 
      used in its making?`,
      answer: `GoodWeave label.`,
      description: `<ul>
      <li>Formerly known as Rugmark.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the founder of GoodWeave, a nonprofit organization working to stop child labor in 
      global supply chains?`,
      answer: `Kailash Satyarthi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `When was GoodWeave founded?`,
      answer: `1994.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which was the movement established by Kailash Satyarthi in 1980 with a vision to end the 
      menace of child labour?`,
      answer: `Bachpan Bachao Andolan.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Kailash Satyarthi was awarded nobel peace price along with Malala Yousafzai in which year?`,
      answer: `2014.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `World day against child labour?`,
      answer: `June 12.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 25 deals with _____, which comes under the Right to Freedom 
      of Religion guaranteed by the Constitution of India?`,
      answer: `Freedom of conscience and free profession, practice and propagation of
      religion.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 26 deals with _____, which comes under the Right to Freedom 
      of Religion guaranteed by the Constitution of India?`,
      answer: `Freedom to manage religious affairs.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 27 deals with _____, which comes under the Right to Freedom 
      of Religion guaranteed by the Constitution of India?`,
      answer: `Freedom as to payment of taxes for promotion of any particular religion.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 28 deals with _____, which comes under the Right to Freedom 
      of Religion guaranteed by the Constitution of India?`,
      answer: `Freedom as to attendance at religious instruction or religious worship 
      in certain educational institutions.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 29 deals with _____, which comes under the Right to Cultural 
      and Educational Rights guaranteed by the Constitution of India?`,
      answer: `Protection of interests of minorities.`,
      description: `<ul>
      <li>Any section of the citizens residing in the territory of India or any part thereof having a 
      distinct language, script or culture of its own shall have the right to conserve the same.</li>
      <li>No citizen shall be denied admission into any educational institution maintained by the State 
      or receiving aid out of State funds on grounds only of religion, race, caste, language or any 
      of them.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 30 deals with _____, which comes under the Cultural and 
      Educational Rights guaranteed by the Constitution of India?`,
      answer: `Right of minorities to establish and administer educational institutions.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Article is termed by Ambedkar as the "Heart and Soul" of the Constitution?`,
      answer: `Article 32.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 32 deals with _____, which comes under the Right to Constitutional 
      Remedies guaranteed by the Constitution of India?`,
      answer: `Remedies for enforcement of rights conferred by the Part III of the Indian 
      Constitution.`,
      description: `<ul>
      <li>Article 32(2): The Supreme Court shall have power to issue directions or orders 
      or writs, including writs in the nature of habeas corpus, mandamus, prohibition, 
      quo warranto and certiorari, whichever may be appropriate, for the enforcement of any 
      of the rights conferred by this Part.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which are the Fundamental Rights available only to Indian Citizens and not to foreigners?`,
      answer: `Articles 15, 16, 19, 29, and 30.`,
    },
  ];
}