import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-dpspqa',
    template: `<app-display-qa [qas]="dpspQAs" [workbookName]="workbookName">
  </app-display-qa>`,
    styles: [],
    standalone: false
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
      question: `Which Article of the Constitution of India instructs the State to promote 
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
      question: `Article 43A of the Constitution of India deals with _____ ?`,
      answer: `Participation of workers in management of industries.`,
      description: `<ul>
        <li>Article 43A: The State shall take steps, by suitable legislation or in any 
        other way, to secure the participation of workers in the management of undertakings, 
        establishments or other organisations engaged in any industry.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 44 of the Constitution of India deals with _____ ?`,
      answer: `Uniform civil code for the citizens.`,
      description: `<ul>
        <li>Article 44: The State shall endeavour to secure for the citizens a uniform civil 
        code throughout the territory of India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 45 of the Constitution of India deals with _____ ?`,
      answer: `Provision for free and compulsory education for children.`,
      description: `<ul>
       <li>Article 45: The State shall endeavour to provide, within a period of ten years 
       from the commencement of this Constitution, for free and compulsory education for all
       children until they complete the age of fourteen years.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 46 of the Constitution of India deals with _____ ?`,
      answer: `Promotion of educational and economic interests of Scheduled Castes, Scheduled 
      Tribes and other weaker sections.`,
      description: `<ul>
        <li>Article 46: The State shall promote with special care the educational and economic 
        interests of the weaker sections of the people, and, in particular, of the Scheduled 
        Castes and the Scheduled Tribes, and shall protect them from social injustice and all 
        forms of exploitation.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 47 of the Constitution of India deals with _____ ?`,
      answer: `Duty of the State to raise the level of nutrition and the standard of living 
      and to improve public health.`,
      description: `<ul>
        <li>Article 47: The State shall regard the raising of the level of nutrition and the 
        standard of living of its people and the improvement of public health as among its 
        primary duties and, in particular, the State shall endeavour to bring about 
        prohibition of the consumption, except for medicinal purposes, of intoxicating drinks 
        and of drugs which are injurious to health.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Article of the Constitution of India urges the State to bring about 
      prohibition of the consumption of intoxicating drinks and drugs?`,
      answer: `Article 47.`,
      description: `<ul>
        <li>Article 47: The State shall regard the raising of the level of nutrition and the 
        standard of living of its people and the improvement of public health as among its 
        primary duties and, in particular, the State shall endeavour to bring about 
        prohibition of the consumption, except for medicinal purposes, of intoxicating drinks 
        and of drugs which are injurious to health.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 48 of the Constitution of India deals with _____ ?`,
      answer: `Organisation of agriculture and animal husbandry.`,
      description: `<ul>
        <li>Article 48: The State shall endeavour to organise agriculture and animal 
        husbandry on modern and scientific lines and shall, in particular, take steps for 
        preserving and improving the breeds, and prohibiting the slaughter, of cows and 
        calves and other milch and draught cattle.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 48A of the Constitution of India deals with _____ ?`,
      answer: `Protection and improvement of environment and safeguarding of forests and 
      wild life.`,
      description: `<ul>
       <li>Article 48A: The State shall endeavour to protect and improve the environment 
       and to safeguard the forests and wild life of the country.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 49 of the Constitution of India deals with _____ ?`,
      answer: `Protection of monuments and places and objects of national importance.`,
      description: `<ul>
        <li>Article 49: It shall be the obligation of the State to protect every monument, 
        or place or object of artistic or historic interest, declared by or under law made 
        by Parliament to be of national importance, from spoliation, disfigurement, 
        destruction, removal, disposal or export, as the case may be.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 50 of the Constitution of India deals with _____ ?`,
      answer: `Separation of judiciary from executive.`,
      description: `<ul>
        <li>Article 50: The State shall take steps to separate the judiciary
        from the executive in the public services of the State.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Article 51 of the Constitution of India deals with _____ ?`,
      answer: `Promotion of international peace and security.`,
      description: `<ul>
        <li>The State shall endeavour to
          <ol type="a">
            <li>promote international peace and security;</li>
            <li>maintain just and honourable relations between nations;</li>
            <li>foster respect for international law and treaty obligations in the dealings 
            of organized peoples with one another; and</li>
            <li>encourage settlement of international disputes by arbitration.</li>
          </ol>
        </li>
      </ul>`
    },    
  ];
}
