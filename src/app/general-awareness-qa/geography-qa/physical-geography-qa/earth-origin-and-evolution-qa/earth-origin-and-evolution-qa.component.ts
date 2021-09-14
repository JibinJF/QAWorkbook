import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-earth-origin-and-evolution-qa',
  template: `
    <app-display-qa [qas]="earthOriginAndEvolutionQAs" [workbookName]="workbookName">
    </app-display-qa>
  `,
  styles: [
  ]
})
export class EarthOriginAndEvolutionQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Earth - Origin and Evolution`;

  constructor() { }

  ngOnInit(): void {
  }
  
  earthOriginAndEvolutionQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The nebular hypothesis theory was developed by _____ ?`,
      answer: `Immanuel Kant.`,
      description: `<ul>
        <li>Mathematician Laplace revised it in 1796.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `A galaxy starts to form by accumulation of hydrogen gas in the form of a very large 
      cloud called _____ ?`,
      answer: `Nebula.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Out of the eight planets of our Solar system, mercury, venus, earth and mars are 
      called as the _____ as they lie between the sun and the belt of asteroids?`,
      answer: `Inner planets.`,
      description: `<ul>
        <li>The other four planets are called the outer planets.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The first four planets of our Solar system are called _____, meaning earth-like 
      as they are made up of rock and metals, and have relatively high densities?`,
      answer: `Terrestrial planets.`,
      description: `<ul>
        <li>The rest four are called Jovian or Gas Giant planets. Jovian means jupiter-like.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `In August 2006, the International Astronomical Union (IAU) downgraded the status 
      of Pluto to that of _____ ?`,
      answer: `Dwarf planet.`,
      description: `<ul>
        <li>The three criteria of the IAU for a full-sized planet are:
          <ol>
            <li>It is in orbit around the Sun.</li>
            <li>It has sufficient mass to assume hydrostatic equilibrium (a nearly round shape).</li>
            <li>It has “cleared the neighborhood” around its orbit.</li>
          </ol>
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The planet earth initially was a barren, rocky and hot object with a thin atmosphere 
      of _____ and _____?`,
      answer: `Hydrogen and Helium.`,
      description: `<ul>
        <li>The early atmosphere, with hydrogen and helium, is supposed to have been stripped off
        as a result of the solar winds.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which one of the following has the longest duration?
        <ol>
          <li>Eons</li>
          <li>Era</li>
          <li>Period</li>
          <li>Epoch</li>
        </ol>
      `,
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