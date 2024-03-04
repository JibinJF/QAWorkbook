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
      question: `Calcutta Supreme Court came into being in the year ______?`,
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
      question: `Who was the first Indian to become an Indian Civil Service (ICS) officer in 
      1863?`,
      answer: `Satyendranath Tagore.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is known as the father of “Civil Services” in India?`,
      answer: `Charles Cornwallis (Lord Cornwallis).`,
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
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act provided the right to vote for women in India?`,
      answer: `Government of India Act 1919.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act introduced 'dyarchy' in provinces in India?`,
      answer: `Government of India Act 1919.`,
      description: `<ul>
      <li>Government of India Act 1919 introduced 'dyarchy' in provinces by dividing the provincial 
      subjects into two parts, <i>transferred</i> and <i>reserved</i>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act introduced for the first time bicameralism and direct elections in the 
      country?`,
      answer: `Government of India Act 1919.`,
      description: `<ul>
      <li>The Act clearly defined the jurisdiction of the central and provincial governments.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `As per the Government of India Act 1919, out of the 6 members of the Viceroy's 
      executive council (except Commander-in Chief), how many members were to be Indian?`,
      answer: `3.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Government of India Act 1919 extended the principle of communal representation by 
      providing separate electorates for __(1)__, __(2)__, __(3)__, and __(4)__?`,
      answer: `Sikhs, Indian Christians, Anglo Indians and Europeans.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Government of India Act 1919 provided for the establishment of a public service 
      commission which was set up in the year ______ for recruiting civil servants?`,
      answer: `1926.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The General Elections of the Central Legislative Assembly in the years __(1)__ 
      and __(2)__ were held under the Government of India Act, 1919?`,
      answer: `1926 and 1945.`,
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
      The Act clearly defined the jurisdiction of the central and provincial governments.</li>
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
      question: `Simon Commission was formed in the year _____ to report on the condition of 
      India under its new constitution?`,
      answer: `November 1927.`,      
      description: `<ul>
      <li>It was an all white commission and no Indian was associated with it.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Simon Commission arrived in India on ______?`,
      answer: `3rd February 1928.`,      
      description: `<ul>
      <li>The Simon Commission was received with black flags, mass demonstrations, harthals and 
      slogans of simon go back.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many members were there in the Simon Commission?`,
      answer: `7.`,
      description: `<ul>
      <li>The commission consisted of seven Englishmen.</li>
      <li>Sir John Simon was its chairman.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which member of the Simon Commission later became the Prime Minister of 
      Britain?`,
      answer: `Clement Attlee.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The slogan 'Simon go back' was raised by ______?`,
      answer: `Yusuf Meherally.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who died after the police lathi charge on the activists, protesting against 
      the arrival of Simon Commission?`,
      answer: `Lala Lajpath Rai.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is the name of the police officer who suppressed the revolt against 
      Simon Commission?`,
      answer: `General Sanderson.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which session of the Congress passed the resolution to boycott the 
      Simon Commission (1927)?`,
      answer: `Madras Session.`,
      description: `<ul>
      <li>Dr. M.A. Ansari was the president of the Madras Congress session.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Simon Commission (1927) submitted its report on ______ ?`,
      answer: `27th May 1930.`,
      description: `<ul>
      <li>The commission proposed a limited transfer of power in the provinces with many 
      restrictions.</li>
      <li>The commission recommended the abolition of dyarchy and the setting up of 
      representative governments in the provinces and also establishment of a federation of 
      British India and princely states.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The main objective of ______ Committee of 1927 was to improve the 
      relationship between the Government of India and the Indian states?`,
      answer: `Butler Committee.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the British Prime Minister who announced a scheme of representation 
      for minorities of British India, which came to be known as Communal Award?`,
      answer: `Ramsay Mc Donald.`,
      description: `<ul>
      <li>It extended the system of separate electorates to the depressed classes.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `On which date did Ramsay Mc Donald announce Communal Award?`,
      answer: `16th August 1932.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Gandhiji protested against the extension of communal representation to the 
      scheduled castes and undertook a fast unto death in which jail?`,
      answer: `Yervada Jail, Pune.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `To stop Gandhiji's fast unto death in protest against the Communal Award, 
      an agreement known as <b><i>Poona Pact</i></b> was signed between Gandhiji and ______?`,
      answer: `Dr. B.R. Ambedkar.`,
      description: `<ul>
      <li>Madan Mohan Malavva signed on behalf of Gandhiji.</li>
      <li>By this agreement, joint electorate was retained. But seats reserved to the depressed 
      classes were increased from 71 to 147 in provincial legislatures and 18 percent of the 
      total in the central legislature.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is known as the 'Blue Print' of Indian Constitution?`,
      answer: `Government of India Act 1935.`,
      description: `<ul>
      <li>The Congress Committee did not agree to the proposals in the "white paper" issued 
      after the Third Round Table Conference in 1932. Based on these proposals the British
      government introduced a bill in the British Parliament on 19 December 1934, which was 
      passed as the Government of India Act 1935.</li>
      <li>The Act proposed a federal system consisting of two houses, council of states and 
      federal assembly. However the federation did not come into being as the Princely States 
      did not join.</li>
      <li>The major structural part of the Constitution is derived from Government of India 
      Act 1935.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Government of India Act 1935 abolishod dvarchy in the provinces and 
      introduced ______ in its place?`,
      answer: `Provincial autonomy.`,
      description: `<ul>
      <li>The Act introduced Dyarchy at the centre.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The first general election as per the Government of India Act 1935 was held in 
      the year ______?`,
      answer: `1937.`,
      description: `<ul>
      <li>In the General Election held in 1937, Congress got the majority. But all the Congress 
      ministers resigned in 1939 as a protest against the decision of Britain to drag India into 
      the second world war.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Government of India Act 1935 proposed to establish a federal court, which 
      came into being on ______?`,
      answer: `1st October 1937.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Federal Court established under the Government of India Act 1935 became 
      the Supreme Court of India on ______?`,
      answer: `28 January 1950.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the Viceroy when the Government of India Act 1935 was passed?`,
      answer: `Lord Willingdon.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the Viceroy when the Government of India Act 1935 was enforced in the 
      provinces in 1937?`,
      answer: `Lord Linlithgow.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the Chief Architect of Government of India Act 1935?`,
      answer: `Sir Samuel Hoare.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act provided for the establishment of the Reserve Bank of India?`,
      answer: `Government of India Act 1935.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Government of India Act 1935 divided the powers between the centre and 
      the units in terms of how many lists?`,
      answer: `3 (Federal List, Provincial List, and the Concurrent List).`,
      description: `<ul>
      <li>Residuary powers were given to the Viceroy/ Governor General.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who described the Government of India Act 1935 as a "Machine with strong brakes 
      but no engine?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which region was separated from India in 1937 as per the Government of India 
      Act 1935?`,
      answer: `Burma.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `"Office of the governor" feature of Indian Constitution was borrowed from ______?`,
      answer: `The Government of India Act 1935.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The distribution of powers between the Centre and the States in the Indian 
      Constitution is based on the scheme provided in ______?`,
      answer: `The Government of India Act, 1935.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first Indian to put forward the idea of a Constitution for India in 1934?`,
      answer: `M.N. Roy.`,
      description: `<ul>
      <li>He expressed it through his newspaper - Indian Patriot.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the propounder of Peoples Plan?`,
      answer: `M.N. Roy.`,
      description: `<ul>
      <li>He is the founding member of the Mexican Communist Party and the Communist Party of 
      India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the first General Secretary of Communist Party of India?`,
      answer: `Puran Chand Joshi (PC Joshi).`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is first Indian to become a member of Communist International?`,
      answer: `M.N. Roy.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Radical Democratic Party was founded by ______?`,
      answer: `M.N. Roy.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Book "India in Transition" was written by ______?`,
      answer: `M.N. Roy.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: ` Real name of M.N Roy is ______?`,
      answer: `Manabendra Nath Roy.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The book "Gandhian Constitution of Free India' was authored by ______ in 1946?`,
      answer: `Shriman Narayan Agarwal.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which was the first political party which raised the demand for a Constituent 
      Assembly to frame a constitution for India?`,
      answer: `Swaraj party.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who are the two founders of Swaraj Party?`,
      answer: `C.R. Das, and Motilal Nehru.`,
      description: `<ul>
      <li>Dissatisfied with the policies of Gandhiji, C.R Das and Motilal Nehru resigned 
      from Congress on 31 December 1922 and founded the new party on 1st January 1923.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the first President of Swaraj Party?`,
      answer: `C.R. Das.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who is the first Secretary of Swaraj Party?`,
      answer: `Motilal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The first session of Swaraj Party was held at ______?`,
      answer: `Allahabad.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The initial name of Swaraj Party was ______?`,
      answer: `Congress Khilaphat Swarajya Party.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The programme of Swarajist was called ______?`,
      answer: `Council Entry.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Swaraj party secured absolute majority in the election held in which year?`,
      answer: `1923.`,
      description: `<ul>
      <li>Vithalbhai Patel became the President of the Central Legislative Assembly.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Congress session that passed the Poorna Swarajya Resolution is ______?`,
      answer: `Lahore Session (1929).`,
      description: `<ul>
      <li>Jawaharlal Nehru was the President of the Lahore Session (1929).</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Congress session in which a resolution for fundamental rights was passed 
      is ______?`,
      answer: `Karachi Session (1931).`,
      description: `<ul>
      <li>Sardar Vallabhbhai Patel was the President of the Karachi Session (1931).</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Congress session that passed a resolution to establish a socialistic 
      pattern for India is ______ ?`,
      answer: `Awadi session (1955).`,
      description: `<ul>
      <li>U.N. Dhebar was the President of the Awadi session (1955).</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Swaraj party lost its influence after the death of C.R. Das in ______?`,
      answer: `1925.`,
      description: `<ul>
      <li>Later the Swaraj Party merged with the Congress.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian National Congress for the first time, officially demanded a 
      Constituent Assembly to frame the Constitution of India in which year ?`,
      answer: `1935.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `A resolution regarding the demand for a Constituent Assembly was passed in 
      ______ session chaired by Jawaharlal Nehru in 1937?`,
      answer: `Faizpur session.`,
      description: `<ul>
      <li>In 1938, Jawaharlal Nehru declared that the Constitution of free India must be 
      framed, without outside interference, by a Constituent Assembly elected on the basis 
      of adult franchise.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Accepting, in principle, the demand for a constituent assembly to frame a 
      constitution for India, British Viceroy of India announced what came to be called as 
      'August Offer' on which date?`,
      answer: `8 August 1940.`,
      description: `<ul>
      <li>Key provisions of the August Offer:
        <ol>      
        <li>The Executive Council of the Viceroy would be expanded to include 10 Indians and 
        4 British members.</li>
        <li>An advisory war council would be established, with 6 Indian and 3 British members.</li>
        <li>The British government would recognize the right of Indians to frame their own 
        constitution, but only after the war.</li>
        <li>The British government would give full weight to minority opinion in the framing of 
        the constitution.</li>
        </ol>
      </li>
      <li>It was an offer made by the British to obtain the support of India in the Second 
      World War.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Viceroy who proclaimed the August offer is ______?`,
      answer: `Lord Linlithgow.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Cripps Mission came to India on ______?`,
      answer: `22 March 1942.`,
      description: `<ul>
      <li>Cripps Mission was sent by the British Government to India with the key objective 
      to secure Indian cooperation and support for British war efforts in the 2nd World War.</li>
      <li>Sir Stafford Cripps was the Chairman of Cripps Mission.</li>
      <li>Cripps proposed that 
        <ol>
          <li>India would be give the Dominion Status immediately after the end of the war.</li>
          <li>India would be free to frame its own constitution after the war.</li>
        </ol>
      </li>
      <li>It envisaged a federation of British India and the Indian states as a dominion 
      within the British commonwealth.</li>        
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the Viceroy of India during the time of Cripps Mission?`,
      answer: `Lord Linlithgow.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who called the Cripps mission as 'A post dated cheque on a Crashing Bank'?`,
      answer: `Gandhiji.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Cripps Mission left India on ______?`,
      answer: `12th April 1942.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `On which day did Viceroy Lord Wavell formulate the Wavell plan?`,
      answer: `14 June 1945.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Wavell plan is also known as ______?`,
      answer: `Breakdown Plan.`,
      description: `<ul>
      <li>The essence of the plan:
        <ol>
        <li>Formation of a new executive council at the centre in which all members 
        except Viceroy and Commander in Chief were Indians.</li>
        <li>All portfolios except Defence were to be under the control of Indian members.</li>
        <li>Indian National Congress and Muslim League would get equal preference in the 
        reconstituted council.</li>
        <li>The plan proposed the formation of an interim government before proceeding for the 
        work of framing constitution.</li>
        </ol>
      </li>
      <li>Indian leaders were invited for Simla Conference by Wavell to discuss the plan.</li>
      <li>The plan was rejected as no agreement could be reached over the composition of the 
      viceroy's executive council.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who convened the Simla Conference?`,
      answer: `Lord Wavell.`,
      description: `<ul>
      <li>It was held from 25 June to 14 July 1945.</li>
      <li>21 members, from all political parties participated in Simla Conference.</li>
      <li>The main aim of Simla Conference was to prepare a list of members to the Viceroy's 
      executive council.</li>
      <li>Simla Conference did not succeed since the Muslim League rejected the proposal.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which British committee/mission recommended the setting up of a Constituent 
      Assembly to frame a constitution for India?`,
      answer: `Cabinet Mission.`,
      description: `<ul>
      <li>Cabinet Mission made arrangements for the formation of interim government.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the British Prime Minister who sent the Cabinet Mission to India?`,
      answer: `Clement Atlee.`,
      description: `<ul>
      <li>It was to discuss and formulate a plan for the transfer of power to Indians from 
      British.</li>
      <li>The main aim of the Cabinet Mission was to help the Indians to frame a constitution 
      by themselves.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In which year was Cabinet Mission sent to India?`,
      answer: `1946.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the Viceroy of India when Cabinet Mission reached India?`,
      answer: `Lord Wavell.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List the names of members of the Cabinet Mission?`,
      answer: `Lord Pethick Lawrence, Stafford Cripps and A.V. Alexander.`,
      description: `<ul>
      <li>They were the members of the British Cabinet also.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the chairman of the Cabinet Mission?`,
      answer: `Pethick Lawrence.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: ` Cabinet Mission arrived in India on ______?`,
      answer: `23 March 1946.`,
      description: `<ul>
      <li>Cabinet Mission reached Karachi on 23 March 1946 and in Delhi on 24th March 1946.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Cabinet Mission published its plan on ______?`,
      answer: `16 May 1946.`,
      description: `<ul>
      <li>Cabinet Mission recommended the setting up of a Constituent Assembly to frame a 
      constitution for India.</li>
      <li>Both the Congress and the Muslim League accepted the proposals in principle.</li>
      <li>Cabinet Mission made arrangements for the formation of interim government.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Interim Government was formed in India on ______, on the recommendation 
      of Cabinet Mission?`,
      answer: `2nd September 1946.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the Vice President of Interim Government formed on the recommendation 
      of Cabinet Mission?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the President of Interim Government formed on the recommendation 
      of Cabinet Mission?`,
      answer: `Lord Wavell.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the last Viceroy of India and the first Governor General of Independent 
      India?`,
      answer: `Levis Mountbatten.`,
      description: `<ul>
      <li>He was sent to India by Clement Attlee to ease the process of transfer of power to 
      India from Britain.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Levis Mountbatten arrived in India on ______?`,
      answer: `22nd March 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Levis Mountbatten formulated and announced the Mountbatten plan in a jont conference 
      of Congress and Muslim League in Delhi on ______?`,
      answer: `3rd June 1947.`,
      description: `<ul>
      <li>India was partitioned according to the Mountbatten Plan.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Mountbatten Plan is otherwise known as ______?`,
      answer: `June 3rd Plan or Balkan Plan.`,
      description: `<ul>
      <li>Indian National Congress and the Muslim League completely accepted the Mountbatten 
      Plan.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act was enacted by the British Government to give immediate effect 
      to the Mountbatten Plan?`,
      answer: `The Indian Independence Act 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian Independence Bill was introduced in British Parliament on ______ ?`,
      answer: `4th July 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian Independence Bill was passed by the British Parliament on ______ ?`,
      answer: `5th July 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian Independence Bill received royal accent on ______?`,
      answer: `18th July 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian Independence Bill came into effect on ______?`,
      answer: `15th August 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which was the last act that was passed by British Parliament for India?`,
      answer: `Indian Independence Act 1947.`,
      description: `<ul>
      <li>India became independent on 15th August 1947 according to the Indian Independence 
      Act 1947.</li>
      <li>It abolished the office of the Secretary of State for India.</li>
      <li>It abolished the office of Viceroy and provided a governor general for each 
      dominion.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `What day of the week was August 15, 1947, when India gained independence?`,
      answer: `Friday.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `What day of the week was 26th January 1950, the on which India became republic?`,
      answer: `Thursday.`,
    },{
      qaNumber: this.qaNumber++,
      question: `Who was the British King when India became independent?`,
      answer: `George VI.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the British Prime Minister when India became independent?`,
      answer: `Clement Attlee.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the Viceroy of India when India became independent?`,
      answer: `Mount Batten.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the INC President when India became independent?`,
      answer: `J.B. Kripalani.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Members of the first Cabinet of Independent India took the oath of office 
      on ______?`,
      answer: `15 August 1947.`,
      description: `<ul>
      <li>Mount Batten, Governor General of India handed over the power to the first Indian 
      cabinet headed by Prime minister Pt. Jawaharlal Nehru.</li>
      <li>There were 14 members in the first union ministry of Independent India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Prime Minister, External Affairs, Common Wealth Relations 
      and Scientific Research in the first Cabinet of Independent India?`,
      answer: `Jawaharlal Nehru.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Deputy Prime Minister & Home in the first Cabinet of Independent India?`,
      answer: `Sardar Vallabhbhai Patel.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Defence in the first Cabinet of Independent India?`,
      answer: `Sardar Baldev Singh.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Finance in the first Cabinet of Independent India??`,
      answer: `Shanmugam Chetty.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Law in the first Cabinet of Independent India??`,
      answer: `Dr. B. R. Ambedkar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Railways and Transport in the first Cabinet of Independent India?`,
      answer: `Dr. John Mathai.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Industry and Supply in the first Cabinet of Independent India?`,
      answer: `Syama Prasad Mookerjee.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Education in the first Cabinet of Independent India?`,
      answer: `Moulana Abul Kalam Azad.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Health in the first Cabinet of Independent India?`,
      answer: `Rajkumari Amrit Kaur.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Food and Agriculture in the first Cabinet of Independent India?`,
      answer: `Dr. Rajendra Prasad.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Communications in the first Cabinet of Independent India?`,
      answer: `Rafi Ahmed Kidwai.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Labour in the first Cabinet of Independent India?`,
      answer: `Babu Jagjivan Ram.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Public Works, Mines and Power in the first Cabinet of Independent India?`,
      answer: `Narhar Vishnu Gadgil.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Commerce in the first Cabinet of Independent India?`,
      answer: `C.H Bhabha.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who held the portfolio of Relief and Rehabilitation in the first Cabinet of Independent India?`,
      answer: `K. C. Neogy.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who were the Ministers without portfolio (Non-portfolio Ministers) in the first Cabinet of Independent India?`,
      answer: `N. Gopalaswami Ayyangar and Mohanlal Saxena.`,
    },    
  ];

}
