import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-citizenship-qa',
    template: `<app-display-qa [qas]="citizenshipQAs" [workbookName]="workbookName"></app-display-qa>`,
    styles: [],
    standalone: false
})
export class CitizenshipQAComponent {
  qaNumber: number = 1;
  workbookName: string = `Citizenship`;

  citizenshipQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Which Part of the Indian Constitution deals with 
      Citizenship?`,
      answer: `Part II.`,
      description: `<ul>
      <li>Article 5 to 11.</li>
      </ul>`
    },    
    {
      qaNumber: this.qaNumber++,
      question: `From where did India adopt the idea of single citizenship?`,
      answer: `Britain.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In which year did Parliament enact the Citizenship Act?`,
      answer: `1955.`,
      description: `<ul>
      <li>Only the Parliament can make provisions relating to citizenship.</li>
      <li>Only the citizens of India have the right to vote in Parliamentary 
      and Assembly elections.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `According to the Citizenship Act 1955, by how many ways 
      can a person acquire Indian Citizenship?`,
      answer: `5.`,
      description: `<ol>
      <li>By Birth.</li>
      <li>By Descent.</li>
      <li>By Registration.</li>
      <li>By Naturalisation.</li>
      <li>By Incorporation of Territory.</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `According to the Citizenship Act 1955, by how many ways 
      can a person lose Indian Citizenship?`,
      answer: `3.`,
      description: `<ol>
      <li>By Renunciation: Voluntarily giving up citizenship.</li>
      <li>By Termination: Indian government revokes citizenship for 
      reasons like obtaining it through fraud, disloyalty to the 
      Constitution, or certain criminal activities.</li>
      <li>By Deprivation: Automatic loss of citizenship in specific 
      situations like if someone is imprisoned abroad for two years within 
      five years of registration/naturalization of their citizenship.</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who all cannot have OCI (Overseas Citizen of India) status?`,
      answer: `<ol>
      <li>Anyone who has ever been a citizen of Pakistan or Bangladesh.</li>
      <li>Anyone whose parents or grand parents were citizens of Afghanistan, 
      Pakistan, Bangladesh, China, or Sri Lanka.</li>
      <li>Anyone who served in a foreign defence department.</li>
      </ol>`,
      description: `Benefits of OCI status includes:
      <ul>
      <li>Life long multiple entry Visa to India.</li>
      <li>OCI card holder never have to report to the FRRO (Foreigners 
      Regional Registration Officer) regardless of the length of their 
      stay.</li>
      <li>They can eventually become a citizen of India, if they remain 
      an OCI for 5 years and live in India for at least 1 year.</li>
      <li>They can use special counters during immigration.</li>
      <li>They don't need a student Visa to study in India.</li>
      <li>They don't need an employment Visa to get a private job.</li>
      <li>OCI card holder shall be treated at par with resident Indian 
      nationals in the matter of tariffs in air fares in domestic sectors 
      in India.</li>
      <li>They can open a special bank account in India.</li>
      <li>They can make investments in India.</li>
      <li>They can buy non farm property and exercise property ownership 
      rights.</li>
      <li>They can use their OCI card to apply for a driver's license, 
      open a bank account, or get a PAN card.</li>
      <li>They can get the same economic, financial, and educational 
      benefits as NRIs, and they can adopt children like an NRI.</li>
      <li>They can pay the Indian resident fee when visiting national parks, monuments, museum, 
      or wild life sanctuary.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the rights and privileges conferred only to Indian Citizens?`,
      answer: `<ol>
      <li>Right against discrimination on grounds of religion, race, caste,
      sex or place of birth (Article 15).</li>
      <li>Right to equality of opportunity in matters of public employment (Article 16).</li>
      <li>Right to freedom of speech & expression, assembly, association, movement, residence, and 
      profession (Article 19).</li>
      <li>Right to protection of interests of minorities (Article 29).</li>
      <li>Right of minorities to establish and administer educational
      institutions (Article 30).</li>
      <li>Right to vote in elections to the Loksabha and State Legislative assemblies.</li>
      <li>Right to contest for the membership of the Parliament and State legislatures.</li>
      <li>Eligibility to hold certain public offices, i.e., President of India, Vice-President 
      of India, Judges of Supreme Court and High Courts, Governors of States, Attorney General of India,
      and Advocate General of States.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `In 2000 September, the Government of India set up a high level committee of the Indian diaspora 
      under whose chairmanship?`,
      answer: `LM Singhvi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The PIO (Person of Indian Origin) card scheme was introduced on ______?`,
      answer: `19 August 2002.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The OCI (Overseas Citizenship of India) card scheme was made operational from which date?`,
      answer: `2 December 2005.`,
      description: `<ul>
      <li>PIO card holders were deemed to be OCI card holders with effect from 9th January 2015.</li>
      </ul>`
    },
  ];
}