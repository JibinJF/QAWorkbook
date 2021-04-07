import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-dpspqa',
  template: `<app-display-qa [qas]="dpspQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class DPSPQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Directive Principles Of State Policy`;

  constructor() { }

  ngOnInit(): void {
  }

  dpspQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Directive Principles Of State Policy are defined in which part of 
      the Constitution of India?`,
      answer: `Part IV.`,
      description: `<ul>
        <li>Though, it shall be the duty of the State to apply these principles in making 
      laws, the provisions contained in this Part are not be enforceable by any court.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 38, which comes under the Part IV of the Constitution of India,
      states that _____ ?`,
      answer: `State to secure a social order for the promotion of welfare of the people.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `As per the Directive Principles Of State Policy defined in the Constitution 
      of India, the State shall secure and protect a social order in which _____, _____, and 
      _____ justice prevails?`,
      answer: `Social, economic, and political.`,
      description: `<ul>
        <li>Art 38(1): The State shall strive to promote the welfare of the people by 
        securing and protecting as effectively as it may a social order in which justice, 
        social, economic and political, shall inform all the institutions of the
        national life.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `As per the Directive Principles Of State Policy defined in the Constitution 
      of India, the State shall strive to minimise the inequalities in __(1)__, and endeavour 
      to eliminate inequalities in __(2)__, __(3)__, and __(4)__?`,
      answer: `<ol>
        <li>Income.</li>
        <li>Status.</li>
        <li>Facilities.</li>
        <li>Opportunities.</li>
      </ol>`,
      description: `<ul>
        <li>Art 38(2): The State shall, in particular, strive to minimise the inequalities 
        in income, and endeavour to eliminate inequalities in status, facilities and 
        opportunities, not only amongst individuals but also amongst groups of people 
        residing in different areas or engaged in different vocations.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 39(a) of the Constitution of India says that the State shall 
      direct its policy towards securing _____ ?`,
      answer: `That the citizens, men and women equally, have the right to an adequate means 
      of livelihood.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 39(b) of the Constitution of India says that the State shall 
      direct its policy towards securing _____ ?`,
      answer: `That the ownership and control of the material resources of the community 
      are so distributed as best to subserve the common good.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 39(c) of the Constitution of India says that the State shall 
      direct its policy towards securing _____ ?`,
      answer: `That the operation of the economic system does not result in the concentration 
      of wealth and means of production to the common detriment.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 39(d) of the Constitution of India says that the State shall 
      direct its policy towards securing _____ ?`,
      answer: `That there is equal pay for equal work for both men and women.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 39(e) of the Constitution of India says that the State shall 
      direct its policy towards securing _____ ?`,
      answer: `That the health and strength of workers, men and women, and the tender age of 
      children are not abused and that citizens are not forced by economic necessity to enter 
      avocations unsuited to their age or strength.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 39(f) of the Constitution of India says that the State shall 
      direct its policy towards securing _____ ?`,
      answer: `That children are given opportunities and facilities to develop in a healthy 
      manner and in conditions of freedom and dignity and that childhood and youth are 
      protected against exploitation and against moral and material abandonment.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 39A of the Constitution of India deals with _____ ?`,
      answer: `Equal justice and free legal aid.`,
      description: `<ul>
        <li>Article 39A: The State shall secure that the operation of the legal system 
        promotes justice, on a basis of equal opportunity, and shall, in particular, 
        provide free legal aid, by suitable legislation or schemes or in any other way, 
        to ensure that opportunities for securing justice are not denied to any citizen by 
        reason of economic or other disabilities.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 40 of the Constitution of India deals with _____ ?`,
      answer: `Organisation of village panchayats.`,
      description: `<ul>
        <li>The State shall take steps to organise village panchayats and endow them with 
        such powers and authority as may be necessary to enable them to function as units 
        of self-government.
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 41 of the Constitution of India deals with _____ ?`,
      answer: `Right to work, to education and to public assistance in certain cases.`,
      description: `<ul>
        <li>Article 41: The State shall, within the limits of its economic capacity and 
        development, make effective provision for securing the right to work, to education 
        and to public assistance in cases of unemployment, old age, sickness and 
        disablement, and in other cases of undeserved want.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 42 of the Constitution of India deals with _____ ?`,
      answer: `Provision for just and humane conditions of work and maternity relief.`,
      description: `<ul>
       <li>Article 42: The State shall make provision for securing just and humane 
       conditions of work and for maternity relief.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 43 of the Constitution of India deals with _____ ?`,
      answer: `Living wage, etc., for workers.`,
      description: `<ul>
        <li>Article 43: The State shall endeavour to secure, by suitable legislation or 
        economic organisation or in any other way, to all workers, agricultural, industrial 
        or otherwise, work, a living wage, conditions of work ensuring a decent standard of 
        life and full enjoyment of leisure and social and cultural opportunities and, in 
        particular, the State shall endeavour to promote cottage industries on an
        individual or co-operative basis in rural areas.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article _____ of the Constitution of India instructs the State to promote 
      cottage industries?`,
      answer: `Article 43.`,
      description: `<ul>
        <li>Article 43: The State shall endeavour to secure, by suitable legislation or 
        economic organisation or in any other way, to all workers, agricultural, industrial 
        or otherwise, work, a living wage, conditions of work ensuring a decent standard of 
        life and full enjoyment of leisure and social and cultural opportunities and, in 
        particular, the State shall endeavour to promote cottage industries on an
        individual or co-operative basis in rural areas.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
       <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
       <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
       <li></li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
        <li></li>
      </ul>`
    },
  ];
}
