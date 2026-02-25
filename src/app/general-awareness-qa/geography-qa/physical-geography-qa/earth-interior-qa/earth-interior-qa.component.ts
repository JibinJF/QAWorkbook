import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-earth-interior-qa',
    template: `
    <app-display-qa [qas]="earthInteriorQAs" [workbookName]="workbookName">
    </app-display-qa>
  `,
    styles: [],
    standalone: false
})
export class EarthInteriorQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Earth - Interior`;

  constructor() { }

  ngOnInit(): void {
  }

  earthInteriorQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The earth’s equatorial radius is _____ km?`,
      answer: `6378.137 km.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The earth’s polar radius is _____ km?`,
      answer: `6356.752 km.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Temperature and pressure _____ with the increasing distance from the 
      surface towards the interior of the earth?`,
      answer: `Increase.`,
      description: `<ul>
        <li>Density of the material also increases with depth.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The gravitation force (g) is same at different latitudes on the surface of the 
      earth. State true or false?`,
      answer: `False.`,
      description: `<ul>
        <li>The gravitation force (g) is not the same at different latitudes on the surface.</li>
        <li>It is greater near the poles and less at the equator. This is because of the distance 
        from the centre at the equator being greater than that at the poles.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The point where the energy is released is called the _____ of an earthquake?`,
      answer: `Focus.`,
      description: `<ul>
        <li>Alternatively, it is called the hypocentre.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The point on the surface, nearest to the focus of an earthquake, is called _____?`,
      answer: `Epicentre.`,
      description: `<ul>
        <li>It is a point directly above the focus.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `All natural earthquakes take place in the _____?`,
      answer: `Lithosphere.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `An instrument called _____ records the earthquake waves reaching the surface?`,
      answer: `Seismograph.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Earthquake waves are basically of two types, _____ waves and _____ waves?`,
      answer: `Body waves and Surface waves.`,
      description: `<ul>
        <li>The velocity of waves changes as they travel through materials with different densities. 
        The denser the material, the higher is the velocity. </li>
        <li>Their direction also changes as they reflect or refract when coming across materials 
        with different densities.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ waves are generated due to the release of energy at the focus of an earthquake 
      and move in all directions travelling through the body of the earth?`,
      answer: `Body waves.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The earthquake body waves interact with the surface rocks and generate new set of 
      waves called _____ waves, which cause displacement of rocks, and hence, collapse of structures?`,
      answer: `Surface waves.`,      
      description: `<ul>
        <li>The surface waves are the last to report on seismograph.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `There are two types of body waves. They are called _____ waves and _____ waves?`,
      answer: `P waves and S waves.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ waves move faster and are the first to arrive at the surface?`,
      answer: `P-waves.`,
      description: `<ul>
        <li>These are also called ‘primary waves’.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The _____ waves of earthquake are similar to sound waves?`,
      answer: `P-waves.`,
      description: `<ul>
        <li>They travel through gaseous, liquid and solid materials.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `S-waves of earthquake can travel only through _____ materials?`,
      answer: `Solid materials.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Reflection causes earthquake waves to rebound whereas _____ makes waves move in
      different directions?`,
      answer: `Refraction.`,
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
