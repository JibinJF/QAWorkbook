import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-making-of-constitution-qa',
    template: `<app-display-qa [qas]="makingOfConstitutionQAs" [workbookName]="workbookName"></app-display-qa>`,
    styles: [],
    standalone: false
})
export class MakingOfConstitutionQAComponent {
  qaNumber: number = 1;
  workbookName: string = `Making Of Constitution`;

  makingOfConstitutionQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Constitution of India was framed by ______?`,
      answer: `Constituent Assembly.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Constituent Assembly was set up in November 1946, under the provisions of the ______ plan?`,
      answer: `Cabinet Mission Plan (1946).`,
      description: `<ul>
      <li>The members of the Constituent Assembly were chosen by an indirect election and it was not based on Adult Franchise.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: ` The first meeting of the Constituent Assembly was held on ______?`,
      answer: `9th December 1946.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `At what time did the first meeting of the Constituent Assembly began at the Central hall of Parliament building?`,
      answer: `11 AM.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many members attended the first meeting of the Constituent Assembly?`,
      answer: `207 members including 9 women.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first person to address the constituent assembly?`,
      answer: `Acharya J.B. Kripalani.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `On the day of the first meeting, ______, the oldest member in the assembly was appointed 
      as the temporary chairman of the Constituent Assembly?`,
      answer: `Dr. Sachidananda Sinha.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the President of the Constituent Assembly?`,
      answer: `Dr. Rajendra Prasad.`,
      description: `<ul>
      <li>He was elected on 11th December 1946.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who all served as the Vice Presidents of the Constituent Assembly?`,
      answer: `H.C. Mukherjee and V.T. Krishnamachari.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who served as the Secretary of the Constituent Assembly?`,
      answer: `H.V.R Iyengar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who served as the Constitutional Advisor to the Constituent Assembly?`,
      answer: `B.N. Rao.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Constituent Assembly adopted National Flag on ______?`,
      answer: `22nd July 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Constituent Assembly adopted National Anthem on ______?`,
      answer: `24 January 1950.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Constituent Assembly adopted National Song on ______?`,
      answer: `24 January 1950.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Total strength of the Constituent Assembly, as fixed by the 
      Cabinet Mission, was ______?`,
      answer: `389.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Out of the total strength of the Constituent Assembly, 
      how many were from Governor's provinces of British India?`,
      answer: `292.`,      
      description: `<ul>
      <li>The representatives of Provinces in the Constituent Assembly were 
      elected by the Provincial Legislative Assemblies.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Out of the total strength of the Constituent Assembly, 
      how many were from Chief Commissioner's Provinces?`,
      answer: `4.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Out of the total strength of the Constituent Assembly, 
      how many were from Indian princely states?`,
      answer: `93.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many elected members were there in the Constituent 
      Assembly?`,
      answer: `296.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Lion capital of Ashoka was adopted as the official 
      emblem of India on ______?`,
      answer: `26th January 1950.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Saka Era was adopted as the National Calendar of India on
      ______?`,
      answer: `22nd March 1957.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which political party got majority in Constituent Assembly?`,
      answer: ` Congress (208 seats).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the province from which most number of people were 
      elected?`,
      answer: `United Province (55).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The membership of the Constituent Assembly was reduced to 
      ______ as the members from the Pakistan region left after partition?`,
      answer: `299.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many women members were there in the constituent 
      assembly before partition?`,
      answer: `17.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many women members were there in the constituent 
      assembly after partition?`,
      answer: `15.`,
    },    
    {
      qaNumber: this.qaNumber++,
      question: `How many Malayalee women members were there in the 
      Constituent Assembly?`,
      answer: `3.`,
      description: `They are
      <ol>
      <li>Ammu Swaminathan.</li>
      <li>Annic Mascarene.</li>
      <li>Dakshayani Velayudhan.</li>
      </ol>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many members of the Constituent Assembly were 
      Malayalees?`,
      answer: `17 (Including 3 women).`,
      description: `<ul>
      <li>9 from Madras:
        <ol>
        <li>Ammu Swaminathan.</li>
        <li>Dakshayani Velayudhan.</li>
        <li>A.K. Menon.</li>
        <li>B. Pocker Sahib Bahadur.</li>
        <li>K.T.M. Ahmed Ibrahim.</li>
        <li>Muhammad Ismail Sahib.</li>
        <li>P. Kunhiraman.</li>
        <li>Abdul Sathar Haji.</li>        
        <li>K. Madhava Menon.</li>
        </ol>
      </li>
      <li>6 from Travancore:
        <ol>
        <li>Pattom Thanu Pillai.</li>
        <li>R. Sankar.</li>
        <li>PS. Nataraja Pillai.</li>
        <li>Annie Mascarene.</li>
        <li>KA. Mohamed.</li>
        <li>P.T. Chacko.</li>
        </ol>
      </li>
      <li>1 from Kochi:
        <ol>
        <li>P. Govinda Menon.</li>
        </ol>
      </li>
      <li>1 from United Provinces (now UP):
        <ol>
        <li>Dr. John Mathai.</li>
        </ol>
      </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised the Constituent Assembly by stating "The 
      Constituent Assembly was a one party body in an essentially one-party 
      country. The Assembly was the congress and the congress was India"?`,
      answer: `Granville Austin.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised the Constituent Assembly by terming it as 
      "A Body of Hindus"?`,
      answer: `Lord Viscount Simon.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised the Constituent Assembly by stating "The 
      Constituent Assembly represented only one major community in India"?`,
      answer: `Winston Churchill.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first SC/ST woman to pass pre-degree in India?`,
      answer: `Dakshayani Velayudhan.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `What was the symbol (seal) of the Constituent Assembly?`,
      answer: `Elephant.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Union Powers Committee of the 
      Constituent Assembly?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Union Constitution Committee 
      of the Constituent Assembly?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the States Committee of the 
      Constituent Assembly?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Drafting Committee of the 
      Constituent Assembly?`,
      answer: `B.R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Provincial Constitution 
      Committee of the Constituent Assembly?`,
      answer: `Sardar Patel.`,
    },    
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Advisory Committee on 
      Fundamental Rights, Minorities, Tribal and Excluded Areas of the 
      Constituent Assembly?`,
      answer: `Sardar Patel.`,
    },    
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Fundamental Rights Sub 
      Committee of Advisory Committee on Fundamental Rights, Minorities, 
      Tribal and Excluded Areas of the Constituent Assembly?`,
      answer: `J.B. Kripalani.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Minorities Sub Committee of 
      Advisory Committee on Fundamental Rights, Minorities, Tribal and 
      Excluded Areas of the Constituent Assembly?`,
      answer: `H.C. Mukherjee.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the North East Frontier Tribal 
      Areas & Assam Excluded & Partially Excluded Areas Sub Committee of 
      Advisory Committee on Fundamental Rights, Minorities, Tribal and 
      Excluded Areas of the Constituent Assembly?`,
      answer: `Gopinath Bardoloi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Excluded & Partially Excluded 
      Areas (Other than those in Assam) Sub Committee of the Constituent 
      Assembly?`,
      answer: `A.V. Thakkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Rules of Procedure Committee 
      of the Constituent Assembly?`,
      answer: `Dr. Rajendra Prasad.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Steering Committee of the 
      Constituent Assembly?`,
      answer: `Dr. Rajendra Prasad.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Finance & Staff Committee of 
      the Constituent Assembly?`,
      answer: `Dr. Rajendra Prasad.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the  Ad-hoc Committee on the 
      National Flag of the Constituent Assembly?`,
      answer: `Dr. Rajendra Prasad.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Credentials Committee of the 
      Constituent Assembly?`,
      answer: `Alladi Krishnaswami Ayyar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the House Committee of the 
      Constituent Assembly?`,
      answer: `Pattabhi Sitaramayya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Committee on Chief 
      Commissioners Provinces of the Constituent Assembly?`,
      answer: `Pattabhi Sitaramayya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Order of Business Committee 
      of the Constituent Assembly?`,
      answer: `K.M. Munshi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Ad-hoc Committee on the 
      Supreme Court of the Constituent Assembly?`,
      answer: `S Varadachari (Non member).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Ad-hoc Committee on citizenship 
      of the Constituent Assembly?`,
      answer: `S Varadachari (Non member).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Linguistic Provinces Committee 
      of the Constituent Assembly?`,
      answer: `S.K. Dhar (Non member).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Press Gallery Committee of the 
      Constituent Assembly?`,
      answer: `Usha Nath Sen.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Committee on the functions of 
      the Constitutional Assembly?`,
      answer: `G.V. Mavalankar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Special Committee to examine 
      the draft constitution of the Constituent Assembly?`,
      answer: `Alladi Krishnaswami Ayyar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Drafting Committee of the Constituent Assembly was 
      appointed on ______?`,
      answer: `29th August 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who all were members of the Drafting Committee of the 
      Constituent Assembly?`,
      answer: `There were 7 members:
      <ol>
      <li>Dr. B.R. Ambedkar (Chairman).</li>
      <li>K.M. Munshi.</li>
      <li>Muhammed Saadullah.</li>
      <li>Alladi Krishnaswami Ayyar.</li>
      <li>N. Gopalaswami Ayyangar.</li>
      <li>D.P. Khaitan (who died in 1948 and was replaced by 
        T.T Krishnamachari).</li>
      <li>B.L. Mitter (who was replaced by N. Madhava Rao, because of ill health).</li>
      </ol>`,
      description: ``
    },
    {
      qaNumber: this.qaNumber++,
      question: `Drafting Committee prepared and published the first draft 
      of the constitution in ______?`,
      answer: `February 1948.`,
      description: `<ul>
      <li>The people of India were given eight months time to give comments, 
      criticisms and suggestions about the draft.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In the light of the public response, a second draft of       
      the constitution was prepared and published by the drafting 
      committee in ______?`,
      answer: `October 1948.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Drafting Committee was described as 'Drifting 
      Committee' by ______?`,
      answer: `Nasaruddin Ahmed.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many members signed in the Indian Constitution?`,
      answer: `284.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Dr. B.R. Ambedkar introduced the final draft of our 
      Constitution in the Assembly on ______ (First reading)?`,
      answer: `4th November 1948.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The second reading of the Constitution started on ______ 
      and ended on 17th October 1949?`,
      answer: `15th November 1948.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The third and final reading of the draft of the 
      Constitution was started on ______ and ended on 26th November 1949, 
      and it was declared as passed?`,
      answer: `14th November 1949.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Constituent Assembly was set up as a mere constitution 
      making body. It became a legislative body also in the midnight of 
      ______?`,
      answer: `14 August 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `On ______, the Constituent Assembly, for the first time, 
      met as the Legislative Assembly?`,
      answer: `17 November 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Constituent Assembly elected ______ as the speaker of the 
      Assembly when it met for the first time as the Legislative Assembly?`,
      answer: `Dr. GV. Mavlankar.`,
      description: `<ul>
      <li>Since then whenever it met as the Constituent Assembly, it was 
      chaired by Dr. Rajendra Prasad and whenever it met as the Legislative 
      Assembly, it was chaired by G.V. Mavlankar.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `India became a republic on ______?`,
      answer: `26th January 1950.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The draft of the Indian Constitution was prepared by 
      ______?`,
      answer: `B.N. Rao.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the Father of Indian Constitution?`,
      answer: `B.R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the Architect of Indian Constitution?`,
      answer: `B.R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the Modern Manu?`,
      answer: `B.R. Ambedkar.`,
      description: `<ul>
      <li>He is also known as Modern Buddha, Baba Saheb, Indian Jefferson, 
      etc.
      </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the first Union Law Minister of India?`,
      answer: `B.R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which party was founded by B.R. Ambedkar in 1936?`,
      answer: `Independent Labour Party.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which was the federation founded by B.R. Ambedkar in 1942?`,
      answer: `All India Scheduled Caste Federation.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which was the Society founded by B.R. Ambedkar in 1945?`,
      answer: `People's Education Society.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Bahishkrit Hitakarini Sabha was established by ______?`,
      answer: `B.R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which were the 2 journals started by B.R. Ambedkar?`,
      answer: `Mookh Nayak, and Bahishkrit Bharat.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Mahar Movement was started by ______?`,
      answer: `B.R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who participated in all the three Round Table Conferences 
      held in London?`,
      answer: `B.R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who presented the Hindu Code Bill in the Parliament?`,
      answer: `B.R. Ambedkar.`,
      description: `<ul>
      <li>He resigned from the Union Cabinet due to the differences of 
      opinion with his colleagues relating to Hindu Code Bill.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Article  was called as the heart and soul of the 
      constitution by Dr. Ambedkar?`,
      answer: `Article 32.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Ambedkar was converted to Buddhism in the year ______?`,
      answer: `1956.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Ambedkar died on ______?`,
      answer: `6th December 1956.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the resting place of B.R. Ambedkar?`,
      answer: `Chaitya Bhumi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Ambedkar Jayanti is on ______?`,
      answer: `April 14.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `India's highest civilian award Bharat Ratna was 
      posthumously conferred upon Ambedkar in the year ______?`,
      answer: `1990.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The death anniversary of B.R. Ambedkar (6 December) is 
      observed as ______ Diwas ?`,
      answer: `Mahaparinirvan Diwas.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Speech 'Annihilation of Caste' is associated with 
      ______?`,
      answer: `B.R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which are 6 main works of B.R. Ambedkar?`,
      answer: `<ol>
      <li>The Untouchables.</li>
      <li>Buddha and his Dhamma.</li>
      <li>The Buddha or Karl Marx.</li>
      <li>Who were Sudras.</li>
      <li>Waiting for a Visa.</li>
      <li>What Congress and Gandhi have done to the untouchables.</li>
      </ol>.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The original Constitution consisted of ______ Articles, 
      ______ Schedules, and ______ parts?`,
      answer: `395 Articles 8 Schedules and 22 parts.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `On ______, Indian people observed the "first 
      Independence Day" following the 'Purna Swaraj' resolution passed 
      at the Lahore Congress session held in 1929?`,
      answer: `26th January 1930.`,
      description: `<ul>
      <li>January 26 was selected as the date of commencement of the 
      constitution of India because of this historical importance.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `How much time did the Constituent Assembly take to frame 
      the Constitution of India?`,
      answer: `2 years 11 months and 18 days.`,
      description: `<ul>
      <li>Constituent Assembly held eleven sessions in 165 days.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Constitution of India was adopted by the Constituent 
      Assembly on ______?`,
      answer: `26 November 1949.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Constitution of India came into being on ______?`,
      answer: `26 January 1950.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The final session (Special Session) of the Constituent 
      Assembly was held on ______?`,
      answer: `24 January 1950.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised Constitution by saying "Both in language 
      and substance a close copy of the Act of 1935"?`,
      answer: `N. Srinivasan.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised Constitution by saying "The Constitution 
      derives directly from the Government of India Act of 1935 from which in fact many of it's provisions are copied almost textually"?`,
      answer: `Ivor Jennings.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised Constitution by saying "The Constitution 
      is essentially the Government of India Act of 1935 with only adult 
      franchise added"?`,
      answer: `P.R. Deshmukh.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised Constitution by saying "We wanted the 
      music of Veena or Sitar, but here we have the music of an English 
      band"?`,
      answer: `K. Hanumanthaiya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised Constitution by saying "That is exactly 
      the kind of Constitution Mahatma Gandhi did not want and did not 
      envisage"?`,
      answer: `K. Hanumanthaiya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised Constitution by saying "The emblem and 
      the crest that we have selected for our assembly is an elephant. It 
      is perhaps in consonance with that our constitution too is the 
      bulkiest that the world has produced"?`,
      answer: `H.V. Kamath.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who criticised Constitution by saying "The ideals on 
      which this draft constitution is framed have no manifest relation to 
      the fundamental spirit of India. This constitution would not prove 
      suitable and would break down soon after being brought into 
      operation"?`,
      answer: `Lakshminarayan Sahu.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Constitution Day is celebrated in India on which day?`,
      answer: `November 26.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `National Law Day is celebrated in India on which day?`,
      answer: `November 26.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `National Legal Services day is observed on which day?`,
      answer: `November 9.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the architect of Indian Constitution?`,
      answer: `Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the architect of Fundamental Rights?`,
      answer: `Vallabhbhai Patel.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the architect of Preamble?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the architect of cover page of Indian 
      Constitution?`,
      answer: `Nandalal Bose.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who founded Bharatiya Vidya Bhavan in 1938?`,
      answer: `Kanhaiyalal Maneklal Munshi (KM. Munshi).`,
      description: `<ul>
      <li>He was a member of the Drafting committee of Indian 
      Constitution.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `KM. Munshi started a Gujarati monthly called ______?`,
      answer: `Bhargav.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The idea of Ombudsman was first introduced by ______?`,
      answer: `K.M. Munshi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who quoted Preamble as "political Horoscope of Indian 
      Constitution?`,
      answer: `KM. Munshi.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from Govt. of India Act 1935?`,
      answer: `<ol>
      <li>Office of Governor.</li>
      <li>Federal Court.</li>
      <li>PSCs.</li>
      <li>Emergency.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from Germany (Weimer Constitution)?`,
      answer: `<ol>
      <li>Suspension of Fundamental Rights during Emergency.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from USA?`,
      answer: `<ol>
      <li>Written Constitution.</li>
      <li>Fundamental Rights.</li>
      <li>Preamble.</li>
      <li>Judicial Review.</li>
      <li>Impeachment.</li>
      <li>Functions of Vice President.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from Britain?`,
      answer: `<ol>
      <li>Parliamentary form of Govt.</li>
      <li>Rule of Law.</li>
      <li>Single Citizenship.</li>
      <li>Office of CAG.</li>
      <li>Writs.</li>
      <li>Speaker and his duties.</li>
      <li>Bicameralism.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from Ireland?`,
      answer: `<ol>
      <li>Directive Principles.</li>
      <li>Presidential election.</li>
      <li>Nomination of members to the Rajya Sabha.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from Canada?`,
      answer: `<ol>
      <li>Federation with strong centre.</li>
      <li>Residuary powers.</li>
      <li>Union List.</li>
      <li>State List.</li>
      <li>Appointment of Governors by Centre.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from Australia?`,
      answer: `<ol>
      <li>Concurrent List.</li>
      <li>Joint sitting.</li>
      <li>Trade and Commerce.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from South Africa?`,
      answer: `<ol>
      <li>Amendment to the Constitution.</li>
      <li>Election of Rajyasaba Members.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from Russia?`,
      answer: `<ol>
      <li>Fundamental Duties.</li>
      <li>Five year plan.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from France?`,
      answer: `<ol>
      <li>Republic.</li>
      <li>Liberty, Equality and Fraternity.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Indian Constitution borrowed 
      from Japan?`,
      answer: `<ol>
      <li>Procedure established by law.</li>
      </ol>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `A country is said to be ______, if the head of the 
      state is elected directly or indirectly by the people?`,
      answer: `Republic.`,
      description: `<ul>
      <li>In a Monarchy the head of the state is not elected by the people. 
      There the King or Queen derive their powers from hereditary position.
      eg: UK.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country in Southeast Asia practices a system of 
      elective monarchy, where the head of state, the Yang di-Pertuan 
      Agong, is chosen through a selection process among hereditary rulers, 
      rather than by direct popular vote?`,
      answer: `Malaysia.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the oldest Republic in the world?`,
      answer: `San Marino.`,
      description: `<ul>
      <li>It was founded in 301 AD.</li>
      <li>It's also the fifth-smallest country in the world..</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the smallest Republic in the world?`,
      answer: `Nauru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The book Republic was written by ______?`,
      answer: `Plato.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Politically and economically unstable countries 
      (especially in Latin America) whose economy largely depends on 
      exportation of a few goods are called ______?`,
      answer: `Banana Republic.`,
      description: `<ul>
      <li>The term Banana Republic was coined by O. Henry.</li>
      </ul>`
    },
  ];
}
