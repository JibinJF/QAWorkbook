import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-all-in-one-qa',
  template: `
    <app-display-qa [qas]="allInOneQAs" [workbookName]="workbookName">
    </app-display-qa>`,
  styles: [
  ]
})
export class AllInOneQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `All In One`;

  constructor() { }

  ngOnInit(): void {
  }

  allInOneQAs: QAModel[] = 
    [
      {
        qaNumber: this.qaNumber++,
        question: `?`,
        answer: `.`,
        description: `
          <ul>
            <li>.
            </li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Whose prior consent is required for the Supreme Court to initiate criminal contempt 
        action?`,
        answer: `Attorney General of India.`,
      },
      {
        qaNumber: this.qaNumber++,
        question: `According to the Contempt of Courts Act, 1971, contempt of court can either be 
        _____ contempt or _____ contempt?`,
        answer: `Civil contempt or Criminal contempt.`,
        description: `
          <ul>
            <li>Civil contempt means wilful disobedience to any judgment, decree, direction, order, 
            writ or other process of a court or wilful breach of an undertaking given to a court.
            </li>
            <li>Criminal contempt means the publication (whether by words, spoken or written, or by 
              signs, or by visible representations, or otherwise) of any matter or the doing of any 
              other act whatsoever which
              <ol>
                <li>scandalises or tends to scandalise, or lowers or tends to lower the authority of, 
                any court; or
                </li>
                <li>prejudices, or interferes or tends to interfere with, the due course of any 
                judicial proceeding; or
                </li>
                <li>interferes or tends to interfere with, or obstructs or tends to obstruct, the 
                administration of justice in any other manner.
                </li>
              </ol>
            </li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Invest India, set up in the year _____, is a non-profit venture under the 
        Department for Promotion of Industry and Internal Trade, Ministry of Commerce and Industry, 
        Government of India ?`,
        answer: `2009.`,
        description: `
          <ul>
            <li>It is the national investment promotion and facilitation agency.</li>
            <li>Invest India actively works with several Indian states to build capacity as well 
            as bring in global best practices in investment targeting, promotion and facilitation 
            areas.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Indian Space Research Organisation was formed in the year _____ ?`,
        answer: `1969.`,
        description: `
          <ul>
            <li>It was superseded the erstwhile Indian National Committee for Space Research 
            (INCOSPAR).</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `The Indian National Committee for Space Research (INCOSPAR) was set up by 
        the Government of India under the Department of Atomic Energy (DAE) in the year _____ ?`,
        answer: `1962`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Indian Ocean Naval Symposium (IONS) conceived by the Indian Navy in the year 
        _____, seeks to enhance maritime cooperation among Navies of the littoral states of the 
        Indian Ocean Region (IOR)?`,
        answer: `2008.`,
        description: `
          <ul>
            <li>A biennial event.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `_____ is a portion of a commercial bank’s Net Demand and Time Liabilities (NDTL) 
        that needs to be maintained at the central bank of the country (which is RBI in India)?`,
        answer: `Cash reserve ratio or CRR.`,
        description: `
          <ul>
            <li>CRR deposits are not eligible for earning interests.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `_____ the minimum percentage of Net Demand and Time Liabilities (NDTL) that 
        commercial banks needs to maintain in the form of liquid assets, cash, gold, government 
        securities, etc.?`,
        answer: `Statutory liquidity ratio or SLR.`,
        description: `
          <ul>
            <li>The limit of SLR for commercial banks is decided by the central bank of the 
            country (Reserve Bank of India or RBI in India) but the deposits are maintained by 
            the respective banks themselves. However, the SLR cannot be used by the bank for 
            lending.</li>
            <li>The deposits designated towards SLR are eligible for earning interests.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `_____ is the rate the central bank of a country pays its commercial banks to 
        park their excess funds in the central bank?`,
        answer: `Reverse Repo Rate.`,
      },
      {
        qaNumber: this.qaNumber++,
        question: `_____ is the interest rate at which the central bank of a country lends money 
        to commercial banks?`,
        answer: `Repo Rate.`,
        description: `
          <ul>
            <li>When there is a shortage of funds, commercial banks borrow money from the central 
            bank which is repaid according to the repo rate applicable. The central bank provides 
            these short terms loans against securities such as treasury bills or government bonds.
            </li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Minor Forest Produce (MFP) is a subset of forest produce and got a definition 
        only in 2007 when the _____ Act was enacted?`,
        answer: `Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest 
        Rights) Act, 2006.`,
        description: `
          <ul>
            <li>Section 2(4) of the Indian Forest Act 1927 defines only "forest-produce" and this 
            term connotes to those products whether found in, or brought from a forest such as 
            timber, charcoal, caoutchouc, catechu, wood-oil, resin, natural varnish, bark, lac, 
            mahua flowers, mahua seeds, kuth and myrobalans, trees and leaves, flowers and fruits, 
            and all other parts or produce of trees, plants not being trees (including grass, 
            creepers, reeds, and moss), and all parts or produce of such plants, wild animals and
            skins, tusks, horns, bones, silk, cocoons, honey and wax, and all other parts or produce 
            of animals, and peat, surface soil, rock and minerals (including limestone, laterite, 
            mineral oils), and all products of mines or quarries.
            </li>
            <li>The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights)
            Act, 2006, popularly known as the Forests Rights Act (FRA) recognizes and vests individual 
            forest-dwellers with forest rights to live in and cultivate forest land that was occupied 
            before 13 December 2005 and grants community forest rights to manage, protect and regenerate 
            the forest under section 3(1)(i), and to own and dispose minor forest products from
            forests where they had traditional access.
            </li>
            <li>Section 2(i) of the Scheduled Tribes and Other Traditional Forest Dwellers 
            (Recognition of Forest Rights) Act, 2006 defines a Minor Forest Produce (MFP) as all 
            non-timber forest produce of plant origin and includes bamboo, brushwood, stumps, canes, 
            Tusser, cocoon, honey, waxes, Lac, tendu/kendu leaves, medicinal plants and herbs, 
            roots, tuber and the like. Thus, the definition of “minor forest produce” includes
            bamboo and cane, thereby changing the categorization of bamboo and cane as “trees” under 
            the Indian Forest Act 1927.
            </li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `CBI is a non-constitutional and non-statutory body which derives its powers from 
        the _____ Act?`,
        answer: `Delhi Special Police Establishment Act (DSPE), 1946.`,
        description: `
          <ul>
            <li>It has the following three divisions for investigation of crime:.
              <ol>
                <li>Anti-Corruption Division.</li>
                <li>Economic Offences Division.</li>
                <li>Special Crimes Division.</li>
              </ol>
            </li>
            <li>CBI can suo-moto take up investigation of offences notified in DSPE act, only in 
            the Union Territories.</li>
            <li>CVC shall exercise superintendence over the functioning of the CBI insofar as it 
            relates to the investigation of offences under the Prevention of Corruption Act, 1988.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Indian territory can be ceded to a foreign state only by amending the Constitution 
        under Article _____ ?`,
        answer: `Article 368.`,
        description: `
          <ul>
            <li>Being a sovereign state, India can acquire foreign territories or cede own territories 
            according to the modes recognized by international law, i.e., cession (following treaty, 
            purchase, gift, lease or plebiscite), occupation (hitherto unoccupied by a recognized 
            ruler), conquest or subjugation.</li>
            <li>Article 2 relates to the admission or establishment of new states that are not part 
            of the Union of India.</li>
            <li>Article 3 relates to the formation of or changes in the existing states of the Union 
            of India. The Supreme Court held that the power of Parliament to diminish the area of a 
            state (under Article 3) does not cover the cession of Indian territory to a foreign 
            country.</li>
            <li>The settlement of a boundary dispute between India and another country does not 
            require a constitutional amendment. As was ruled by the Supreme Court in 1969, it can be 
            done by executive action as it does not involve cession of Indian territory to a
            foreign country.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Chak - Hao is a black rice variety of _____ ?`,
        answer: `Manipur.`,
        description: `
          <ul>
            <li>Black Aromatic Rice locally named as Chak-hao is well known for its attractive 
            colour and aromatic flavour and considered as on of the richest source of anthocyanin 
            found among food grain product apart from its optimal content of vitamins, minerals, 
            fibre, proteins, and many othe nutrients.</li>
            <li>GI tag has been given to the Chak-Hao rice.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `_____ are a sequence of earthquakes that happen after a larger mainshock on a fault?`,
        answer: `Aftershocks.`,
        description: `
          <ul>
            <li>Aftershocks occur near the fault zone where the mainshock rupture occurred and are 
            part of the "readjustment process” after the main slip on the fault.</li>
            <li>Aftershocks become less frequent with time, although they can continue for days, 
            weeks, months, or even years for a very large mainshock.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `A _____ is a sequence of mostly small earthquakes with no identifiable mainshock?`,
        answer: `Swarm.`,
        description: `
          <ul>
            <li>Swarms are usually short-lived, but they can continue for days, weeks, or 
            sometimes even months.</li>
            <li>They often recur at the same locations.</li>
            <li>Most swarms are associated with geothermal activity.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `The _____ is a specialized agency of the United Nations that leads 
        international efforts to defeat hunger and improve nutrition and food security?`,
        answer: `Food and Agriculture Organization (FAO).`,
        description: `
          <ul>
            <li>.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `_____ is the motto of of Food and Agriculture Organization (FAO)?`,
        answer: `Fiat panis.`,
        description: `
          <ul>
            <li>FAO's Latin motto, "fiat panis", translates to "let there be bread".</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Food and Agriculture Organization (FAO) was founded in the year _____?`,
        answer: `1945.`,
        description: `
          <ul>
            <li>First session of FAO Conference at Quebec City, Canada, in 1945, established 
            FAO as a specialized United Nations agency.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Under Article _____, the President can declare a national emergency when the 
        security of India or a part of it is threatened by war or external aggression or armed 
        rebellion?`,
        answer: `Article 352.`,
        description: `
          <ul>
            <li>The President, however, can proclaim a national emergency only after receiving a 
            written recommendation from the cabinet.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `The proclamation of national emergency must be approved by both the Houses of 
        the Parliament within _____ month(s) from the date of its proclamation by the President?`,
        answer: `1 month.`,
        description: `
          <ul>
            <li>A proclamation of emergency may be revoked by the President at any time by a subsequent
            proclamation. Such a proclamation does not require parliamentary approval.</li>
          </ul>`
      },
      {
        qaNumber: this.qaNumber++,
        question: `Once approved by both the houses of the Parliament the emergency continues for 
        _____ months?`,
        answer: `6 months.`,
        description: `
          <ul>
            <li>After completion of six months, the emergency can be extended for another six months 
            with the approval of both the houses of Parliament. Thus the emergency can be extended to 
            an indefinite period with an approval of the Parliament for every six months. This provision 
            for periodical parliamentary approval was added by the 44th Amendment Act of 1978. Before 
            that, the emergency, once approved by the Parliament, could remain in operation as long as 
            the Executive (cabinet) desired.</li>
            <li>Every resolution approving the proclamation of emergency or its continuance must be 
            passed by either House of Parliament by a special majority, that is,
              <ol>
                <li>a majority of the total membership of that house, and</li>
                <li>a majority of not less than two-thirds of the members of that house present and 
                voting.</li>
              </ol> 
            </li>
          </ul>`
      },            
    ];
  }
  