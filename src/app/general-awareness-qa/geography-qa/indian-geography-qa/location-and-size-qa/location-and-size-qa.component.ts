import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-location-and-size-qa',
  template: `
    <app-display-qa [qas]="locationAndSizeQAs" [workbookName]="workbookName">
    </app-display-qa>
  `,
  styles: [
  ]
})
export class LocationAndSizeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Location And Size`;

  constructor() { }

  ngOnInit(): void {
  }

  locationAndSizeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Indian mainland extends between latitudes _____ and _____ ?`,
      answer: `8° 4' N and 37° 6' N.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian mainland extends between longitudes _____ and _____ ?`,
      answer: `68° 7' E and 97° 25' E.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `India’s territorial limit extends towards the sea upto _____ nautical miles from the coast?`,
      answer: `12 nautical miles (22.224 km).`,
      description: `<ul>
      <li>1 Nautical mile = 1.852 km.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `India’s southern boundary extends upto _____ latitude in the Bay of Bengal?`,
      answer: `6° 45' N.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `India’s total area accounts for about _____ per cent of the total geographical area 
      of the world?`,
      answer: `2.4 per cent.`,
      description: `<ul>
      <li>The land mass of India has an area of 3,287,240 Sq km.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: ` India is the ______ largest country of the world?`,
      answer: `7th.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `India has a land boundary of about _____ km?`,
      answer: `15,200 km.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The total length of the coastline of India, including the island groups 
      (Andaman and Nicobar and Lakshadweep), is about _____ km?`,
      answer: `7,516.6 km.`,
      description: `<ul>
      <li>Indian mainland has a coastline of about 6,100 km.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `‘Standard meridian’ of India is _____?`,
      answer: `82° 30' E.`,
      description: `<ul>
      <li>There is a general understanding among the countries of the world to select the standard
      meridian in multiples of 7° 30' of longitude.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The ‘Standard meridian’ of India passes through how many states?`,
      answer: `5.`,
      description: `<ul>
      <li>The standard meridian of India passes through the following 5 states:
        <ol>
          <li>Uttar Pradesh (Mirzapur).</li>
          <li>Madhya Pradesh.</li>
          <li>Chhattisgarh.</li>
          <li>Odisha.</li>
          <li>Andhra Pradesh.</li>
        </ol>
      </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Indian Standard Time is ahead of Greenwich Mean Time by _____ hours and _____ minutes?`,
      answer: `5 hours and 30 minutes.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The distance from north to south extremity of Indian mainland is _____ km, 
      and that from east to west extremity of Indian mainland is _____ km?`,
      answer: `3,214 km (north to south) and 2,933 km (east to west).`,
      description: `<ul>
      <li>The latitudinal and longitudinal extent of India are roughly about 30 degrees, 
      whereas the actual distance measured from north to south extremity is 3,214 km, 
      and that from east to west is only 2,933 km. This difference is based on the fact that 
      the distance between two longitudes decreases towards the poles whereas the distance 
      between two latitudes remains the same everywhere.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Tropic of Cancer passes through how many states in India?`,
      answer: `8.`,
      description: `<ul>
      <li>Tropic of Cancer passes through the following 8 Indian states:
        <ol>
          <li>Gujarat.</li>
          <li>Rajasthan.</li>
          <li>Madhya Pradesh.</li>
          <li>Chhattisgarh.</li>
          <li>Jharkhand.</li>
          <li>West Bengal.</li>
          <li>Tripura.</li>
          <li>Mizoram.</li>
        </ol>
      </li>
      <li>Udaipur (23.5360° N) of Tripura is the Indian city closest to the Tropic of Cancer.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which is the only river in India that cuts the Tropic of Cancer twice?`,
      answer: `Mahi River.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which country shares the longest land frontier with India?`,
      answer: `Bangladesh.`,
    },
  ];
}