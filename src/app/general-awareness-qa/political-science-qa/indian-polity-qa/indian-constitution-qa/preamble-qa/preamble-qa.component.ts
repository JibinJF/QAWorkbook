import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-preamble-qa',
  template: `<app-display-qa [qas]="preambleQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class PreambleQAComponent {
  qaNumber: number = 1;
  workbookName: string = `Preamble`;

  preambleQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `India adopted the idea of preamble from which country?`,
      answer: `USA.`,
      description: `<ul>
      <li>American Constitution was the first to begin with a preamble.</li>
      </ul>`
    },    
    {
      qaNumber: this.qaNumber++,
      question: `In India, Preamble is often referred as the ______ of the 
      Constitution?`,
      answer: `Soul.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Preamble declares that the sovereignty or supreme power 
      in India belongs to the ______?`,
      answer: `people.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the architect of the preamble of Indian 
      Constitution?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The preamble was prepared based on ______'?`,
      answer: `Objective Resolution.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Objective Resolution was introduced in the constituent 
      assembly on which date?`,
      answer: `13 December 1946.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Objective Resolution was introduced in the constituent 
      assembly by whom?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Objective Resolution was passed by the Assembly on 
      which date?`,
      answer: `22 January 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `As originally enacted, the preamble described India as a 
      ______ Republic?`,
      answer: `Sovereign, Democractic.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `After the 42nd Constitutional Amendment Act of 1976, 
      preamble describe India as a ______ Republic?`,
      answer: `Sovereign, Socialist, Secular, Democractic.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `What are the 3 new words inserted into the preamble by 
      the 42nd Constitutional Amendment Act of 1976?`,
      answer: `<ol>
      <li>Socialist.</li>
      <li>Secular.</li>
      <li>Integrity.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `State the text of the Preamble to the Indian 
      Constitution?`,
      answer: `WE, THE PEOPLE OF INDIA, having solemnly 
      resolved to constitute India into a SOVEREIGN
      SOCIALIST SECULAR DEMOCRATIC REPUBLIC and
      to secure to all its citizens:</br>
      JUSTICE, social, economic and political;</br>
      LIBERTY of thought, expression, belief, faith and
      worship;</br>
      EQUALITY of status and of opportunity; and to promote among them all</br>
      FRATERNITY assuring the dignity of the individual
      and the unity and integrity of the Nation;</br>
      IN OUR CONSTITUENT ASSEMBLY this twenty-
      sixth day of November, 1949, do HEREBY ADOPT,
      ENACT AND GIVE TO OURSELVES THIS
      CONSTITUTION.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the only date mentioned in Preamble?`,
      answer: `26 November 1949.`,
      description: `<ul>
      <li>It is the date on which Indian Constitution was adopted.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In which case did the Supreme Court hold that the Preamble 
      is part of the Constitution?`,
      answer: `Kesavananda Bharati Vs State of Kerala (1973).`,
      description: `<ul>
      <li>The 'Basic Structure' doctrine of Indian Constitution was 
      propunded by the Supreme Court in the Kesavananda Bharati Vs State 
      of Kerala case.</li>
      <li>In the Berubari case (1960), Supreme Court held that the Preamble 
      was not an integral part of the Constitution.</li>
      <li>In the Union Government Vs LIC of India (1995) case, the 
      Supreme Court once again held that the Preamble is an integral 
      part of the Constitution.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Preamble can be amended under which Article without 
      destroying the basic structure of the Constitution?`,
      answer: `Article 368.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who called Preamble as the 'Political Horoscope' of the 
      Constitution?`,
      answer: `K M Munshi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who called Preamble as the 'Identity Card' of the 
      Constitution?`,
      answer: `N A Palkivala.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who called Preamble as the 'Key' to the Constitution?`,
      answer: `Earnest Barker.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who called Preamble as the 'Heart and Soul' of the 
      Constitution?`,
      answer: `Thakur Das Bhargav.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who called Preamble as the 'Soul and key' to the 
      Constitution?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who called Preamble as the 'Soul' of the Constitution?`,
      answer: `M Hidayatullah.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In which case Supreme Court hold that Preamble is not a 
      collection of useless rhetoric?`,
      answer: `Atam Prakash Vs State of Haryana (1986).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who commented on the Preamble by saying that "the Preamble 
      expresses what we had thought or dreamt so long"?`,
      answer: `Alladi Krishnaswami Iyer.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who commented on the Preamble by saying that "the proper 
      functioning of a Preamble is to explain certain facts which are 
      necessary to be explained before the provisions contained in the act 
      can be understood"?`,
      answer: `Dr. Durgadas Basu.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who commented on the Preamble by saying that "the Preamble 
      contains in a nutshell,its ideals and aspiration"?`,
      answer: `Koka Subha Rao.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who commented on the Preamble by saying that "Preamble is 
      neither a source of power nor a source of privation of power"?`,
      answer: `P B Gajendragadkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who commented on the Preamble by saying that "the Preamble 
      is the key to open the minds of the makers of the Act, and the mischief
      which they intended to redress"?`,
      answer: `James Dyer.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who said that "this Preamble embodies what is the desire 
      of every member of the house that this Constitution should have its 
      root, its authority, its sovereignty from the people", on the floor 
      of Constituent Assembly in 1949?`,
      answer: `Dr. B R Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who suggested that the Preamble should begin with the 
      words "In the name of god"?`,
      answer: `H V Kamath.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `'Economic Justice' as one of the objectives of the Indian 
      Constitution has been provided in the Preamble, and the ______?`,
      answer: `Directive Principles of State Policy.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Congress session put forward a socialistic pattern 
      to India?`,
      answer: `Avadi session (1955).`,
      description: `<ul>
      <li>President of 1955 Avadi session was UN Dhebar.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `From where did the ideal of 'Justice in social, economic, 
      and political' taken?`,
      answer: `Russian Revolution (1917).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `From where did the ideal of 'liberty, equality, and 
      fraternity' taken?`,
      answer: `French Revolution (1789).`,
    },
  ];
}
