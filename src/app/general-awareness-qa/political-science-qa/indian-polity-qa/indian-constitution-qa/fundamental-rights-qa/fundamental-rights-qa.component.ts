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
      answer: `Part III.`
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
      question: `Article 17 deals with _____, which comes under the Right to Equality 
      guaranteed by the Constitution of India?`,
      answer: `Abolition of Untouchability.`,
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
      answer: `Protection of certain rights regarding freedom of speech, etc..`,
      description: `<ul >
        <li>As per Article 19(1): All citizens shall have the right—
        <ol type="a">
          <li>to freedom of speech and expression;</li>
          <li>to assemble peaceably and without arms;</li>
          <li>to form associations or unions;</li>
          <li>to move freely throughout the territory of India;</li>
          <li>to reside and settle in any part of the territory of India;</li>
          <li>Repealed;</li>
          <li>to practise any profession, or to carry on any occupation, trade or business.</li>
        </ol>
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 19(1)(a) guarantees that all citizens shall have the right
      to _____?`,
      answer: `Freedom of speech and expression.`,
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
      description: `<ul>
      <li>Article 21A is inserted by the Constitution (Eighty-sixth Amendment) Act, 2002.</li>
      </ul>`
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
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 30 deals with _____, which comes under the Cultural and 
      Educational Rights guaranteed by the Constitution of India?`,
      answer: `Right of minorities to establish and administer educational institutions.`,
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
  ];
}